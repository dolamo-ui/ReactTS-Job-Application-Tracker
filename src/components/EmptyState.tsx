import React from 'react';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  hasFilters: boolean;
  onClearFilters: () => void;
}

const EmptyState: React.FC<EmptyStateProps> = ({ hasFilters, onClearFilters }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
      <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
        <Search className="w-8 h-8 text-slate-300" />
      </div>
      <h3 className="text-xl font-bold text-slate-800">No applications found</h3>
      <p className="text-slate-500 mt-1 max-w-xs text-center">
        {hasFilters
          ? "We couldn't find any matches for your current filters."
          : "Start by adding your first job application using the button above."}
      </p>
      {hasFilters && (
        <button
          onClick={onClearFilters}
          className="mt-6 text-blue-600 font-semibold hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
};

export default EmptyState;