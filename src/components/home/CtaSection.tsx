import React from 'react';
import { Hexagon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { RouteState } from '../../types';

interface CtaSectionProps {
  onNavigate: (route: RouteState) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-[#EBA60A] py-32 border-y-8 border-black">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none mix-blend-overlay">
        <Hexagon className="w-[800px] h-[800px] text-black" strokeWidth={0.5} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold text-black uppercase tracking-[0.4em] mb-6 block">START BUILDING</h2>
          
          <h3 
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-10"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            READY TO START <br className="hidden md:block"/> YOUR NEXT PROJECT?
          </h3>
          
          <p className="text-xl md:text-2xl font-medium text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let’s talk about how our unified team can make your next big project a massive success. One team. Zero headaches.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">

            <button
              onClick={() => onNavigate({ page: 'contact' })}
              className="group px-10 py-5 bg-transparent border-2 border-black text-black font-black text-sm hover:bg-black hover:text-white transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
