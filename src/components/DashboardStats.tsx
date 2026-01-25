import React from 'react';

interface DashboardStatsProps {
  stats: {
    total: number;
    applied: number;
    interviews: number;
    offers: number;
  };
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: 'Total', value: stats.total, color: 'text-blue-600' },
        { label: 'Applied', value: stats.applied, color: 'text-slate-600' },
        { label: 'Interviews', value: stats.interviews, color: 'text-amber-600' },
        { label: 'Offers', value: stats.offers, color: 'text-emerald-600' },
      ].map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
        >
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</p>
          <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;