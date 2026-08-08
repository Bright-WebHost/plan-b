import React from 'react';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#EBA60A] uppercase tracking-widest mb-4">HOW IT WORKS</h2>
          <h3 className="text-4xl font-extrabold uppercase font-serif-title">Simple, Stress-Free Execution</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Friendly Consultation', desc: 'We sit down with you to understand exactly what you need and how we can help.' },
            { step: '02', title: 'Custom Curation', desc: 'We match you with the perfect team of experts from our 13 specialized domains.' },
            { step: '03', title: 'Seamless Execution', desc: 'Our partners work together smoothly behind the scenes, so you never have to worry.' },
            { step: '04', title: 'Project Handover', desc: 'We deliver the final result with a smile, fully inspected and ready for you.' }
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
  );
};
