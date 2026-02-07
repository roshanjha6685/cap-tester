'use client';

import { useState } from 'react';
import { ChevronLeft, CheckCircle2, User, Users, Heart, FileText } from 'lucide-react';

interface ReviewStepProps {
  formData: any;
  updateFormData: (data: any) => void;
  camp: any;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

export default function ReviewStep({
  formData,
  updateFormData,
  camp,
  onNext,
  onBack,
}: ReviewStepProps) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    onNext();
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Review Your Registration</h2>
        <p className="text-gray-600">
          Please review all information before proceeding to payment
        </p>
      </div>

      {/* Child Details */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Child Details</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Name:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.childName}</span>
          </div>
          <div>
            <span className="text-gray-600">Date of Birth:</span>
            <span className="ml-2 font-medium text-gray-900">{formatDate(formData.childDOB)}</span>
          </div>
          <div>
            <span className="text-gray-600">Gender:</span>
            <span className="ml-2 font-medium text-gray-900 capitalize">{formData.childGender}</span>
          </div>
          <div>
            <span className="text-gray-600">Grade:</span>
            <span className="ml-2 font-medium text-gray-900">Class {formData.childGrade}</span>
          </div>
        </div>
      </div>

      {/* Parent Details */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Parent & Contact Details</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div>
            <span className="text-gray-600">Parent Name:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.parentName}</span>
          </div>
          <div>
            <span className="text-gray-600">Email:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.parentEmail}</span>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.parentPhone}</span>
          </div>
          <div>
            <span className="text-gray-600">Address:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.address}, {formData.city} - {formData.pincode}</span>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Emergency Contact</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Name:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.emergencyName}</span>
          </div>
          <div>
            <span className="text-gray-600">Phone:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.emergencyPhone}</span>
          </div>
          <div>
            <span className="text-gray-600">Relationship:</span>
            <span className="ml-2 font-medium text-gray-900 capitalize">{formData.emergencyRelation}</span>
          </div>
        </div>
      </div>

      {/* Medical Info */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <FileText className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Medical Information</h3>
        </div>
        <div className="space-y-3 text-sm">
          <div>
            <span className="text-gray-600">Allergies:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.allergies || 'None'}</span>
          </div>
          <div>
            <span className="text-gray-600">Medical Conditions:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.medicalConditions || 'None'}</span>
          </div>
          <div>
            <span className="text-gray-600">Medications:</span>
            <span className="ml-2 font-medium text-gray-900">{formData.medications || 'None'}</span>
          </div>
          {formData.specialInstructions && (
            <div>
              <span className="text-gray-600">Special Instructions:</span>
              <span className="ml-2 font-medium text-gray-900">{formData.specialInstructions}</span>
            </div>
          )}
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-700">
            <span>Program Fee</span>
            <span className="font-medium">₹{camp.price.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>GST (18%)</span>
            <span className="font-medium">₹{(camp.price * 0.18).toLocaleString('en-IN')}</span>
          </div>
          <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">Total Amount</span>
            <span className="text-2xl font-bold text-blue-600">
              ₹{(camp.price * 1.18).toLocaleString('en-IN')}
            </span>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="bg-gray-50 rounded-xl p-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.termsAccepted}
            onChange={(e) => updateFormData({ termsAccepted: e.target.checked })}
            className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
          />
          <div className="text-sm text-gray-700">
            <p className="font-medium text-gray-900 mb-1">I accept the Terms & Conditions</p>
            <p>
              I have read and agree to the{' '}
              <a href="/terms-and-conditions" target="_blank" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>
              ,{' '}
              <a href="/refund-policy" target="_blank" className="text-blue-600 hover:underline">
                Refund Policy
              </a>
              , and{' '}
              <a href="/privacy-policy" target="_blank" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              . I understand the camp rules and safety guidelines.
            </p>
          </div>
        </label>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-6 border-t border-gray-200">
        <button
          type="button"
          onClick={onBack}
          disabled={isProcessing}
          className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          Back
        </button>
        <button
          type="submit"
          disabled={isProcessing}
          className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 disabled:cursor-not-allowed"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-5 h-5" />
              <span>Proceed to Payment</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
