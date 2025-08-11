// File: src/pages/EditJob.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './AddJobForm.module.css';

const EditJob: React.FC = () => {
  const { id } = useParams(); // Get job ID from URL
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const [form, setForm] = useState({
    title: '',
    company: '',
    status: 'applied',
    appliedDate: '',
    details: ''
  });

  // Load job data
  useEffect(() => {
    if (!userId || !id) return;

    fetch(`http://localhost:3000/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Ensure the job belongs to the user
        if (data.userId !== userId) {
          alert("You don't have permission to edit this job.");
          navigate('/home');
          return;
        }

        setForm({
          title: data.title,
          company: data.company,
          status: data.status,
          appliedDate: data.appliedDate,
          details: data.details
        });
      })
      .catch((err) => {
        console.error('Error loading job:', err);
        alert('Failed to load job.');
      });
  }, [id, userId, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:3000/jobs/${id}`, {
        method: 'PATCH', // You could also use PUT
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      alert('Job updated successfully!');
      navigate('/home');
    } catch (err) {
      console.error('Error updating job:', err);
      alert('Failed to update job.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Edit Job</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Job Title"
          className={styles.input}
          required
        />
        <input
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company"
          className={styles.input}
          required
        />
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="rejected">Rejected</option>
          <option value="hired">Hired</option>
        </select>
        <input
          type="date"
          name="appliedDate"
          value={form.appliedDate}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <textarea
          name="details"
          value={form.details}
          onChange={handleChange}
          placeholder="Job Details"
          className={styles.textarea}
        />
        <button type="submit" className={`${styles.button} ${styles.saveButton}`}>Save Changes</button>
      </form>
    </div>
  );
};
export default EditJob;
