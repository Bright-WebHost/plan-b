import React, { useState } from 'react';
import { Hexagon, Send, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { RouteState } from '../../types';

interface FooterProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: (categoryId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const nav = (page: string, params?: any) => {
    onNavigate({ page: page as any, params });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#222222] text-[#A3A3A3] relative overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#EBA60A]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#222222]">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo-black.png" alt="PLAN B Logo" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-sm text-[#A3A3A3] leading-relaxed max-w-sm">
              PLAN B is a singular, premium provider offering high-quality services across 13 specialized domains under one powerful roof.
            </p>
          </div>

          {/* Column 2: Core Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => nav('home')} className="hover:text-[#EBA60A] transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => nav('about')} className="hover:text-[#EBA60A] transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => nav('services')} className="hover:text-[#EBA60A] transition-colors">Services</button>
              </li>

              <li>
                <button onClick={() => nav('projects')} className="hover:text-[#EBA60A] transition-colors">Projects</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#EBA60A] shrink-0" /> Mangalore, Karnataka
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#EBA60A] shrink-0" /> +91 9731839227
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#EBA60A] shrink-0" /> info@planb.com
              </li>
            </ul>
          </div>
          
          {/* Column 4: CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#FFFFFF] uppercase tracking-wider">Ready to start?</h4>
            <button
              onClick={() => nav('contact')}
              className="w-full py-3 bg-[#EBA60A] hover:opacity-90 text-[#000000] font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 mt-3 uppercase tracking-wide"
            >
              Get in Touch <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#555555] gap-4">
          <p>© 2026 PLAN B. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
