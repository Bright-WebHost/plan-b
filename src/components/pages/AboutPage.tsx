import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, Target, Eye, ShieldCheck, HeartHandshake, Zap, Compass, Users } from 'lucide-react';
import { RouteState } from '../../types';

interface AboutPageProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)]">
      {/* 1. Our Story & Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#0A0A0A] text-white">
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Office Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/40 to-[#0A0A0A]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase font-serif-title mb-6"
          >
            Our <span className="text-[#EBA60A]">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#A3A3A3] max-w-3xl mx-auto leading-relaxed"
          >
            Born from the necessity to streamline fragmented service industries, PLAN B was established as a partnership of 4 visionaries. We saw the chaos in managing multiple vendors for architecture, security, cleaning, and tech. Our solution? A unified ecosystem delivering 13 premium service domains under one trusted brand.
          </motion.p>
        </div>
      </section>

      {/* 2 & 3. Vision and Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-[#F9F9F9] rounded-3xl border border-[#E5E5E5] relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#EBA60A]/10 rounded-full blur-3xl group-hover:bg-[#EBA60A]/20 transition-all"></div>
              <Eye className="w-12 h-12 text-[#EBA60A] mb-6" />
              <h2 className="text-3xl font-black uppercase font-serif-title mb-4">Our Vision</h2>
              <p className="text-[#555555] leading-relaxed text-lg">
                To become the global standard for premium ecosystem services, where clients can seamlessly access any high-end professional service—from solar solutions to interior design—without ever compromising on quality or trust.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-[#0A0A0A] text-white rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#EBA60A]/10 rounded-full blur-3xl group-hover:bg-[#EBA60A]/20 transition-all"></div>
              <Target className="w-12 h-12 text-[#EBA60A] mb-6" />
              <h2 className="text-3xl font-black uppercase font-serif-title mb-4">Our Mission</h2>
              <p className="text-[#A3A3A3] leading-relaxed text-lg">
                To aggregate, vet, and manage the top 1% of service providers across 13 domains, offering our clients a stress-free, single-point-of-contact experience that guarantees escrow-protected, flawless execution on every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-widest mb-4">What Drives Us</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title">Core Values</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', icon: ShieldCheck, desc: 'We only partner with the best, ensuring top-tier quality.' },
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
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-[#141414] border border-[#262626] rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-10 h-10 text-[#EBA60A]" />
                </div>
                <h4 className="text-xl font-bold mb-3 uppercase tracking-wide">{value.title}</h4>
                <p className="text-[#A3A3A3] text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 & 6. The Hive Concept & Why PLAN B */}
      <section className="py-24 bg-[#EBA60A] text-black overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <Hexagon className="w-[800px] h-[800px]" strokeWidth={0.5} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold uppercase font-serif-title mb-6">The Hive Concept</h3>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                The Hive is our proprietary operational model. Just like a beehive works in perfect synchronization, our 13 service domains communicate flawlessly. When you hire our Architects, they are already coordinating with our Home Automation and Deep Cleaning partners. No silos, no delays, just perfect harmony.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold uppercase font-serif-title mb-6">Why "PLAN B"?</h3>
              <p className="text-lg leading-relaxed font-medium">
                For decades, the standard way of doing things—hiring individual contractors, managing disputes, and facing hidden costs—has been "Plan A". We realized Plan A is broken. 
                <br /><br />
                We are <strong>PLAN B</strong>. The superior, risk-free alternative where everything is managed for you under one premium umbrella.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Meet the Core Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-widest mb-4">Partnership of 4</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title">Meet the Core Team</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[3/4] mb-6 rounded-3xl overflow-hidden bg-[#F0F0F0] relative">
                  <div className="absolute inset-0 flex items-center justify-center text-[#A3A3A3]">
                    <Users className="w-12 h-12 opacity-50" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                </div>
                <h4 className="text-xl font-bold uppercase tracking-wide">Founding Partner {member}</h4>
                <p className="text-[#555555]">Board of Directors</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Our Office */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" alt="PLAN B Office" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-widest mb-4">HQ & Operations</h2>
              <h3 className="text-4xl font-extrabold uppercase font-serif-title mb-6">Our Office</h3>
              <p className="text-[#A3A3A3] text-lg leading-relaxed mb-8">
                Located in the heart of Mangalore, our headquarters acts as the central nervous system of The Hive. This is where our project managers monitor the progress of our 13 service domains, coordinate with our verified partners, and ensure every client request is executed with precision.
              </p>
              <button
                onClick={() => onNavigate({ page: 'contact' })}
                className="px-8 py-4 bg-[#EBA60A] text-black font-bold rounded-xl text-lg hover:bg-[#EBA60A]/90 transition-all uppercase tracking-wide"
              >
                Visit Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
