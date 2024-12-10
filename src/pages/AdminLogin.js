// src/pages/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../components/Login.css';

const AdminLogin = ({setRole}) => {
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdminCredentials({ ...adminCredentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder authentication for admin
    if (adminCredentials.username === 'admin@123' && adminCredentials.password === 'admin123') {
      setRole('admin');
      navigate('/dashboard'); // Redirect to admin dashboard or profile
    } else {
      alert('Invalid Admin Credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/adminregister">Register here</Link>
      </p>
    </div>
  );
};

export default AdminLogin;
