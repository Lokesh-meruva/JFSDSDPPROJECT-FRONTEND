// src/pages/About.js
import React from 'react';
import './About.css';
import { FaHandsHelping, FaUniversity, FaUserGraduate } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your Gateway to Education and Financial Aid Success</p>
      </div>
      
      <div className="about-content">
        <div className="about-section">
          <FaHandsHelping className="about-icon" />
          <h2>Our Mission</h2>
          <p>
            To make education more accessible by connecting students to funding opportunities that help them achieve their academic goals.
          </p>
        </div>
        
        <div className="about-section">
          <FaUniversity className="about-icon" />
          <h2>Partnering with Institutions</h2>
          <p>
            We collaborate with universities and sponsors to offer diverse financial support, making higher education attainable for students of all backgrounds.
          </p>
        </div>

        <div className="about-section">
          <FaUserGraduate className="about-icon" />
          <h2>Supporting Student Success</h2>
          <p>
            Our platform provides easy access to scholarships, helping students focus on their studies without financial worries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
