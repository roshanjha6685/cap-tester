'use client';

import { FileText, RefreshCcw, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { CampPolicy } from './types';

interface PoliciesProps {
  policies: CampPolicy[];
  cancellationPolicy: string;
  refundPolicy: string;
}

export default function Policies({ policies, cancellationPolicy, refundPolicy }: PoliciesProps) {
  return (
    <section className="py-12 bg-[#F6F7F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#2B56FF]" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Policies & Guidelines</h2>
              <p className="text-gray-600 text-sm">Important terms you should know</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Cancellation Policy */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Cancellation Policy</h3>
                  <p className="text-gray-700 whitespace-pre-line">{cancellationPolicy}</p>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#249424]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <RefreshCcw className="w-6 h-6 text-[#249424]" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Refund Policy</h3>
                  <p className="text-gray-700 whitespace-pre-line">{refundPolicy}</p>
                </div>
              </div>
            </div>

            {/* Other Policies */}
            {policies.map((policy, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Info className="w-6 h-6 text-[#2B56FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{policy.title}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{policy.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Terms Acceptance Note */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                By registering for this camp, you agree to all the above policies and terms & conditions. 
                Please read them carefully before proceeding with your registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
