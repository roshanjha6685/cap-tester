import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import CampListingHeader from '@/app/components/city/CampListingHeader';
import FilterSidebar from '@/app/components/city/FilterSidebar';
import CampCard from '@/app/components/city/CampCard';
import MobileFilterButton from '@/app/components/city/MobileFilterButton';

interface PageProps {
  params: Promise<{
    city: string;
  }>;
  searchParams: Promise<{
    category?: string;
    ageMin?: string;
    ageMax?: string;
    priceMin?: string;
    priceMax?: string;
    startDate?: string;
    sort?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // ✅ Next.js 15: await params
  const { city: citySlug } = await params;
  const city = await getCityData(citySlug);
  
  console.log('City data:', city);
  console.log('City slug:', citySlug);
  
  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Summer Camps in ${city.name} 2025 | Best Day Camps`,
    description: `Discover ${city.campCount}+ verified summer camps in ${city.name}. Sports, STEM, Arts, and more. Safe and fun programs for kids.`,
    keywords: `summer camps ${city.name}, kids activities ${city.name}, day camps ${city.name}`,
  };
}

export default async function CityListingPage({ params, searchParams }: PageProps) {
  // ✅ Next.js 15: await params and searchParams
  const { city: citySlug } = await params;
  const filters = await searchParams;
  
  const city = await getCityData(citySlug);

  if (!city) {
    notFound();
  }

  // Fetch camps with filters
  const camps = await getCampsForCity(citySlug, filters);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <CampListingHeader city={city} totalCamps={camps.length} />

      <div className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <FilterSidebar />
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9">
            {/* Mobile Filter Button */}
            <MobileFilterButton totalCamps={camps.length} />

            {/* Sort & Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{camps.length}</span> camps found
              </p>

              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                <option value="recommended">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="date-earliest">Earliest Start Date</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* Camps Grid */}
            {camps.length > 0 ? (
              <div className="space-y-6">
                {camps.map((camp) => (
                  <CampCard key={camp.id} camp={camp} citySlug={citySlug} />
                ))}
              </div>
            ) : (
              // Empty State
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No camps found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or check out camps in nearby cities
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Clear Filters
                  </button>
                </div>
              </div>
            )}

            {/* Pagination */}
            {camps.length > 12 && (
              <div className="flex justify-center gap-2 mt-8">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

// Mock data functions (replace with Prisma later)
async function getCityData(slug: string) {
  const cities: any = {
    bengaluru: { id: '1', name: 'Bengaluru', slug: 'bengaluru', state: 'Karnataka', campCount: 5 },
    mumbai: { id: '2', name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', campCount: 8 },
    delhi: { id: '3', name: 'Delhi', slug: 'delhi', state: 'Delhi', campCount: 2 },
    gurugram: { id: '4', name: 'Gurugram', slug: 'gurugram', state: 'Haryana', campCount: 8 },
    hyderabad: { id: '5', name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', campCount: 2 },
    pune: { id: '6', name: 'Pune', slug: 'pune', state: 'Maharashtra', campCount: 5 },
    chennai: { id: '7', name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', campCount: 3 },
    kolkata: { id: '8', name: 'Kolkata', slug: 'kolkata', state: 'West Bengal', campCount: 2 },
  };

  return cities[slug] || null;
}

async function getCampsForCity(citySlug: string, filters: any) {
  const cityCampCounts: any = {
    bengaluru: 5,
    mumbai: 8,
    delhi: 2,
    gurugram: 8,
    hyderabad: 2,
    pune: 5,
    chennai: 3,
    kolkata: 2,
  };

  const baseCamps = [
    {
      id: '1',
      name: 'Robotics & Coding Summer Camp',
      slug: 'robotics-coding-summer-camp-1',
      description: 'Learn robotics, coding, and AI through hands-on projects. Kids build their own robots!',
      featuresShort: ['Hands-on Projects', 'Expert Mentors', 'Certificate'],
      categories: ['STEM', 'Technology'],
      startDate: '2025-05-15',
      endDate: '2025-05-25',
      timings: '9:00 AM - 5:00 PM',
      price: 12999,
      ageMin: 8,
      ageMax: 14,
      capacity: 30,
      seatsBooked: 12,
      image: '/camps/robotics.jpg',
      locality: 'Indiranagar',
      address: 'TechHub Innovation Center, Indiranagar',
      provider: { name: 'TechKids Academy', verified: true },
    },
    {
      id: '2',
      name: 'Football Academy Summer Program',
      slug: 'football-academy-summer-2',
      description: 'Professional football training with certified coaches. Tournament at the end!',
      featuresShort: ['Professional Coaches', 'FIFA Curriculum', 'Tournament'],
      categories: ['Sports', 'Football'],
      startDate: '2025-05-20',
      endDate: '2025-06-05',
      timings: '6:00 AM - 12:00 PM',
      price: 8999,
      ageMin: 6,
      ageMax: 16,
      capacity: 50,
      seatsBooked: 35,
      image: '/camps/football.jpg',
      locality: 'Koramangala',
      address: 'Champions Sports Arena, Koramangala',
      provider: { name: 'Champions Sports Academy', verified: true },
    },
    {
      id: '3',
      name: 'Art & Craft Creative Workshop',
      slug: 'art-craft-workshop-3',
      description: 'Explore painting, sketching, clay modeling, and more. Showcase your artwork!',
      featuresShort: ['All Materials Included', 'Art Exhibition', 'Take Home Projects'],
      categories: ['Arts', 'Crafts'],
      startDate: '2025-06-01',
      endDate: '2025-06-14',
      timings: '10:00 AM - 4:00 PM',
      price: 6999,
      ageMin: 5,
      ageMax: 12,
      capacity: 25,
      seatsBooked: 8,
      image: '/camps/arts.jpg',
      locality: 'Whitefield',
      address: 'Creative Arts Studio, Whitefield',
      provider: { name: 'Little Picasso', verified: true },
    },
    {
      id: '4',
      name: 'Swimming & Water Sports Camp',
      slug: 'swimming-water-sports-4',
      description: 'Learn swimming techniques and water safety. Fun pool games included!',
      featuresShort: ['Certified Coaches', 'Safety First', 'All Levels Welcome'],
      categories: ['Sports', 'Swimming'],
      startDate: '2025-05-18',
      endDate: '2025-05-28',
      timings: '7:00 AM - 11:00 AM',
      price: 9999,
      ageMin: 6,
      ageMax: 14,
      capacity: 20,
      seatsBooked: 18,
      image: '/camps/swimming.jpg',
      locality: 'HSR Layout',
      address: 'AquaWorld Sports Complex, HSR Layout',
      provider: { name: 'AquaKids', verified: true },
    },
    {
      id: '5',
      name: 'Chess Mastery Program',
      slug: 'chess-mastery-5',
      description: 'From beginner to advanced chess strategies. Learn from FIDE rated coaches!',
      featuresShort: ['FIDE Rated Coaches', 'Tournament Practice', 'Strategy Sessions'],
      categories: ['Chess', 'Mind Games'],
      startDate: '2025-06-02',
      endDate: '2025-06-16',
      timings: '2:00 PM - 6:00 PM',
      price: 7499,
      ageMin: 7,
      ageMax: 15,
      capacity: 40,
      seatsBooked: 22,
      image: '/camps/chess.jpg',
      locality: 'Jayanagar',
      address: 'Chess Academy, Jayanagar',
      provider: { name: 'Grand Masters Academy', verified: true },
    },
    {
      id: '6',
      name: 'Dance & Music Summer Camp',
      slug: 'dance-music-camp-6',
      description: 'Learn various dance styles and musical instruments. Annual performance included!',
      featuresShort: ['Multiple Dance Styles', 'Instrument Training', 'Stage Performance'],
      categories: ['Dance', 'Music'],
      startDate: '2025-05-22',
      endDate: '2025-06-10',
      timings: '3:00 PM - 7:00 PM',
      price: 10999,
      ageMin: 6,
      ageMax: 16,
      capacity: 35,
      seatsBooked: 20,
      image: '/camps/dance.jpg',
      locality: 'Malleshwaram',
      address: 'Rhythm Academy, Malleshwaram',
      provider: { name: 'Rhythm & Beats', verified: true },
    },
    {
      id: '7',
      name: 'Cricket Coaching Academy',
      slug: 'cricket-coaching-7',
      description: 'Professional cricket coaching by former state players. All formats covered!',
      featuresShort: ['Former Players', 'Video Analysis', 'Match Practice'],
      categories: ['Sports', 'Cricket'],
      startDate: '2025-05-16',
      endDate: '2025-05-30',
      timings: '5:30 AM - 10:30 AM',
      price: 11999,
      ageMin: 8,
      ageMax: 16,
      capacity: 40,
      seatsBooked: 28,
      image: '/camps/cricket.jpg',
      locality: 'Sarjapur Road',
      address: 'Elite Cricket Ground, Sarjapur Road',
      provider: { name: 'Cricket Champions', verified: true },
    },
    {
      id: '8',
      name: 'Nature & Wildlife Exploration',
      slug: 'nature-wildlife-8',
      description: 'Explore local wildlife, bird watching, nature walks and environmental education!',
      featuresShort: ['Nature Walks', 'Bird Watching', 'Eco Activities'],
      categories: ['Adventure', 'Nature'],
      startDate: '2025-06-05',
      endDate: '2025-06-15',
      timings: '8:00 AM - 2:00 PM',
      price: 8499,
      ageMin: 7,
      ageMax: 14,
      capacity: 25,
      seatsBooked: 10,
      image: '/camps/nature.jpg',
      locality: 'Bannerghatta',
      address: 'Nature Camp, Bannerghatta Road',
      provider: { name: 'EcoExplorers', verified: true },
    },
  ];

  const campCount = cityCampCounts[citySlug] || 5;
  return baseCamps.slice(0, campCount);
}