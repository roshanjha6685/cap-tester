'use client';

import { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Find the Best Summer Camps <br className="hidden md:block" />
            <span className="text-yellow-300">in India</span>
          </h1>

          <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Discover verified day camps and residential programs across major cities. 
            Safe, fun, and enriching experiences for your child this summer!
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-3 md:p-4 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-3">
              {/* Location Input */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Select city..."
                  className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 text-gray-800 focus:border-blue-500 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Category/Type Select */}
              <div className="flex-1 relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select className="w-full pl-12 pr-4 py-3 md:py-4 rounded-xl border-2 border-gray-200 text-gray-800 focus:border-blue-500 focus:outline-none appearance-none bg-white">
                  <option value="">All Categories</option>
                  <option value="sports">Sports</option>
                  <option value="stem">STEM & Robotics</option>
                  <option value="arts">Arts & Crafts</option>
                  <option value="adventure">Adventure & Outdoor</option>
                  <option value="languages">Languages</option>
                  <option value="leadership">Leadership</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-3 md:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                <Search className="w-5 h-5" />
                <span className="hidden md:inline">Search Camps</span>
                <span className="md:hidden">Search</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">200+</div>
              <div className="text-sm md:text-base text-blue-100 mt-1">Verified Camps</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">15+</div>
              <div className="text-sm md:text-base text-blue-100 mt-1">Cities</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">5000+</div>
              <div className="text-sm md:text-base text-blue-100 mt-1">Happy Kids</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
