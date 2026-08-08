import React from 'react';
import { motion } from 'motion/react';
import { Shield, Hexagon, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-xs font-bold text-[#EBA60A] uppercase tracking-[0.2em] mb-4"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e5] bg-white shadow-xl">
          {[
            { title: 'Top-Tier Partners', desc: "We've handpicked the best companies across all 13 domains, so you don't have to worry about finding reliable experts.", icon: Shield },
            { title: 'One Point of Contact', desc: 'Say goodbye to managing multiple vendors. We handle everything for you through a single, easy-to-use dedicated manager.', icon: Hexagon },
            { title: 'Faster Results', desc: 'Because our partners work together under one roof, your projects get finished much faster without ever sacrificing quality.', icon: CheckCircle2 }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border-b md:border-b-0 border-[#e5e5e5] md:border-r last:border-b-0 md:last:border-r-0 hover:bg-[#fafafa] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#EBA60A] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-14 h-14 bg-[#EBA60A]/10 text-[#EBA60A] rounded-xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-[#EBA60A] group-hover:text-black">
                <feature.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h4 
                className="text-xl font-bold mb-4 text-black uppercase tracking-wide"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                {feature.title}
              </h4>
              <p 
                className="text-[#666] leading-relaxed"
                style={{ fontFamily: '"Inter Tight", sans-serif', fontWeight: 500 }}
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
