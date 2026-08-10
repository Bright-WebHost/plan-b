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
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden bg-black text-white border-b-8 border-[#EBA60A]">
        {/* Background Image, Theme Grid and Effects */}
        <div className="absolute inset-0 z-0">
          {/* Vibrant Theme Glows */}
          <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-[#EBA60A] mix-blend-multiply filter blur-[150px] opacity-50 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#EBA60A] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <img src="/images/optimized/about.webp" alt="About PLAN B" className="w-full h-full object-cover opacity-[0.35] mix-blend-luminosity scale-105" />
          
          {/* Honeycomb 'Hive' Pattern */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.2]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='30' viewBox='0 0 52 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23EBA60A' stroke-width='1.5' stroke-opacity='1'%3E%3Cpath d='M13 15L0 7.5v-15L13 0l13 7.5v15L13 30l-13-7.5zm26 0l-13-7.5v-15L39 0l13 7.5v15L39 30l-13-7.5zm-13 15L13 22.5v-15L26 15l13-7.5v15L26 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>

        {/* Decorative Graphic */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] pointer-events-none opacity-[0.03] z-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.1" strokeDasharray="1 1" />
            <circle cx="50" cy="50" r="35" stroke="white" strokeWidth="0.2" />
            <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="0.1" />
            <path d="M50 0 L50 100 M0 50 L100 50" stroke="white" strokeWidth="0.1" />
            <path d="M15 15 L85 85 M15 85 L85 15" stroke="white" strokeWidth="0.1" />
          </svg>
        </motion.div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-10">
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-[#EBA60A]"></div>
                <span className="text-[#EBA60A] font-bold uppercase tracking-[0.3em] text-sm md:text-base">Discover Plan B</span>
              </div>
              <h1 
                className="text-6xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                OUR <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA60A] to-[#ffda85]">
                  STORY
                </span>
              </h1>
            </motion.div>
          </div>
          
          <div className="flex-1 w-full lg:pl-12 lg:border-l lg:border-white/20">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl text-white leading-tight font-medium mb-6 md:mb-8"
              style={{ fontFamily: '"Inter Tight", sans-serif' }}
            >
              Born from the necessity to streamline fragmented service industries, PLAN B was established as a <span className="text-[#EBA60A]">single powerful entity</span>.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-[#A3A3A3] leading-relaxed max-w-lg"
            >
              We saw the chaos in managing multiple vendors for architecture, security, cleaning, and tech. Our solution? A unified company delivering 13 premium services under one trusted brand.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.7, duration: 0.8 }}
               className="mt-8 md:mt-12 flex items-center gap-6 md:gap-10"
            >
               <div>
                  <div className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: '"Inter Tight", sans-serif' }}>13</div>
                  <div className="text-[10px] md:text-xs text-[#EBA60A] font-bold uppercase tracking-[0.2em] mt-2">Premium Domains</div>
               </div>
               <div className="w-px h-16 bg-white/20"></div>
               <div>
                  <div className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: '"Inter Tight", sans-serif' }}>1</div>
                  <div className="text-[10px] md:text-xs text-[#EBA60A] font-bold uppercase tracking-[0.2em] mt-2">Trusted Brand</div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Vision and Mission */}
      <section className="py-12 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
        {/* Grid Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: 'linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)',
            backgroundSize: '4rem 4rem'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 gap-4 md:gap-8 lg:gap-12">
            
            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 md:p-14 bg-white border-2 border-black relative group flex flex-col shadow-[4px_4px_0px_0px_#EBA60A] md:shadow-[8px_8px_0px_0px_#EBA60A]"
            >
              <Eye className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-black mb-3 md:mb-6 stroke-[1.5]" />
              <h2 className="text-[1.35rem] leading-none sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 md:mb-4" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Our Vision</h2>
              <p className="text-black/70 leading-snug md:leading-relaxed text-[10px] sm:text-xs md:text-lg font-medium mt-1">
                To become the global standard for premium ecosystem services, where clients can seamlessly access any high-end professional service—from solar solutions to interior design—without ever compromising on quality or trust.
              </p>
            </motion.div>

            {/* Image 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hidden lg:block border-2 border-black relative bg-[#EBA60A] aspect-video lg:aspect-auto overflow-hidden shadow-[8px_8px_0px_0px_#EBA60A]"
            >
              <img src="/images/optimized/Architecture & Design .webp" alt="Architecture" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>

            {/* Image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block border-2 border-black relative bg-[#EBA60A] aspect-video lg:aspect-auto overflow-hidden shadow-[8px_8px_0px_0px_#EBA60A]"
            >
              <img src="/images/optimized/Interior-Design .webp" alt="Interior Design" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
            
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 sm:p-6 md:p-14 bg-black text-white border-2 border-black relative group flex flex-col shadow-[4px_4px_0px_0px_#EBA60A] md:shadow-[8px_8px_0px_0px_#EBA60A]"
            >
              <Target className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-[#EBA60A] mb-3 md:mb-6 stroke-[1.5]" />
              <h2 className="text-[1.35rem] leading-none sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 md:mb-4 text-[#EBA60A]" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Our Mission</h2>
              <p className="text-[#A3A3A3] leading-snug md:leading-relaxed text-[10px] sm:text-xs md:text-lg font-medium mt-1">
                To provide the top 1% of experts across 13 domains, offering our clients a stress-free, single-point-of-contact experience that guarantees flawless execution on every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Values (Small, Minimal, Creative) */}
      <section className="bg-[#050505] py-8 md:py-24 relative overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Massive Background Text Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-[0.03]">
          <h2 className="text-[18vw] font-black uppercase text-white whitespace-nowrap leading-none" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
            VALUES
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Minimal Header */}
          <div className="mb-6 md:mb-16">
            <h2 className="text-[10px] md:text-xs font-bold text-[#EBA60A] uppercase tracking-[0.4em] mb-2">WHAT DRIVES US</h2>
            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-white" style={{ fontFamily: '"Inter Tight", sans-serif' }}>Core Values.</h3>
          </div>

          {/* Minimal Grid - FORCED 4 COLUMNS ON ALL SCREENS (1 LINE) */}
          <div className="grid grid-cols-4 gap-2 md:gap-8 lg:gap-12">
            {[
              { title: 'Excellence', desc: 'Top-tier quality & in-house experts.' },
              { title: 'Integrity', desc: 'Transparent & honest communication.' },
              { title: 'Innovation', desc: 'Evolving with the latest technology.' },
              { title: 'Guidance', desc: 'Your single, trusted project advisor.' }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group cursor-default flex flex-col"
              >
                {/* Creative Line-Animated Header */}
                <div className="flex flex-col mb-2 md:mb-5 border-b border-white/10 pb-2 md:pb-4 group-hover:border-[#EBA60A] transition-colors duration-500 relative">
                  <span className="text-[9px] md:text-xs font-bold text-gray-600 group-hover:text-[#EBA60A] transition-colors duration-500 mb-1">0{i + 1}</span>
                  <h4 className="text-[9px] sm:text-xs md:text-xl lg:text-2xl font-black uppercase tracking-tighter md:tracking-tight text-white group-hover:text-[#EBA60A] transition-colors duration-500 leading-tight m-0 break-words" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                    {value.title}
                  </h4>
                  {/* Expanding accent line */}
                  <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-[#EBA60A] group-hover:w-full transition-all duration-700 ease-out"></div>
                </div>
                
                {/* Minimal Description */}
                <p className="text-[#888888] text-[8px] sm:text-[10px] md:text-sm leading-snug md:leading-relaxed group-hover:text-white transition-colors duration-500">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. The Hive Concept & Why PLAN B */}
      <section className="py-16 md:py-32 bg-[#EBA60A] text-black overflow-hidden relative border-y-8 border-black">
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
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            
            {/* Massive Image - Moved to Top on Mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2 relative aspect-[4/3] md:aspect-auto md:min-h-[600px] border-4 border-black bg-black overflow-hidden shadow-[-8px_8px_0px_0px_black] md:shadow-[-16px_16px_0px_0px_black]"
            >
               <img src="/images/optimized/Construction-Services .webp" alt="Construction and Harmony" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col justify-center space-y-12 md:space-y-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <Hexagon className="w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" strokeWidth={2} />
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                    The Hive <br className="hidden md:block"/> Concept
                  </h3>
                </div>
                <div className="pl-4 md:pl-6 border-l-4 border-black">
                  <p className="text-base md:text-xl leading-relaxed font-medium text-black/80">
                    The Hive is our proprietary operational model. Just like a beehive works in perfect synchronization, our 13 service domains communicate flawlessly. When you hire our Architects, they are already coordinating with our in-house Home Automation and Deep Cleaning teams. No silos, no delays, just perfect harmony.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 shrink-0 mt-1" strokeWidth={2} />
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                    Why <br className="hidden md:block"/> "PLAN B"?
                  </h3>
                </div>
                <div className="pl-4 md:pl-6 border-l-4 border-black">
                  <p className="text-base md:text-xl leading-relaxed font-medium text-black/80 mb-4">
                    For decades, the standard way of doing things—hiring individual contractors, managing disputes, and facing hidden costs—has been "Plan A". We realized Plan A is broken. 
                  </p>
                  <p className="text-base md:text-xl leading-relaxed font-medium text-black/80">
                    We are <strong className="font-black text-black">PLAN B</strong>. The superior, risk-free alternative where everything is managed for you under one premium umbrella.
                  </p>
                </div>
              </motion.div>
            </div>

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
