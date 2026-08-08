import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '13', label: 'Service Domains' },
  { value: '1', label: 'Point of Contact' },
  { value: '100%', label: 'Quality Assured' },
  { value: '24/7', label: 'Client Support' }
];

export const StatisticsSection: React.FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-4 md:py-8 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with sharp, heavy architectural borders and shadow */}
        <div className="grid grid-cols-4 divide-x-2 divide-black border-2 border-black bg-[#EBA60A] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              // Heavy padding for desktop, tight but readable padding for mobile
              className="flex flex-col items-center justify-center text-center py-6 sm:py-10 md:py-16 px-1 md:px-4 group cursor-default hover:bg-black transition-colors duration-300"
            >
              {/* Massive Black Numbers -> Turns Yellow on Hover */}
              <h4 
                className="text-xl sm:text-3xl md:text-6xl lg:text-[5.5rem] font-black text-black group-hover:text-[#EBA60A] transition-colors duration-300 tracking-tighter leading-none mb-1 md:mb-3"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                {stat.value}
              </h4>
              
              {/* Ultra-crisp uppercase labels */}
              <p 
                className="text-[6px] sm:text-[8px] md:text-xs font-black uppercase tracking-wider md:tracking-[0.2em] text-black/80 group-hover:text-white transition-colors duration-300 leading-[1.2] md:leading-normal"
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};