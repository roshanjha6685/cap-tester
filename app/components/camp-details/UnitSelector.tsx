'use client';

import { IndianRupee, Calendar, Users, AlertCircle, CheckCircle2 } from 'lucide-react';
import { CampUnit } from './types';

interface UnitSelectorProps {
  units: CampUnit[];
  selectedUnit: CampUnit | null;
  onSelectUnit: (unit: CampUnit) => void;
}

export default function UnitSelector({ units, selectedUnit, onSelectUnit }: UnitSelectorProps) {
  const getStatusBadge = (status: CampUnit['status'], seatsLeft: number) => {
    switch (status) {
      case 'sold_out':
        return (
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
            Sold Out
          </span>
        );
      case 'few_seats':
        return (
          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            Only {seatsLeft} left!
          </span>
        );
      case 'filling_fast':
        return (
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
            Filling Fast
          </span>
        );
      default:
        return (
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Available
          </span>
        );
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Batch</h2>
          <p className="text-gray-600 mb-6">Choose the dates and age group that works best for your child</p>

          <div className="space-y-4">
            {units.map((unit) => {
              const seatsLeft = unit.seatsTotal - unit.seatsBooked;
              const isSelected = selectedUnit?.id === unit.id;
              const isSoldOut = unit.status === 'sold_out';

              return (
                <button
                  key={unit.id}
                  onClick={() => !isSoldOut && onSelectUnit(unit)}
                  disabled={isSoldOut}
                  className={`w-full text-left p-4 md:p-6 rounded-xl border-2 transition-all ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 shadow-md' 
                      : isSoldOut
                        ? 'border-gray-200 bg-gray-50 opacity-60 cursor-not-allowed'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    {/* Left - Date & Age Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {isSelected && (
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <h3 className="text-lg font-bold text-gray-900">
                          {unit.dateRange}
                        </h3>
                        {getStatusBadge(unit.status, seatsLeft)}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span>{unit.startDate} - {unit.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span>{unit.ageGroup}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right - Price & Seats */}
                    <div className="flex items-center justify-between md:justify-end gap-6">
                      {/* Seats Progress */}
                      {!isSoldOut && (
                        <div className="hidden md:block w-32">
                          <div className="flex justify-between text-xs text-gray-500 mb-1">
                            <span>{seatsLeft} seats left</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all ${
                                unit.status === 'few_seats' 
                                  ? 'bg-orange-500' 
                                  : unit.status === 'filling_fast'
                                    ? 'bg-yellow-500'
                                    : 'bg-green-500'
                              }`}
                              style={{ width: `${(unit.seatsBooked / unit.seatsTotal) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}

                      {/* Price */}
                      <div className="text-right">
                        <div className="flex items-center gap-2">
                          {unit.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ₹{unit.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                          <div className="flex items-center">
                            <IndianRupee className="w-5 h-5 text-gray-900" />
                            <span className="text-xl font-bold text-gray-900">
                              {unit.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">per child</p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Seats Progress */}
                  {!isSoldOut && (
                    <div className="md:hidden mt-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{seatsLeft} seats available</span>
                        <span>{unit.seatsBooked}/{unit.seatsTotal} booked</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            unit.status === 'few_seats' 
                              ? 'bg-orange-500' 
                              : unit.status === 'filling_fast'
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                          }`}
                          style={{ width: `${(unit.seatsBooked / unit.seatsTotal) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
