// src/pages/AdminRegister.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminRegister.css';

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    adminCode: '', // Special code for admin registration
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, adminCode } = formData;

    if (!username || !email || !password || !confirmPassword || !adminCode) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (adminCode !== 'EDUSCHOLAR') { // Mock check for an admin code
      setError('Invalid admin code.');
      return;
    }

    // Mock registration success
    setError('');
    alert('Admin registration successful!');
    navigate('/adminlogin'); // Redirect to Admin Login page after registration
  };

  return (
    <div className="admin-register">
      <h2>Admin Registration</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Admin Code:
          <input
            type="text"
            name="adminCode"
            value={formData.adminCode}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
