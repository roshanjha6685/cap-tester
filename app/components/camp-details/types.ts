// Camp Detail Types

export type CampType = 'DAY' | 'RESIDENTIAL';

export interface CampUnit {
  id: string;
  dateRange: string;
  startDate: string;
  endDate: string;
  ageGroup: string;
  ageMin: number;
  ageMax: number;
  price: number;
  originalPrice?: number;
  seatsTotal: number;
  seatsBooked: number;
  status: 'available' | 'filling_fast' | 'few_seats' | 'sold_out';
}

export interface ScheduleItem {
  time: string;
  activity: string;
  type: 'indoor' | 'outdoor' | 'break' | 'meal';
  description?: string;
}

export interface DayCampInfo {
  dailyTimings: {
    start: string;
    end: string;
  };
  dropOffInstructions: string;
  pickUpInstructions: string;
  mealsIncluded: boolean;
  snacksIncluded: boolean;
  mealDetails?: string;
  transportation: {
    available: boolean;
    details?: string;
    additionalCost?: number;
  };
  whatToBring: string[];
  parentContactAvailability: string;
}

export interface ResidentialCampInfo {
  accommodation: {
    type: string;
    description: string;
    amenities: string[];
    images: string[];
  };
  foodPlan: {
    description: string;
    meals: string[];
    dietary: string[];
  };
  supervision: {
    wardenRatio: string;
    nightSupervision: string;
    medicalSupport: string;
  };
  travel: {
    reportingInstructions: string;
    pickupInstructions: string;
    travelAssistance?: string;
  };
  communication: {
    phonePolicy: string;
    parentUpdates: string;
    emergencyContact: string;
  };
  packingChecklist: string[];
  insurance: {
    included: boolean;
    details: string;
  };
  consentRequired: string[];
}

export interface CampHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
  category: 'safety' | 'refunds' | 'food' | 'medical' | 'communication' | 'age' | 'general';
}

export interface CampProvider {
  id: string;
  name: string;
  logo?: string;
  yearsActive: number;
  description: string;
  certifications: string[];
  pastEditions?: number;
  totalCampers?: number;
  verified: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface CampLocation {
  venueName: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmarks: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
  campusDescription?: string;
}

export interface CampPolicy {
  title: string;
  content: string;
}

export interface CampDetail {
  id: string;
  name: string;
  slug: string;
  type: CampType;
  tagline?: string;
  description: string;
  objectives: string[];
  categories: string[];
  images: string[];
  videoUrl?: string;
  
  // Units for selection
  units: CampUnit[];
  
  // Highlights
  highlights: CampHighlight[];
  
  // Schedule
  sampleSchedule: ScheduleItem[];
  
  // Type-specific info
  dayCampInfo?: DayCampInfo;
  residentialInfo?: ResidentialCampInfo;
  
  // Location
  location: CampLocation;
  
  // Provider
  provider: CampProvider;
  
  // Policies
  policies: CampPolicy[];
  cancellationPolicy: string;
  refundPolicy: string;
  
  // FAQs
  faqs: FAQ[];
  
  // Meta
  createdAt: string;
  updatedAt: string;
}
