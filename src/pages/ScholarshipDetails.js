// src/pages/ScholarshipDetails.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ScholarshipDetails.css';

const ScholarshipDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scholarshipName } = location.state || {};

  // Scholarship details data
  const scholarshipData = {
    "National Merit Scholarship": {
      description: "A prestigious scholarship for high academic achievers across the nation.",
      eligibility: "High school seniors with a GPA of 3.5 or higher.",
      amount: "5,000 Rupees",
      deadline: "December 1, 2024",
    },
    "STEM Excellence Award": {
      description: "Award for students excelling in Science, Technology, Engineering, and Math.",
      eligibility: "Undergraduate students majoring in STEM fields.",
      amount: "7,500 Rupees",
      deadline: "January 15, 2025",
    },
    "Global Leaders Fellowship": {
      description: "Scholarship aimed at fostering future global leaders with exceptional leadership skills.",
      eligibility: "Open to all students demonstrating leadership qualities.",
      amount: "$10,000",
      deadline: "November 30, 2024",
    },
    "Community Service Scholarship": {
      description: "Award for students who have demonstrated exceptional commitment to community service.",
      eligibility: "All students with a minimum of 100 community service hours.",
      amount: "$4,000",
      deadline: "March 1, 2025",
    },
    "Academic Excellence Grant": {
      description: "Grant for students who maintain a high academic record throughout high school or college.",
      eligibility: "Students with a GPA of 3.8 or higher.",
      amount: "$6,000",
      deadline: "April 15, 2025",
    },
    "Future Leaders Scholarship": {
      description: "Supports future leaders with a proven track record in leadership roles.",
      eligibility: "Students involved in leadership positions in school or community organizations.",
      amount: "$8,000",
      deadline: "May 30, 2025",
    },
    "Environmental Stewardship Award": {
      description: "Awarded to students committed to environmental sustainability and conservation.",
      eligibility: "All students with environmental project experience or related academic focus.",
      amount: "$9,000",
      deadline: "June 20, 2025",
    },
    "Tech Innovators Scholarship": {
      description: "Supports students who demonstrate innovation in technology and software development.",
      eligibility: "Undergraduate or graduate students in computer science or a tech-related field.",
      amount: "$12,000",
      deadline: "July 31, 2025",
    }
  };

  const scholarshipDetails = scholarshipData[scholarshipName];

  if (!scholarshipDetails) {
    return <p>Scholarship details not found.</p>;
  }

  return (
    <div className="scholarship-details">
      <h1>{scholarshipName}</h1>
      <p><strong>Description:</strong> {scholarshipDetails.description}</p>
      <p><strong>Eligibility:</strong> {scholarshipDetails.eligibility}</p>
      <p><strong>Amount:</strong> {scholarshipDetails.amount}</p>
      <p><strong>Deadline:</strong> {scholarshipDetails.deadline}</p>
      <button className="apply-button" onClick={() => navigate('/application', { state: { scholarshipName } })}>
        Apply Now
      </button>
      <button className="back-button" onClick={() => navigate(-1)}>
        Back to Scholarships
      </button>
    </div>
  );
};

export default ScholarshipDetails;
