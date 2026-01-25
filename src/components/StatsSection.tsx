import React from 'react';
import { StatsCounter } from './StatsCounter';

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Placements", val: 10000, suffix: "+" },
            { label: "Interview Rate", val: 85, suffix: "%" },
            { label: "Days to Hire", val: 30, suffix: "" },
            { label: "Partner Companies", val: 500, suffix: "+" },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-5xl font-black mb-2 tracking-tighter">
                <StatsCounter value={s.val} suffix={s.suffix} />
              </p>
              <p className="text-blue-100 font-bold uppercase tracking-widest text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;