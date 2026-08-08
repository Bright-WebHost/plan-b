import React from 'react';
import { RouteState } from '../../types';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onNavigate: (route: RouteState) => void;
}

const showcaseServices = [
  { name: 'Architecture & Design', image: '/images/optimized/Architecture & Design .webp' },
  { name: 'Interior Design', image: '/images/optimized/Interior-Design .webp' },
  { name: 'Construction Services', image: '/images/optimized/Construction-Services .webp' },
  { name: 'Electrical Contractors', image: '/images/optimized/Electrical-Contractors .webp' },
  { name: 'Solar Solutions', image: '/images/optimized/Solar-Solutions .webp' },
  { name: 'Home Automation', image: '/images/optimized/home-automation.webp' },
  { name: 'Deep Cleaning', image: '/images/optimized/Deep-Cleaning .webp' },
  { name: 'Pest Control', image: '/images/optimized/Pest-Control .webp' },
  { name: 'Landscaping', image: '/images/optimized/Landscaping .webp' },
  { name: 'Insurance Services', image: '/images/optimized/Insurance Services .webp' },
  { name: 'Plumbing Services', image: '/images/optimized/Plumbing Services.webp' },
  { name: 'Painting Services', image: '/images/optimized/Painting Services .webp' }
];

// Distributed 6 images strictly across the left 0-18% bounds
const leftStaticImages = [
  { index: 0, top: '10%', left: '2%', size: 'w-32 h-32 md:w-40 md:h-40' },
  { index: 1, top: '38%', left: '10%', size: 'w-40 h-40 md:w-48 md:h-48' },
  { index: 2, top: '70%', left: '1%', size: 'w-36 h-36 md:w-44 md:h-44' },
  { index: 3, top: '20%', left: '15%', size: 'w-24 h-24 md:w-32 md:h-32' },
  { index: 4, top: '82%', left: '12%', size: 'w-32 h-32 md:w-40 md:h-40' },
  { index: 5, top: '52%', left: '18%', size: 'w-24 h-24 md:w-32 md:h-32' },
];

