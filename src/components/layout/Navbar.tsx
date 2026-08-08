import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
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

  const isActive = (pageName: string) => currentRoute.page === pageName;

  const handleNavClick = (route: RouteState) => {
    onNavigate(route);
    setMobileMenuOpen(false);
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

          <button
            onClick={() => handleNavClick({ page: 'services' })}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isActive('services')
                ? 'text-[var(--text-primary)] bg-[var(--accent-yellow)]/10 font-bold'
                : 'hover:text-[var(--text-primary)] hover:bg-[var(--accent-yellow)]/5'
            }`}
          >
            Services
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
