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

const hexClipPath = {
  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
};

// ---------------------------------------------------------
// DESKTOP COORDINATES (W: 200px, H: 174px)
// Verified perfect vertical stacking
// ---------------------------------------------------------
const desktopLeft = [
  { index: 0, x: 0, y: 87 },
  { index: 1, x: 0, y: 261 },
  { index: 2, x: 0, y: 435 },
  { index: 3, x: 150, y: 0 },
  { index: 4, x: 150, y: 174 },
  { index: 5, x: 150, y: 348 },
];

const desktopRight = [
  { index: 6, x: 0, y: 0 },
  { index: 7, x: 0, y: 174 },
  { index: 8, x: 0, y: 348 },
  { index: 9, x: 150, y: 87 },
  { index: 10, x: 150, y: 261 },
  { index: 11, x: 150, y: 435 },
];

// ---------------------------------------------------------
// FIXED MOBILE COORDINATES (W: 90px, H: 78px)
// Mathematically perfect interlocking horizontal packing
// ---------------------------------------------------------
const mobileTopHex = [
  // Top Row (3 items)
  { index: 0, x: 0, y: 0 },
  { index: 1, x: 135, y: 0 },
  { index: 2, x: 270, y: 0 },
  // Middle Row (2 items nested in the gaps)
  { index: 3, x: 67.5, y: 39 },
  { index: 4, x: 202.5, y: 39 },
  // Bottom Row (1 item nested in the gap)
  { index: 5, x: 135, y: 78 },
];

const mobileBottomHex = [
  // Top Row (1 item nested)
  { index: 6, x: 135, y: 0 },
  // Middle Row (2 items nested)
  { index: 7, x: 67.5, y: 39 },
  { index: 8, x: 202.5, y: 39 },
  // Bottom Row (3 items)
  { index: 9, x: 0, y: 78 },
  { index: 10, x: 135, y: 78 },
  { index: 11, x: 270, y: 78 },
];

