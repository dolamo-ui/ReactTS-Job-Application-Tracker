import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Users, Search, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const MasterySection: React.FC = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-3xl p-6 aspect-square flex flex-col justify-center hover:scale-105 transition-transform">
                <Rocket className="w-12 h-12 text-blue-600 mb-4" />
                <p className="font-bold text-slate-900">Resume Optimization</p>
              </div>
              <div className="bg-blue-600 rounded-3xl p-6 aspect-square flex flex-col justify-center mt-8 hover:scale-105 transition-transform">
                <Users className="w-12 h-12 text-white mb-4" />
                <p className="font-bold text-white">Interview Prep</p>
              </div>
              <div className="bg-indigo-600 rounded-3xl p-6 aspect-square flex flex-col justify-center -mt-8 hover:scale-105 transition-transform">
                <Search className="w-12 h-12 text-white mb-4" />
                <p className="font-bold text-white">Networking Hacks</p>
              </div>
              <div className="bg-slate-50 rounded-3xl p-6 aspect-square flex flex-col justify-center hover:scale-105 transition-transform">
                <Zap className="w-12 h-12 text-indigo-600 mb-4" />
                <p className="font-bold text-slate-900">Cover Letters</p>
              </div>
           </div>
        </div>
        
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">What You'll Master</h2>
          <ul className="space-y-6">
            {[
              { title: "Resume Optimization", desc: "Learn to bypass ATS filters with precision." },
              { title: "Interview Prep", desc: "Master the behavioral and technical frameworks." },
              { title: "Cover Letter Psychology", desc: "Write letters that hiring managers actually read." },
              { title: "Strategic Networking", desc: "Build connections that lead to direct referrals." }
            ].map((item, i) => (
              <li 
                key={i}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                <div className="bg-blue-100 p-2 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link to="/register">
            <button className="mt-12 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center group shadow-xl">
              Join the Elite
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MasterySection;