'use client';

import { 
  UserCheck,
  Shield,
  Wrench,
  Award,
  Users,
  Clock,
  Utensils,
  Bus,
  Camera,
  Heart,
  Star,
  Zap
} from 'lucide-react';
import { CampHighlight } from './types';

interface KeyHighlightsProps {
  highlights: CampHighlight[];
}

const iconMap: Record<string, any> = {
  'instructor': UserCheck,
  'safety': Shield,
  'equipment': Wrench,
  'certificate': Award,
  'group': Users,
  'timing': Clock,
  'meals': Utensils,
  'transport': Bus,
  'photo': Camera,
  'care': Heart,
  'rating': Star,
  'activity': Zap,
  'default': Star
};

const colorClasses = [
  { bg: 'bg-[#2B56FF]/5', iconBg: 'bg-[#2B56FF]/10', iconColor: 'text-[#2B56FF]' },
  { bg: 'bg-[#249424]/5', iconBg: 'bg-[#249424]/10', iconColor: 'text-[#249424]' },
  { bg: 'bg-[#2B56FF]/5', iconBg: 'bg-[#2B56FF]/10', iconColor: 'text-[#2B56FF]' },
  { bg: 'bg-[#249424]/5', iconBg: 'bg-[#249424]/10', iconColor: 'text-[#249424]' },
  { bg: 'bg-[#2B56FF]/5', iconBg: 'bg-[#2B56FF]/10', iconColor: 'text-[#2B56FF]' },
  { bg: 'bg-[#249424]/5', iconBg: 'bg-[#249424]/10', iconColor: 'text-[#249424]' },
];

export default function KeyHighlights({ highlights }: KeyHighlightsProps) {
  return (
    <section className="py-12 bg-[#F6F7F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Key Highlights & Features</h2>
            <p className="text-gray-600">What makes this camp special</p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = iconMap[highlight.icon] || iconMap['default'];
              const colors = colorClasses[index % colorClasses.length];

              return (
                <div
                  key={index}
                  className={`${colors.bg} rounded-xl p-4 md:p-6 text-center hover:shadow-md transition-all`}
                >
                  <div className={`${colors.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`w-6 h-6 md:w-7 md:h-7 ${colors.iconColor}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                    {highlight.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
