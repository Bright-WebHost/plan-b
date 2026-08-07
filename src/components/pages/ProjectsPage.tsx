import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hexagon, Filter, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA, SERVICE_CATEGORIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface ProjectsPageProps {
  initialProjectId?: string;
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ initialProjectId, onNavigate, onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // We can filter by Category Name
  const categories = ['All', 'Solar', 'CCTV', 'Deep Cleaning', 'Architecture', 'Interior', 'Automation'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)] min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 bg-[#0A0A0A] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#EBA60A]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black uppercase font-serif-title mb-6"
          >
            Project <span className="text-[#EBA60A]">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#A3A3A3] max-w-2xl mx-auto font-medium"
          >
            Explore our curated gallery of premium executions across all service domains.
          </motion.p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 mr-4 text-[var(--text-muted)] font-bold text-sm uppercase">
              <Filter className="w-4 h-4" /> Filter By:
            </div>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                  activeFilter === cat 
                    ? 'bg-[#EBA60A] text-black border-[#EBA60A]' 
                    : 'bg-white text-[var(--text-muted)] border-[var(--border-natural)] hover:border-[#EBA60A] hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden border border-[var(--border-natural)] group hover:shadow-2xl hover:border-[#EBA60A] transition-all cursor-pointer flex flex-col"
                >
                  <div className="h-64 relative overflow-hidden shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#EBA60A] text-black text-[10px] font-black rounded uppercase tracking-widest shadow-md">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-[#EBA60A] transition-colors leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-bold text-[var(--text-muted)] mb-4 uppercase tracking-wider">
                      By {project.companyName}
                    </p>
                    <p className="text-[var(--text-muted)] text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[var(--border-natural)]">
                      {project.specs.slice(0,2).map((spec, idx) => (
                        <span key={idx} className="text-[10px] uppercase font-bold text-[#555555] bg-[#F0F0F0] px-2 py-1 rounded">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-[var(--text-muted)]">
              <Hexagon className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-bold">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#EBA60A] text-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-black uppercase font-serif-title mb-6">Inspired?</h2>
          <p className="text-xl font-medium mb-8">Let's create something extraordinary together.</p>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-black text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all uppercase tracking-wide inline-flex items-center gap-2"
          >
            Request a Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
