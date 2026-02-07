'use client';

import Link from 'next/link';
import { Calendar, MapPin, Users, IndianRupee, Clock, CheckCircle2, Shield } from 'lucide-react';

interface CampCardProps {
  camp: {
    id: string;
    name: string;
    slug: string;
    description: string;
    featuresShort: string[];
    categories: string[];
    startDate: string;
    endDate: string;
    timings: string;
    price: number;
    ageMin: number;
    ageMax: number;
    capacity: number;
    seatsBooked: number;
    image: string;
    locality: string;
    address: string;
    provider: {
      name: string;
      verified: boolean;
    };
  };
  citySlug: string;
}

export default function CampCard({ camp, citySlug }: CampCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const seatsLeft = camp.capacity - camp.seatsBooked;
  const fillPercentage = (camp.seatsBooked / camp.capacity) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden group">
      <div className="md:flex">
        {/* Left: Image */}
        <div className="md:w-80 relative">
          <div className="aspect-[4/3] md:aspect-auto md:h-full bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
            {/* Placeholder gradient - replace with actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                {camp.categories[0]}
              </span>
            </div>

            {/* Verified Badge */}
            {camp.provider.verified && (
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Verified
              </div>
            )}

            {/* Seats Remaining */}
            {seatsLeft <= 10 && seatsLeft > 0 && (
              <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Only {seatsLeft} seats left!
              </div>
            )}
            {seatsLeft === 0 && (
              <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Fully Booked
              </div>
            )}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex-1 p-6">
          {/* Title & Provider */}
          <div className="mb-3">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {camp.name}
            </h3>
            <p className="text-sm text-gray-600">
              by <span className="font-medium text-gray-900">{camp.provider.name}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {camp.description}
          </p>

          {/* Features Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {camp.featuresShort.map((feature, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"
              >
                <CheckCircle2 className="w-3 h-3" />
                {feature}
              </span>
            ))}
          </div>

          {/* Meta Information Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
            {/* Location */}
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-500">Location</div>
                <div className="text-sm font-medium text-gray-900">{camp.locality}</div>
              </div>
            </div>

            {/* Age Range */}
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-500">Age Group</div>
                <div className="text-sm font-medium text-gray-900">{camp.ageMin}-{camp.ageMax} years</div>
              </div>
            </div>

            {/* Dates */}
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-500">Duration</div>
                <div className="text-sm font-medium text-gray-900">
                  {formatDate(camp.startDate)} - {formatDate(camp.endDate)}
                </div>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-xs text-gray-500">Timings</div>
                <div className="text-sm font-medium text-gray-900">{camp.timings}</div>
              </div>
            </div>
          </div>

          {/* Bottom: Price & CTA */}
          <div className="flex items-center justify-between gap-4">
            {/* Price */}
            <div>
              <div className="text-xs text-gray-500 mb-1">Program Fee</div>
              <div className="flex items-center gap-1">
                <IndianRupee className="w-5 h-5 text-gray-900" />
                <span className="text-2xl font-bold text-gray-900">
                  {camp.price.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {/* View Details */}
              <Link
                href={`/camp/${citySlug}/${camp.slug}`}
                className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
              >
                View Details
              </Link>

              {/* Register Button */}
              <Link
                href={`/register/${camp.id}`}
                className={`px-6 py-2 rounded-lg font-semibold transition-all text-sm flex items-center gap-2 ${
                  seatsLeft === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white shadow-md hover:shadow-lg'
                }`}
                onClick={(e) => {
                  if (seatsLeft === 0) {
                    e.preventDefault();
                  }
                }}
              >
                {seatsLeft === 0 ? 'Fully Booked' : 'Fill Your Details →'}
              </Link>
            </div>
          </div>

          {/* Seats Progress Bar (if filling up) */}
          {fillPercentage > 60 && seatsLeft > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                <span>Filling fast!</span>
                <span>{seatsLeft} / {camp.capacity} seats available</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-orange-500 to-pink-600 h-2 rounded-full transition-all"
                  style={{ width: `${fillPercentage}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
