import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  jobStatuses: string[];
}

const SearchAndFilters: React.FC<SearchAndFiltersProps> = ({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  jobStatuses
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search job title or company..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-11 pr-4 py-2.5 bg-slate-50 rounded-xl border-transparent focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        <Filter className="w-4 h-4 text-slate-400 ml-2 hidden sm:block" />
        {['All', ...jobStatuses].map((status) => (
          <button
            key={status}
            onClick={() => onStatusFilterChange(status)}
            className={`whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              statusFilter === status
                ? 'bg-slate-900 text-white shadow-lg'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilters;