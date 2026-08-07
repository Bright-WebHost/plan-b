import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Hexagon, Star, Shield, Users, Briefcase, ChevronRight } from 'lucide-react';
import { SERVICE_CATEGORIES, PARTNER_COMPANIES, TESTIMONIALS_DATA } from '../../data/mockData';
import { RouteState } from '../../types';

interface HomePageProps {
  onNavigate: (route: RouteState) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    '/images/indiqube_p1_i1.jpeg',
    '/images/techfin_en_p1_i11.jpeg',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    '/images/intense_ca_p3_i1.png',
    'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 5) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[var(--bg-natural)] text-[var(--text-primary)]">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Abstract shapes and glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#EBA60A]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EBA60A]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Text & CTA */}
          <div className="w-full lg:w-1/2 text-left space-y-8 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight uppercase font-serif-title">
                The Ultimate <br/><span className="text-[#EBA60A]">Partnership</span><br/> Ecosystem
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#A3A3A3] font-medium max-w-xl"
            >
              Access 13 premium service domains delivered by our vetted network of industry-leading partner companies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <button
                onClick={() => onNavigate({ page: 'services' })}
                className="w-full sm:w-auto px-8 py-4 bg-[#EBA60A] text-black font-bold rounded-xl text-lg hover:bg-[#EBA60A]/90 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                Explore Services <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate({ page: 'companies' })}
                className="w-full sm:w-auto px-8 py-4 bg-[#141414] text-white border border-[#262626] hover:border-[#EBA60A]/50 font-bold rounded-xl text-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                Our Partners
              </button>
            </motion.div>
          </div>

          {/* Right Side: Scattered Collage */}
          <div className="w-full lg:w-1/2 relative h-[400px] md:h-[600px] mt-10 lg:mt-0 order-1 lg:order-2 perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, rotateY: 15, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -15, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                
                {/* Top Left Image (Medium) */}
                <div className="absolute top-4 left-0 w-[40%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A1A1A] z-20 transform -rotate-6">
                  <img src={heroImages[(currentImageIndex + 1) % heroImages.length]} className="w-full h-full object-cover" alt="Service 1" />
                </div>

                {/* Top Right Image (Small) */}
                <div className="absolute top-10 right-4 w-[30%] h-[35%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A1A1A] z-10 transform rotate-6">
                  <img src={heroImages[(currentImageIndex + 2) % heroImages.length]} className="w-full h-full object-cover" alt="Service 2" />
                </div>

                {/* Bottom Left Image (Wide/Short) */}
                <div className="absolute bottom-16 left-6 w-[45%] h-[30%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A1A1A] z-10 transform rotate-2">
                  <img src={heroImages[(currentImageIndex + 3) % heroImages.length]} className="w-full h-full object-cover" alt="Service 3" />
                </div>

                {/* Bottom Right Image (Medium) */}
                <div className="absolute bottom-8 right-0 w-[35%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#1A1A1A] z-20 transform -rotate-3">
                  <img src={heroImages[(currentImageIndex + 4) % heroImages.length]} className="w-full h-full object-cover" alt="Service 4" />
                </div>

