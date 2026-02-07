'use client';

import { 
  Shield, 
  Award, 
  Calendar, 
  Users, 
  Star, 
  CheckCircle2,
  Building,
  BadgeCheck
} from 'lucide-react';
import { CampProvider } from './types';

interface ProviderTrustProps {
  provider: CampProvider;
}

export default function ProviderTrust({ provider }: ProviderTrustProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">About the Organizer</h2>
            <p className="text-gray-600">Meet the team behind this experience</p>
          </div>

          {/* Provider Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-[#2B56FF] p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Logo/Avatar */}
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                  {provider.logo ? (
                    <img src={provider.logo} alt={provider.name} className="w-16 h-16 object-contain" />
                  ) : (
                    <span className="text-3xl font-bold text-[#2B56FF]">
                      {provider.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Name & Badge */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">{provider.name}</h3>
                    {provider.verified && (
                      <span className="flex items-center gap-1 bg-[#249424] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <BadgeCheck className="w-4 h-4" />
                        Verified Partner
                      </span>
                    )}
                  </div>
                  <p className="text-blue-100">{provider.description}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-100">
              <div className="p-4 md:p-6 text-center border-r border-b md:border-b-0 border-gray-100">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-[#2B56FF]" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{provider.yearsActive}+</div>
                <div className="text-sm text-gray-600">Years Active</div>
              </div>
              
              {provider.pastEditions && (
                <div className="p-4 md:p-6 text-center border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-[#2B56FF]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{provider.pastEditions}+</div>
                  <div className="text-sm text-gray-600">Camp Editions</div>
                </div>
              )}
              
              {provider.totalCampers && (
                <div className="p-4 md:p-6 text-center border-r border-gray-100">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-[#249424]" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{provider.totalCampers.toLocaleString()}+</div>
                  <div className="text-sm text-gray-600">Happy Campers</div>
                </div>
              )}
              
              {provider.rating && (
                <div className="p-4 md:p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{provider.rating}</div>
                  <div className="text-sm text-gray-600">{provider.reviewCount} Reviews</div>
                </div>
              )}
            </div>

            {/* Certifications */}
            {provider.certifications.length > 0 && (
              <div className="p-6 md:p-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#2B56FF]" />
                  Certifications & Affiliations
                </h4>
                <div className="flex flex-wrap gap-3">
                  {provider.certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-[#2B56FF]/5 border border-[#2B56FF]/20 px-4 py-2 rounded-full"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#2B56FF]" />
                      <span className="text-sm font-medium text-gray-900">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Platform Verification */}
          <div className="mt-6 bg-[#249424]/5 rounded-2xl p-6 border border-[#249424]/20">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#249424]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Building className="w-7 h-7 text-[#249424]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900">Verified by Edustoke</h4>
                  <BadgeCheck className="w-5 h-5 text-[#249424]" />
                </div>
                <p className="text-sm text-gray-600">
                  This camp provider has been thoroughly verified by our team. 
                  All safety protocols, certifications, and facilities have been inspected and approved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
