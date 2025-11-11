// In frontend/src/pages/SignUpPage.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('Passwords do not match!');
      return;
    }
    try {
      // Send a POST request to the registration endpoint
      await axios.post('http://127.0.0.1:8000/auth/users/', {
        username: username,
        password: password,
        re_password: password2,
      });
      // Redirect to the login page on success
      navigate('/login');
      alert('Registration successful! Please log in.');
    } catch (error) {
      console.error('Registration failed!', error.response.data);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        {/* Form inputs are unchanged */}
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          name="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;