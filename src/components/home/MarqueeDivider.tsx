import React, { useEffect, useRef } from 'react';

const DOMAINS = [
  'ARCHITECTURE', 'INTERIOR DESIGN', 'CONSTRUCTION', 'ELECTRICAL',
  'SOLAR SOLUTIONS', 'HOME AUTOMATION', 'DEEP CLEANING', 'PEST CONTROL',
  'LANDSCAPING', 'INSURANCE', 'PLUMBING', 'PAINTING', 'FACILITY MANAGEMENT'
];

export const MarqueeDivider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;

    const checkCenter = () => {
      if (containerRef.current) {
        const items = containerRef.current.querySelectorAll('.marquee-item');
        const centerX = window.innerWidth / 2;

        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          // Find the exact middle point of the current item
          const itemCenterX = rect.left + rect.width / 2;
          
          // Activation Zone: If the item is within 200px of the screen's center
          if (Math.abs(itemCenterX - centerX) < 200) {
            // Only update DOM if it changed to prevent performance lag
            if (item.getAttribute('data-center') !== 'true') {
              item.setAttribute('data-center', 'true');
            }
          } else {
            if (item.getAttribute('data-center') !== 'false') {
              item.setAttribute('data-center', 'false');
            }
          }
        });
      }
      // Loop this check smoothly matching the screen's refresh rate
      animationId = requestAnimationFrame(checkCenter);
    };
    
    checkCenter();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#0a0a0a] py-6 md:py-8 overflow-hidden border-y border-white/10 flex items-center">
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            display: flex;
            width: max-content;
          }
          
          /* Custom CSS for hollow text effect */
          .text-stroke-white {
            -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.9);
            color: transparent;
            transition: color 0.5s ease;
          }
          
          /* Automatically fill in hollow text when it hits the center */
          .marquee-item[data-center="true"] .text-stroke-white {
            color: white;
          }
        `}
      </style>
      
      <div className="animate-marquee items-center">
        {/* Duplicated array for infinite seamless scrolling */}
        {[...DOMAINS, ...DOMAINS, ...DOMAINS].map((domain, idx) => {
          
          // 3-Style Typography Sequence
          const styleType = idx % 3;
          let textClasses = "";
          
          if (styleType === 0) {
            textClasses = "text-white"; 
          } else if (styleType === 1) {
            textClasses = "text-stroke-white"; 
          } else {
            textClasses = "text-[#EBA60A]"; 
          }

          return (
            <div 
              key={idx} 
              className="marquee-item group flex items-center cursor-pointer"
              data-center="false"
            >
              
              {/* Massive, bold typography with auto-center scaling */}
              <span 
                className={`text-4xl md:text-6xl font-black tracking-tight uppercase whitespace-nowrap mx-6 transition-all duration-500 group-data-[center=true]:scale-110 ${textClasses}`}
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                {domain}
              </span>

              {/* Geometric Hexagon - Activates automatically via group-data-[center=true] */}
              <div className="mx-2 md:mx-4 flex items-center justify-center">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-8 h-8 md:w-10 md:h-10 text-white/20 transition-all duration-700 ease-out group-data-[center=true]:text-[#EBA60A] group-data-[center=true]:rotate-90 group-data-[center=true]:scale-125"
                >
                  <path 
                    d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};