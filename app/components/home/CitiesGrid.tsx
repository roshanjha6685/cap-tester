'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, TrendingUp } from 'lucide-react';

interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  campCount: number;
  image: string;
}

interface CitiesGridProps {
  cities: City[];
}

export default function CitiesGrid({ cities }: CitiesGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore Camps by <span className="text-blue-600">City</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your city and discover amazing summer camp opportunities near you
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/summer-camps/${city.slug}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* City Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                {/* Placeholder gradient - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-80" />
                
                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                
                {/* Trending Badge (optional) */}
                {city.campCount > 40 && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Popular
                  </div>
                )}
              </div>

              {/* City Info */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {city.name}
                </h3>
                
                <div className="flex items-center text-gray-600 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{city.state}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-semibold text-sm">
                    {city.campCount} camps available
                  </span>
                  <svg
                    className="w-5 h-5 text-blue-600 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-2xl transition-all pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* View All Cities Button */}
        <div className="text-center mt-12">
          <Link
            href="/all-cities"
            className="inline-flex items-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition-all"
          >
            View All Cities
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
