import React from 'react';
import { motion } from 'framer-motion';

export const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-black text-white border-y border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#333] border border-[#333] md:border-y md:border-x-0">
          {[
            { value: '13', label: 'Service Domains' },
            { value: '1', label: 'Point of Contact' },
            { value: '100%', label: 'Quality Assured' },
            { value: '24/7', label: 'Client Support' }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-black py-12 px-2 md:py-16 md:px-8 flex flex-col items-center justify-center text-center group hover:bg-[#111] transition-colors duration-500"
            >
              <h4 
                className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#EBA60A] to-[#b37a00] mb-4 tracking-tighter"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                {stat.value}
              </h4>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#A3A3A3] group-hover:text-white transition-colors duration-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
