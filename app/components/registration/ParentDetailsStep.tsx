'use client';

import { ChevronRight, ChevronLeft } from 'lucide-react';

interface ParentDetailsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  camp: any;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

export default function ParentDetailsStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: ParentDetailsStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Parent & Emergency Contact</h2>
        <p className="text-gray-600">
          Your contact details and emergency contact information
        </p>
      </div>

      {/* Parent Details Section */}
      <div className="bg-blue-50 rounded-xl p-6 space-y-6">
        <h3 className="font-semibold text-gray-900">Parent/Guardian Details</h3>

        {/* Parent Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.parentName}
            onChange={(e) => updateFormData({ parentName: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Enter parent's full name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.parentEmail}
              onChange={(e) => updateFormData({ parentEmail: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              value={formData.parentPhone}
              onChange={(e) => updateFormData({ parentPhone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="10-digit mobile number"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={3}
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
            placeholder="Enter complete address"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.city}
              onChange={(e) => updateFormData({ city: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="City"
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pincode <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              pattern="[0-9]{6}"
              value={formData.pincode}
              onChange={(e) => updateFormData({ pincode: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="6-digit pincode"
            />
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="bg-orange-50 rounded-xl p-6 space-y-6">
        <h3 className="font-semibold text-gray-900">Emergency Contact</h3>
        <p className="text-sm text-gray-600">Person to contact in case of emergency (other than parent)</p>

        {/* Emergency Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.emergencyName}
            onChange={(e) => updateFormData({ emergencyName: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
            placeholder="Emergency contact name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Emergency Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]{10}"
              value={formData.emergencyPhone}
              onChange={(e) => updateFormData({ emergencyPhone: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="10-digit mobile number"
            />
          </div>

          {/* Relation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationship <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.emergencyRelation}
              onChange={(e) => updateFormData({ emergencyRelation: e.target.value })}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
            >
              <option value="">Select relation</option>
              <option value="grandparent">Grandparent</option>
              <option value="uncle">Uncle</option>
              <option value="aunt">Aunt</option>
              <option value="sibling">Sibling</option>
              <option value="friend">Family Friend</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
