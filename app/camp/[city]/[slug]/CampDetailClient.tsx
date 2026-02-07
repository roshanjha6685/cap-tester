'use client';

import { useState, useEffect } from 'react';
import {
  HeroSection,
  // UnitSelector,
  CampOverview,
  KeyHighlights,
  // DailySchedule,
  DayCampDetails,
  ResidentialDetails,
  LocationSection,
  Policies,
  FAQSection,
  ProviderTrust,
  StickyFooter,
  CampDetail,
  CampUnit
} from '@/app/components/camp-details';

interface CampDetailClientProps {
  camp: CampDetail;
  citySlug: string;
}

export default function CampDetailClient({ camp, citySlug }: CampDetailClientProps) {
  const [selectedUnit, setSelectedUnit] = useState<CampUnit | null>(null);

  // Select the first available unit by default
  useEffect(() => {
    const firstAvailable = camp.units.find(unit => unit.status !== 'sold_out');
    if (firstAvailable) {
      setSelectedUnit(firstAvailable);
    }
  }, [camp.units]);

  const handleSelectUnit = (unit: CampUnit) => {
    setSelectedUnit(unit);
    // Scroll to top of page when unit is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section - Above the Fold */}
      <HeroSection 
        camp={camp} 
        selectedUnit={selectedUnit} 
        citySlug={citySlug} 
      />

      {/* Unit Selector - Commented out */}
      {/* <UnitSelector 
        units={camp.units} 
        selectedUnit={selectedUnit} 
        onSelectUnit={handleSelectUnit} 
      /> */}

      {/* Camp Overview */}
      <CampOverview camp={camp} />

      {/* Key Highlights */}
      <KeyHighlights highlights={camp.highlights} />

      {/* Daily Schedule - Commented out */}
      {/* <DailySchedule schedule={camp.sampleSchedule} /> */}

      {/* Conditional Sections Based on Camp Type */}
      {camp.type === 'DAY' && camp.dayCampInfo && (
        <DayCampDetails info={camp.dayCampInfo} />
      )}

      {camp.type === 'RESIDENTIAL' && camp.residentialInfo && (
        <ResidentialDetails info={camp.residentialInfo} />
      )}

      {/* Location */}
      <LocationSection location={camp.location} campType={camp.type} />

      {/* Provider Trust Section */}
      <ProviderTrust provider={camp.provider} />

      {/* Policies */}
      <Policies 
        policies={camp.policies} 
        cancellationPolicy={camp.cancellationPolicy}
        refundPolicy={camp.refundPolicy}
      />

      {/* FAQs */}
      <FAQSection faqs={camp.faqs} />

      {/* Sticky Footer for Mobile */}
      <StickyFooter 
        campId={camp.id} 
        selectedUnit={selectedUnit}
        defaultPrice={camp.units[0]?.price || 0}
      />
    </main>
  );
}
