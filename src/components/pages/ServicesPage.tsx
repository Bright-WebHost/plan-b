import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, ArrowRight, Building2, Palette, HardHat, Zap, Sun, Cpu, Code, Sparkles, Bug, Trees, Shield, Droplets, Paintbrush } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface ServicesPageProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

// Map string icon names to Lucide icons
const iconMap: Record<string, any> = {
  Building2, Palette, HardHat, Zap, Sun, Cpu, Code, Sparkles, Bug, Trees, Shield, Droplets, Paintbrush
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EBA60A]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hexagon className="w-12 h-12 text-[#EBA60A] fill-[#EBA60A]/20 mx-auto mb-6" />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black uppercase font-serif-title mb-6"
          >
            13 Specialized <span className="text-[#EBA60A]">Domains</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#A3A3A3] max-w-2xl mx-auto font-medium"
          >
            A unified ecosystem of premium services. One powerful team, endless possibilities. When you hire us for one service, you unlock them all.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((service, i) => {
              const Icon = iconMap[service.iconName] || Hexagon;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-[var(--border-natural)] hover:shadow-2xl hover:border-[#EBA60A] transition-all group flex flex-col h-full"
                >
                  <div className="h-56 relative overflow-hidden">
                    <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div className="w-12 h-12 bg-[#EBA60A] text-black rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-lg uppercase">
                        In-House Experts
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-3 group-hover:text-[#EBA60A] transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm mb-6 flex-1 line-clamp-3">
                      {service.description}
                    </p>
                    
                    <button
                      onClick={onOpenQuote}
                      className="w-full py-4 bg-[#F9F9F9] border border-[#E5E5E5] group-hover:bg-[#EBA60A] group-hover:border-[#EBA60A] text-black font-bold rounded-xl transition-colors flex items-center justify-center gap-2 uppercase text-sm"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-[#EBA60A] text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase font-serif-title mb-6">Need multiple services?</h2>
          <p className="text-xl font-medium mb-8">We provide everything under one roof. Let us build your project seamlessly from start to finish.</p>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-black text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all uppercase tracking-wide inline-flex items-center gap-2"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
