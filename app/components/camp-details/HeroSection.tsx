'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Share2, 
  Heart, 
  Calendar, 
  Users, 
  IndianRupee,
  MapPin,
  Phone,
  Shield,
  Star,
  Tent,
  Sun
} from 'lucide-react';
import { CampDetail, CampUnit } from './types';

interface HeroSectionProps {
  camp: CampDetail;
  selectedUnit: CampUnit | null;
  citySlug: string;
}

export default function HeroSection({ camp, selectedUnit, citySlug }: HeroSectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % camp.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + camp.images.length) % camp.images.length);
  };

  const displayPrice = selectedUnit?.price || camp.units[0]?.price || 0;
  const originalPrice = selectedUnit?.originalPrice || camp.units[0]?.originalPrice;
  const discountPercent = originalPrice ? Math.round((1 - displayPrice / originalPrice) * 100) : 0;

  return (
    <section className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#2B56FF]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/summer-camps/${citySlug}`} className="hover:text-[#2B56FF]">
            {camp.location.city} Camps
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium truncate">{camp.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:col-span-7 mb-6 lg:mb-0">
            {/* Main Image */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-4">
              {/* Placeholder gradient - replace with actual images */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"
                style={{
                  backgroundImage: camp.images[currentImageIndex] 
                    ? `url(${camp.images[currentImageIndex]})` 
                    : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Camp Type Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 ${
                  camp.type === 'RESIDENTIAL' 
                    ? 'bg-[#249424] text-white' 
                    : 'bg-[#2B56FF] text-white'
                }`}>
                  {camp.type === 'RESIDENTIAL' ? (
                    <>
                      <Tent className="w-4 h-4" />
                      Residential Camp
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4" />
                      Day Camp
                    </>
                  )}
                </span>
              </div>

              {/* Navigation Arrows */}
              {camp.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Video Play Button */}
              {camp.videoUrl && (
                <button className="absolute bottom-4 right-4 bg-white/90 hover:bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg transition-all">
                  <Play className="w-4 h-4 text-[#2B56FF]" fill="currentColor" />
                  <span className="text-sm font-medium">Watch Video</span>
                </button>
              )}

              {/* Image Indicators */}
              {camp.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {camp.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white w-6' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {camp.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {camp.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-[#2B56FF]' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-300"
                      style={{
                        backgroundImage: img ? `url(${img})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Camp Info */}
          <div className="lg:col-span-5">
            <div className="bg-white lg:bg-[#F6F7F8] lg:rounded-2xl lg:p-6 lg:border border-gray-200">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {camp.name}
                  </h1>
                  {camp.tagline && (
                    <p className="text-gray-600">{camp.tagline}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Provider & Verified Badge */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                <div className="w-10 h-10 bg-[#2B56FF] rounded-full flex items-center justify-center text-white font-bold">
                  {camp.provider.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Organised by</p>
                  <p className="font-semibold text-gray-900">{camp.provider.name}</p>
                </div>
                {camp.provider.verified && (
                  <div className="flex items-center gap-1 bg-[#249424]/10 text-[#249424] px-3 py-1 rounded-full text-sm font-medium">
                    <Shield className="w-4 h-4" />
                    Verified
                  </div>
                )}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#2B56FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Age Group</p>
                    <p className="font-semibold text-gray-900">
                      {selectedUnit 
                        ? selectedUnit.ageGroup 
                        : `${camp.units[0]?.ageMin}-${camp.units[0]?.ageMax} years`
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-[#2B56FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Camp Dates</p>
                    <p className="font-semibold text-gray-900">
                      {selectedUnit 
                        ? selectedUnit.dateRange 
                        : camp.units[0]?.dateRange
                      }
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#2B56FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="font-semibold text-gray-900">{camp.location.city}</p>
                  </div>
                </div>
                {camp.provider.rating && (
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-[#2B56FF]" fill="currentColor" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Rating</p>
                      <p className="font-semibold text-gray-900">
                        {camp.provider.rating} ({camp.provider.reviewCount} reviews)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Price Section */}
              <div className="bg-[#2B56FF]/5 rounded-xl p-4 mb-6 border border-[#2B56FF]/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Starting from</p>
                    <div className="flex items-baseline gap-2">
                      <div className="flex items-center">
                        <IndianRupee className="w-6 h-6 text-gray-900" />
                        <span className="text-3xl font-bold text-gray-900">
                          {displayPrice.toLocaleString('en-IN')}
                        </span>
                      </div>
                      {originalPrice && (
                        <span className="text-lg text-gray-400 line-through">
                          ₹{originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    {discountPercent > 0 && (
                      <span className="inline-block mt-1 bg-[#249424]/10 text-[#249424] px-2 py-0.5 rounded text-xs font-semibold">
                        {discountPercent}% OFF - Early Bird
                      </span>
                    )}
                  </div>
                  {selectedUnit && (
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Selected batch</p>
                      <p className="text-sm font-medium text-gray-900">{selectedUnit.dateRange}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href={`/register/${camp.id}`}
                  className="w-full bg-[#2B56FF] hover:bg-[#1E44D9] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  Register Now
                </Link>
                <button className="w-full bg-white border-2 border-[#2B56FF] text-[#2B56FF] hover:bg-[#2B56FF]/5 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                  Enquire Now
                </button>
                <button className="w-full bg-white border-2 border-gray-300 hover:border-[#2B56FF] hover:text-[#2B56FF] text-gray-700 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
                  <Phone className="w-5 h-5" />
                  Request Callback
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-[#249424]" />
                    <span>Safe & Verified</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>₹0</span>
                    <span>Booking Fees</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>✓</span>
                    <span>Easy Refund</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
