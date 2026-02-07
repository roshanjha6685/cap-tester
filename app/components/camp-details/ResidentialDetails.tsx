'use client';

import { 
  Home, 
  Utensils, 
  Shield, 
  MapPin, 
  Smartphone, 
  Luggage,
  FileCheck,
  Heart,
  Users,
  Stethoscope,
  Clock,
  CheckCircle2,
  Info,
  AlertTriangle
} from 'lucide-react';
import { ResidentialCampInfo } from './types';

interface ResidentialDetailsProps {
  info: ResidentialCampInfo;
}

export default function ResidentialDetails({ info }: ResidentialDetailsProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-[#249424]/5 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block bg-[#249424]/10 text-[#249424] px-4 py-2 rounded-full text-sm font-semibold mb-3">
              Residential Camp Information
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Your Child's Home Away From Home
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete details about accommodation, safety, and care during the residential experience
            </p>
          </div>

          {/* Accommodation Section */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#249424]/10 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-[#249424]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Accommodation</h3>
                <p className="text-sm text-gray-600">{info.accommodation.type}</p>
              </div>
            </div>
            
            <p className="text-gray-700 mb-4">{info.accommodation.description}</p>
            
            {/* Amenities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {info.accommodation.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 bg-[#249424]/5 rounded-lg p-3">
                  <CheckCircle2 className="w-4 h-4 text-[#249424] flex-shrink-0" />
                  <span className="text-sm text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>

            {/* Accommodation Images */}
            {info.accommodation.images.length > 0 && (
              <div className="mt-6 grid grid-cols-3 gap-3">
                {info.accommodation.images.slice(0, 3).map((_, index) => (
                  <div 
                    key={index} 
                    className="aspect-[4/3] rounded-lg bg-gradient-to-br from-emerald-200 to-teal-300 overflow-hidden"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Food & Nutrition */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Food & Nutrition</h3>
                  <p className="text-sm text-gray-600">Meal arrangements</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{info.foodPlan.description}</p>
              
              <div className="space-y-2 mb-4">
                <p className="text-sm font-medium text-gray-900">Meals Provided:</p>
                <div className="flex flex-wrap gap-2">
                  {info.foodPlan.meals.map((meal, index) => (
                    <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                      {meal}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-3">
                <p className="text-sm text-gray-700">
                  <strong>Dietary Options:</strong> {info.foodPlan.dietary.join(', ')}
                </p>
              </div>
            </div>

            {/* Safety & Supervision */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Safety & Supervision</h3>
                  <p className="text-sm text-gray-600">24/7 care</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-[#2B56FF]/5 rounded-lg">
                  <Users className="w-5 h-5 text-[#2B56FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Warden Ratio</p>
                    <p className="text-sm text-gray-600">{info.supervision.wardenRatio}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#2B56FF]/5 rounded-lg">
                  <Clock className="w-5 h-5 text-[#2B56FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Night Supervision</p>
                    <p className="text-sm text-gray-600">{info.supervision.nightSupervision}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[#2B56FF]/5 rounded-lg">
                  <Stethoscope className="w-5 h-5 text-[#2B56FF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Medical Support</p>
                    <p className="text-sm text-gray-600">{info.supervision.medicalSupport}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel & Reporting */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Travel & Reporting</h3>
                  <p className="text-sm text-gray-600">Arrival instructions</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-[#2B56FF]/5 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Reporting Instructions</p>
                  <p className="text-sm text-gray-700">{info.travel.reportingInstructions}</p>
                </div>
                <div className="p-3 bg-[#2B56FF]/5 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Pick-up Instructions</p>
                  <p className="text-sm text-gray-700">{info.travel.pickupInstructions}</p>
                </div>
                {info.travel.travelAssistance && (
                  <div className="p-3 bg-[#249424]/5 rounded-lg">
                    <p className="text-xs text-gray-500 mb-1">Travel Assistance</p>
                    <p className="text-sm text-gray-700">{info.travel.travelAssistance}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Communication Policy */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Communication Policy</h3>
                  <p className="text-sm text-gray-600">Stay connected</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-[#2B56FF]/5 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Phone Usage</p>
                  <p className="text-sm text-gray-700">{info.communication.phonePolicy}</p>
                </div>
                <div className="p-3 bg-[#2B56FF]/5 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Parent Updates</p>
                  <p className="text-sm text-gray-700">{info.communication.parentUpdates}</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-gray-500 mb-1">Emergency Contact</p>
                  <p className="text-sm text-gray-700 font-medium">{info.communication.emergencyContact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Sections */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {/* Packing Checklist */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <Luggage className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Packing Checklist</h3>
                  <p className="text-sm text-gray-600">Essential items</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {info.packingChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-[#2B56FF]/5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#249424] flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance & Consent */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-[#2B56FF]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Insurance & Consent</h3>
                  <p className="text-sm text-gray-600">Required documents</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${info.insurance.included ? 'bg-[#249424]/5' : 'bg-yellow-50'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    {info.insurance.included ? (
                      <CheckCircle2 className="w-5 h-5 text-[#249424]" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    )}
                    <span className="font-medium text-gray-900">
                      Insurance {info.insurance.included ? 'Included' : 'Not Included'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{info.insurance.details}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">Required Consent Forms:</p>
                  <ul className="space-y-2">
                    {info.consentRequired.map((consent, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <FileCheck className="w-4 h-4 text-[#2B56FF] flex-shrink-0" />
                        {consent}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Banner */}
          <div className="mt-8 bg-[#249424] rounded-2xl p-6 md:p-8 text-white">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Your Child is in Safe Hands</h3>
                <p className="text-white/80">
                  Our trained staff and comprehensive safety protocols ensure a secure and nurturing environment for every camper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
