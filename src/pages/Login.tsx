// File: pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import styles from './LoginPage.module.css';
import topBanner from '../assets/top-banner.png';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password');
      return;
    }

    
   try {
  const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
  const users = await response.json();

  if (users.length > 0) {
    // ✅ Save user ID and email to localStorage
    const user = users[0];
    localStorage.setItem('userId', user.id);
    localStorage.setItem('userEmail', user.email);

    console.log('Logged in as:', user);
    navigate('/home');
  } else {
    alert('Invalid email or password');
  }
} catch (error) {
  console.error('Login error:', error);
  alert('Something went wrong. Please try again.');
}
};






  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.imageHeader}>
          <img src={topBanner} alt="Welcome Banner" />
        </div>

        <form onSubmit={handleLogin} className={styles.loginForm}>
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

          <button type="submit">Login</button>

          <a href="#" className={styles.forgot}>Forgot Password?</a>

          <p className={styles.register}>
            Not a member yet? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
