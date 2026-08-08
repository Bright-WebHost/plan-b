import React, { useState, useEffect } from 'react';
import { RouteState } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ContactPage } from './components/pages/ContactPage';

import { SearchModal } from './components/common/SearchModal';
import { QuoteModal } from './components/common/QuoteModal';
import { WhatsAppWidget } from './components/common/WhatsAppWidget';

export function App() {
  const [route, setRoute] = useState<RouteState>({ page: 'home' });
  const [searchOpen, setSearchOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategoryId, setQuoteCategoryId] = useState<string | undefined>(undefined);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const handleNavigate = (newRoute: RouteState) => {
    setRoute(newRoute);
  };

  const handleOpenQuote = (categoryId?: string) => {
    setQuoteCategoryId(categoryId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-natural)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[var(--accent-yellow)] selection:text-black">
      {/* Global Navbar */}
      <Navbar
        currentRoute={route}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {route.page === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}
        {route.page === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}
        {route.page === 'services' && (
          <ServicesPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}
        {route.page === 'projects' && (
          <ProjectsPage
            initialProjectId={route.params?.projectId}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}
        {route.page === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Global Interactive Modals & Widgets */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCategoryId={quoteCategoryId}
      />

      <WhatsAppWidget />
    </div>
  );
}

export default App;
