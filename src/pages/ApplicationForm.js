import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const location = useLocation();
  const scholarshipName = location.state?.scholarshipName || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scholarship: scholarshipName,
    message: '',
    bio: '',
    phone: '',
    address: '',
    document: null, // Store the uploaded file
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('scholarship', formData.scholarship);
    formDataToSend.append('bio', formData.bio);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('document', formData.document);

    // Submit the form data to the backend
    fetch('http://localhost:8080/register', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        alert('Application submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="application-form">
      <h1>Scholarship Application Form</h1>

      {isSubmitted && <div className="success-message">You have successfully applied for the scholarship!</div>}

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Scholarship Name:
          <input type="text" name="scholarship" value={formData.scholarship} readOnly />
        </label>
        <label>
          Bio:
          <textarea name="bio" value={formData.bio} onChange={handleChange} required></textarea>
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
