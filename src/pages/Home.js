// src/pages/Home.js
import React, { useState } from 'react'; // Import useState
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Define state variables

  // Sample scholarship data for filtering based on search
  const scholarships = [
    { title: 'National Merit Scholarship', deadline: 'December 1, 2024' },
    { title: 'STEM Excellence Award', deadline: 'January 15, 2025' },
    { title: 'Global Leaders Fellowship', deadline: 'November 30, 2024' },
  ];

  // Filter scholarships based on the search term
  const filteredScholarships = scholarships.filter((scholarship) =>
    scholarship.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Scholarship Platform</h1>
        <p>Find scholarships, apply for financial aid, and manage your applications easily!</p>
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search for scholarships..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <a href="/scholarships" className="cta-button">Find Scholarships</a>
      </header>

      <section className="featured-section">
        <h2>Featured Scholarships</h2>
        <div className="scholarships-list">
          {filteredScholarships.map((scholarship, index) => (
            <div className="scholarship-item" key={index}>
              <h3>{scholarship.title}</h3>
              <p>Deadline: {scholarship.deadline}</p>
              <a href="/scholarships" className="learn-more">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* New Statistics Section */}
      <section className="statistics-section">
        <h2>Our Impact in 2024</h2>
        <div className="statistics-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Scholarships Available</p>
          </div>
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Students Registered</p>
          </div>
          <div className="stat-item">
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-item">
            <p>"This platform helped me find scholarships that I didn't even know existed!"</p>
            <span>– Sarah K.</span>
          </div>
          <div className="testimonial-item">
            <p>"Thanks to the easy application process, I secured financial aid for my studies."</p>
            <span>– Jason M.</span>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Scholarship Journey?</h2>
        <a href="/userregister" className="cta-button">Join Us Today</a>
      </section>
    </div>
  );
};

export default Home;
