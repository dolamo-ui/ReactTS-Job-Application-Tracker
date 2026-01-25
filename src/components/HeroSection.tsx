import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
            <Star className="w-4 h-4 fill-blue-600" />
            <span>Rated #1 Job Tracking Software</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-6">
            Master Your <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Job Applications
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
            The only platform designed to help you organize your career journey, land your dream job, and optimize every interview phase.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center group">
                Start Your Success Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <button className="w-full px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors">
                Watch Demo
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100">
            <svg viewBox="0 0 400 300" className="w-full h-auto rounded-xl">
              <rect x="0" y="0" width="400" height="300" fill="#f8fafc" />
              <rect x="50" y="50" width="300" height="40" rx="8" fill="#fff" className="stroke-slate-200 stroke-1" />
              <rect x="50" y="110" width="300" height="40" rx="8" fill="#fff" className="stroke-slate-200 stroke-1" />
              <rect x="50" y="170" width="300" height="40" rx="8" fill="#fff" className="stroke-slate-200 stroke-1" />
              <circle cx="80" cy="70" r="10" fill="#3b82f6" />
              <circle cx="80" cy="130" r="10" fill="#f59e0b" />
              <circle cx="80" cy="190" r="10" fill="#10b981" />
              <rect x="110" y="65" width="100" height="10" rx="5" fill="#e2e8f0" />
              <rect x="110" y="125" width="100" height="10" rx="5" fill="#e2e8f0" />
              <rect x="110" y="185" width="100" height="10" rx="5" fill="#e2e8f0" />
            </svg>
          </div>
          {/* Floating badges */}
          <div className="absolute -top-10 -right-6 bg-emerald-100 text-emerald-700 p-4 rounded-2xl shadow-xl font-bold border border-emerald-200 animate-bounce">
            Hired! 🎉
          </div>
          <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl font-bold animate-pulse">
            Interview Secured
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;