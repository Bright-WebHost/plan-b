import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { PARTNER_COMPANIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface FeaturedPartnersSectionProps {
  onNavigate: (route: RouteState) => void;
}

export const FeaturedPartnersSection: React.FC<FeaturedPartnersSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-[var(--bg-card)] border-y border-[var(--border-natural)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[var(--accent-yellow)] uppercase tracking-widest mb-4">Elite Ecosystem</h2>
          <h3 className="text-4xl font-extrabold uppercase font-serif-title">Featured Partners</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PARTNER_COMPANIES.slice(0, 3).map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl border border-[var(--border-natural)] overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
              onClick={() => onNavigate({ page: 'companies' })}
            >
              <div className="h-48 relative overflow-hidden">
                <img src={company.heroBanner} alt={company.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#EBA60A] text-black text-xs font-bold rounded-lg uppercase tracking-wider">{company.categoryName}</span>
                  <div className="flex items-center gap-1 text-white text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#EBA60A] text-[#EBA60A]" />
                    {company.rating}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-yellow)] transition-colors line-clamp-1">{company.name}</h4>
                <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">{company.about}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-natural)]">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border-2 border-white flex items-center justify-center text-xs font-bold">{company.teamSize.split(' ')[0]}</div>
                  </div>
                  <span className="text-xs font-medium text-[var(--text-muted)]">Experts</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate({ page: 'companies' })}
            className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-[#EBA60A] hover:text-black transition-all shadow-lg uppercase tracking-wide inline-flex items-center gap-2"
          >
            View All Partners <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
