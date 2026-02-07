'use client';

import { 
  Target, 
  Sparkles, 
  Palette, 
  Code, 
  Trophy, 
  Mountain,
  Music,
  Gamepad2,
  Microscope,
  Leaf,
  Dumbbell,
  Drama
} from 'lucide-react';
import { CampDetail } from './types';

interface CampOverviewProps {
  camp: CampDetail;
}

const categoryIcons: Record<string, any> = {
  'Sports': Dumbbell,
  'STEM': Microscope,
  'Art': Palette,
  'Arts': Palette,
  'Coding': Code,
  'Technology': Code,
  'Adventure': Mountain,
  'Music': Music,
  'Dance': Drama,
  'Gaming': Gamepad2,
  'Nature': Leaf,
  'Crafts': Palette,
  'default': Sparkles
};

export default function CampOverview({ camp }: CampOverviewProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Camp</h2>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              {camp.description}
            </p>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Camp Categories</h3>
            <div className="flex flex-wrap gap-3">
              {camp.categories.map((category, index) => {
                const IconComponent = categoryIcons[category] || categoryIcons['default'];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-[#2B56FF]/5 border border-[#2B56FF]/20 px-4 py-2 rounded-full"
                  >
                    <IconComponent className="w-5 h-5 text-[#2B56FF]" />
                    <span className="font-medium text-gray-900">{category}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-[#F6F7F8] rounded-2xl p-6 md:p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#2B56FF]/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-[#2B56FF]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Camp Objectives</h3>
            </div>
            <p className="text-gray-600 mb-4">What your child will gain from this experience:</p>
            <ul className="grid md:grid-cols-2 gap-3">
              {camp.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#249424]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Trophy className="w-3 h-3 text-[#249424]" />
                  </div>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
