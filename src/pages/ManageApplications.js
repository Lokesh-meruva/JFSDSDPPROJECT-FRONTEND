// src/pages/ManageApplications.js
import React, { useState } from 'react';
import './ManageApplications.css';

const ManageApplications = () => {
  const [applications, setApplications] = useState([]);
  const [currentApp, setCurrentApp] = useState({ name: '', email: '', scholarship: '', message: '' });
  const [editingIndex, setEditingIndex] = useState(null);
  const [notification, setNotification] = useState(''); // State for notification message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentApp({ ...currentApp, [name]: value });
  };

  const handleAddApplication = () => {
    // Check for empty fields
    if (!currentApp.name || !currentApp.email || !currentApp.scholarship || !currentApp.message) {
      setNotification('Please fill in all fields before submitting.'); // Show warning message
      setTimeout(() => setNotification(''), 3000); // Clear the notification after 3 seconds
      return;
    }

    if (editingIndex !== null) {
      const updatedApplications = applications.map((app, index) =>
        index === editingIndex ? currentApp : app
      );
      setApplications(updatedApplications);
      setEditingIndex(null);
      setNotification('Your application has been updated!'); // Set success message
    } else {
      setApplications([...applications, currentApp]);
      setNotification('Your application has been added!'); // Set success message
    }
    setCurrentApp({ name: '', email: '', scholarship: '', message: '' });

    // Clear the notification after 3 seconds
    setTimeout(() => setNotification(''), 3000);
  };

  const handleEditApplication = (index) => {
    setCurrentApp(applications[index]);
    setEditingIndex(index);
  };

  const handleDeleteApplication = (index) => {
    setApplications(applications.filter((_, i) => i !== index));
    setNotification('Application has been deleted.'); // Set delete message
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="manage-applications">
      <h1>Manage Applications</h1>

      {notification && <div className="notification">{notification}</div>} {/* Notification message */}

      <div className="form-container">
      <label htmlFor="Email">Namel</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={currentApp.name}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="Email">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={currentApp.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="Scholarship Name">Scholarship Name </label>
        <input
          type="text"
          name="scholarship"
          placeholder="Scholarship Name"
          value={currentApp.scholarship}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="Description">Description</label>
        <textarea
          name="message"
          placeholder="Message"
          value={currentApp.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="deadline">Deadline</label>
  <input
    type="date"
    name="deadline"
    id="deadline"
    value={currentApp.deadline}
    onChange={handleInputChange}
    required
  />
        <button onClick={handleAddApplication}>
          {editingIndex !== null ? 'Update Application' : 'Add Application'}
        </button>
      </div>

      <ul className="applications-list">
        {applications.map((app, index) => (
          <li key={index} className="application-item">
            <h3>{app.name} - {app.scholarship}</h3>
            <p>Email: {app.email}</p>
            <p>Message: {app.message}</p>
            <button onClick={() => handleEditApplication(index)}>Edit</button>
            <button onClick={() => handleDeleteApplication(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageApplications;
