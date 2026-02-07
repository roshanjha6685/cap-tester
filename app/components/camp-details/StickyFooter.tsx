'use client';

import Link from 'next/link';
import { IndianRupee, Phone, Calendar, Users } from 'lucide-react';
import { CampUnit } from './types';

interface StickyFooterProps {
  campId: string;
  selectedUnit: CampUnit | null;
  defaultPrice: number;
}

export default function StickyFooter({ campId, selectedUnit, defaultPrice }: StickyFooterProps) {
  const displayPrice = selectedUnit?.price || defaultPrice;
  const isSoldOut = selectedUnit?.status === 'sold_out';

  return (
    <>
      {/* Spacer for sticky footer */}
      <div className="h-24 md:hidden" />

      {/* Mobile Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 md:hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Price & Unit Info */}
            <div className="flex-1 min-w-0">
              {selectedUnit && (
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1 truncate">
                  <Calendar className="w-3 h-3 flex-shrink-0" />
                  <span className="truncate">{selectedUnit.dateRange}</span>
                  <span className="text-gray-300">|</span>
                  <Users className="w-3 h-3 flex-shrink-0" />
                  <span>{selectedUnit.ageGroup}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <IndianRupee className="w-4 h-4 text-gray-900" />
                  <span className="text-xl font-bold text-gray-900">
                    {displayPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                {selectedUnit?.originalPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ₹{selectedUnit.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">
                <Phone className="w-5 h-5 text-gray-700" />
              </button>
              <Link
                href={isSoldOut ? '#' : `/register/${campId}`}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                  isSoldOut
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#2B56FF] hover:bg-[#1E44D9] text-white shadow-lg hover:shadow-xl'
                }`}
                onClick={(e) => {
                  if (isSoldOut) {
                    e.preventDefault();
                  }
                }}
              >
                {isSoldOut ? 'Sold Out' : 'Register Now'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Floating CTA (shown when scrolling past hero) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[300px]">
          {selectedUnit && (
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <Calendar className="w-3 h-3" />
              <span>{selectedUnit.dateRange}</span>
              <span className="text-gray-300">|</span>
              <Users className="w-3 h-3" />
              <span>{selectedUnit.ageGroup}</span>
            </div>
          )}
          
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="flex items-baseline gap-2">
              <div className="flex items-center">
                <IndianRupee className="w-5 h-5 text-gray-900" />
                <span className="text-2xl font-bold text-gray-900">
                  {displayPrice.toLocaleString('en-IN')}
                </span>
              </div>
              {selectedUnit?.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ₹{selectedUnit.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 py-2.5 border border-gray-300 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Talk to Counsellor
            </button>
            <Link
              href={isSoldOut ? '#' : `/register/${campId}`}
              className={`flex-1 py-2.5 rounded-lg font-bold text-sm text-center transition-all ${
                isSoldOut
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#2B56FF] hover:bg-[#1E44D9] text-white hover:shadow-lg'
              }`}
              onClick={(e) => {
                if (isSoldOut) {
                  e.preventDefault();
                }
              }}
            >
              {isSoldOut ? 'Sold Out' : 'Register Now'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
