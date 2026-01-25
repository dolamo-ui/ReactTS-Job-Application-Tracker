import React from 'react';
import { Briefcase } from 'lucide-react';

interface NavBarProps {
  onSignIn: () => void;
  onStart: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onSignIn, onStart }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Briefcase className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">CareerTrack</span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={onSignIn}
            className="px-5 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors"
          >
            Log In
          </button>
          <button 
            onClick={onStart}
            className="px-5 py-2 text-sm font-bold bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
          >
            Join Free
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;