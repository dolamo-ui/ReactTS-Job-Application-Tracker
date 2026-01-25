import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-6xl mb-6">💼</div>
        <h2 className="text-4xl lg:text-5xl font-black mb-6">Ready to Transform Your Career?</h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join our community of successful job seekers and start landing interviews with confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl">
              Get Started Free Today
            </button>
          </Link>
          <Link to="/login" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-blue-700 text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all">
              Sign In to Continue
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;