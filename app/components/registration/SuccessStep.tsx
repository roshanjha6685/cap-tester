'use client';

import Link from 'next/link';
import { CheckCircle2, Download, Mail, Home, Calendar } from 'lucide-react';

interface SuccessStepProps {
  camp: any;
  formData: any;
}

export default function SuccessStep({ camp, formData }: SuccessStepProps) {
  const registrationId = `REG-${Date.now().toString().slice(-8)}`;
  const paymentId = `PAY-${Date.now().toString().slice(-10)}`;

  return (
    <div className="text-center py-8">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-12 h-12 text-green-600" />
      </div>

      {/* Success Message */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Registration Successful! 🎉
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Thank you for registering {formData.childName} for {camp.name}
      </p>

      {/* Registration Details Card */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-8 border-2 border-blue-200">
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <div className="text-sm text-gray-600 mb-1">Registration ID</div>
            <div className="text-lg font-bold text-gray-900">{registrationId}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Payment ID</div>
            <div className="text-lg font-bold text-gray-900">{paymentId}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Amount Paid</div>
            <div className="text-lg font-bold text-green-600">
              ₹{(camp.price * 1.18).toLocaleString('en-IN')}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600 mb-1">Payment Status</div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Confirmed
            </div>
          </div>
        </div>
      </div>

      {/* What's Next Section */}
      <div className="bg-white rounded-2xl p-6 mb-8 text-left border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-blue-600" />
          What Happens Next?
        </h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Confirmation Email</div>
              <div className="text-sm text-gray-600">
                You'll receive a confirmation email at <span className="font-medium">{formData.parentEmail}</span> with all details
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Welcome Kit</div>
              <div className="text-sm text-gray-600">
                3-5 days before camp starts, you'll get a welcome kit with schedule, items to bring, and contact details
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">Camp Day</div>
              <div className="text-sm text-gray-600">
                Show up on <span className="font-medium">{new Date(camp.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span> at {camp.timings.split('-')[0].trim()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Receipt
        </button>
        <a
          href={`mailto:${formData.parentEmail}`}
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <Mail className="w-5 h-5" />
          Email Receipt
        </a>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
        <h4 className="font-semibold text-gray-900 mb-3">Need Help?</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <p>📧 Email: support@summercamps.in</p>
          <p>📞 Phone: +91 98765 43210 (Mon-Sat, 9 AM - 6 PM)</p>
          <p>Reference your Registration ID: <span className="font-medium text-gray-900">{registrationId}</span></p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
        <Link
          href="/all-camps"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Browse More Camps
        </Link>
      </div>
    </div>
  );
}
