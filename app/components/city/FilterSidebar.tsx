'use client';

import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';

export default function FilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [ageRange, setAgeRange] = useState({ min: 5, max: 18 });
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });

  const categories = [
    { id: 'sports', name: 'Sports', count: 15 },
    { id: 'stem', name: 'STEM & Robotics', count: 12 },
    { id: 'arts', name: 'Arts & Crafts', count: 8 },
    { id: 'adventure', name: 'Adventure & Outdoor', count: 6 },
    { id: 'languages', name: 'Languages', count: 4 },
    { id: 'music', name: 'Music & Dance', count: 7 },
    { id: 'chess', name: 'Chess & Mind Games', count: 5 },
    { id: 'swimming', name: 'Swimming', count: 9 },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5" />
          Filters
        </h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => toggleCategory(category.id)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="flex-1 text-sm text-gray-700 group-hover:text-gray-900">
                {category.name}
              </span>
              <span className="text-xs text-gray-400">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Age Range Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Age Range</h4>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-600 mb-2 block">Minimum Age</label>
            <input
              type="range"
              min="5"
              max="18"
              value={ageRange.min}
              onChange={(e) =>
                setAgeRange({ ...ageRange, min: parseInt(e.target.value) })
              }
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm font-medium text-gray-900 mt-1">
              {ageRange.min} years
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-600 mb-2 block">Maximum Age</label>
            <input
              type="range"
              min="5"
              max="18"
              value={ageRange.max}
              onChange={(e) =>
                setAgeRange({ ...ageRange, max: parseInt(e.target.value) })
              }
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm font-medium text-gray-900 mt-1">
              {ageRange.max} years
            </div>
          </div>
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-600 mb-2 block">Maximum Price</label>
            <input
              type="range"
              min="0"
              max="50000"
              step="1000"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
              }
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-sm font-medium text-gray-900 mt-1">
              ₹{priceRange.max.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>

      {/* Date Range Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Start Date</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="date"
              value="may"
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">May 2025</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="date"
              value="june"
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">June 2025</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="date"
              value="july"
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">July 2025</span>
          </label>
        </div>
      </div>

      {/* Camp Type */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Camp Type</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Full Day (8+ hours)</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">Half Day (4-6 hours)</span>
          </label>
        </div>
      </div>

      {/* Apply Button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg">
        Apply Filters
      </button>
    </div>
  );
}
