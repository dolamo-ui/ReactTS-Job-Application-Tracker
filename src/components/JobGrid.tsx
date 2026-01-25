import React from 'react';

interface JobApplication {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  status: string;
  dateApplied: string;
  description?: string;
  notes?: string;
  userId?: string;
}

interface JobCardProps {
  job: JobApplication;
  onEdit: (job: JobApplication) => void;
  onDelete: (id: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onEdit, onDelete }) => {
  const statusColors: Record<string, string> = {
    Applied: 'bg-blue-100 text-blue-800 border-blue-200',
    Interview: 'bg-amber-100 text-amber-800 border-amber-200',
    Offer: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Rejected: 'bg-rose-100 text-rose-800 border-rose-200',
    Hired: 'bg-purple-100 text-purple-800 border-purple-200',
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {job.title}
            </h3>
            <p className="text-slate-600 font-medium">{job.company}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusColors[job.status] || 'bg-slate-100 text-slate-800'}`}>
            {job.status}
          </span>
        </div>

        <div className="space-y-2 mb-4">
          {job.location && (
            <div className="flex items-center text-sm text-slate-500">
              <span className="w-4 h-4 mr-2">📍</span>
              {job.location}
            </div>
          )}
          {job.salary && (
            <div className="flex items-center text-sm text-slate-500">
              <span className="w-4 h-4 mr-2">💰</span>
              {job.salary}
            </div>
          )}
          <div className="flex items-center text-sm text-slate-500">
            <span className="w-4 h-4 mr-2">📅</span>
            Applied: {new Date(job.dateApplied).toLocaleDateString()}
          </div>
        </div>

        {job.notes && (
          <p className="text-sm text-slate-600 mb-4 line-clamp-2">{job.notes}</p>
        )}

        <div className="flex gap-2 pt-4 border-t border-slate-100">
          <button
            onClick={() => onEdit(job)}
            className="flex-1 px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(job.id)}
            className="flex-1 px-4 py-2 text-sm font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

interface JobGridProps {
  jobs: JobApplication[];
  isLoading: boolean;
  hasFilters: boolean;
  onEdit: (job: JobApplication) => void;
  onDelete: (id: string) => void;
  onClearFilters: () => void;
}

const JobGrid: React.FC<JobGridProps> = ({ jobs, isLoading, hasFilters, onEdit, onDelete, onClearFilters }) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500">Loading applications...</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🔍</span>
          </div>
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
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default JobGrid;