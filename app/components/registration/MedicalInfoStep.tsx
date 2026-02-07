'use client';

import { ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';

interface MedicalInfoStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  camp: any;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

export default function MedicalInfoStep({
  formData,
  updateFormData,
  onNext,
  onBack,
}: MedicalInfoStepProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Medical Information</h2>
        <p className="text-gray-600">
          Help us ensure your child's safety and wellbeing during the camp
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-900">
            <p className="font-medium mb-1">Important</p>
            <p>Please provide accurate medical information. All details are kept confidential and will only be used for your child's safety.</p>
          </div>
        </div>
      </div>

      {/* Allergies */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Allergies (Food, Medication, Environmental)
        </label>
        <textarea
          rows={3}
          value={formData.allergies}
          onChange={(e) => updateFormData({ allergies: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="List any allergies. Write 'None' if no allergies."
        />
        <p className="text-xs text-gray-500 mt-1">
          E.g., Peanuts, Dairy, Pollen, Penicillin, etc.
        </p>
      </div>

      {/* Medical Conditions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Medical Conditions
        </label>
        <textarea
          rows={3}
          value={formData.medicalConditions}
          onChange={(e) => updateFormData({ medicalConditions: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Any medical conditions we should know about. Write 'None' if no conditions."
        />
        <p className="text-xs text-gray-500 mt-1">
          E.g., Asthma, Diabetes, Epilepsy, etc.
        </p>
      </div>

      {/* Current Medications */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Medications
        </label>
        <textarea
          rows={3}
          value={formData.medications}
          onChange={(e) => updateFormData({ medications: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="List any medications your child is currently taking. Write 'None' if no medications."
        />
        <p className="text-xs text-gray-500 mt-1">
          Include dosage and timing if applicable
        </p>
      </div>

      {/* Special Instructions */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Instructions / Dietary Restrictions
        </label>
        <textarea
          rows={4}
          value={formData.specialInstructions}
          onChange={(e) => updateFormData({ specialInstructions: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
          placeholder="Any other important information, dietary restrictions, or special care instructions"
        />
        <p className="text-xs text-gray-500 mt-1">
          E.g., Vegetarian, Vegan, Cannot swim, Needs glasses, etc.
        </p>
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
          Continue to Review
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
