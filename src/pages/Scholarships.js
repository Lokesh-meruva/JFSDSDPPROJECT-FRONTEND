// src/pages/Scholarships.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Scholarships.css';

const Scholarships = () => {
  const navigate = useNavigate();

  // Function to handle scholarship application navigation
  const handleApply = (scholarshipName) => {
    navigate('/application', { state: { scholarshipName } });
  };

  // Function to handle view details navigation
  const handleViewDetails = (scholarshipName) => {
    navigate('/scholarship-details', { state: { scholarshipName } });
  };

  return (
    <div className="scholarships">
      <h1>Popular Scholarships</h1>
      <ul className="scholarships-list">
        <li className="scholarship-item">
          <h3>National Merit Scholarship</h3>
          <p>Deadline: December 1, 2024</p>
          <button onClick={() => handleApply('National Merit Scholarship')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('National Merit Scholarship')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>STEM Excellence Award</h3>
          <p>Deadline: January 15, 2025</p>
          <button onClick={() => handleApply('STEM Excellence Award')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('STEM Excellence Award')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Global Leaders Fellowship</h3>
          <p>Deadline: November 30, 2024</p>
          <button onClick={() => handleApply('Global Leaders Fellowship')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Global Leaders Fellowship')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Community Service Scholarship</h3>
          <p>Deadline: March 1, 2025</p>
          <button onClick={() => handleApply('Community Service Scholarship')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Community Service Scholarship')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Academic Excellence Grant</h3>
          <p>Deadline: April 15, 2025</p>
          <button onClick={() => handleApply('Academic Excellence Grant')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Academic Excellence Grant')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Future Leaders Scholarship</h3>
          <p>Deadline: May 30, 2025</p>
          <button onClick={() => handleApply('Future Leaders Scholarship')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Future Leaders Scholarship')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Environmental Stewardship Award</h3>
          <p>Deadline: June 20, 2025</p>
          <button onClick={() => handleApply('Environmental Stewardship Award')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Environmental Stewardship Award')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Tech Innovators Scholarship</h3>
          <p>Deadline: July 31, 2025</p>
          <button onClick={() => handleApply('Tech Innovators Scholarship')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Tech Innovators Scholarship')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Healthcare Heroes Grant</h3>
          <p>Deadline: August 15, 2025</p>
          <button onClick={() => handleApply('Healthcare Heroes Grant')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Healthcare Heroes Grant')}>View Details</p>
        </li>
        <li className="scholarship-item">
          <h3>Artistic Excellence Award</h3>
          <p>Deadline: September 10, 2025</p>
          <button onClick={() => handleApply('Artistic Excellence Award')} className="apply-button">Apply</button>
          <p className="view-details-link" onClick={() => handleViewDetails('Artistic Excellence Award')}>View Details</p>
        </li>
      </ul>
    </div>
  );
};

export default Scholarships;
