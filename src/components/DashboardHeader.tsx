import React from 'react';
import { Plus } from 'lucide-react';

interface DashboardHeaderProps {
  onAddApplication: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onAddApplication }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Track and manage your professional opportunities.</p>
      </div>
      <button
        onClick={onAddApplication}
        className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all active:scale-95 sm:w-auto w-full"
      >
        <Plus className="w-5 h-5 mr-2" />
        Add Application
      </button>
    </div>
  );
};

export default DashboardHeader;