'use client';

import { Shield, Award, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function TrustSection() {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Verified Providers',
      description: 'All camp organizers undergo thorough background checks and verification',
      color: 'blue',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Camps meet our strict safety and quality standards',
      color: 'emerald',
    },
    {
      icon: HeartHandshake,
      title: 'Transparent Pricing',
      description: 'No hidden fees. Clear refund and cancellation policies',
      color: 'purple',
    },
    {
      icon: CheckCircle2,
      title: 'Secure Payments',
      description: '100% secure payment gateway with instant confirmation',
      color: 'orange',
    },
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      border: 'border-blue-200',
    },
    emerald: {
      bg: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      border: 'border-emerald-200',
    },
    purple: {
      bg: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      border: 'border-purple-200',
    },
    orange: {
      bg: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      border: 'border-orange-200',
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🛡️ Your Child's Safety is Our Priority
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Parents <span className="text-blue-600">Trust Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We ensure every camp meets the highest standards of safety, quality, and transparency
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {trustPoints.map((point, index) => {
            const colors = colorClasses[point.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-6 hover:shadow-lg transition-all`}
              >
                <div className={`${colors.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <point.icon className={`w-7 h-7 ${colors.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Trust Badges */}
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Verified Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">₹0</div>
              <div className="text-sm text-gray-600">Booking Fees</div>
            </div>
          </div>
        </div>

        {/* Safety Highlights */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Our Safety Commitments
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All staff undergo police verification and child safety training</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Strict child-to-supervisor ratios maintained at all times</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Medical facilities and emergency protocols in place</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Regular updates to parents during residential programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
