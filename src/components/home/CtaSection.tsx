import React from 'react';
import { Hexagon } from 'lucide-react';
import { RouteState } from '../../types';

interface CtaSectionProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <Hexagon className="w-16 h-16 text-[#EBA60A] fill-[#EBA60A]/20 mx-auto mb-8" />
        <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase font-serif-title tracking-tight">Ready to start your next project?</h2>
        <p className="text-xl text-[#A3A3A3] mb-10 max-w-2xl mx-auto">
          Let’s talk about how our unified team can make your next big project a massive success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-[#EBA60A] text-black font-bold rounded-xl text-lg hover:bg-[#EBA60A]/90 transition-all uppercase tracking-wide"
          >
            Get a Free Quote
          </button>
          <button
            onClick={() => onNavigate({ page: 'contact' })}
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl text-lg hover:bg-white hover:text-black transition-all uppercase tracking-wide"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
