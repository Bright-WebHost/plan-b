import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface ServiceCategoriesSectionProps {
  onNavigate: (route: RouteState) => void;
}

// Premium animation variants with explicit TS tuples
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
    } 
  },
};

export const ServiceCategoriesSection: React.FC<ServiceCategoriesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-8 md:py-12 bg-[#FAFAFA] overflow-hidden selection:bg-[#EBA60A] selection:text-black">
      <div className="max-w-[95rem] mx-auto px-2 md:px-4 lg:px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 px-2">
          <div className="max-w-2xl">
            <h2 className="text-[10px] md:text-sm font-bold text-[#EBA60A] uppercase tracking-[0.3em] mb-2 md:mb-4">OUR SERVICES</h2>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-black tracking-tighter" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
              Everything <br/>
              Under One Roof
            </h3>
          </div>
          <button 
            onClick={() => onNavigate({ page: 'services' })} 
            className="hidden md:flex items-center gap-3 font-bold text-black hover:text-[#EBA60A] transition-colors uppercase tracking-widest text-sm group"
          >
            View All Services 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Flush, Centered Flex Grid - Strictly 3 Columns */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-8 relative"
        >
          {SERVICE_CATEGORIES.map((cat, i) => {
            // Alternating shapes create the interlocking puzzle look
            const isArchTop = i % 2 === 0; 
            
            // Draw arrows except for the last item in a visual 3-column row, or the very last item overall
            const drawConnectionRight = (i % 3 !== 2) && (i < SERVICE_CATEGORIES.length - 1);

            return (
              <motion.div 
                key={cat.id} 
                variants={cardVariants}
                // Width calculations rigidly locked to 3-columns across all devices
                // Gap 2 (8px) -> w-[calc(33.333%-5.33px)] for mobile
                // Gap 6 (24px) -> w-[calc(33.333%-16px)] for tablet
                // Gap 8 (32px) -> w-[calc(33.333%-21.33px)] for desktop
                className="relative flex flex-col w-[calc(33.333%-5.5px)] md:w-[calc(33.333%-16px)] lg:w-[calc(33.333%-22px)]"
              >
                <button
                  onClick={() => onNavigate({ page: 'services' })}
                  // Scaled heights and paddings for mobile
                  className={`relative w-full flex flex-col bg-[#EBA60A] border-[1px] md:border-[1.5px] border-black p-1 md:p-2.5 transition-all duration-500 hover:bg-black hover:border-black hover:shadow-2xl group h-[220px] sm:h-[300px] md:h-[420px] lg:h-[500px] z-10 ${
                    isArchTop 
                      ? 'rounded-t-[60px] sm:rounded-t-[100px] md:rounded-t-[150px] lg:rounded-t-[200px] rounded-b-lg md:rounded-b-2xl' 
                      : 'rounded-b-[60px] sm:rounded-b-[100px] md:rounded-b-[150px] lg:rounded-b-[200px] rounded-t-lg md:rounded-t-2xl'
                  }`}
                >
                  
                  {isArchTop ? (
                    <>
                      {/* Top Text Area */}
                      <div className="pt-8 sm:pt-10 md:pt-16 pb-3 md:pb-6 px-1 md:px-4 w-full flex flex-col items-center justify-center relative z-10">
                        <h4 className="text-black font-black text-[7px] sm:text-[10px] md:text-xl lg:text-2xl uppercase tracking-tighter leading-[1.1] text-center group-hover:text-white transition-colors duration-300 mb-2 md:mb-4 break-words" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                          {cat.name}
                        </h4>
                        
                        <div className="flex items-center gap-1 md:gap-2 text-black group-hover:text-[#EBA60A] transition-colors duration-300 font-bold text-[7px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] uppercase">
                          EXPLORE <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      {/* Bottom Image Area */}
                      <div className="w-full flex-1 rounded-t-sm md:rounded-t-lg rounded-b-md md:rounded-b-[1rem] overflow-hidden relative bg-gray-100">
                        <img 
                          src={cat.heroImage} 
                          alt={cat.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Top Image Area */}
                      <div className="w-full flex-1 rounded-b-sm md:rounded-b-lg rounded-t-md md:rounded-t-[1rem] overflow-hidden relative bg-gray-100">
                        <img 
                          src={cat.heroImage} 
                          alt={cat.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                        />
                      </div>

                      {/* Bottom Text Area */}
                      <div className="pb-8 sm:pb-10 md:pb-16 pt-3 md:pt-6 px-1 md:px-4 w-full flex flex-col items-center justify-center relative z-10">
                        <h4 className="text-black font-black text-[7px] sm:text-[10px] md:text-xl lg:text-2xl uppercase tracking-tighter leading-[1.1] text-center group-hover:text-white transition-colors duration-300 mb-2 md:mb-4 break-words" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                          {cat.name}
                        </h4>
                        
                        <div className="flex items-center gap-1 md:gap-2 text-black group-hover:text-[#EBA60A] transition-colors duration-300 font-bold text-[7px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[0.2em] uppercase">
                          EXPLORE <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </>
                  )}
                </button>

                {/* Floating Circuit Arrows (Hidden on Mobile for cleanliness) */}
                {drawConnectionRight && (
                  <div className="hidden md:flex absolute top-1/2 -right-[0.75rem] md:-right-[1.5rem] w-[0.75rem] md:w-[1.5rem] items-center justify-center pointer-events-none z-0">
                    <div className="relative w-full flex items-center">
                      <div className="w-full h-[1.5px] bg-black group-hover:bg-[#EBA60A] transition-colors duration-500"></div>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-black group-hover:text-[#EBA60A] transition-colors duration-500 absolute -right-1 md:-right-2" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:mt-12 text-center md:hidden">
          <button onClick={() => onNavigate({ page: 'services' })} className="inline-flex items-center gap-2 font-bold text-black uppercase tracking-widest text-xs hover:text-[#EBA60A] transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};