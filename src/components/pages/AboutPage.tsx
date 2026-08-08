import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Target, Eye, ShieldCheck, HeartHandshake, Zap, Compass } from 'lucide-react';
import { RouteState } from '../../types';

interface AboutPageProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[#ffffff] text-black">
      {/* 1. Our Story & Hero */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-black text-white border-b-8 border-[#EBA60A]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/images/optimized/about.webp" alt="About PLAN B" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>
        {/* Decorative Rotating Graphic */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] md:top-[-20%] left-[-30%] md:left-[-10%] w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] pointer-events-none opacity-[0.04] z-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.1" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.1" />
            <path d="M50 0 L50 100 M0 50 L100 50" stroke="white" strokeWidth="0.1" />
            <path d="M15 15 L85 85 M15 85 L85 15" stroke="white" strokeWidth="0.1" />
          </svg>
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter mb-8 leading-[0.85] text-transparent stroke-white stroke-2"
            style={{ fontFamily: '"Inter Tight", sans-serif', WebkitTextStroke: '2px white' }}
          >
            OUR STORY
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ fontFamily: '"Inter Tight", sans-serif' }}
          >
            Born from the necessity to streamline fragmented service industries, PLAN B was established as a single powerful entity. We saw the chaos in managing multiple vendors for architecture, security, cleaning, and tech. Our solution? A unified company delivering 13 premium services under one trusted brand.
          </motion.p>
        </div>
      </section>

      {/* 2 & 3. Vision and Mission */}
      <section className="py-32 bg-[#FAFAFA] relative overflow-hidden">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 bg-white border-2 border-black relative group"
              style={{ boxShadow: '8px 8px 0px 0px #EBA60A' }}
            >
              <Eye className="w-12 h-12 text-black mb-6 stroke-[1.5]" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Our Vision</h2>
              <p className="text-black/70 leading-relaxed text-lg font-medium">
                To become the global standard for premium ecosystem services, where clients can seamlessly access any high-end professional service—from solar solutions to interior design—without ever compromising on quality or trust.
              </p>
            </motion.div>

            {/* Image 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hidden lg:block border-2 border-black relative bg-[#EBA60A] aspect-video lg:aspect-auto overflow-hidden"
              style={{ boxShadow: '8px 8px 0px 0px #EBA60A' }}
            >
              <img src="/images/optimized/Architecture & Design .webp" alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>

            {/* Image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block border-2 border-black relative bg-[#EBA60A] aspect-video lg:aspect-auto overflow-hidden"
              style={{ boxShadow: '8px 8px 0px 0px #EBA60A' }}
            >
              <img src="/images/optimized/Interior-Design .webp" alt="Interior Design" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 md:p-14 bg-black text-white border-2 border-black relative group"
              style={{ boxShadow: '8px 8px 0px 0px #EBA60A' }}
            >
              <Target className="w-12 h-12 text-[#EBA60A] mb-6 stroke-[1.5]" />
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#EBA60A]" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Our Mission</h2>
              <p className="text-[#A3A3A3] leading-relaxed text-lg font-medium">
                To provide the top 1% of experts across 13 domains, offering our clients a stress-free, single-point-of-contact experience that guarantees flawless execution on every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Values (Brutalist Grid) */}
      <section className="bg-black text-white border-y-8 border-black pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-[0.4em] mb-4">WHAT DRIVES US</h2>
          <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Core Values</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#333] border-t border-[#333]">
          {[
            { title: 'Excellence', icon: ShieldCheck, desc: 'We only hire the best in-house experts, ensuring top-tier quality.' },
            { title: 'Integrity', icon: HeartHandshake, desc: 'Transparent pricing, escrow protection, and honest communication.' },
            { title: 'Innovation', icon: Zap, desc: 'Constantly evolving our 13 domains with the latest technology.' },
            { title: 'Guidance', icon: Compass, desc: 'Acting as a single trusted advisor for all your project needs.' }
          ].map((value, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-12 text-center group hover:bg-[#111] transition-colors duration-500"
            >
              <div className="w-24 h-24 mx-auto bg-transparent border-2 border-[#333] rounded-none flex items-center justify-center mb-8 group-hover:border-[#EBA60A] transition-colors duration-500">
                <value.icon className="w-10 h-10 text-[#EBA60A]" strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tight" style={{ fontFamily: '"Inter Tight", sans-serif' }}>{value.title}</h4>
              <p className="text-[#A3A3A3] text-sm md:text-base leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5 & 6. The Hive Concept & Why PLAN B */}
      <section className="py-32 bg-[#EBA60A] text-black overflow-hidden relative border-b-8 border-black">
        {/* Massive Typography Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden w-full h-full flex items-center justify-center opacity-[0.05]">
          <h2 
            className="text-[25vw] font-black uppercase text-transparent whitespace-nowrap" 
            style={{ WebkitTextStroke: '3px black', fontFamily: '"Inter Tight", sans-serif' }}
          >
            THE HIVE
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-6 space-y-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                  The Hive <br/> Concept
                </h3>
                <p className="text-lg md:text-xl leading-relaxed font-medium text-black/80">
                  The Hive is our proprietary operational model. Just like a beehive works in perfect synchronization, our 13 service domains communicate flawlessly. When you hire our Architects, they are already coordinating with our in-house Home Automation and Deep Cleaning teams. No silos, no delays, just perfect harmony.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                  Why <br/> "PLAN B"?
                </h3>
                <p className="text-lg md:text-xl leading-relaxed font-medium text-black/80">
                  For decades, the standard way of doing things—hiring individual contractors, managing disputes, and facing hidden costs—has been "Plan A". We realized Plan A is broken. 
                  <br /><br />
                  We are <strong className="font-black text-black">PLAN B</strong>. The superior, risk-free alternative where everything is managed for you under one premium umbrella.
                </p>
              </motion.div>
            </div>

            {/* Massive Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative aspect-square md:aspect-auto md:h-full min-h-[500px] w-full border-4 border-black bg-black overflow-hidden"
              style={{ boxShadow: '-12px 12px 0px 0px black' }}
            >
               <img src="/images/optimized/Construction-Services .webp" alt="Construction and Harmony" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>



      {/* 8. Our Office */}
      <section className="bg-black text-white border-t-8 border-black relative">
        <div className="flex flex-col lg:flex-row">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 h-[500px] lg:h-[800px] relative overflow-hidden"
          >
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="PLAN B Office" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 lg:hidden"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-24 bg-black relative z-10 -mt-24 lg:mt-0"
          >
            <div className="border-l-4 border-[#EBA60A] pl-8">
              <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-[0.4em] mb-6 block">HQ & OPERATIONS</h2>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-white" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                Our Office
              </h3>
              <p className="text-[#A3A3A3] text-xl leading-relaxed mb-10 font-medium max-w-xl">
                Located in the heart of Mangalore, our headquarters acts as the central nervous system of The Hive. This is where our project managers monitor the progress of our 13 service domains, coordinate with our in-house experts, and ensure every client request is executed with precision.
              </p>
              <button
                onClick={() => onNavigate({ page: 'contact' })}
                className="group px-10 py-5 bg-[#EBA60A] text-black font-black text-sm hover:bg-white transition-all duration-300 uppercase tracking-widest flex items-center justify-center gap-3 border-2 border-[#EBA60A] hover:border-white w-fit"
              >
                Visit Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
