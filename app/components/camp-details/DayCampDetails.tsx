'use client';

import { 
  Clock, 
  Car, 
  Utensils, 
  Backpack, 
  Phone, 
  MapPin,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { DayCampInfo } from './types';

interface DayCampDetailsProps {
  info: DayCampInfo;
}

export default function DayCampDetails({ info }: DayCampDetailsProps) {
  return (
    <section className="py-12 bg-[#F6F7F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <span className="inline-block bg-[#2B56FF]/10 text-[#2B56FF] px-4 py-2 rounded-full text-sm font-semibold mb-3">
              Day Camp Information
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Daily Logistics & Practical Details</h2>
            <p className="text-gray-600">Everything you need to know for a smooth camp experience</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Daily Timings */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Daily Timings</h3>
                  <p className="text-sm text-gray-600">Camp hours</p>
                </div>
              </div>
              <div className="bg-[#2B56FF]/5 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Start Time</p>
                    <p className="text-xl font-bold text-[#2B56FF]">{info.dailyTimings.start}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">End Time</p>
                    <p className="text-xl font-bold text-[#2B56FF]">{info.dailyTimings.end}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drop-off & Pick-up */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#249424]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#249424]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Drop-off & Pick-up</h3>
                  <p className="text-sm text-gray-600">Instructions</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-[#249424]/5 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Drop-off</p>
                  <p className="text-sm text-gray-700">{info.dropOffInstructions}</p>
                </div>
                <div className="bg-[#249424]/5 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Pick-up</p>
                  <p className="text-sm text-gray-700">{info.pickUpInstructions}</p>
                </div>
              </div>
            </div>

            {/* Meals & Snacks */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Meals & Snacks</h3>
                  <p className="text-sm text-gray-600">Food arrangements</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Lunch Included</span>
                  {info.mealsIncluded ? (
                    <span className="flex items-center gap-1 text-[#249424] font-medium">
                      <CheckCircle2 className="w-4 h-4" /> Yes
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-500 font-medium">
                      <AlertTriangle className="w-4 h-4" /> No
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">Snacks Included</span>
                  {info.snacksIncluded ? (
                    <span className="flex items-center gap-1 text-[#249424] font-medium">
                      <CheckCircle2 className="w-4 h-4" /> Yes
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-gray-500 font-medium">
                      <AlertTriangle className="w-4 h-4" /> No
                    </span>
                  )}
                </div>
                {info.mealDetails && (
                  <p className="text-sm text-gray-600 mt-2">
                    <Info className="w-4 h-4 inline mr-1" />
                    {info.mealDetails}
                  </p>
                )}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Transportation</h3>
                  <p className="text-sm text-gray-600">Travel options</p>
                </div>
              </div>
              {info.transportation.available ? (
                <div className="bg-[#249424]/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-[#249424] font-medium mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Transport Available
                  </div>
                  {info.transportation.details && (
                    <p className="text-sm text-gray-600">{info.transportation.details}</p>
                  )}
                  {info.transportation.additionalCost && (
                    <p className="text-sm text-[#2B56FF] font-medium mt-2">
                      Additional Cost: ₹{info.transportation.additionalCost.toLocaleString('en-IN')}
                    </p>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 text-sm">
                    Transportation not provided. Parents are responsible for drop-off and pick-up.
                  </p>
                </div>
              )}
            </div>

            {/* Parent Contact */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Parent Contact</h3>
                  <p className="text-sm text-gray-600">During camp hours</p>
                </div>
              </div>
              <div className="bg-[#2B56FF]/5 rounded-lg p-4">
                <p className="text-sm text-gray-700">{info.parentContactAvailability}</p>
              </div>
            </div>

            {/* What to Bring */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Backpack className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">What to Bring</h3>
                  <p className="text-sm text-gray-600">Daily essentials</p>
                </div>
              </div>
              <ul className="space-y-2">
                {info.whatToBring.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249424] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
