import React from 'react';
import { motion } from 'motion/react';
import { Hexagon, MapPin, Star, Users, ArrowRight } from 'lucide-react';
import { PARTNER_COMPANIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface CompaniesPageProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const CompaniesPage: React.FC<CompaniesPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EBA60A]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black uppercase font-serif-title mb-6"
          >
            Our Verified <span className="text-[#EBA60A]">Partners</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#A3A3A3] max-w-2xl mx-auto font-medium"
          >
            We only represent the best. Discover the elite companies powering our 13 service domains.
          </motion.p>
        </div>
      </section>

      {/* Companies List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {PARTNER_COMPANIES.map((company, i) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl border border-[var(--border-natural)] overflow-hidden hover:shadow-2xl hover:border-[#EBA60A] transition-all group flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden shrink-0">
                  <img src={company.heroBanner} alt={company.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 flex items-center gap-4">
                    <img src={company.logo} alt="Logo" className="w-16 h-16 rounded-xl object-cover border-2 border-white bg-white" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-[#EBA60A] text-black text-xs font-bold rounded-lg uppercase tracking-wider">
                      {company.categoryName}
                    </span>
                    <div className="flex items-center gap-1 text-[#EBA60A] text-xs font-bold bg-[#EBA60A]/10 px-2.5 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {company.rating} ({company.reviewCount} Reviews)
                    </div>
                  </div>

                  <h3 className="text-3xl font-black uppercase tracking-tight mb-4 group-hover:text-[#EBA60A] transition-colors">
                    {company.name}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                    {company.about}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <MapPin className="w-4 h-4 text-[#EBA60A]" /> {company.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <Users className="w-4 h-4 text-[#EBA60A]" /> {company.teamSize}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button
                      onClick={onOpenQuote}
                      className="px-6 py-3 bg-[#0A0A0A] hover:bg-[#EBA60A] text-white hover:text-black font-bold rounded-xl transition-all uppercase tracking-wide flex items-center justify-center gap-2 text-sm"
                    >
                      Request a Quote
                    </button>
                    <button
                      onClick={() => onNavigate({ page: 'projects' })}
                      className="px-6 py-3 bg-[#F9F9F9] border border-[#E5E5E5] hover:bg-white text-black font-bold rounded-xl transition-all uppercase tracking-wide text-sm text-center"
                    >
                      View Projects
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-[#EBA60A] text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Hexagon className="w-12 h-12 text-black fill-black/10 mx-auto mb-6" />
          <h2 className="text-4xl font-black uppercase font-serif-title mb-6">Want to join The Hive?</h2>
          <p className="text-xl font-medium mb-8">We are always looking for top-tier service providers to partner with.</p>
          <button
            onClick={() => onNavigate({ page: 'contact' })}
            className="px-8 py-4 bg-black text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all uppercase tracking-wide inline-flex items-center gap-2"
          >
            Partner With Us <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