// Distributed 6 images strictly across the right 0-18% bounds
const rightStaticImages = [
  { index: 6, top: '12%', right: '5%', size: 'w-36 h-36 md:w-44 md:h-44' },
  { index: 7, top: '42%', right: '12%', size: 'w-40 h-40 md:w-48 md:h-48' },
  { index: 8, top: '72%', right: '2%', size: 'w-32 h-32 md:w-40 md:h-40' },
  { index: 9, top: '25%', right: '15%', size: 'w-24 h-24 md:w-32 md:h-32' },
  { index: 10, top: '86%', right: '14%', size: 'w-36 h-36 md:w-44 md:h-44' },
  { index: 11, top: '56%', right: '18%', size: 'w-24 h-24 md:w-32 md:h-32' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-0 lg:flex lg:items-center lg:justify-center overflow-hidden bg-[#ffffff]">
      <style>
        {`
          .bg-grid-pattern {
            background-image: linear-gradient(to right, #f2f2f2 1px, transparent 1px), linear-gradient(to bottom, #f2f2f2 1px, transparent 1px);
            background-size: 25vw 25vw;
          }
          @media (min-width: 1024px) {
            .bg-grid-pattern {
              background-size: 5rem 5rem;
            }
          }
        `}
      </style>
      
      {/* Absolute Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern"></div>

      {/* Decorative Rotating Graphic */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] md:top-[-20%] right-[-30%] md:right-[-10%] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] pointer-events-none opacity-[0.04] z-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="black" strokeWidth="0.1" strokeDasharray="1 1" />
          <circle cx="50" cy="50" r="35" stroke="black" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="0.1" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="black" strokeWidth="0.1" />
          <path d="M15 15 L85 85 M15 85 L85 15" stroke="black" strokeWidth="0.1" />
          <rect x="25" y="25" width="50" height="50" stroke="black" strokeWidth="0.1" transform="rotate(45 50 50)" />
          <rect x="20" y="20" width="60" height="60" stroke="black" strokeWidth="0.1" />
        </svg>
      </motion.div>

      {/* Grid overlay for dark elements */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none mix-blend-difference opacity-20 lg:hidden"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '25vw 25vw'
        }}
      ></div>

      {/* Text Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-left lg:text-center flex flex-col items-start lg:items-center pointer-events-auto px-4 lg:px-0">
        <h1 
          className="text-black tracking-tighter mb-6 uppercase text-5xl md:text-7xl lg:text-[6rem]"
          style={{ 
            fontFamily: '"Inter Tight", sans-serif', 
            lineHeight: '0.9', 
            fontWeight: 900 
          }}
        >
          Everything You Need. <br />
          All in One Place.
        </h1>
        
        <p 
          className="max-w-[600px] mb-8 text-lg md:text-xl text-[#666]"
          style={{ 
            fontFamily: '"Inter Tight", sans-serif', 
            lineHeight: '160%', 
            fontWeight: 500 
          }}
        >
          Why stress over managing a dozen different vendors? PLAN B seamlessly connects 13 essential services—from architecture to insurance—making your next big project easier and faster than ever.
        </p>
        
        <button
          onClick={() => onNavigate({ page: 'services' })}
          className="bg-[#EBA60A] text-black hover:bg-[#d69608] transition-colors flex items-center justify-center relative z-10"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: '0.9rem',
            fontWeight: 700,
            borderRadius: '0px',
            width: '50vw',
            height: '15vw',
            maxWidth: '220px',
            maxHeight: '60px',
            marginLeft: '-1px'
          }}
        >
          Start Your Project
        </button>
      </div>

      {/* DESKTOP: Left Static Images (Indices 0-5) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
        {leftStaticImages.map((img) => (
          <div 
            key={`left-${img.index}`}
            className="absolute flex flex-col items-center justify-center pointer-events-auto gap-2 group"
            style={{ top: img.top, left: img.left }}
          >
            <img 
              src={showcaseServices[img.index].image} 
              alt={showcaseServices[img.index].name} 
              className={`${img.size} object-cover shadow-lg transition-transform hover:scale-105`}
              style={{ borderRadius: '0px' }} 
            />
            <span className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider bg-white/80 backdrop-blur-md px-3 py-1 text-center shadow-sm border border-black/10">
              {showcaseServices[img.index].name}
            </span>
          </div>
        ))}

        {/* DESKTOP: Right Static Images (Indices 6-11) */}
        {rightStaticImages.map((img) => (
          <div 
            key={`right-${img.index}`}
            className="absolute flex flex-col items-center justify-center pointer-events-auto gap-2 group"
            style={{ top: img.top, right: img.right }}
          >
            <img 
              src={showcaseServices[img.index].image} 
              alt={showcaseServices[img.index].name} 
              className={`${img.size} object-cover shadow-lg transition-transform hover:scale-105`}
              style={{ borderRadius: '0px' }} 
            />
            <span className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider bg-white/80 backdrop-blur-md px-3 py-1 text-center shadow-sm border border-black/10">
              {showcaseServices[img.index].name}
            </span>
          </div>
        ))}
      </div>

      {/* MOBILE: Staircase Grid */}
      <div className="lg:hidden w-full mt-10 grid grid-cols-4 relative z-10 pointer-events-auto pb-10">
        {/* Row 1 */}
        <img src={showcaseServices[3].image} alt="" className="w-full aspect-square object-cover" />
        <img src={showcaseServices[6].image} alt="" className="w-full aspect-square object-cover" />
        <img src={showcaseServices[1].image} alt="" className="w-full aspect-square object-cover" />
        <img src={showcaseServices[9].image} alt="" className="w-full aspect-square object-cover" />
        
        {/* Row 2 */}
        <img src={showcaseServices[0].image} alt="" className="w-full aspect-square object-cover" />
        <img src={showcaseServices[4].image} alt="" className="w-full aspect-square object-cover" />
        <img src={showcaseServices[7].image} alt="" className="w-full aspect-square object-cover" />
        <div className="w-full aspect-square"></div>
        
        {/* Row 3 */}
        <img src={showcaseServices[8].image} alt="" className="w-full aspect-square object-cover" />
        <img src={showcaseServices[5].image} alt="" className="w-full aspect-square object-cover" />
        <div className="w-full aspect-square"></div>
        <div className="w-full aspect-square"></div>
        
        {/* Row 4 */}
        <img src={showcaseServices[2].image} alt="" className="w-full aspect-square object-cover" />
        <div className="w-full aspect-square"></div>
        <div className="w-full aspect-square"></div>
        <div className="w-full aspect-square"></div>
      </div>
    </section>
  );
};