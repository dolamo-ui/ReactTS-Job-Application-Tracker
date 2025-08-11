import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AddJobForm.module.css';

const AddJob: React.FC = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [form, setForm] = useState({
    title: '',
    company: '',
    status: 'applied',
    appliedDate: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return alert('Not logged in');

    const newJob = { ...form, userId };

    try {
      await fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJob),
      });
      navigate('/home');
    } catch (err) {
      alert('Error saving job');
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add New Job</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
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
          placeholder="Job Details"
          value={form.details}
          onChange={handleChange}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};
export default AddJob;
