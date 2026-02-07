'use client';

import { MapPin, Navigation, Building, Trees, ExternalLink } from 'lucide-react';
import { CampLocation, CampType } from './types';

interface LocationSectionProps {
  location: CampLocation;
  campType: CampType;
}

export default function LocationSection({ location, campType }: LocationSectionProps) {
  const googleMapsUrl = location.coordinates 
    ? `https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address + ', ' + location.city)}`;

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#2B56FF]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Camp Location</h2>
              <p className="text-gray-600 text-sm">Where the adventure happens</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Map Placeholder */}
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[250px] bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 rounded-2xl overflow-hidden border border-gray-200">
              {/* Map placeholder with visual interest */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <MapPin className="w-8 h-8 text-red-500" />
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Interactive map</p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2B56FF] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1E44D9] transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-green-200/50 rounded-full" />
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-blue-200/50 rounded-full" />
              <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-green-300/50 rounded-full" />
            </div>

            {/* Location Details */}
            <div className="space-y-4">
              {/* Venue */}
              <div className="bg-[#F6F7F8] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-[#2B56FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{location.venueName}</h3>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <p className="text-sm text-gray-600">{location.city}, {location.state} - {location.pincode}</p>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              {location.landmarks.length > 0 && (
                <div className="bg-[#F6F7F8] rounded-xl p-5">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-gray-600" />
                    Nearby Landmarks
                  </h4>
                  <ul className="space-y-2">
                    {location.landmarks.map((landmark, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-[#2B56FF] rounded-full flex-shrink-0" />
                        {landmark}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Campus Description for Residential */}
              {campType === 'RESIDENTIAL' && location.campusDescription && (
                <div className="bg-[#249424]/5 rounded-xl p-5 border border-[#249424]/20">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#249424]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trees className="w-5 h-5 text-[#249424]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Campus Environment</h4>
                      <p className="text-sm text-gray-700">{location.campusDescription}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Get Directions Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-900 text-white py-3 rounded-xl font-semibold text-center hover:bg-gray-800 transition-colors"
              >
                <Navigation className="w-4 h-4 inline mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
