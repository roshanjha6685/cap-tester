'use client';

import { MapPin } from 'lucide-react';

interface CampListingHeaderProps {
  city: {
    name: string;
    state: string;
    campCount: number;
  };
  totalCamps: number;
}

export default function CampListingHeader({ city, totalCamps }: CampListingHeaderProps) {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-blue-100 text-sm mb-4">
            <a href="/" className="hover:text-white">Home</a>
            <span>/</span>
            <a href="/all-cities" className="hover:text-white">Cities</a>
            <span>/</span>
            <span className="text-white font-medium">{city.name}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Summer Camps in <span className="text-yellow-300">{city.name}</span>
          </h1>

          {/* Location */}
          <div className="flex items-center gap-2 text-blue-100 mb-6">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{city.state}</span>
          </div>

          {/* Description */}
          <p className="text-lg text-blue-100 mb-8 max-w-3xl">
            Discover {totalCamps}+ verified summer camps in {city.name}. From sports and STEM to arts and outdoor adventures - 
            find the perfect camp for your child this summer!
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold text-yellow-300">{totalCamps}</span>
              <span className="text-sm">Verified Camps</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold text-yellow-300">10+</span>
              <span className="text-sm">Categories</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-2xl font-bold text-yellow-300">100%</span>
              <span className="text-sm">Safe & Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="relative">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 5C120 10 240 20 360 23.3C480 26.7 600 23.3 720 21.7C840 20 960 20 1080 23.3C1200 26.7 1320 33.3 1380 36.7L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V0Z" fill="#F9FAFB"/>
        </svg>
      </div>
    </div>
  );
}
