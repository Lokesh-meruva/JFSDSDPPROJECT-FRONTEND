import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import Auth context
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, role, logout } = useAuth(); // Access auth state and role

  const UserNavbar = () => (
    <ul className="navbar-links">
      <li><Link to="/userdashboard">Dashboard</Link></li>
      <li><Link to="/viewscholarships">Scholarships</Link></li>
      <li><Link to="/applicationstatus">Application Status</Link></li>
      <li>
        <button onClick={logout} className="logout-button">Logout</button>
      </li>
    </ul>
  );

  const AdminNavbar = () => (
    <ul className="navbar-links">
      
      <li><Link to="/dashboard">Admin Dashboard</Link></li>
      <li><Link to="/managescholarships">Manage Scholarships</Link></li>
      <li><Link to="/viewapplications">View Applications</Link></li>
      <li>
        <button onClick={logout} className="logout-button">Logout</button>
      </li>
    </ul>
  );

  const DefaultNavbar = () => (
    <ul className="navbar-links">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/scholarships">Scholarships</Link></li>
      <li className="dropdown">
        <span className="dropdown-toggle">User</span>
        <ul className="dropdown-menu">
          <li><Link to="/userlogin">User Login</Link></li>
          <li><Link to="/userregister">User Register</Link></li>
        </ul>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">EduScholar</Link>
      </div>
      {/* Render navbar based on authentication and role */}
      {isAuthenticated ? (
        role === 'admin' ? <AdminNavbar /> : <UserNavbar />
      ) : (
        <DefaultNavbar />
      )}
    </nav>
  );
};

export default Navbar;
