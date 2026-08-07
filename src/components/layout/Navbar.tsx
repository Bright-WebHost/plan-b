import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Hexagon,
  Search,
  Calculator,
  Menu,
  X,
  ChevronDown,
  Building2,
  PhoneCall,
  Briefcase
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../../data/mockData';
import { RouteState } from '../../types';

interface NavbarProps {
  currentRoute: RouteState;
  onNavigate: (route: RouteState) => void;
  onOpenSearch: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onNavigate,
  onOpenSearch,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const isActive = (pageName: string) => currentRoute.page === pageName;

  const handleNavClick = (route: RouteState) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--bg-natural)]/90 backdrop-blur-xl border-b border-[var(--border-natural)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick({ page: 'home' })}
          className="flex items-center group text-left focus:outline-none"
        >
          <div className="relative flex items-center justify-center">
            <img src="/logo.png" alt="Plan B Logo" className="h-16 md:h-20 w-auto object-contain" />
          </div>
        </button>

        {/* Desktop Main Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-sm font-medium text-[var(--text-muted)]">
          <button
            onClick={() => handleNavClick({ page: 'home' })}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('home') ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold' : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick({ page: 'about' })}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('about') ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold' : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
            }`}
          >
            About Us
          </button>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick({ page: 'services' })}
              className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 ${
                isActive('services')
                  ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold'
                  : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
              }`}
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[800px] z-50"
                >
                  <div className="bg-[var(--bg-natural)] border border-[var(--border-natural)] rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-3 backdrop-blur-2xl">
                    <div className="col-span-3 pb-2 border-b border-[var(--border-natural)] flex items-center justify-between">
                      <span className="text-xs font-bold text-[var(--accent-yellow)] uppercase tracking-wider flex items-center gap-1.5">
                        <Building2 className="w-4 h-4" /> All 13 Service Domains
                      </span>
                    </div>

                    {SERVICE_CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleNavClick({ page: 'services' })}
                        className="p-2.5 rounded-xl hover:bg-[var(--accent-yellow)]/10 border border-transparent hover:border-[var(--accent-yellow)]/20 text-left transition-all group flex items-start gap-3"
                      >
                        <div>
                          <div className="text-xs font-bold text-[var(--text-primary)] group-hover:text-[var(--text-primary)] transition-colors">
                            {cat.name}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => handleNavClick({ page: 'companies' })}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('companies')
                ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold'
                : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
            }`}
          >
            Companies We Represent
          </button>

          <button
            onClick={() => handleNavClick({ page: 'projects' })}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('projects') ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold' : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
            }`}
          >
            Projects
          </button>

          <button
            onClick={() => handleNavClick({ page: 'contact' })}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('contact') ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold' : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQuote}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-[#000000] bg-[var(--accent-yellow)] hover:opacity-90 transition-all shadow-md flex items-center gap-2 uppercase tracking-wide"
          >
            Get a Quote
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--text-primary)]" /> : <Menu className="w-6 h-6 text-[var(--text-primary)]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[var(--bg-natural)] border-b border-[var(--border-natural)] px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto"
          >
            <div className="grid grid-cols-1 gap-2 text-sm font-medium">
              {[
                { page: 'home', label: 'Home' },
                { page: 'about', label: 'About Us' },
                { page: 'services', label: 'Services' },
                { page: 'companies', label: 'Companies We Represent' },
                { page: 'projects', label: 'Projects' },
                { page: 'contact', label: 'Contact Us' }
              ].map(item => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick({ page: item.page as any })}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isActive(item.page)
                      ? 'bg-[var(--accent-yellow)]/20 border-[var(--accent-yellow)]/50 text-[var(--text-primary)] font-bold'
                      : 'bg-white border-[var(--border-natural)] text-[var(--text-muted)] hover:bg-[var(--accent-yellow)]/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-4 bg-[var(--accent-yellow)] hover:opacity-90 text-black font-bold rounded-xl text-sm flex items-center justify-center gap-2 uppercase"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
