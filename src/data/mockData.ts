import {
  ServiceCategory,
  PartnerCompany,
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
  { id: 'architecture', name: 'Architecture & Design', iconName: 'Building2', description: 'Master planning, residential & commercial design.', detailedOverview: '', partnerCount: 4, completedProjectsCount: 100, startingPrice: '$5000', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { id: 'interior-design', name: 'Interior Design', iconName: 'Palette', description: 'Bespoke interior styling and spatial curation.', detailedOverview: '', partnerCount: 6, completedProjectsCount: 150, startingPrice: '$3000', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80' },
  { id: 'construction', name: 'Construction Services', iconName: 'HardHat', description: 'Turnkey general contracting and building.', detailedOverview: '', partnerCount: 10, completedProjectsCount: 200, startingPrice: '$10000', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80' },
  { id: 'electrical', name: 'Electrical Contractors', iconName: 'Zap', description: 'Power distribution, industrial and home wiring.', detailedOverview: '', partnerCount: 5, completedProjectsCount: 120, startingPrice: '$500', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80' },
  { id: 'solar', name: 'Solar Solutions', iconName: 'Sun', description: 'Commercial & residential solar PV installations.', detailedOverview: 'End-to-end solar energy solutions including Rooftop Solar, Solar Grid, and Dual Mode setups.', partnerCount: 3, completedProjectsCount: 80, startingPrice: '$4000', subServices: ['Rooftop Solar', 'Solar Grid', 'Dual Mode'], features: ['PAN India Deployment', 'Green Energy Planning', 'State Level Compliance'], heroImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80' },
  { id: 'automation-cctv', name: 'Home Automation and cctv', iconName: 'Cpu', description: 'Smart home ecosystems and advanced CCTV security.', detailedOverview: 'Seamless intelligent home controls and military-grade surveillance systems featuring CCTV cameras, smart switches, biometric access, and more.', partnerCount: 4, completedProjectsCount: 110, startingPrice: '$2000', subServices: ['Smart Switches', 'Digital Door Locks', 'Motion Detecting Lights & Censors', 'Curtain Motors', 'CCTV Cameras', 'Visitor Entry Systems'], features: ['Smart Cloud AI', 'Operational Monitoring', 'After Sales & Maintenance'], heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80' },
  { id: 'it-software', name: 'IT & Software', iconName: 'Code', description: 'Custom web app development and IT solutions.', detailedOverview: '', partnerCount: 8, completedProjectsCount: 180, startingPrice: '$5000', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80' },
  { id: 'deep-cleaning', name: 'Deep Cleaning', iconName: 'Sparkles', description: 'Post-construction and daily deep cleaning.', detailedOverview: 'Professional cleaning & facility management services, including sofa & carpet wash, window cleaning, and daily housekeeping.', partnerCount: 2, completedProjectsCount: 500, startingPrice: '$100', subServices: ['Deep Cleaning', 'Sofa & Carpet Shampoo Wash', 'Windows Cleaning', 'Floor Cleaning', 'Office Daily Housekeeping'], features: ['Eco-Friendly Chemicals', 'Trained Staff', 'Transparent Pricing'], heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80' },
  { id: 'pest-control', name: 'Pest Control', iconName: 'Bug', description: 'Eco-friendly termite and pest suppression.', detailedOverview: 'Scientific pest management with eco-friendly treatments.', partnerCount: 2, completedProjectsCount: 300, startingPrice: '$150', subServices: ['Pest Control'], features: ['Eco-Friendly Chemicals'], heroImage: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80' },
  { id: 'landscaping', name: 'Landscaping', iconName: 'Trees', description: 'Luxury botanical garden creation and maintenance.', detailedOverview: 'Creating resort-like outdoor sanctuaries and garden maintenance.', partnerCount: 3, completedProjectsCount: 90, startingPrice: '$1500', subServices: ['Gardening & Landscaping Maintenance'], features: ['Trained Staff'], heroImage: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1200&q=80' },
  { id: 'insurance', name: 'Insurance Services', iconName: 'Shield', description: 'Commercial liability and asset protection.', detailedOverview: '', partnerCount: 2, completedProjectsCount: 100, startingPrice: '$500', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80' },
  { id: 'plumbing', name: 'Plumbing Services', iconName: 'Droplets', description: 'Piping networks and water filtration.', detailedOverview: '', partnerCount: 4, completedProjectsCount: 150, startingPrice: '$200', subServices: [], features: [], heroImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80' },
  { id: 'painting', name: 'Painting Services', iconName: 'Paintbrush', description: 'Interior and exterior painting services.', detailedOverview: 'Master surface artisans specializing in interior and exterior painting services.', partnerCount: 3, completedProjectsCount: 200, startingPrice: '$500', subServices: ['Interior & Exterior Painting Services'], features: ['Eco-Friendly Chemicals', 'Punctual Service'], heroImage: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80' }
];

export const PARTNER_COMPANIES: PartnerCompany[] = [
  {
    id: 'indiqube',
    name: 'IndiQube',
    logo: '/images/indiqube_p1_i1.jpeg',
    heroBanner: '/images/indiqube_p3_i1.jpeg',
    categoryId: 'solar',
    categoryName: 'Solar Solutions',
    rating: 4.9,
    reviewCount: 120,
    verified: true,
    yearsInBusiness: 7,
    completedProjects: 250,
    teamSize: '100+ Employees',
    location: 'PAN India (17 Cities)',
    about: 'IndiQube powers your green energy transition with comprehensive solar solutions, offering Rooftop Solar, Open Access Solar Farms, and Dual Solar Solutions.',
    servicesOffered: [
      'Rooftop Solar Solutions',
      'Open Access Solar Farms',
      'Dual Solar Solutions',
      'Energy Efficient Equipment',
      'Rainwater Harvesting'
    ],
    certifications: ['IGBC Platinum Green Building', 'ISO Certification (Environmental Management System)'],
    contact: {
      phone: '+91 8000 000 000',
      email: 'marketing@indiqube.com',
      website: 'https://indiqube.com',
      address: 'IndiQube HQ, Bangalore, India'
    },
    projects: ['proj-indiq-1'],
    featured: true
  },
  {
    id: 'techfin',
    name: 'Techfin Enterprises',
    logo: '/images/techfin_en_p1_i5.png',
    heroBanner: '/images/techfin_en_p2_i2.jpeg',
    categoryId: 'automation-cctv',
    categoryName: 'Home Automation and cctv',
    rating: 4.8,
    reviewCount: 85,
    verified: true,
    yearsInBusiness: 15,
    completedProjects: 500,
    teamSize: '50+ Experts',
    location: 'Mangalore and Udupi',
    about: 'Techfin Enterprises is the trusted leader in Techfin cameras and home automation in Mangalore and Udupi, known for quality service and reliable security solutions.',
    servicesOffered: [
      'Smart Switches & Home Automation',
      'CCTV Surveillance (Securus Cameras)',
      'Digital Door Locks & Biometric Systems',
      'Remote Gates & Boom Barriers',
      'Video Door Phones & PA Systems'
    ],
    certifications: ['Securus Authorized Distributor'],
    contact: {
      phone: '+91 9164828187',
      email: 'techfinent@gmail.com',
      website: 'https://techfinenterprises.in',
      address: 'Shakir Complex, Behind Hotel Nawfal, 1ST Floor, Mission Street, Bunder, Mangalore - 575001'
    },
    projects: ['proj-techfin-1'],
    featured: true
  },
  {
    id: 'intense-care',
    name: 'Intense Care Cleaning & Maintenance',
    logo: '/images/intense_ca_p1_i1.png',
    heroBanner: '/images/intense_ca_p2_i1.png',
    categoryId: 'deep-cleaning',
    categoryName: 'Deep Cleaning',
    rating: 4.9,
    reviewCount: 149,
    verified: true,
    yearsInBusiness: 10,
    completedProjects: 5000,
    teamSize: 'Trained & Background-Verified Staff',
    location: 'Mangalore',
    about: 'Intense Care is a trusted facility care company specializing in one-time deep cleaning, regular maintenance, AMC, pest control, painting, and gardening for homes and offices.',
    servicesOffered: [
      'Residential & Commercial Deep Cleaning',
      'Sofa, Carpet, and Window Cleaning',
      'Pest Control',
      'Exterior Glass & ACP Cleaning',
      'Interior & Exterior Painting',
      'Gardening & Landscaping'
    ],
    certifications: ['Eco-Friendly Certified'],
    contact: {
      phone: '+91 9731839227',
      email: 'intensecare19@gmail.com',
      website: 'www.intensecare.in',
      address: 'Shop No 312, Third Floor, Sahakari Sadana, Mission Street, Mangalore-575001'
    },
    projects: ['proj-intense-1'],
    featured: true
  }
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
    image: '/images/indiqube_p2_i1.jpeg',
    description: 'Transitioning 3 Lac Sq.ft. Myntra HQ into 100% green power with a combination of Rooftop Solar Power and Power supply via Grid leveraging IndiQube\'s Solar Farm in Yadgir, Karnataka.',
    specs: ['3 Lac Sq.ft. Transitioned', 'Rooftop + Grid Supply', 'IGBC Platinum Certification'],
    gallery: [
      '/images/indiqube_p2_i1.jpeg'
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
    image: '/images/techfin_en_p1_i11.jpeg',
    description: 'Extensive deployment of Securus cameras, PTZ, and ANPR systems across Mangalore for enhanced city-wide monitoring and security.',
    specs: ['ANPR Systems', 'Smart Cloud AI Analytics', 'eAlert Integration'],
    gallery: [
      '/images/techfin_en_p1_i11.jpeg'
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
    image: '/images/intense_ca_p3_i1.png',
    description: 'Daily housekeeping and facade glass cleaning for Prestige Group commercial properties, utilizing trained staff and eco-friendly chemicals.',
    specs: ['Facade Glass Cleaning', 'Daily Housekeeping', 'Transparent AMC Pricing'],
    gallery: [
      '/images/intense_ca_p3_i1.png'
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
