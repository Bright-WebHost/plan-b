import React from 'react';
import { RouteState } from '../../types';

// Import newly refactored sections
import { HeroSection } from '../home/HeroSection';
import { MarqueeDivider } from '../home/MarqueeDivider';
import { WhyChooseUsSection } from '../home/WhyChooseUsSection';
import { ServiceCategoriesSection } from '../home/ServiceCategoriesSection';
import { FeaturedPartnersSection } from '../home/FeaturedPartnersSection';
import { StatisticsSection } from '../home/StatisticsSection';
import { TestimonialsSection } from '../home/TestimonialsSection';
import { CtaSection } from '../home/CtaSection';
import { AboutSection } from '../home/AboutSection';

interface HomePageProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)]">
      <HeroSection onNavigate={onNavigate} />
      <MarqueeDivider />
      <AboutSection onNavigate={onNavigate} />
      <WhyChooseUsSection />
      <ServiceCategoriesSection onNavigate={onNavigate} />
      <FeaturedPartnersSection onNavigate={onNavigate} />
      <StatisticsSection />
      <TestimonialsSection />
      <CtaSection onNavigate={onNavigate} onOpenQuote={onOpenQuote} />
    </div>
  );
};