'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import FilterSidebar from './FilterSidebar';

interface MobileFilterButtonProps {
  totalCamps: number;
}

export default function MobileFilterButton({ totalCamps }: MobileFilterButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 hover:border-blue-500 px-6 py-3 rounded-xl font-semibold text-gray-900 transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filters & Sort</span>
          <span className="ml-auto bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
            {totalCamps}
          </span>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Filter Content */}
            <div className="p-4">
              <FilterSidebar />
            </div>

            {/* Bottom Actions */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-xl font-semibold transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all"
              >
                Show {totalCamps} Camps
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
