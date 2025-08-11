import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import FilterBar from '../components/FilterBar';

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<any[]>([]);
  const navigate = useNavigate();

  const search = searchParams.get('search') || '';
  const status = searchParams.get('status') || '';
  const sort = searchParams.get('sort') || 'asc';

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    fetch(`http://localhost:3000/jobs?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        setAllJobs(data);
      })
      .catch(err => {
        console.error('Error fetching jobs:', err);
      });
  }, [userId, navigate]);

  useEffect(() => {
    let jobs = [...allJobs];

    if (search) {
      jobs = jobs.filter(job =>
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status) {
      jobs = jobs.filter(job => job.status === status);
    }

    if (sort === 'asc') {
      jobs.sort((a, b) => a.company.localeCompare(b.company));
    } else if (sort === 'desc') {
      jobs.sort((a, b) => b.company.localeCompare(a.company));
    }

    setFilteredJobs(jobs);
  }, [search, status, sort, allJobs]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const key = e.target.name;
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    setSearchParams(newParams);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Job Dashboard</h1>

      

      <FilterBar
        search={search}
        status={status}
        sort={sort}
        onFilterChange={handleFilterChange}
      />

      <div className="grid gap-4 mt-4">
        {filteredJobs.length ? (
          filteredJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onDelete={(deletedId) => {
                setAllJobs(prev => prev.filter(j => j.id !== deletedId));
              }}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">No jobs found for your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
