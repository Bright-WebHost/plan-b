import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Building2, Briefcase } from 'lucide-react';
import { SERVICE_CATEGORIES, PROJECTS_DATA } from '../../data/mockData';
import { RouteState } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (route: RouteState) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredCategories = trimmed
    ? SERVICE_CATEGORIES.filter(
        c => c.name.toLowerCase().includes(trimmed) || c.description.toLowerCase().includes(trimmed)
      )
    : SERVICE_CATEGORIES.slice(0, 4);



  const filteredProjects = trimmed
    ? PROJECTS_DATA.filter(
        pr => pr.title.toLowerCase().includes(trimmed) || pr.category.toLowerCase().includes(trimmed) || pr.companyName.toLowerCase().includes(trimmed)
      )
    : [];

  const handleSelectCategory = (catId: string) => {
    onNavigate({ page: 'services' });
    onClose();
  };



  const handleSelectProject = (projId: string) => {
    onNavigate({ page: 'projects' });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border-natural)] rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header Search Input */}
          <div className="relative flex items-center px-6 py-4 border-b border-[var(--border-natural)] bg-[var(--bg-natural)]">
            <Search className="w-6 h-6 text-[var(--accent-yellow)] mr-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search services and projects..."
              className="w-full bg-transparent text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none text-lg font-medium"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-1 transition-colors mr-2 text-xs font-semibold"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results Area */}
          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            {/* Quick Service Categories */}
            {filteredCategories.length > 0 && (
              <div>
                <h4 className="text-xs font-bold tracking-wider text-[var(--text-primary)] uppercase mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[var(--accent-yellow)]" /> Service Categories
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {filteredCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-natural)] hover:bg-[var(--accent-yellow)]/10 border border-[var(--border-natural)] hover:border-[var(--accent-yellow)]/50 transition-all text-left group"
                    >
                      <div>
                        <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">
                          {cat.name}
                        </span>
                        <p className="text-xs text-[var(--text-muted)] line-clamp-1">{cat.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </div>
            )}


            {/* Projects */}
            {filteredProjects.length > 0 && (
              <div>
                <h4 className="text-xs font-bold tracking-wider text-[var(--text-primary)] uppercase mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[var(--accent-yellow)]" /> Portfolio Projects
                </h4>
                <div className="space-y-2">
                  {filteredProjects.map(proj => (
                    <button
                      key={proj.id}
                      onClick={() => handleSelectProject(proj.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-[var(--bg-natural)] hover:bg-[var(--accent-yellow)]/10 border border-[var(--border-natural)] hover:border-[var(--accent-yellow)]/50 transition-all text-left group"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-12 h-10 rounded-lg object-cover border border-[var(--border-natural)]"
                        />
                        <div>
                          <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)]">
                            {proj.title}
                          </span>
                          <p className="text-xs text-[var(--text-muted)]">{proj.companyName} • {proj.location}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {trimmed &&
              filteredProjects.length === 0 && (
                <div className="text-center py-12 text-[var(--text-muted)]">
                  <p className="text-base font-medium">No results found for "{query}"</p>
                </div>
              )}
          </div>

          <div className="p-4 border-t border-[var(--border-natural)] bg-[var(--bg-natural)] text-center text-xs text-[var(--text-muted)]">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-[var(--border-natural)] text-[var(--text-primary)] font-mono">ESC</kbd> to close • PLAN B Search Index
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
