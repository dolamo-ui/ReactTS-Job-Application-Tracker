// File: src/pages/Home.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, LogOut, Home as HomeIcon, Briefcase, BarChart3, Bell, X } from 'lucide-react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardStats from '../components/DashboardStats';
import SearchAndFilters from '../components/SearchAndFilters';
import JobGrid from '../components/JobGrid';
import DashboardFooter from '../components/DashboardFooter';

// Types
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

const JobStatus = {
  APPLIED: 'Applied',
  INTERVIEW: 'Interview',
  OFFER: 'Offer',
  REJECTED: 'Rejected',
  HIRED: 'Hired'
} as const;

// JobModal Component
const JobModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (job: Partial<JobApplication>) => void;
  editJob: JobApplication | null;
}> = ({ isOpen, onClose, onSubmit, editJob }) => {
  const [formData, setFormData] = useState<Partial<JobApplication>>({
    title: '',
    company: '',
    location: '',
    salary: '',
    status: JobStatus.APPLIED,
    dateApplied: new Date().toISOString().split('T')[0],
    description: '',
    notes: '',
  });

  useEffect(() => {
    if (editJob) {
      setFormData(editJob);
    } else {
      setFormData({
        title: '',
        company: '',
        location: '',
        salary: '',
        status: JobStatus.APPLIED,
        dateApplied: new Date().toISOString().split('T')[0],
        description: '',
        notes: '',
      });
    }
  }, [editJob, isOpen]);

  const handleSubmit = () => {
    if (!formData.title || !formData.company) {
      alert('Please fill in required fields');
      return;
    }
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">
            {editJob ? 'Edit Application' : 'Add New Application'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="e.g., Software Engineer"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Company *
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="e.g., Tech Corp"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="e.g., San Francisco, CA"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Salary Range
              </label>
              <input
                type="text"
                value={formData.salary}
                onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="e.g., $80k - $120k"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              >
                {Object.values(JobStatus).map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Date Applied *
              </label>
              <input
                type="date"
                value={formData.dateApplied}
                onChange={(e) => setFormData({ ...formData, dateApplied: e.target.value })}
                className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Notes
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Add any additional notes about this application..."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
            >
              {editJob ? 'Save Changes' : 'Add Application'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home: React.FC = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState<JobApplication | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get userId
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      navigate('/login');
      return;
    }
    setUserId(storedUserId);
  }, [navigate]);

  // Fetch jobs from API
  useEffect(() => {
    if (!userId) return;

    setIsLoading(true);
    fetch(`http://localhost:3000/jobs?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
        setIsLoading(false);
      });
  }, [userId]);

  const filteredJobs = useMemo(() => {
    let filtered = [...jobs];

    if (searchQuery) {
      filtered = filtered.filter(job =>
        job.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'All') {
      filtered = filtered.filter(job => {
        return job.status?.toLowerCase() === statusFilter.toLowerCase();
      });
    }

    return filtered.sort((a, b) => 
      new Date(b.dateApplied).getTime() - new Date(a.dateApplied).getTime()
    );
  }, [jobs, searchQuery, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: jobs.length,
      applied: jobs.filter(j => j.status?.toLowerCase() === 'applied').length,
      interviews: jobs.filter(j => j.status?.toLowerCase() === 'interview').length,
      offers: jobs.filter(j => {
        const status = j.status?.toLowerCase();
        return status === 'offer' || status === 'hired';
      }).length,
    };
  }, [jobs]);

  const handleAddOrEdit = async (jobData: Partial<JobApplication>) => {
    const jobWithUserId = { ...jobData, userId };

    if (editingJob) {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${editingJob.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jobWithUserId),
        });
        const updatedJob = await response.json();
        setJobs(prev => prev.map(j => j.id === editingJob.id ? updatedJob : j));
      } catch (err) {
        console.error('Error updating job:', err);
      }
    } else {
      try {
        const response = await fetch('http://localhost:3000/jobs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(jobWithUserId),
        });
        const newJob = await response.json();
        setJobs(prev => [newJob, ...prev]);
      } catch (err) {
        console.error('Error creating job:', err);
      }
    }
    setEditingJob(null);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this application?')) {
      try {
        await fetch(`http://localhost:3000/jobs/${id}`, {
          method: 'DELETE',
        });
        setJobs(prev => prev.filter(j => j.id !== id));
      } catch (err) {
        console.error('Error deleting job:', err);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const openEditModal = (job: JobApplication) => {
    setEditingJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Briefcase className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                  CareerTrack
                </span>
              </div>
              
              <div className="hidden md:flex items-center space-x-1">
                <button className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg transition-colors">
                  <HomeIcon className="w-4 h-4 mr-2" /> Home
                </button>
                <button className="flex items-center px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors">
                  <BarChart3 className="w-4 h-4 mr-2" /> Analytics
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <button 
                onClick={handleLogout}
                className="flex items-center space-x-2 text-sm font-medium text-slate-700 hover:text-rose-600 transition-colors group"
              >
                <span className="hidden sm:inline">Logout</span>
                <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {/* Header Section with Stats */}
        <header className="mb-10">
          <DashboardHeader onAddApplication={() => { setEditingJob(null); setIsModalOpen(true); }} />
          <DashboardStats stats={stats} />
        </header>

        {/* Filters and Search */}
        <section className="mb-8">
          <SearchAndFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            jobStatuses={Object.values(JobStatus)}
          />
        </section>

        {/* Jobs Grid */}
        <section>
          <JobGrid
            jobs={filteredJobs}
            isLoading={isLoading}
            hasFilters={searchQuery.length > 0 || statusFilter !== 'All'}
            onEdit={openEditModal}
            onDelete={handleDelete}
            onClearFilters={() => { setSearchQuery(''); setStatusFilter('All'); }}
          />
        </section>
      </main>

      {/* Floating Add Button for Mobile */}
      <button
        onClick={() => { setEditingJob(null); setIsModalOpen(true); }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl shadow-blue-500/40 flex items-center justify-center hover:bg-blue-700 hover:scale-110 active:scale-90 transition-all z-30 sm:hidden"
      >
        <Plus className="w-8 h-8" />
      </button>

      <JobModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setEditingJob(null); }}
        onSubmit={handleAddOrEdit}
        editJob={editingJob}
      />

      <DashboardFooter />
    </div>
  );
};

export default Home;