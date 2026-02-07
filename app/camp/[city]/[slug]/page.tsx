import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CampDetailClient from './CampDetailClient';
import { CampDetail } from '@/app/components/camp-details/types';

interface PageProps {
  params: Promise<{
    city: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, slug } = await params;
  const camp = await getCampDetails(city, slug);

  if (!camp) {
    return {
      title: 'Camp Not Found',
    };
  }

  return {
    title: `${camp.name} | Summer Camp in ${camp.location.city}`,
    description: camp.description,
    keywords: `${camp.categories.join(', ')}, summer camp ${camp.location.city}, kids camp`,
  };
}

export default async function CampDetailPage({ params }: PageProps) {
  const { city, slug } = await params;
  const camp = await getCampDetails(city, slug);

  if (!camp) {
    notFound();
  }

  return <CampDetailClient camp={camp} citySlug={city} />;
}

// Mock data function - replace with Prisma later
async function getCampDetails(citySlug: string, campSlug: string): Promise<CampDetail | null> {
  // Mock data for different camp types
  const camps: Record<string, CampDetail> = {
    // Day Camp Example
    'robotics-coding-summer-camp-1': {
      id: '1',
      name: 'Robotics & Coding Summer Camp',
      slug: 'robotics-coding-summer-camp-1',
      type: 'DAY',
      tagline: 'Build. Code. Innovate. Future-ready skills for young minds!',
      description: 'Join our immersive Robotics & Coding Summer Camp where children learn to build their own robots, code in Python and Scratch, and explore the fascinating world of AI and machine learning. Our hands-on curriculum is designed by IIT alumni and industry experts to make learning fun and engaging. Every child takes home their own robot kit and project portfolio!',
      objectives: [
        'Learn basic programming concepts through interactive games',
        'Build and program working robots using Arduino',
        'Understand AI and machine learning fundamentals',
        'Develop problem-solving and critical thinking skills',
        'Create and present a final project to parents',
        'Collaborate and work in teams on complex challenges'
      ],
      categories: ['STEM', 'Technology', 'Coding', 'Robotics'],
      images: [
        '/camps/robotics-1.jpg',
        '/camps/robotics-2.jpg',
        '/camps/robotics-3.jpg',
        '/camps/robotics-4.jpg'
      ],
      videoUrl: 'https://youtube.com/watch?v=example',
      units: [
        {
          id: 'unit-1',
          dateRange: 'May 15 - May 25',
          startDate: '15 May 2025',
          endDate: '25 May 2025',
          ageGroup: '8-11 years',
          ageMin: 8,
          ageMax: 11,
          price: 12999,
          originalPrice: 15999,
          seatsTotal: 30,
          seatsBooked: 12,
          status: 'available'
        },
        {
          id: 'unit-2',
          dateRange: 'May 27 - June 6',
          startDate: '27 May 2025',
          endDate: '6 June 2025',
          ageGroup: '8-11 years',
          ageMin: 8,
          ageMax: 11,
          price: 12999,
          originalPrice: 15999,
          seatsTotal: 30,
          seatsBooked: 22,
          status: 'filling_fast'
        },
        {
          id: 'unit-3',
          dateRange: 'June 8 - June 18',
          startDate: '8 June 2025',
          endDate: '18 June 2025',
          ageGroup: '12-14 years',
          ageMin: 12,
          ageMax: 14,
          price: 14999,
          originalPrice: 17999,
          seatsTotal: 25,
          seatsBooked: 23,
          status: 'few_seats'
        },
        {
          id: 'unit-4',
          dateRange: 'June 20 - June 30',
          startDate: '20 June 2025',
          endDate: '30 June 2025',
          ageGroup: '12-14 years',
          ageMin: 12,
          ageMax: 14,
          price: 14999,
          seatsTotal: 25,
          seatsBooked: 25,
          status: 'sold_out'
        }
      ],
      highlights: [
        { icon: 'instructor', title: 'Expert Mentors', description: 'IIT/NIT trained instructors with 5+ years experience' },
        { icon: 'equipment', title: 'Take-Home Kit', description: 'Every child gets a robot kit worth ₹3,000' },
        { icon: 'certificate', title: 'Certificate', description: 'Recognized certificate on completion' },
        { icon: 'group', title: 'Small Batches', description: 'Only 15 kids per batch for personal attention' },
        { icon: 'safety', title: 'Safe Environment', description: 'CCTV monitored, trained staff' },
        { icon: 'meals', title: 'Healthy Snacks', description: 'Nutritious snacks included' }
      ],
      sampleSchedule: [
        { time: '9:00 AM', activity: 'Welcome & Warm-up Activities', type: 'indoor', description: 'Fun icebreakers and recap of previous day' },
        { time: '9:30 AM', activity: 'Theory Session', type: 'indoor', description: 'Learn new concepts through interactive presentations' },
        { time: '10:30 AM', activity: 'Snack Break', type: 'break', description: 'Healthy snacks and refreshments' },
        { time: '10:45 AM', activity: 'Hands-on Project Work', type: 'indoor', description: 'Build and code with guidance from mentors' },
        { time: '12:30 PM', activity: 'Lunch Break', type: 'meal', description: 'Lunch time (bring your own or order)' },
        { time: '1:30 PM', activity: 'Outdoor Games & Activities', type: 'outdoor', description: 'Physical activities and team games' },
        { time: '2:15 PM', activity: 'Advanced Project Work', type: 'indoor', description: 'Continue building and testing projects' },
        { time: '4:00 PM', activity: 'Show & Tell', type: 'indoor', description: 'Present progress, Q&A, prep for next day' },
        { time: '4:45 PM', activity: 'Wrap Up & Departure', type: 'break', description: 'Pack up and parent pick-up' }
      ],
      dayCampInfo: {
        dailyTimings: {
          start: '9:00 AM',
          end: '5:00 PM'
        },
        dropOffInstructions: 'Please drop your child at the main entrance between 8:45 AM - 9:00 AM. Staff will be available to receive them. Late arrivals should report to the reception.',
        pickUpInstructions: 'Pick-up is between 4:45 PM - 5:15 PM from the same location. Please carry the parent ID card issued during registration. Only authorized persons can pick up the child.',
        mealsIncluded: false,
        snacksIncluded: true,
        mealDetails: 'Lunch is not included. Children can bring home-cooked food or order from our approved vendor list. Healthy snacks (fruits, juice, cookies) are provided during breaks.',
        transportation: {
          available: true,
          details: 'AC bus service available for select areas in Mumbai. Routes include Andheri, Bandra, Worli, and South Mumbai.',
          additionalCost: 2500
        },
        whatToBring: [
          'Water bottle (labeled with name)',
          'Lunch box with home-cooked food',
          'Comfortable clothing',
          'Notebook and pencil',
          'Any prescribed medications (inform staff)'
        ],
        parentContactAvailability: 'Parents can contact our camp coordinator at 9876543210 during camp hours (9 AM - 5 PM). WhatsApp group for daily updates and photos. Emergency contact available 24/7.'
      },
      location: {
        venueName: 'TechHub Innovation Center',
        address: '5th Floor, Phoenix Mall, Kurla West',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400070',
        landmarks: [
          '2 min walk from Phoenix Mall entrance',
          'Near Kurla Railway Station',
          'Opposite HDFC Bank, LBS Marg'
        ],
        coordinates: {
          lat: 19.0760,
          lng: 72.8777
        }
      },
      provider: {
        id: 'provider-1',
        name: 'TechKids Academy',
        description: 'Premier STEM education provider for children, founded by IIT Bombay alumni. We\'ve been inspiring young innovators since 2015.',
        yearsActive: 9,
        certifications: [
          'ISO 9001:2015 Certified',
          'STEM.org Accredited',
          'Member - Indian STEM Alliance',
          'Google for Education Partner'
        ],
        pastEditions: 45,
        totalCampers: 5000,
        verified: true,
        rating: 4.8,
        reviewCount: 342
      },
      policies: [
        {
          title: 'Medical Disclaimer',
          content: 'Parents must inform us of any medical conditions, allergies, or special needs during registration. Camp activities involve physical movement and electronic equipment. We are not liable for injuries resulting from undisclosed medical conditions.'
        },
        {
          title: 'Photo & Video Policy',
          content: 'We may capture photos and videos during camp activities for promotional and documentation purposes. If you do not wish your child to be photographed, please inform us in writing before the camp begins.'
        },
        {
          title: 'Code of Conduct',
          content: 'Children are expected to behave respectfully towards staff and fellow campers. Any form of bullying or misconduct may result in removal from the camp without refund.'
        }
      ],
      cancellationPolicy: `• Cancel 15+ days before start: Full refund minus ₹500 processing fee
• Cancel 7-14 days before start: 50% refund
• Cancel less than 7 days before start: No refund
• No-show on day 1: No refund

Note: All cancellation requests must be made in writing to info@techkids.com`,
      refundPolicy: `Refunds are processed within 7-10 business days to the original payment method.

Transfer to another batch: Free transfer available up to 7 days before start date, subject to availability.

Medical emergencies: In case of medical emergencies with valid documentation, special consideration may be given on a case-by-case basis.`,
      faqs: [
        {
          question: 'What safety measures are in place?',
          answer: 'Our facility is fully CCTV monitored, with trained staff maintaining a 1:8 adult-child ratio. All equipment is child-safe, and we have a trained first-aid responder on site at all times. Background-verified staff only.',
          category: 'safety'
        },
        {
          question: 'Can I get a refund if my child doesn\'t like the camp?',
          answer: 'We don\'t offer refunds based on preference after the camp starts. However, our counselors work closely with every child to ensure engagement. We recommend attending the free orientation session before registration.',
          category: 'refunds'
        },
        {
          question: 'Is lunch provided? What about allergies?',
          answer: 'Lunch is not included, but healthy snacks are provided. Children can bring home food or order from our approved vendors. Please inform us of any allergies during registration - we take all dietary restrictions seriously.',
          category: 'food'
        },
        {
          question: 'What if my child has medical conditions?',
          answer: 'Please disclose all medical conditions during registration. We have trained first-aid staff and can accommodate most conditions. For serious conditions, a parent/guardian may need to remain on-premises.',
          category: 'medical'
        },
        {
          question: 'How will I know what my child is doing?',
          answer: 'We send daily updates via WhatsApp with photos and activity summaries. Parents can also call our coordinator during camp hours. A detailed progress report is shared at the end of the camp.',
          category: 'communication'
        },
        {
          question: 'Is this camp suitable for beginners?',
          answer: 'Absolutely! We have separate batches for different age groups and experience levels. Our curriculum starts from basics and progressively builds up. No prior coding experience is required.',
          category: 'age'
        },
        {
          question: 'What happens on the last day?',
          answer: 'The last day features a "Demo Day" where children present their projects to parents. Certificates are distributed, and each child takes home their robot kit. Parents are invited to attend from 3 PM onwards.',
          category: 'general'
        }
      ],
      createdAt: '2024-01-15',
      updatedAt: '2024-03-20'
    },

    // Residential Camp Example
    'adventure-wilderness-camp': {
      id: '2',
      name: 'Adventure Wilderness Camp',
      slug: 'adventure-wilderness-camp',
      type: 'RESIDENTIAL',
      tagline: 'An unforgettable week of adventure, nature, and lifelong friendships!',
      description: 'Experience the magic of the Western Ghats at our flagship residential adventure camp! Set in a beautiful 50-acre campus surrounded by nature, this camp offers an immersive experience of outdoor adventures, team challenges, and personal growth. From rock climbing and kayaking to stargazing and forest treks, every day brings new discoveries. Our experienced outdoor educators create a safe yet thrilling environment where children disconnect from screens and reconnect with nature.',
      objectives: [
        'Build confidence through challenging outdoor activities',
        'Develop teamwork and leadership skills',
        'Learn survival skills and nature awareness',
        'Make lasting friendships with peers from across India',
        'Disconnect from technology and embrace nature',
        'Discover hidden talents and push personal boundaries'
      ],
      categories: ['Adventure', 'Nature', 'Sports', 'Leadership'],
      images: [
        '/camps/adventure-1.jpg',
        '/camps/adventure-2.jpg',
        '/camps/adventure-3.jpg',
        '/camps/adventure-4.jpg',
        '/camps/adventure-5.jpg'
      ],
      videoUrl: 'https://youtube.com/watch?v=example2',
      units: [
        {
          id: 'res-unit-1',
          dateRange: 'May 10 - May 17',
          startDate: '10 May 2025',
          endDate: '17 May 2025',
          ageGroup: '10-13 years',
          ageMin: 10,
          ageMax: 13,
          price: 28999,
          originalPrice: 34999,
          seatsTotal: 40,
          seatsBooked: 15,
          status: 'available'
        },
        {
          id: 'res-unit-2',
          dateRange: 'May 20 - May 27',
          startDate: '20 May 2025',
          endDate: '27 May 2025',
          ageGroup: '10-13 years',
          ageMin: 10,
          ageMax: 13,
          price: 28999,
          originalPrice: 34999,
          seatsTotal: 40,
          seatsBooked: 32,
          status: 'filling_fast'
        },
        {
          id: 'res-unit-3',
          dateRange: 'June 1 - June 8',
          startDate: '1 June 2025',
          endDate: '8 June 2025',
          ageGroup: '14-17 years',
          ageMin: 14,
          ageMax: 17,
          price: 32999,
          originalPrice: 38999,
          seatsTotal: 35,
          seatsBooked: 8,
          status: 'available'
        }
      ],
      highlights: [
        { icon: 'instructor', title: 'Certified Instructors', description: 'NOLS/AASI certified outdoor educators' },
        { icon: 'safety', title: '24/7 Supervision', description: 'Round-the-clock trained staff presence' },
        { icon: 'activity', title: '15+ Activities', description: 'Rock climbing, kayaking, trekking & more' },
        { icon: 'group', title: 'Small Groups', description: '1:6 instructor to camper ratio' },
        { icon: 'care', title: 'On-site Medical', description: 'Qualified nurse and first-aid facility' },
        { icon: 'photo', title: 'Daily Updates', description: 'Photos and videos shared with parents' }
      ],
      sampleSchedule: [
        { time: '6:00 AM', activity: 'Wake Up & Morning Yoga', type: 'outdoor', description: 'Gentle yoga and stretching in nature' },
        { time: '7:00 AM', activity: 'Breakfast', type: 'meal', description: 'Nutritious breakfast buffet' },
        { time: '8:00 AM', activity: 'Morning Adventure Activity', type: 'outdoor', description: 'Rock climbing / Rappelling / High ropes' },
        { time: '11:00 AM', activity: 'Mid-Morning Snack & Rest', type: 'break', description: 'Hydration and energy boost' },
        { time: '11:30 AM', activity: 'Skill Workshop', type: 'indoor', description: 'Survival skills / Map reading / Knot tying' },
        { time: '1:00 PM', activity: 'Lunch', type: 'meal', description: 'Wholesome vegetarian lunch' },
        { time: '2:00 PM', activity: 'Rest & Cabin Time', type: 'break', description: 'Reading, journaling, or quiet activities' },
        { time: '3:00 PM', activity: 'Water Activities', type: 'outdoor', description: 'Kayaking / Swimming / River crossing' },
        { time: '5:30 PM', activity: 'Team Games & Sports', type: 'outdoor', description: 'Football, frisbee, or team challenges' },
        { time: '7:00 PM', activity: 'Dinner', type: 'meal', description: 'Dinner and reflection time' },
        { time: '8:00 PM', activity: 'Evening Program', type: 'outdoor', description: 'Campfire / Stargazing / Night trek' },
        { time: '9:30 PM', activity: 'Lights Out', type: 'break', description: 'Wind down and sleep' }
      ],
      residentialInfo: {
        accommodation: {
          type: 'Dormitory Style Cabins',
          description: 'Comfortable wooden cabins nestled in nature, each housing 6-8 campers with bunk beds. Cabins are well-ventilated with attached bathrooms, clean linens, and secure storage. Separate cabins for boys and girls with dedicated wardens.',
          amenities: [
            'Attached bathroom',
            'Hot water',
            'Clean linens provided',
            'Secure lockers',
            'Mosquito nets',
            'Emergency lighting',
            '24/7 warden presence'
          ],
          images: ['/camps/cabin-1.jpg', '/camps/cabin-2.jpg', '/camps/cabin-3.jpg']
        },
        foodPlan: {
          description: 'Wholesome, nutritious vegetarian meals prepared by experienced cooks in our hygienic kitchen. We focus on balanced nutrition with fresh ingredients sourced locally.',
          meals: ['Breakfast', 'Mid-morning snack', 'Lunch', 'Evening snack', 'Dinner'],
          dietary: ['Pure Vegetarian', 'Jain food on request', 'No-onion/garlic options available']
        },
        supervision: {
          wardenRatio: '1 warden for every 8 campers',
          nightSupervision: 'Dedicated night wardens in each cabin block. Security patrol throughout the campus. Emergency protocols in place.',
          medicalSupport: 'Qualified nurse on-site 24/7. First-aid stations across campus. Tie-up with hospital 15 mins away. All staff first-aid trained.'
        },
        travel: {
          reportingInstructions: 'Report to Mumbai Central Station at 7:00 AM on Day 1. Our team in Edustoke t-shirts will receive you. AC bus transport to camp included.',
          pickupInstructions: 'Camp ends at 2:00 PM on the last day. Parents can pick up from camp or children will be transported back to Mumbai Central by 6:00 PM.',
          travelAssistance: 'For children traveling alone, we arrange for chaperoned travel from Mumbai. Additional charges apply.'
        },
        communication: {
          phonePolicy: 'Personal phones are NOT allowed during camp. This helps children disconnect and engage fully. Emergency phones available for supervised calls home.',
          parentUpdates: 'Daily photo updates via WhatsApp. One scheduled phone call on Day 4. Detailed end-of-day summary from camp director.',
          emergencyContact: 'Camp Emergency Hotline: 9876543210 (24/7). Multiple staff contacts shared before camp.'
        },
        packingChecklist: [
          'Comfortable outdoor clothing (5-6 sets)',
          'Sturdy shoes and sandals',
          'Raincoat or windcheater',
          'Torch with extra batteries',
          'Water bottle',
          'Sunscreen and cap',
          'Personal toiletries',
          'Any prescribed medications',
          'Notebook and pen',
          'Small backpack for day activities'
        ],
        insurance: {
          included: true,
          details: 'Personal accident insurance of ₹5 lakhs included for all campers. Coverage includes adventure activities. Policy details shared upon registration.'
        },
        consentRequired: [
          'Medical consent form',
          'Adventure activity consent',
          'Photo/Video consent',
          'Emergency treatment authorization',
          'Terms & conditions acceptance'
        ]
      },
      location: {
        venueName: 'Camp Sahyadri',
        address: 'Mulshi Dam Road, near Tamhini Ghat',
        city: 'Mulshi',
        state: 'Maharashtra',
        pincode: '412108',
        landmarks: [
          '60 km from Mumbai (2 hour drive)',
          'Near Mulshi Dam',
          '15 km from Tamhini Ghat viewpoint'
        ],
        coordinates: {
          lat: 18.5158,
          lng: 73.4724
        },
        campusDescription: 'A stunning 50-acre campus in the Western Ghats, surrounded by lush forests, a private lake, and rolling hills. The campus features dedicated zones for different activities, nature trails, a central amphitheater, and panoramic views of the Sahyadri ranges. Perfect for disconnecting from the city and immersing in nature.'
      },
      provider: {
        id: 'provider-2',
        name: 'Wilderness Explorers India',
        description: 'India\'s leading outdoor education organization since 2008. We\'ve introduced over 25,000 children to the magic of the outdoors through our carefully designed programs.',
        yearsActive: 16,
        certifications: [
          'Member - Adventure Tour Operators Association of India',
          'NOLS Trained Staff',
          'Indian Mountaineering Foundation Affiliated',
          'First Aid & CPR Certified Team'
        ],
        pastEditions: 120,
        totalCampers: 25000,
        verified: true,
        rating: 4.9,
        reviewCount: 856
      },
      policies: [
        {
          title: 'Medical Requirements',
          content: 'A medical fitness certificate from a registered doctor is mandatory. Parents must disclose all medical conditions, allergies, and medications. Campers on regular medication must carry sufficient supply with clear instructions.'
        },
        {
          title: 'Safety & Risk',
          content: 'Adventure activities carry inherent risks. All activities are conducted by certified professionals with proper safety gear. Parents must sign an adventure activity consent form. The organization is not liable for injuries occurring despite following safety protocols.'
        },
        {
          title: 'Phone & Device Policy',
          content: 'Personal phones, tablets, and electronic devices are strictly NOT ALLOWED. Any devices brought will be confiscated and returned at pick-up. This policy helps children engage fully with the experience.'
        },
        {
          title: 'Discipline Policy',
          content: 'Campers must follow all safety rules and camp guidelines. Bullying, substance use, or serious misconduct will result in immediate dismissal without refund. Parents will be required to pick up the child at their own expense.'
        }
      ],
      cancellationPolicy: `• Cancel 30+ days before start: Full refund minus ₹2,000 processing fee
• Cancel 15-29 days before start: 50% refund
• Cancel 7-14 days before start: 25% refund
• Cancel less than 7 days before start: No refund

Note: "No-show" or leaving camp early - no refund applicable.`,
      refundPolicy: `Refunds are processed within 14 business days to the original payment method.

Transfer Policy: You may transfer your booking to another child or batch up to 15 days before start date, subject to availability and ₹1,000 transfer fee.

Force Majeure: In case of natural disasters, government restrictions, or situations beyond our control, we will offer credit for future camps or partial refund as appropriate.`,
      faqs: [
        {
          question: 'Is it safe to send my child alone?',
          answer: 'Absolutely! Safety is our #1 priority. We maintain a 1:6 staff-camper ratio, have 24/7 medical support, and all staff are background-verified. Our 16 years of experience with zero major incidents speaks to our safety standards. All activities follow strict safety protocols.',
          category: 'safety'
        },
        {
          question: 'What if there\'s an emergency?',
          answer: 'We have a qualified nurse on-site 24/7 and a hospital just 15 minutes away. All staff are first-aid trained. Parents are immediately informed of any incident and we have clear emergency protocols for different scenarios.',
          category: 'safety'
        },
        {
          question: 'Can my child call me daily?',
          answer: 'To help children fully engage with the camp experience, we limit phone calls to one scheduled call on Day 4. However, you receive daily photo updates and a summary from the camp director. Emergency calls can always be made.',
          category: 'communication'
        },
        {
          question: 'What food is served?',
          answer: 'We serve wholesome vegetarian meals prepared in our hygienic kitchen. Breakfast, lunch, dinner, and two snack breaks are included. We can accommodate Jain and no-onion/garlic requirements - just inform us during registration.',
          category: 'food'
        },
        {
          question: 'What if my child has allergies or medical conditions?',
          answer: 'Please share all medical information during registration. We can accommodate most conditions with proper planning. Our medical team reviews each case. For serious conditions, we may discuss specific arrangements.',
          category: 'medical'
        },
        {
          question: 'What if my child wants to come home early?',
          answer: 'Homesickness is common, especially for first-timers. Our experienced staff are trained to help children adjust. Most overcome it within 1-2 days. If it persists, we\'ll contact you to discuss options. No refunds for early departures.',
          category: 'general'
        },
        {
          question: 'Is my child too young for residential camp?',
          answer: 'Our camp is designed for ages 10+. Children this age typically adapt well to residential settings. If it\'s your child\'s first time away from home, we recommend starting with a shorter program or our day camp options.',
          category: 'age'
        },
        {
          question: 'Can I get a refund if weather affects activities?',
          answer: 'Weather is part of the adventure! We have backup indoor activities and modified outdoor programs for different conditions. Major weather events may lead to activity modifications but not refunds. Only extreme situations warrant schedule changes.',
          category: 'refunds'
        }
      ],
      createdAt: '2024-02-01',
      updatedAt: '2024-03-25'
    }
  };

  // Match by slug only (ignore city for now - you can add city validation later)
  const camp = camps[campSlug];
  
  // If no specific match, return a default camp based on existing camp cards
  if (!camp) {
    // For demo purposes, return the day camp for any STEM-related slugs
    if (campSlug.includes('robotics') || campSlug.includes('coding') || campSlug.includes('stem')) {
      return camps['robotics-coding-summer-camp-1'];
    }
    // Return adventure camp for adventure-related slugs
    if (campSlug.includes('adventure') || campSlug.includes('nature') || campSlug.includes('wilderness')) {
      return camps['adventure-wilderness-camp'];
    }
    // Default to the day camp for any other slug
    return camps['robotics-coding-summer-camp-1'];
  }

  return camp;
}
