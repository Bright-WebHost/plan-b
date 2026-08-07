export type PageRoute = 
  | 'home'
  | 'about'
  | 'services'
  | 'companies'
  | 'company-detail'
  | 'category-landing'
  | 'how-it-works'
  | 'become-partner'
  | 'projects'
  | 'testimonials'
  | 'insights'
  | 'careers'
  | 'events'
  | 'gallery'
  | 'faqs'
  | 'contact';

export interface RouteState {
  page: PageRoute;
  params?: {
    companyId?: string;
    categoryId?: string;
    articleId?: string;
    projectId?: string;
  };
}

export interface ServiceCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  detailedOverview: string;
  partnerCount: number;
  completedProjectsCount: number;
  startingPrice: string;
  subServices: string[];
  features: string[];
  heroImage: string;
}

export interface PartnerCompany {
  id: string;
  name: string;
  logo: string;
  heroBanner: string;
  categoryId: string;
  categoryName: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  yearsInBusiness: number;
  completedProjects: number;
  teamSize: string;
  location: string;
  about: string;
  servicesOffered: string[];
  certifications: string[];
  contact: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
  projects: string[]; // project IDs
  featured: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  companyId: string;
  companyName: string;
  location: string;
  completionDate: string;
  budgetRange: string;
  image: string;
  description: string;
  specs: string[];
  gallery: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  type: 'client' | 'partner' | 'corporate';
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  videoUrl?: string;
  verifiedBadge: boolean;
  date: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  topic: 'Business Growth' | 'Construction' | 'Architecture' | 'Technology' | 'Events' | 'Partner Spotlights' | 'Success Stories';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  summary: string;
  content: string;
  image: string;
  featured?: boolean;
}

export interface CareerJob {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  location: string;
  salary: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Networking Events' | 'Business Meetups' | 'Partner Launches' | 'Training Sessions' | 'Workshops';
  date: string;
  time: string;
  location: string;
  speaker: string;
  speakerRole: string;
  attendeesCount: number;
  image: string;
  description: string;
  isUpcoming: boolean;
}

export interface GalleryMedia {
  id: string;
  title: string;
  type: 'Office Photos' | 'Events' | 'Partner Meetings' | 'Projects' | 'Videos';
  imageUrl: string;
  videoUrl?: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  category: 'General Questions' | 'For Clients' | 'For Businesses' | 'Membership' | 'Verification' | 'Payments';
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  linkedin?: string;
  twitter?: string;
}
