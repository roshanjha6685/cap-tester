'use client';

import Link from 'next/link';
import { Calendar, MapPin, Users, IndianRupee, Star } from 'lucide-react';

interface Camp {
  id: string;
  name: string;
  slug: string;
  city?: string;
  citySlug?: string;
  type: 'CITY' | 'RESIDENTIAL';
  featuresShort: string[];
  startDate: string;
  endDate: string;
  price: number;
  ageMin: number;
  ageMax: number;
  image: string;
  locality: string;
}

interface FeaturedCampsProps {
  camps: Camp[];
}

export default function FeaturedCamps({ camps }: FeaturedCampsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  };

  const getCampUrl = (camp: Camp) => {
    if (camp.type === 'RESIDENTIAL') {
      return `/residential-camp/${camp.slug}`;
    }
    return `/camp/${camp.citySlug}/${camp.slug}`;
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ Editor's Choice
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-600">Summer Camps</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked programs from verified providers across India
          </p>
        </div>

        {/* Camps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {camps.map((camp) => (
            <Link
              key={camp.id}
              href={getCampUrl(camp)}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Camp Image */}
              <div className="relative h-56 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
                {/* Placeholder - Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  {camp.type === 'RESIDENTIAL' ? (
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Residential
                    </span>
                  ) : (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Day Camp
                    </span>
                  )}
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-1 text-gray-900 font-bold">
                    <IndianRupee className="w-4 h-4" />
                    <span>{camp.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Camp Details */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {camp.name}
                </h3>

                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="truncate">{camp.locality}</span>
                </div>

                {/* Features - Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {camp.featuresShort.slice(0, 3).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  {/* Age Range */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{camp.ageMin}-{camp.ageMax} yrs</span>
                  </div>

                  {/* Dates */}
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatDate(camp.startDate)}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all">
                    View Details
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/all-camps"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View All Camps
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
