import React from 'react';
import { Zap, Users, Trophy } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need to Succeed</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "Targeted Strategies", desc: "Built-in intelligence to help you customize your approach for every role." },
            { icon: <Users className="w-8 h-8 text-indigo-600" />, title: "Expert Community", desc: "Join thousands of successful professionals sharing networking insights." },
            { icon: <Trophy className="w-8 h-8 text-amber-600" />, title: "Proven Results", desc: "Our methodology has helped candidates land roles at top-tier tech companies." }
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all group"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:scale-110 transition-transform">{f.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-slate-900">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;