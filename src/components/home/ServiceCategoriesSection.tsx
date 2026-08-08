import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface ServiceCategoriesSectionProps {
  onNavigate: (route: RouteState) => void;
}

export const ServiceCategoriesSection: React.FC<ServiceCategoriesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[var(--bg-natural)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-widest mb-4">OUR SERVICES</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title text-[var(--text-primary)]">Everything Under One Roof</h3>
          </div>
          <button onClick={() => onNavigate({ page: 'services' })} className="hidden md:flex items-center gap-2 font-bold hover:text-[#EBA60A] transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
          {SERVICE_CATEGORIES.map((cat, i) => {
            const shapes = [
              'rounded-t-[150px] rounded-b-[30px]', // Arch top
              'rounded-b-[150px] rounded-t-[30px]', // Arch bottom
              'rounded-[40px]',                     // Pill
              'rounded-tr-[100px] rounded-bl-[100px] rounded-tl-[30px] rounded-br-[30px]', // Leaf
              'rounded-t-[100px] rounded-b-[100px]', // Capsule
            ];
            const shapeClass = shapes[i % shapes.length];
            const isTitleTop = i % 2 === 0;

            return (
              <motion.button
                key={cat.id}
                onClick={() => onNavigate({ page: 'services' })}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.1 }}
                className={`group relative flex flex-col items-center justify-between p-8 border-2 border-[#EBA60A] bg-white transition-all duration-500 hover:shadow-[0_20px_50px_rgba(235,166,10,0.15)] hover:-translate-y-2 ${shapeClass} min-h-[450px]`}
              >
                {/* Optional Decorative Line */}
                <div className="absolute top-1/2 -right-6 w-12 h-[2px] bg-[#EBA60A]/30 hidden lg:block"></div>

                {isTitleTop && (
                  <div className="w-full text-center mt-6 z-10">
                    <h4 
                      className="text-black font-black text-2xl lg:text-3xl uppercase tracking-tight leading-none mb-2"
                      style={{ fontFamily: '"Inter Tight", sans-serif' }}
                    >
                      {cat.name}
                    </h4>
                    <span className="text-[#666] font-bold text-xs tracking-[0.2em] uppercase">{cat.partnerCount} Partners</span>
                  </div>
                )}

                <div className="relative w-48 h-48 lg:w-56 lg:h-56 my-auto rounded-full overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[5deg] border-4 border-white z-10">
                  <img src={cat.heroImage} alt={cat.name} className="absolute inset-0 w-full h-full object-cover" />
                </div>

                {!isTitleTop && (
                  <div className="w-full text-center mb-6 z-10">
                    <h4 
                      className="text-black font-black text-2xl lg:text-3xl uppercase tracking-tight leading-none mb-2"
                      style={{ fontFamily: '"Inter Tight", sans-serif' }}
                    >
                      {cat.name}
                    </h4>
                    <span className="text-[#666] font-bold text-xs tracking-[0.2em] uppercase">{cat.partnerCount} Partners</span>
                  </div>
                )}

                <div className="absolute bottom-6 right-8">
                  <ArrowRight className="w-6 h-6 text-[#EBA60A] group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button onClick={() => onNavigate({ page: 'services' })} className="inline-flex items-center gap-2 font-bold hover:text-[#EBA60A] transition-colors">
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
