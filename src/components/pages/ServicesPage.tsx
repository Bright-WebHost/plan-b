import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, ArrowRight, Building2, Palette, HardHat, Zap, Sun, Cpu, Code, Sparkles, Bug, Trees, Shield, Droplets, Paintbrush } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface ServicesPageProps {
  onNavigate: (route: RouteState) => void;
}

// Map string icon names to Lucide icons
const iconMap: Record<string, any> = {
  Building2, Palette, HardHat, Zap, Sun, Cpu, Code, Sparkles, Bug, Trees, Shield, Droplets, Paintbrush
};

const getGridSpanClasses = (index: number) => {
  // Creating an asymmetrical bento grid layout for 13 items
  const classes = [
    'md:col-span-2 md:row-span-2', // 0: Architecture (Large)
    'md:col-span-1 md:row-span-1', // 1: Interior
    'md:col-span-1 md:row-span-2', // 2: Construction (Tall)
    'md:col-span-1 md:row-span-1', // 3: Electrical
    'md:col-span-2 md:row-span-1', // 4: Solar (Wide)
    'md:col-span-2 md:row-span-2', // 5: Home Automation (Large)
    'md:col-span-1 md:row-span-1', // 6: IT
    'md:col-span-1 md:row-span-1', // 7: Deep Cleaning
    'md:col-span-1 md:row-span-2', // 8: Pest Control (Tall)
    'md:col-span-2 md:row-span-1', // 9: Landscaping (Wide)
    'md:col-span-1 md:row-span-1', // 10: Insurance
    'md:col-span-1 md:row-span-1', // 11: Plumbing
    'md:col-span-2 md:row-span-1', // 12: Painting (Wide)
  ];
  return classes[index] || 'md:col-span-1 md:row-span-1';
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FAFAFA] text-black min-h-screen font-sans">
      {/* 1. Solid Gold Block Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden flex flex-col items-center justify-center">
        {/* Clean Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EBA60A]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="relative z-10 w-full text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#EBA60A] py-8 md:py-12 w-full max-w-[1200px] mx-auto mb-10 flex flex-col items-center justify-center"
          >
            <h1 className="text-[18vw] md:text-[12vw] font-black uppercase leading-[0.8] tracking-tighter text-black" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
              13 DOMAINS
            </h1>
            <h2 className="text-[8vw] md:text-[5vw] font-black uppercase text-white leading-none tracking-tight mt-1" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
              One Ecosystem
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#444] text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            A unified architecture of premium services. When you hire us for one domain, you seamlessly unlock the power of all thirteen.
          </motion.p>
        </div>
      </section>

      {/* 2. Bright & Clean Asymmetrical Bento Grid */}
      <section className="py-12 md:py-24 border-t border-black/5 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] md:auto-rows-[400px] gap-6 md:gap-8 grid-flow-dense">
            {SERVICE_CATEGORIES.map((service, i) => {
              const Icon = iconMap[service.iconName] || Hexagon;
              const spanClasses = getGridSpanClasses(i);
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                  className={`group relative rounded-3xl overflow-hidden bg-white border border-black/5 hover:border-[#EBA60A]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col ${spanClasses}`}
                >
                  {/* Image Area - Pure, clean, no shady overlays */}
                  <div className="relative flex-1 overflow-hidden min-h-[150px]">
                    <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    
                    {/* Top Icon */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md shadow-sm border border-black/5 flex items-center justify-center text-black group-hover:bg-[#EBA60A] transition-colors duration-500 z-10">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Clean White Content Area */}
                  <div className="bg-white p-6 md:p-8 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black mb-2 group-hover:text-[#EBA60A] transition-colors duration-300" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
                      {service.name}
                    </h3>
                    
                    {/* Description - Slides open gracefully on hover */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                      <div className="overflow-hidden">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-2 mb-6">
                          {service.detailedOverview || service.description}
                        </p>
                        
                        <button
                          onClick={() => onNavigate({ page: 'contact' })}
                          className="inline-flex items-center gap-2 text-black text-sm font-bold uppercase tracking-wider group-hover:text-[#EBA60A] transition-colors"
                        >
                          Explore Domain <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* 3. Interactive Call to Action Strip */}
      <section className="py-32 bg-[#EBA60A] text-black relative overflow-hidden border-t-8 border-black">
        {/* Animated Background Lines */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
            Build The Future <br/> With PLAN B
          </h2>
          <button
            onClick={() => onNavigate({ page: 'contact' })}
            className="group px-6 py-4 md:px-8 md:py-5 bg-black text-white rounded-full text-base md:text-lg font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 inline-flex items-center gap-4 overflow-hidden relative"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="w-10 h-10 bg-[#EBA60A] rounded-full flex items-center justify-center relative z-10 group-hover:bg-white transition-colors duration-300 text-black shrink-0">
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" strokeWidth={2.5} />
            </div>
            <div className="absolute inset-0 bg-neutral-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
      </section>
    </div>
  );
};
