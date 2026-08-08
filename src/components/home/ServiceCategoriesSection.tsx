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
    <section className="py-24 bg-[#FAFAFA] overflow-hidden selection:bg-[#EBA60A] selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-[0.3em] mb-4">OUR SERVICES</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tighter" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
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

        {/* Flush, Centered Flex Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6 lg:gap-8 relative"
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
                // Width calculations to create a 3-column layout that gracefully wraps and centers orphans
                className="relative flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)]"
              >
                <button
                  onClick={() => onNavigate({ page: 'services' })}
                  // The Card Container - Solid border, p-3 creates the "editorial frame"
                  className={`relative w-full flex flex-col bg-white border-[1.5px] border-black p-2.5 transition-all duration-500 hover:border-[#EBA60A] hover:shadow-[0_20px_40px_rgba(235,166,10,0.12)] group h-[420px] lg:h-[500px] z-10 ${
                    isArchTop ? 'rounded-t-[150px] lg:rounded-t-[200px] rounded-b-2xl' : 'rounded-b-[150px] lg:rounded-b-[200px] rounded-t-2xl'
                  }`}
                >
                  
                  {isArchTop ? (
                    <>
                      {/* Top Text Area */}
                      <div className="pt-16 pb-6 px-4 w-full flex flex-col items-center justify-center relative z-10">
                        <h4 className="text-black font-black text-2xl lg:text-3xl uppercase tracking-tighter leading-tight text-center group-hover:text-[#EBA60A] transition-colors duration-300 mb-4" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                          {cat.name}
                        </h4>
                        
                        <div className="flex items-center gap-2 text-[#EBA60A] font-bold text-[10px] lg:text-xs tracking-[0.2em] uppercase">
                          EXPLORE <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      {/* Bottom Image Area */}
                      <div className="w-full flex-1 rounded-t-lg rounded-b-[1rem] overflow-hidden relative bg-gray-100">
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
                      <div className="w-full flex-1 rounded-b-lg rounded-t-[1rem] overflow-hidden relative bg-gray-100">
                        <img 
                          src={cat.heroImage} 
                          alt={cat.name} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                        />
                      </div>

                      {/* Bottom Text Area */}
                      <div className="pb-16 pt-6 px-4 w-full flex flex-col items-center justify-center relative z-10">
                        <h4 className="text-black font-black text-2xl lg:text-3xl uppercase tracking-tighter leading-tight text-center group-hover:text-[#EBA60A] transition-colors duration-300 mb-4" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                          {cat.name}
                        </h4>
                        
                        <div className="flex items-center gap-2 text-[#EBA60A] font-bold text-[10px] lg:text-xs tracking-[0.2em] uppercase">
                          EXPLORE <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </>
                  )}
                </button>

                {/* Floating Circuit Arrows (Hidden on Mobile) */}
                {drawConnectionRight && (
                  <div className="hidden lg:flex absolute top-1/2 -right-[1.5rem] w-[1.5rem] items-center justify-center pointer-events-none z-0">
                    <div className="relative w-full flex items-center">
                      <div className="w-full h-[1.5px] bg-black group-hover:bg-[#EBA60A] transition-colors duration-500"></div>
                      <ArrowRight className="w-4 h-4 text-black group-hover:text-[#EBA60A] transition-colors duration-500 absolute -right-2" strokeWidth={3} />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <button onClick={() => onNavigate({ page: 'services' })} className="inline-flex items-center gap-2 font-bold text-black uppercase tracking-widest text-xs hover:text-[#EBA60A] transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};