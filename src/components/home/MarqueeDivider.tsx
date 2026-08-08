import React from 'react';

const DOMAINS = [
  'ARCHITECTURE', 'INTERIOR DESIGN', 'CONSTRUCTION', 'ELECTRICAL',
  'SOLAR SOLUTIONS', 'HOME AUTOMATION', 'DEEP CLEANING', 'PEST CONTROL',
  'LANDSCAPING', 'INSURANCE', 'PLUMBING', 'PAINTING', 'FACILITY MANAGEMENT'
];

export const MarqueeDivider: React.FC = () => {
  return (
    <div className="w-full bg-black py-5 overflow-hidden border-y border-[#1a1a1a]">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
            display: flex;
            width: max-content;
          }
        `}
      </style>
      <div className="animate-marquee">
        {/* We duplicate the array to allow infinite seamless scrolling */}
        {[...DOMAINS, ...DOMAINS, ...DOMAINS].map((domain, idx) => (
          <div key={idx} className="flex items-center">
            <span 
              className="text-white text-sm md:text-base font-black tracking-[0.2em] uppercase"
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              {domain}
            </span>
            <span className="mx-6 text-[#333] text-lg leading-none">/</span>
          </div>
        ))}
      </div>
    </div>
  );
};
