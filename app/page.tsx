import { Metadata } from 'next';
import HeroSection from './components/home/HeroSection';
import CitiesGrid from './components/home/CitiesGrid';
import ResidentialHighlight from './components/home/ResidentialHighlight';
import FeaturedCamps from './components/home/FeaturedCamps';
import TrustSection from './components/home/TrustSection';
import CTASection from './components/home/CTASection';

export const metadata: Metadata = {
  title: 'Best Summer Camps in India 2025 | Day & Residential Camps',
  description: 'Discover the best summer camps across India. Browse city-based day camps and residential camps at top schools. Safe, verified, and fun programs for kids.',
  keywords: 'summer camps india, kids summer camps, residential camps, day camps, school holidays activities',
  openGraph: {
    title: 'Best Summer Camps in India 2025',
    description: 'Find verified summer camps for your child across major Indian cities',
    type: 'website',
  },
};

export default async function HomePage() {
  // Fetch data (replace with Prisma queries later)
  const cities = await getCities();
  const featuredCamps = await getFeaturedCamps();

  return (
    <main className="min-h-screen">
      <HeroSection />
      <CitiesGrid cities={cities} />
      <ResidentialHighlight />
      <FeaturedCamps camps={featuredCamps} />
      <TrustSection />
      <CTASection />
    </main>
  );
}

// Mock data (replace with DB later)
async function getCities() {
  return [
    { id: '1', name: 'Bengaluru', slug: 'bengaluru', state: 'Karnataka', campCount: 5, image: '/cities/bengaluru.jpg' },
    { id: '2', name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', campCount: 8, image: '/cities/mumbai.jpg' },
    { id: '3', name: 'Delhi', slug: 'delhi', state: 'Delhi', campCount: 2, image: '/cities/delhi.jpg' },
    { id: '4', name: 'Gurugram', slug: 'gurugram', state: 'Haryana', campCount: 8, image: '/cities/gurugram.jpg' },
    { id: '5', name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', campCount: 2, image: '/cities/hyderabad.jpg' },
    { id: '6', name: 'Pune', slug: 'pune', state: 'Maharashtra', campCount: 5, image: '/cities/pune.jpg' },
    { id: '7', name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', campCount: 3, image: '/cities/chennai.jpg' },
    { id: '8', name: 'Kolkata', slug: 'kolkata', state: 'West Bengal', campCount: 2, image: '/cities/kolkata.jpg' },
  ];
}

async function getFeaturedCamps() {
  return [
    {
      id: '1',
      name: 'Robotics & Coding Summer Camp',
      slug: 'robotics-coding-summer-camp-1',
      city: 'Bengaluru',
      citySlug: 'bengaluru',
      type: 'CITY',
      featuresShort: ['Hands-on Projects', 'Expert Mentors', 'Certificate'],
      startDate: '2025-05-15',
      endDate: '2025-05-25',
      price: 12999,
      ageMin: 8,
      ageMax: 14,
      image: '/camps/robotics.jpg',
      locality: 'Indiranagar',
    },
    {
      id: '2',
      name: 'Football Academy Summer Program',
      slug: 'football-academy-summer-2',
      city: 'Mumbai',
      citySlug: 'mumbai',
      type: 'CITY',
      featuresShort: ['Professional Coaches', 'FIFA Curriculum', 'Tournament'],
      startDate: '2025-05-20',
      endDate: '2025-06-05',
      price: 8999,
      ageMin: 6,
      ageMax: 16,
      image: '/camps/football.jpg',
      locality: 'Bandra',
    },
    {
      id: '3',
      name: 'Himalayan Adventure Camp',
      slug: 'himalayan-adventure-camp-3',
      type: 'RESIDENTIAL',
      featuresShort: ['Trekking', 'Rock Climbing', 'Camping'],
      startDate: '2025-06-01',
      endDate: '2025-06-14',
      price: 35999,
      ageMin: 12,
      ageMax: 17,
      image: '/camps/adventure.jpg',
      locality: 'Manali, Himachal Pradesh',
    },
  ];
}
