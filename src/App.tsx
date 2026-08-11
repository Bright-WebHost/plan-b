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
import { WhatsAppWidget } from './components/common/WhatsAppWidget';

export function App() {
  // Initialize route from the current URL path
  const getInitialRoute = (): RouteState => {
    const path = window.location.pathname.substring(1); // remove leading slash
    if (!path) return { page: 'home' };
    
    // Basic route parsing (can be expanded later for params)
    const validPages = ['home', 'about', 'services', 'projects', 'contact'];
    if (validPages.includes(path)) {
      return { page: path as any };
    }
    return { page: 'home' };
  };

  const [route, setRoute] = useState<RouteState>(getInitialRoute());
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle Browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      const validPages = ['home', 'about', 'services', 'projects', 'contact'];
      if (validPages.includes(path)) {
        setRoute({ page: path as any });
      } else {
        setRoute({ page: 'home' });
      }
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync state to URL and Scroll to top whenever route changes
  useEffect(() => {
    const currentPath = window.location.pathname;
    const newPath = route.page === 'home' ? '/' : `/${route.page}`;
    
    // Update URL if it doesn't match the state
    if (currentPath !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    
    window.scrollTo(0, 0);
  }, [route]);

  const handleNavigate = (newRoute: RouteState) => {
    setRoute(newRoute);
  };



  return (
    <div className="min-h-screen bg-[var(--bg-natural)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[var(--accent-yellow)] selection:text-black">
      {/* Global Navbar */}
      <Navbar
        currentRoute={route}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {route.page === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {route.page === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {route.page === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}
        {route.page === 'projects' && (
          <ProjectsPage
            initialProjectId={route.params?.projectId}
            onNavigate={handleNavigate}
          />
        )}
        {route.page === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Global Interactive Modals & Widgets */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
      />



      <WhatsAppWidget />
    </div>
  );
}

export default App;
