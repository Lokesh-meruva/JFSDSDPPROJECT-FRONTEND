import React from 'react';

import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
  

  

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        
      </div>
      <div className="dashboard-content">
        <p>Welcome to your dashboard! Here you can view and manage your scholarship applications, update your profile, and check the latest opportunities.</p>
        <ul className="dashboard-links">
          <li><a href="/profile">View Profiles</a></li>
          <li><a href="/applications">Manage Applications</a></li>
          <li><a href="/scholarships">Browse Scholarships</a></li>

          
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