                {/* Main Center Image (Largest, Front) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[70%] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(235,166,10,0.4)] border-4 border-[#EBA60A] z-30">
                  <img src={heroImages[currentImageIndex]} className="w-full h-full object-cover" alt="Active Service" />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. About PLAN B */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold text-[var(--accent-yellow)] uppercase tracking-widest flex items-center gap-2">
                <Hexagon className="w-4 h-4 fill-[var(--accent-yellow)]/20" /> About PLAN B
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] leading-tight uppercase font-serif-title">
                Redefining Premium Service Delivery
              </h3>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                PLAN B is an exclusive partnership ecosystem of 4 visionary leaders, aggregating the finest companies across 13 specialized domains. We simplify complex projects by providing a single point of contact for world-class services, ensuring unparalleled quality, transparency, and accountability.
              </p>
              <button
                onClick={() => onNavigate({ page: 'about' })}
                className="inline-flex items-center gap-2 font-bold text-[var(--text-primary)] hover:text-[var(--accent-yellow)] transition-colors border-b-2 border-transparent hover:border-[var(--accent-yellow)] pb-1"
              >
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Premium Office" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose PLAN B */}
      <section className="py-24 bg-[var(--bg-card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[var(--accent-yellow)] uppercase tracking-widest mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title">The PLAN B Advantage</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Vetted Partners', desc: 'Every company in our ecosystem undergoes rigorous quality and financial auditing.', icon: Shield },
              { title: 'Unified Experience', desc: 'A single point of contact for complex projects requiring multiple disciplines.', icon: Hexagon },
              { title: 'Escrow Protection', desc: 'Your funds are secured and released only upon successful milestone completion.', icon: CheckCircle2 }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--border-natural)] hover:border-[var(--accent-yellow)] transition-all hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-[var(--accent-yellow)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[var(--accent-yellow)] group-hover:text-black transition-colors text-[var(--accent-yellow)]">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-[var(--text-muted)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="py-24 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-widest mb-4">How It Works</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title">Seamless Project Execution</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements with our experts.' },
              { step: '02', title: 'Curation', desc: 'We match you with the perfect partners from our 13 domains.' },
              { step: '03', title: 'Execution', desc: 'Our partners deliver premium services under strict quality control.' },
              { step: '04', title: 'Handover', desc: 'Final inspection and seamless handover of your completed project.' }
            ].map((step, i) => (
              <div key={i} className="relative p-6 border border-[#262626] rounded-2xl bg-[#141414] hover:border-[#EBA60A]/50 transition-colors">
                <span className="text-6xl font-black text-[#262626] absolute top-2 right-4 -z-10">{step.step}</span>
                <h4 className="text-xl font-bold text-white mb-2 pt-6">{step.title}</h4>
                <p className="text-[#A3A3A3] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Categories */}
      <section className="py-24 bg-[var(--bg-natural)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-[var(--accent-yellow)] uppercase tracking-widest mb-4">13 Specialized Domains</h2>
              <h3 className="text-4xl font-extrabold uppercase font-serif-title text-[var(--text-primary)]">Comprehensive Services</h3>
            </div>
            <button onClick={() => onNavigate({ page: 'services' })} className="hidden md:flex items-center gap-2 font-bold hover:text-[var(--accent-yellow)] transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_CATEGORIES.slice(0, 8).map((cat, i) => (
              <motion.button
                key={cat.id}
                onClick={() => onNavigate({ page: 'services' })}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.05 }}
                className="group relative h-48 rounded-2xl overflow-hidden text-left"
              >
                <img src={cat.heroImage} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/80 transition-colors"></div>
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight mb-1">{cat.name}</h4>
                    <span className="text-[#EBA60A] text-xs font-semibold">{cat.partnerCount} Partners</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </motion.button>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <button onClick={() => onNavigate({ page: 'services' })} className="inline-flex items-center gap-2 font-bold hover:text-[var(--accent-yellow)] transition-colors">
              View All 13 Services <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Featured Partner Companies */}
      <section className="py-24 bg-[var(--bg-card)] border-y border-[var(--border-natural)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[var(--accent-yellow)] uppercase tracking-widest mb-4">Elite Ecosystem</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title">Featured Partners</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PARTNER_COMPANIES.slice(0, 3).map((company, i) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl border border-[var(--border-natural)] overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                onClick={() => onNavigate({ page: 'companies' })}
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={company.heroBanner} alt={company.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-[#EBA60A] text-black text-xs font-bold rounded-lg uppercase tracking-wider">{company.categoryName}</span>
                    <div className="flex items-center gap-1 text-white text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-[#EBA60A] text-[#EBA60A]" />
                      {company.rating}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[var(--accent-yellow)] transition-colors line-clamp-1">{company.name}</h4>
                  <p className="text-[var(--text-muted)] text-sm mb-4 line-clamp-2">{company.about}</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-natural)]">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[var(--bg-elevated)] border-2 border-white flex items-center justify-center text-xs font-bold">{company.teamSize.split(' ')[0]}</div>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-muted)]">Experts</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate({ page: 'companies' })}
              className="px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-[#EBA60A] hover:text-black transition-all shadow-lg uppercase tracking-wide inline-flex items-center gap-2"
            >
              View All Partners <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Statistics */}
      <section className="py-24 bg-[#EBA60A] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {[
              { value: '13', label: 'Service Domains' },
              { value: '4', label: 'Core Founders' },
              { value: '100+', label: 'Verified Partners' },
              { value: '10K+', label: 'Completed Projects' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <h4 className="text-5xl lg:text-7xl font-black font-serif-title tracking-tighter">{stat.value}</h4>
                <p className="text-sm md:text-base font-bold uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-[var(--accent-yellow)] uppercase tracking-widest mb-4">Client Feedback</h2>
            <h3 className="text-4xl font-extrabold uppercase font-serif-title">Trusted by Thousands</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS_DATA.slice(0, 2).map(testimonial => (
              <div key={testimonial.id} className="bg-[var(--bg-card)] p-8 rounded-3xl border border-[var(--border-natural)]">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#EBA60A] text-[#EBA60A]" />
                  ))}
                </div>
                <p className="text-lg font-medium italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-yellow)]" />
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] flex items-center gap-2">
                      {testimonial.author} 
                      {testimonial.verifiedBadge && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                    </h4>
                    <span className="text-xs text-[var(--text-muted)]">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Hexagon className="w-16 h-16 text-[#EBA60A] fill-[#EBA60A]/20 mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase font-serif-title tracking-tight">Ready to start your next project?</h2>
          <p className="text-xl text-[#A3A3A3] mb-10 max-w-2xl mx-auto">
            Get priority access to our 13 service domains and elite partners. 
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
    </div>
  );
};