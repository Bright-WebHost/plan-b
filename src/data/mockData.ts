import {
  ServiceCategory,
  ProjectItem,
  Testimonial,
  InsightArticle,
  CareerJob,
  EventItem,
  GalleryMedia,
  FaqItem,
  TeamMember
} from '../types';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { id: 'architecture', name: 'Architecture & Design', iconName: 'Building2', description: 'Master planning, residential & commercial design.', detailedOverview: '', completedProjectsCount: 100, startingPrice: '$5000', subServices: [], features: [], heroImage: '/images/optimized/Architecture & Design .webp' },
  { id: 'interior-design', name: 'Interior Design', iconName: 'Palette', description: 'Bespoke interior styling and spatial curation.', detailedOverview: '', completedProjectsCount: 150, startingPrice: '$3000', subServices: [], features: [], heroImage: '/images/optimized/Interior-Design .webp' },
  { id: 'construction', name: 'Construction Services', iconName: 'HardHat', description: 'Turnkey general contracting and building.', detailedOverview: '', completedProjectsCount: 200, startingPrice: '$10000', subServices: [], features: [], heroImage: '/images/optimized/Construction-Services .webp' },
  { id: 'electrical', name: 'Electrical Contractors', iconName: 'Zap', description: 'Power distribution, industrial and home wiring.', detailedOverview: '', completedProjectsCount: 120, startingPrice: '$500', subServices: [], features: [], heroImage: '/images/optimized/Electrical-Contractors .webp' },
  { id: 'solar', name: 'Solar Solutions', iconName: 'Sun', description: 'Commercial & residential solar PV installations.', detailedOverview: 'End-to-end solar energy solutions including Rooftop Solar, Solar Grid, and Dual Mode setups.', completedProjectsCount: 80, startingPrice: '$4000', subServices: ['Rooftop Solar', 'Solar Grid', 'Dual Mode'], features: ['PAN India Deployment', 'Green Energy Planning', 'State Level Compliance'], heroImage: '/images/optimized/Solar-Solutions .webp' },
  { id: 'automation-cctv', name: 'Home Automation and cctv', iconName: 'Cpu', description: 'Smart home ecosystems and advanced CCTV security.', detailedOverview: 'Seamless intelligent home controls and military-grade surveillance systems featuring CCTV cameras, smart switches, biometric access, and more.', completedProjectsCount: 110, startingPrice: '$2000', subServices: ['Smart Switches', 'Digital Door Locks', 'Motion Detecting Lights & Censors', 'Curtain Motors', 'CCTV Cameras', 'Visitor Entry Systems'], features: ['Smart Cloud AI', 'Operational Monitoring', 'After Sales & Maintenance'], heroImage: '/images/optimized/home-automation.webp' },
  { id: 'it-software', name: 'IT & Software', iconName: 'Code', description: 'Custom web app development and IT solutions.', detailedOverview: '', completedProjectsCount: 180, startingPrice: '$5000', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { id: 'deep-cleaning', name: 'Deep Cleaning', iconName: 'Sparkles', description: 'Post-construction and daily deep cleaning.', detailedOverview: 'Professional cleaning & facility management services, including sofa & carpet wash, window cleaning, and daily housekeeping.', completedProjectsCount: 500, startingPrice: '$100', subServices: ['Deep Cleaning', 'Sofa & Carpet Shampoo Wash', 'Windows Cleaning', 'Floor Cleaning', 'Office Daily Housekeeping'], features: ['Eco-Friendly Chemicals', 'Trained Staff', 'Transparent Pricing'], heroImage: '/images/optimized/Deep-Cleaning .webp' },
  { id: 'pest-control', name: 'Pest Control', iconName: 'Bug', description: 'Eco-friendly termite and pest suppression.', detailedOverview: 'Scientific pest management with eco-friendly treatments.', completedProjectsCount: 300, startingPrice: '$150', subServices: ['Pest Control'], features: ['Eco-Friendly Chemicals'], heroImage: '/images/optimized/Pest-Control .webp' },
  { id: 'landscaping', name: 'Landscaping', iconName: 'Trees', description: 'Luxury botanical garden creation and maintenance.', detailedOverview: 'Creating resort-like outdoor sanctuaries and garden maintenance.', completedProjectsCount: 90, startingPrice: '$1500', subServices: ['Gardening & Landscaping Maintenance'], features: ['Trained Staff'], heroImage: '/images/optimized/Landscaping .webp' },
  { id: 'insurance', name: 'Insurance Services', iconName: 'Shield', description: 'Commercial liability and asset protection.', detailedOverview: '', completedProjectsCount: 100, startingPrice: '$500', subServices: [], features: [], heroImage: '/images/optimized/Insurance Services .webp' },
  { id: 'plumbing', name: 'Plumbing Services', iconName: 'Droplets', description: 'Piping networks and water filtration.', detailedOverview: '', completedProjectsCount: 150, startingPrice: '$200', subServices: [], features: [], heroImage: '/images/optimized/Plumbing Services.webp' },
  { id: 'painting', name: 'Painting Services', iconName: 'Paintbrush', description: 'Interior and exterior painting services.', detailedOverview: 'Master surface artisans specializing in interior and exterior painting services.', completedProjectsCount: 200, startingPrice: '$500', subServices: ['Interior & Exterior Painting Services'], features: ['Eco-Friendly Chemicals', 'Punctual Service'], heroImage: '/images/optimized/Painting Services .webp' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-indiq-1',
    title: 'Myntra HQ Platinum Green Building Transition',
    category: 'Solar',
    categoryId: 'solar',
    companyId: 'indiqube',
    companyName: 'IndiQube',
    location: 'Karnataka',
    completionDate: '2023',
    budgetRange: 'Enterprise',
    image: '/images/Solar-Solutions .jpg',
    description: 'Transitioning 3 Lac Sq.ft. Myntra HQ into 100% green power with a combination of Rooftop Solar Power and Power supply via Grid leveraging IndiQube\'s Solar Farm in Yadgir, Karnataka.',
    specs: ['3 Lac Sq.ft. Transitioned', 'Rooftop + Grid Supply', 'IGBC Platinum Certification'],
    gallery: [
      '/images/Solar-Solutions .jpg'
    ]
  },
  {
    id: 'proj-techfin-1',
    title: 'Mangalore City Surveillance Project',
    category: 'CCTV',
    categoryId: 'automation-cctv',
    companyId: 'techfin',
    companyName: 'Techfin Enterprises',
    location: 'Mangalore',
    completionDate: '2025',
    budgetRange: 'Enterprise',
    image: '/images/mangalore.png',
    description: 'Extensive deployment of Securus cameras, PTZ, and ANPR systems across Mangalore for enhanced city-wide monitoring and security.',
    specs: ['ANPR Systems', 'Smart Cloud AI Analytics', 'eAlert Integration'],
    gallery: [
      '/images/home-automation.png'
    ]
  },
  {
    id: 'proj-intense-1',
    title: 'Prestige Group Commercial Cleaning & AMC',
    category: 'Deep Cleaning',
    categoryId: 'deep-cleaning',
    companyId: 'intense-care',
    companyName: 'Intense Care Cleaning & Maintenance',
    location: 'Mangalore',
    completionDate: 'Ongoing',
    budgetRange: 'Commercial',
    image: '/images/Deep-Cleaning .jpg',
    description: 'Daily housekeeping and facade glass cleaning for Prestige Group commercial properties, utilizing trained staff and eco-friendly chemicals.',
    specs: ['Facade Glass Cleaning', 'Daily Housekeeping', 'Transparent AMC Pricing'],
    gallery: [
      '/images/Deep-Cleaning .jpg'
    ]
  },
  {
    id: 'proj-universal-1',
    title: 'Comprehensive Corporate Insurance Portfolio',
    category: 'Insurance',
    categoryId: 'insurance',
    companyId: 'universal-insurance',
    companyName: 'Universal Insurance Centre',
    location: 'South Canara',
    completionDate: 'Ongoing',
    budgetRange: 'Enterprise',
    image: '/images/insurence.jpg',
    description: 'Providing extensive corporate insurance coverage including fire, marine, and erection all risk for large-scale businesses across the region, with dedicated end-to-end claims support.',
    specs: ['End-to-End Coverage', 'Dedicated Claims Support', '30+ National Awards'],
    gallery: [
      '/images/insurence.jpg'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    author: 'President, Evergreen Apartment',
    role: 'Client',
    type: 'client',
    company: 'Evergreen Apartment',
    avatar: '/logo.png',
    rating: 5,
    quote: 'The camera installation at our apartment was seamless and professional. The Techfin Enterprises has given our residents a real sense of security.',
    verifiedBadge: true,
    date: '1 month ago'
  },
  {
    id: 't2',
    author: 'Tacita Mendonca',
    role: 'Client',
    type: 'client',
    company: 'Residential Client',
    avatar: '/logo.png',
    rating: 5,
    quote: 'It was great working with the Intense Care team to deep clean our home in Mangalore. They were professional, punctual, had all the required resources to execute the job efficiently.',
    verifiedBadge: true,
    date: '2 months ago'
  },
  {
    id: 't3',
    author: 'Rahul D.',
    role: 'Manager',
    type: 'client',
    company: 'TechNova Pvt. Ltd.',
    avatar: '/logo.png',
    rating: 5,
    quote: 'The office AMC service has made our workspace consistently clean and presentable. Their team is punctual and detail-oriented.',
    verifiedBadge: true,
    date: '3 months ago'
  }
];

export const INSIGHT_ARTICLES: InsightArticle[] = [];
export const CAREER_JOBS: CareerJob[] = [];
export const EVENTS_DATA: EventItem[] = [];
export const GALLERY_MEDIA: GalleryMedia[] = [];
export const FAQ_ITEMS: FaqItem[] = [];
export const TEAM_MEMBERS: TeamMember[] = [];
