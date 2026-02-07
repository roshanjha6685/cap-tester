'use client';

import { ChevronRight } from 'lucide-react';

interface ChildDetailsStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  camp: any;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

export default function ChildDetailsStep({
  formData,
  updateFormData,
  camp,
  onNext,
}: ChildDetailsStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Child Details</h2>
        <p className="text-gray-600">
          Tell us about your child who will be attending the camp
        </p>
      </div>

      {/* Child Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Child's Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          value={formData.childName}
          onChange={(e) => updateFormData({ childName: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          placeholder="Enter child's full name"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            required
            value={formData.childDOB}
            onChange={(e) => updateFormData({ childDOB: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          />
          <p className="text-xs text-gray-500 mt-1">
            Age requirement: {camp.ageMin}-{camp.ageMax} years
          </p>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={formData.childGender}
            onChange={(e) => updateFormData({ childGender: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Grade */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Grade/Class <span className="text-red-500">*</span>
        </label>
        <select
          required
          value={formData.childGrade}
          onChange={(e) => updateFormData({ childGrade: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors appearance-none bg-white"
        >
          <option value="">Select grade</option>
          <option value="kg">Kindergarten</option>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          <option value="4">Class 4</option>
          <option value="5">Class 5</option>
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-6 border-t border-gray-200">
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
