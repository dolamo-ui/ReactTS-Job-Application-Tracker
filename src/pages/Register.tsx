// File: pages/RegisterPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import topBanner from '../assets/sign-in.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');

  const serverURL = 'http://localhost:3000/users';

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('❌ Passwords do not match.');
      return;
    }

    try {
      const checkRes = await fetch(`${serverURL}?email=${email}`);
      const existingUsers = await checkRes.json();

      if (existingUsers.length > 0) {
        setMessage('⚠️ User already exists!');
        return;
      }

      const newUser = { email, password };

      const addRes = await fetch(serverURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (addRes.ok) {
        setMessage('✅ Registration successful!');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setMessage('❌ Failed to register user.');
      }
    } catch (error) {
      console.error('Error connecting to server:', error);
      setMessage('❌ Error connecting to server.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.imageHeader}>
          <img src={topBanner} alt="Welcome Banner" />
        </div>

        <form onSubmit={handleRegister} className={styles.loginForm}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          <div className={styles.passwordWrapper}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              className={styles.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              role="button"
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          {message && (
            <p
              style={{
                color: message.includes('✅') ? 'green' : 'red',
                textAlign: 'center',
              }}
            >
              {message}
            </p>
          )}

          <button type="submit">Register</button>

          <p className={styles.register}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
