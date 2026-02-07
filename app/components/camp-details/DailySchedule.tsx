'use client';

import { Clock, Sun, Cloud, Coffee, Utensils } from 'lucide-react';
import { ScheduleItem } from './types';

interface DailyScheduleProps {
  schedule: ScheduleItem[];
  title?: string;
}

const typeConfig = {
  indoor: {
    icon: Cloud,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    label: 'Indoor'
  },
  outdoor: {
    icon: Sun,
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    label: 'Outdoor'
  },
  break: {
    icon: Coffee,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    label: 'Break'
  },
  meal: {
    icon: Utensils,
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    label: 'Meal'
  }
};

export default function DailySchedule({ schedule, title = "Sample Daily Schedule" }: DailyScheduleProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 text-sm">A typical day at the camp</p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mb-6">
            {Object.entries(typeConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${config.bg} ${config.border} border-2`} />
                <span className="text-xs text-gray-600">{config.label}</span>
              </div>
            ))}
          </div>

          {/* Schedule Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-4">
              {schedule.map((item, index) => {
                const config = typeConfig[item.type];
                const IconComponent = config.icon;

                return (
                  <div key={index} className="flex gap-4 md:gap-6">
                    {/* Time Column */}
                    <div className="flex-shrink-0 w-16 md:w-20 text-right">
                      <span className="text-sm font-semibold text-gray-900">{item.time}</span>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative hidden md:flex">
                      <div className={`w-3 h-3 rounded-full ${config.bg} ${config.border} border-2 mt-1.5`} />
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${config.bg} ${config.border} border rounded-xl p-4 hover:shadow-md transition-all`}>
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 ${config.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className={`w-4 h-4 ${config.text}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{item.activity}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${config.bg} ${config.text} font-medium`}>
                              {config.label}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-sm text-gray-600">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This is a sample schedule. Actual activities may vary based on weather, group dynamics, and special events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
