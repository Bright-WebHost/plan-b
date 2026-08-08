import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Absolute Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50"
        style={{
          backgroundImage: 'linear-gradient(to right, #f2f2f2 1px, transparent 1px), linear-gradient(to bottom, #f2f2f2 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold text-[#EBA60A] uppercase tracking-[0.3em] mb-4">CLIENT FEEDBACK</h2>
            <h3 
              className="text-4xl md:text-5xl font-black uppercase text-black tracking-tighter leading-tight" 
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              Trusted by <br className="hidden md:block"/> Thousands
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-[#EBA60A] text-[#EBA60A]" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS_DATA.slice(0, 2).map((testimonial, idx) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-white p-8 md:p-12 border-2 border-black relative group hover:-translate-y-2 transition-transform duration-500"
              style={{ boxShadow: '8px 8px 0px 0px #EBA60A' }}
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#f0f0f0] group-hover:text-[#EBA60A]/20 transition-colors duration-500 z-0" />
              
              <div className="flex items-center gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#EBA60A] text-[#EBA60A]" />
                ))}
              </div>
              
              <p 
                className="text-lg md:text-xl font-medium text-black leading-relaxed mb-10 relative z-10"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-5 relative z-10 pt-6 border-t border-[#e5e5e5]">
                <div className="w-14 h-14 border-2 border-black p-1 bg-[#FAFAFA]">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-black flex items-center gap-2 uppercase tracking-wide text-sm">
                    {testimonial.author} 
                    {testimonial.verifiedBadge && <CheckCircle2 className="w-4 h-4 text-[#EBA60A]" />}
                  </h4>
                  <span className="text-xs font-bold text-[#A3A3A3] tracking-wider uppercase mt-1 block">{testimonial.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
