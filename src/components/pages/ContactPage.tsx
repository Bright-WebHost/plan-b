import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Hexagon, MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { RouteState } from '../../types';

interface ContactPageProps {
  onNavigate: (route: RouteState) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)] min-h-screen">
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EBA60A]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="relative z-10 w-full text-center px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#EBA60A] py-8 md:py-12 w-full max-w-[1200px] mx-auto mb-10 flex flex-col items-center justify-center"
          >
            <h1 className="text-[16vw] md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-black" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
              GET IN
            </h1>
            <h2 className="text-[8vw] md:text-[5vw] font-black uppercase text-white leading-none tracking-tight mt-1" style={{ fontFamily: '"Inter Tight", sans-serif' }}>
              Touch
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#444] text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed"
          >
            We are here to assist you. Reach out to our team to start planning your next premium project.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-3xl font-black uppercase font-serif-title mb-8 text-[#0A0A0A]">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-white border border-[var(--border-natural)] rounded-2xl hover:border-[#EBA60A] transition-colors">
                    <div className="w-12 h-12 bg-[#EBA60A]/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#EBA60A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-1">Our Headquarters</h4>
                      <p className="text-[var(--text-muted)] text-sm">Suite 400, Vertex Tower, Skyline Ave<br/>Mangalore, Karnataka 575001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white border border-[var(--border-natural)] rounded-2xl hover:border-[#EBA60A] transition-colors">
                    <div className="w-12 h-12 bg-[#EBA60A]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-[#EBA60A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-1">Phone</h4>
                      <p className="text-[var(--text-muted)] text-sm">+91 81479 89035</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white border border-[var(--border-natural)] rounded-2xl hover:border-[#EBA60A] transition-colors">
                    <div className="w-12 h-12 bg-[#EBA60A]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-[#EBA60A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-1">Email</h4>
                      <p className="text-[var(--text-muted)] text-sm">info@planb.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-white border border-[var(--border-natural)] rounded-2xl hover:border-[#EBA60A] transition-colors">
                    <div className="w-12 h-12 bg-[#EBA60A]/20 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-[#EBA60A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold uppercase tracking-tight mb-1">Working Hours</h4>
                      <p className="text-[var(--text-muted)] text-sm">Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white border border-[var(--border-natural)] rounded-3xl p-8 md:p-12 shadow-xl">
                <h3 className="text-3xl font-black uppercase font-serif-title mb-8 text-[#0A0A0A]">Send us a message</h3>
                
                {formState === 'success' ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-[var(--text-muted)]">We will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">First Name</label>
                        <input required type="text" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#EBA60A] focus:ring-1 focus:ring-[#EBA60A] transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider mb-2">Last Name</label>
                        <input required type="text" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#EBA60A] focus:ring-1 focus:ring-[#EBA60A] transition-all" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                      <input required type="email" className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#EBA60A] focus:ring-1 focus:ring-[#EBA60A] transition-all" />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2">Interested Service</label>
                      <select className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#EBA60A] focus:ring-1 focus:ring-[#EBA60A] transition-all appearance-none">
                        <option>General Inquiry</option>
                        <option>Architecture & Design</option>
                        <option>Construction Services</option>
                        <option>Solar Solutions</option>
                        <option>Deep Cleaning</option>
                        <option>Home Automation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2">Message</label>
                      <textarea required rows={4} className="w-full bg-[#F9F9F9] border border-[#E5E5E5] rounded-xl px-4 py-3 focus:outline-none focus:border-[#EBA60A] focus:ring-1 focus:ring-[#EBA60A] transition-all resize-none"></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full py-4 bg-[#EBA60A] text-black font-bold rounded-xl hover:bg-[#EBA60A]/90 transition-all uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {formState === 'submitting' ? 'Sending...' : (
                        <>Send Message <Send className="w-4 h-4" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-[#E5E5E5] relative grayscale border-t border-[#D0D0D0]">
        <iframe 
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
