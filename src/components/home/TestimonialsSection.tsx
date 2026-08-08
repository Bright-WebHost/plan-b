import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/mockData';

export const TestimonialsSection: React.FC = () => {
  return (
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
  );
};
