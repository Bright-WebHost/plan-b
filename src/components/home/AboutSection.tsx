import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, ArrowRight } from 'lucide-react';
import { RouteState } from '../../types';

interface AboutSectionProps {
  onNavigate: (route: RouteState) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[#ffffff] relative overflow-hidden">
      {/* Absolute Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #f2f2f2 1px, transparent 1px), linear-gradient(to bottom, #f2f2f2 1px, transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
          >
            <h2 
              className="text-xs font-bold text-[#EBA60A] uppercase tracking-[0.2em] mb-4 flex items-center gap-2"
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              <Hexagon className="w-4 h-4 fill-[#EBA60A]/20" /> ABOUT PLAN B
            </h2>
            <h3 
              className="text-4xl md:text-5xl font-extrabold text-black leading-[1.1] uppercase tracking-tight"
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              The Smarter Way to Build & Manage
            </h3>
            <p 
              className="text-[#666] text-lg leading-[1.7]"
              style={{ fontFamily: '"Inter Tight", sans-serif', fontWeight: 500 }}
            >
              PLAN B is a partnership of four trusted companies working together to bring you 13 specialized services. We take the headache out of project management by giving you a single point of contact. Whether it's a commercial build or a new home, we ensure everything is done on time, on budget, and to the highest standard.
            </p>
            <button
              onClick={() => onNavigate({ page: 'about' })}
              className="mt-4 px-8 py-4 bg-[#EBA60A] text-black hover:bg-[#d69608] transition-colors inline-flex items-center justify-center relative z-10"
              style={{
                fontFamily: '"Inter Tight", sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                borderRadius: '0px'
              }}
            >
              Discover Our Story
            </button>
          </motion.div>
          
          <div className="relative">
            {/* Architectural Border Accent */}
            <div className="hidden lg:block absolute -inset-6 border border-[#e5e5e5] z-0 pointer-events-none"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative z-10 aspect-square md:aspect-[4/3] rounded-none overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/about.png" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover transition-all duration-700" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
