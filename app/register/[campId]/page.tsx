import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import RegistrationFlow from '@/app/components/registration/RegistrationFlow';

interface PageProps {
  params: Promise<{  // ✅ Promise add kiya
    campId: string;
  }>;
}

export const metadata: Metadata = {
  title: 'Register for Camp | Summer Camps India',
  description: 'Complete your registration for the summer camp',
};

export default async function RegistrationPage({ params }: PageProps) {
  // ✅ await params - Next.js 15
  const { campId } = await params;
  
  const camp = await getCampDetails(campId);

  if (!camp) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <RegistrationFlow camp={camp} />
      </div>
    </main>
  );
}


async function getCampDetails(campId: string) {
  // Simulate DB fetch
  return {
    id: campId,
    name: 'Robotics & Coding Summer Camp',
    provider: { name: 'TechKids Academy' },
    startDate: '2025-05-15',
    endDate: '2025-05-25',
    timings: '9:00 AM - 5:00 PM',
    price: 12999,
    locality: 'Indiranagar',
    city: 'Bengaluru',
    ageMin: 8,
    ageMax: 14,
    image: '/camps/robotics.jpg',
  };
}