const getFloatAnimation = (index: number) => ({
  y: [0, index % 2 === 0 ? -4 : 4, 0],
  transition: {
    duration: 5 + (index % 3),
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: index * 0.15,
  }
});

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between items-center py-6 lg:py-0 lg:flex-row lg:justify-center overflow-hidden bg-[#EBA60A]">
      
      {/* Clean Architectural Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '80px 80px' 
        }}
      ></div>

      {/* ------------------------------------------------ */}
      {/* MOBILE ONLY: Flawless Top Cluster */}
      {/* ------------------------------------------------ */}
      <div className="lg:hidden relative z-10 w-full flex justify-center pointer-events-auto mt-2">
        <div className="relative w-[360px] h-[156px] scale-95 sm:scale-100 origin-top">
          {mobileTopHex.map((pos) => (
            <motion.div 
              key={`mob-top-${pos.index}`}
              animate={getFloatAnimation(pos.index)}
              className="absolute flex items-center justify-center group drop-shadow-xl"
              style={{ left: pos.x, top: pos.y, width: '90px', height: '78px' }}
            >
              <div className="absolute inset-0 bg-white shadow-sm" style={hexClipPath} onClick={() => onNavigate({ page: 'services' })}>
                <div className="absolute inset-[3px] overflow-hidden" style={hexClipPath}>
                  <img src={showcaseServices[pos.index].image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-95 z-10"></div>
                  <div className="absolute bottom-[15%] left-0 right-0 flex justify-center z-20 px-1 w-[90%] mx-auto">
                    <span className="text-white text-[6.5px] font-black uppercase tracking-wider text-center leading-[1.1] break-words">
                      {showcaseServices[pos.index].name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* Main Center Text Container */}
      {/* ------------------------------------------------ */}
      <div className="relative z-30 w-full max-w-[95vw] lg:max-w-[550px] xl:max-w-[700px] 2xl:max-w-[850px] mx-auto text-center flex flex-col items-center justify-center pointer-events-auto px-2 lg:px-0 flex-grow my-4 lg:my-0">
        <h1 
          className="text-white uppercase tracking-tighter mb-4 lg:mb-6 text-[2.75rem] leading-[1] sm:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] 2xl:text-[6.5rem]"
          style={{ 
            fontFamily: '"Inter Tight", sans-serif', 
            fontWeight: 900,
            textShadow: '0px 10px 30px rgba(0, 0, 0, 0.25)' 
          }}
        >
          {/* MOBILE SPECIFIC BREAKS */}
          <span className="block lg:hidden">
            Everything You Need.<br/> All In One Place.
          </span>
          {/* DESKTOP SPECIFIC BREAKS */}
          <span className="hidden lg:block leading-[0.9]">
            Everything<br/> You Need.<br/> All In One<br/> Place.
          </span>
        </h1>
        
        <p 
          className="max-w-[600px] mb-6 lg:mb-8 text-sm md:text-lg text-black px-4"
          style={{ 
            fontFamily: '"Inter Tight", sans-serif', 
            lineHeight: '140%', 
            fontWeight: 800 
          }}
        >
          Skip the hassle of multiple vendors. PLAN B connects 13 essential services to make your next project faster and easier.
        </p>
        
        <button
          onClick={() => onNavigate({ page: 'services' })}
          className="bg-black text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center relative z-40 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          style={{
            fontFamily: '"Inter Tight", sans-serif',
            fontSize: '1rem',
            fontWeight: 900,
            borderRadius: '0px',
            width: '100%',
            maxWidth: '240px',
            height: '56px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }}
        >
          Start Your Project
        </button>
      </div>

      {/* ------------------------------------------------ */}
      {/* MOBILE ONLY: Flawless Bottom Cluster */}
      {/* ------------------------------------------------ */}
      <div className="lg:hidden relative z-10 w-full flex justify-center pointer-events-auto mb-2">
        <div className="relative w-[360px] h-[156px] scale-95 sm:scale-100 origin-bottom">
          {mobileBottomHex.map((pos) => (
            <motion.div 
              key={`mob-bot-${pos.index}`}
              animate={getFloatAnimation(pos.index)}
              className="absolute flex items-center justify-center group drop-shadow-xl"
              style={{ left: pos.x, top: pos.y, width: '90px', height: '78px' }}
            >
              <div className="absolute inset-0 bg-white shadow-sm" style={hexClipPath} onClick={() => onNavigate({ page: 'services' })}>
                <div className="absolute inset-[3px] overflow-hidden" style={hexClipPath}>
                  <img src={showcaseServices[pos.index].image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-95 z-10"></div>
                  <div className="absolute bottom-[15%] left-0 right-0 flex justify-center z-20 px-1 w-[90%] mx-auto">
                    <span className="text-white text-[6.5px] font-black uppercase tracking-wider text-center leading-[1.1] break-words">
                      {showcaseServices[pos.index].name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* DESKTOP ONLY: Protected Left Cluster */}
      {/* ------------------------------------------------ */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[609px] z-10 origin-left scale-[0.65] xl:scale-[0.85] 2xl:scale-100">
        {desktopLeft.map((pos) => (
          <motion.div 
            key={`left-${pos.index}`}
            animate={getFloatAnimation(pos.index)}
            className="absolute flex items-center justify-center group pointer-events-auto drop-shadow-2xl"
            style={{ left: pos.x, top: pos.y, width: '200px', height: '174px' }}
          >
            <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover:scale-105 group-hover:z-50 cursor-pointer shadow-lg" style={hexClipPath} onClick={() => onNavigate({ page: 'services' })}>
              <div className="absolute inset-[4px] overflow-hidden" style={hexClipPath}>
                <img src={showcaseServices[pos.index].image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-[20%] left-0 right-0 flex justify-center z-20 px-2 w-[85%] mx-auto">
                  <span className="text-white text-[11px] font-black uppercase tracking-wider text-center leading-[1.2] drop-shadow-md break-words">
                    {showcaseServices[pos.index].name}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ------------------------------------------------ */}
      {/* DESKTOP ONLY: Protected Right Cluster */}
      {/* ------------------------------------------------ */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[609px] z-10 origin-right scale-[0.65] xl:scale-[0.85] 2xl:scale-100">
        {desktopRight.map((pos) => (
          <motion.div 
            key={`right-${pos.index}`}
            animate={getFloatAnimation(pos.index)}
            className="absolute flex items-center justify-center group pointer-events-auto drop-shadow-2xl"
            style={{ right: pos.x, top: pos.y, width: '200px', height: '174px' }}
          >
            <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover:scale-105 group-hover:z-50 cursor-pointer shadow-lg" style={hexClipPath} onClick={() => onNavigate({ page: 'services' })}>
              <div className="absolute inset-[4px] overflow-hidden" style={hexClipPath}>
                <img src={showcaseServices[pos.index].image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute bottom-[20%] left-0 right-0 flex justify-center z-20 px-2 w-[85%] mx-auto">
                  <span className="text-white text-[11px] font-black uppercase tracking-wider text-center leading-[1.2] drop-shadow-md break-words">
                    {showcaseServices[pos.index].name}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};