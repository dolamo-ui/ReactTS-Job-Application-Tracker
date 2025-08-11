// File: src/components/JobCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './JobCard.module.css';

type JobStatus = 'applied' | 'interview' | 'rejected' | 'hired';

interface Job {
  id: number;
  title: string;
  company: string;
  status: JobStatus;
  appliedDate?: string;
  details?: string;
  userId?: string;
}

interface JobCardProps {
  job: Job;
  onDelete?: (id: number) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${job.title}" at ${job.company}?`
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:3000/jobs/${job.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete');

      if (onDelete) onDelete(job.id);
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete job. Please try again.');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h2 className={styles.title}>{job.title}</h2>
        <p className={styles.company}>{job.company}</p>
        <span className={`${styles.statusBadge} ${styles[job.status]}`}>
          {job.status}
        </span>
        {job.appliedDate && (
          <p className={styles.date}>Applied on: {job.appliedDate}</p>
        )}
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => navigate(`/edit-job/${job.id}`)}
          className={styles.editButton}
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
