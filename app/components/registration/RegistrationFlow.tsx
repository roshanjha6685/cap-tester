'use client';

import { useState } from 'react';
import { CheckCircle2, ChevronLeft } from 'lucide-react';
import ChildDetailsStep from './ChildDetailsStep';
import ParentDetailsStep from './ParentDetailsStep';
import MedicalInfoStep from './MedicalInfoStep';
import ReviewStep from './ReviewStep';
import SuccessStep from './SuccessStep';

interface Camp {
  id: string;
  name: string;
  provider: { name: string };
  startDate: string;
  endDate: string;
  timings: string;
  price: number;
  locality: string;
  city: string;
  ageMin: number;
  ageMax: number;
  image: string;
}

interface RegistrationFlowProps {
  camp: Camp;
}

export default function RegistrationFlow({ camp }: RegistrationFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Child Details
    childName: '',
    childDOB: '',
    childGender: '',
    childGrade: '',
    
    // Parent Details
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    address: '',
    city: '',
    pincode: '',
    
    // Emergency Contact
    emergencyName: '',
    emergencyPhone: '',
    emergencyRelation: '',
    
    // Medical Info
    allergies: '',
    medicalConditions: '',
    medications: '',
    specialInstructions: '',
    
    // Consent
    termsAccepted: false,
  });

  const steps = [
    { number: 1, name: 'Child Details', component: ChildDetailsStep },
    { number: 2, name: 'Parent & Emergency', component: ParentDetailsStep },
    { number: 3, name: 'Medical Info', component: MedicalInfoStep },
    { number: 4, name: 'Review & Confirm', component: ReviewStep },
  ];

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    // Simulate payment/submission
    console.log('Submitting registration:', formData);
    // After successful submission, go to success step
    setCurrentStep(5);
  };

  const CurrentStepComponent = currentStep === 5 
    ? SuccessStep 
    : steps[currentStep - 1].component;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Camp Info Header */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Camp Image */}
          <div className="w-full md:w-48 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex-shrink-0" />
          
          {/* Camp Details */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{camp.name}</h1>
            <p className="text-gray-600 mb-3">by {camp.provider.name}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 {camp.locality}, {camp.city}</span>
              <span>📅 {new Date(camp.startDate).toLocaleDateString('en-IN')} - {new Date(camp.endDate).toLocaleDateString('en-IN')}</span>
              <span>🕐 {camp.timings}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex-shrink-0 text-right">
            <div className="text-sm text-gray-500 mb-1">Program Fee</div>
            <div className="text-3xl font-bold text-gray-900">
              ₹{camp.price.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      {currentStep !== 5 && (
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                {/* Step Circle */}
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      step.number < currentStep
                        ? 'bg-green-500 text-white'
                        : step.number === currentStep
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.number < currentStep ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`text-sm font-semibold ${
                      step.number <= currentStep ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {step.name}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 rounded transition-all ${
                      step.number < currentStep ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Step Name */}
          <div className="md:hidden text-center mt-4">
            <div className="text-sm font-semibold text-gray-900">
              {currentStep <= 4 && steps[currentStep - 1].name}
            </div>
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
        {currentStep === 5 ? (
          <SuccessStep camp={camp} formData={formData} />
        ) : (
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
            camp={camp}
            onNext={currentStep === 4 ? handleSubmit : nextStep}
            onBack={prevStep}
            isLastStep={currentStep === 4}
          />
        )}
      </div>
    </div>
  );
}
