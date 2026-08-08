import React from 'react';
import { motion } from 'motion/react';
import { Shield, Hexagon, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-[#ffffff] relative overflow-hidden">
      {/* Absolute Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #f2f2f2 1px, transparent 1px), linear-gradient(to bottom, #f2f2f2 1px, transparent 1px)',
          backgroundSize: '5rem 5rem'
        }}
      ></div>

      {/* Massive Typography Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden w-full h-full flex items-center justify-center opacity-[0.03]">
        <h2 
          className="text-[25vw] font-black uppercase text-transparent whitespace-nowrap" 
          style={{ WebkitTextStroke: '2px black', fontFamily: '"Inter Tight", sans-serif' }}
        >
          PLAN B
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 
            className="text-xs font-bold text-black uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            WHY CHOOSE US
          </h2>
          <h3 
            className="text-4xl md:text-5xl font-extrabold text-black leading-[1.1] uppercase tracking-tight"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            The PLAN B Advantage
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-0 border-2 border-black bg-[#EBA60A]" style={{ boxShadow: '12px 12px 0px 0px rgba(0,0,0,1)' }}>
          {[
            { title: 'In-House Experts', desc: "We provide the best professionals across all 13 domains, so you don't have to worry about finding reliable experts.", icon: Shield },
            { title: 'One Point of Contact', desc: 'Say goodbye to managing multiple vendors. We handle everything internally for you through a single dedicated manager.', icon: Hexagon },
            { title: 'Faster Results', desc: 'Because our unified team works together under one roof, your projects get finished much faster without ever sacrificing quality.', icon: CheckCircle2 }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="p-3 sm:p-6 md:p-10 border-r-2 border-black last:border-r-0 hover:bg-black transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-black/10 text-black rounded-none border-2 border-transparent flex items-center justify-center mb-3 sm:mb-4 md:mb-8 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-transparent group-hover:border-[#EBA60A] group-hover:text-[#EBA60A]">
                <feature.icon className="w-4 h-4 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              <h4 
                className="text-[10px] leading-tight sm:text-sm md:text-xl font-black mb-2 md:mb-4 text-black uppercase tracking-wide group-hover:text-white transition-colors duration-500 break-words"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                {feature.title}
              </h4>
              <p 
                className="text-[9px] sm:text-[11px] md:text-base text-black/80 leading-snug md:leading-relaxed font-medium group-hover:text-white/80 transition-colors duration-500"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
