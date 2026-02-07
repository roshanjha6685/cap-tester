'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, Shield, Wallet, Utensils, Stethoscope, Phone, Users, Info } from 'lucide-react';
import { FAQ } from './types';

interface FAQSectionProps {
  faqs: FAQ[];
}

const categoryConfig = {
  safety: { icon: Shield, label: 'Safety', color: 'blue' },
  refunds: { icon: Wallet, label: 'Refunds', color: 'green' },
  food: { icon: Utensils, label: 'Food', color: 'orange' },
  medical: { icon: Stethoscope, label: 'Medical', color: 'red' },
  communication: { icon: Phone, label: 'Communication', color: 'purple' },
  age: { icon: Users, label: 'Age', color: 'teal' },
  general: { icon: Info, label: 'General', color: 'gray' },
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
  
  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#2B56FF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-7 h-7 text-[#2B56FF]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common parent concerns</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
              const config = category === 'all' 
                ? { icon: HelpCircle, label: 'All Questions', color: 'gray' }
                : categoryConfig[category as keyof typeof categoryConfig];
              
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-[#2B56FF] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <config.icon className="w-4 h-4" />
                  {config.label}
                </button>
              );
            })}
          </div>

          {/* FAQ List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const config = categoryConfig[faq.category];

              return (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-xl overflow-hidden border-2 transition-all ${
                    isOpen ? 'border-[#2B56FF]/30' : 'border-transparent'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <div className={`w-8 h-8 bg-${config.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <config.icon className={`w-4 h-4 text-${config.color}-600`} />
                      </div>
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-4 md:px-5 pb-4 md:pb-5">
                      <div className="pl-11 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions */}
          <div className="mt-8 bg-[#2B56FF]/5 rounded-2xl p-6 text-center border border-[#2B56FF]/20">
            <h3 className="font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Our counsellors are here to help you make the right choice.</p>
            <button className="bg-[#2B56FF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E44D9] transition-colors">
              Talk to a Counsellor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
