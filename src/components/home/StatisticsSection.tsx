import React from 'react';

export const StatisticsSection: React.FC = () => {
  return (
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
  );
};
