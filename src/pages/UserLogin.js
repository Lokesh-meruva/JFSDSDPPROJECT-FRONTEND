// src/pages/UserLogin.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './UserLogin.css';

const UserLogin = () => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder authentication for user
    if (userCredentials.email === 'user@example.com' && userCredentials.password === 'user123') {
      navigate('/userdashboard'); // Redirect to user dashboard or profile
    } else {
      alert('Invalid User Credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>User Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <Link to="/userregister">Register here</Link>
      </p>
    </div>
  );
};

export default UserLogin;
