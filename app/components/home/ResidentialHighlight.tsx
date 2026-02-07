'use client';

import Link from 'next/link';
import { Mountain, Users, Home, Shield } from 'lucide-react';

export default function ResidentialHighlight() {
  const features = [
    {
      icon: Mountain,
      title: 'Adventure Learning',
      description: 'Outdoor activities and expeditions',
    },
    {
      icon: Home,
      title: 'Premium Accommodation',
      description: 'Stay at top boarding schools',
    },
    {
      icon: Users,
      title: 'Expert Supervision',
      description: '24/7 trained staff & mentors',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified campuses with safety protocols',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🏕️ Residential Programs
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Explore <span className="text-emerald-600">Residential Summer Camps</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Give your child an unforgettable experience at India's finest boarding schools and adventure camps. 
                Multi-day programs with accommodation, meals, and 24/7 supervision.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/residential-summer-camps"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Explore Residential Camps
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              {/* Main Image Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-emerald-400 to-teal-500 relative">
                  {/* Placeholder - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mountain className="w-24 h-24 text-white/30" />
                  </div>
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                      <div className="text-2xl font-bold text-emerald-600">7-14</div>
                      <div className="text-xs text-gray-600">Days Duration</div>
                    </div>
                    <div className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                      <div className="text-2xl font-bold text-emerald-600">50+</div>
                      <div className="text-xs text-gray-600">Programs</div>
                    </div>
                  </div>
                </div>

                {/* Popular Destinations */}
                <div className="p-6 bg-gradient-to-b from-white to-emerald-50">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Popular Destinations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Himachal', 'Uttarakhand', 'Karnataka', 'Tamil Nadu'].map((dest) => (
                      <span
                        key={dest}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {dest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-200 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
