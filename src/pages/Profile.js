import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    try {
      const storedApplications = JSON.parse(localStorage.getItem('applications')) || [];
      setApplications(storedApplications);
    } catch (error) {
      console.error('Error parsing applications from localStorage:', error);
      setApplications([]);
    }
  }, []);

  const handleAccept = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = 'Accepted';
    setApplications(updatedApplications);
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    console.log(`Accepted application at index: ${index}`);
  };

  const handleReject = (index) => {
    const updatedApplications = [...applications];
    updatedApplications[index].status = 'Rejected';
    setApplications(updatedApplications);
    localStorage.setItem('applications', JSON.stringify(updatedApplications));
    console.log(`Rejected application at index: ${index}`);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <div className="applications-section">
          <h2>Submitted Applications</h2>
          {applications.map((app, index) => (
            <div key={index} className="application-item">
              <h3>{app.scholarship}</h3>
              <p><strong>Name:</strong> {app.name}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Bio:</strong> {app.bio}</p>
              <p><strong>Phone:</strong> {app.phone}</p>
              <p>
                <strong>Status:</strong>
                <span className={app.status === 'Accepted' ? 'status-accepted' : app.status === 'Rejected' ? 'status-rejected' : 'status-pending'}>
                  {app.status || 'Pending'}
                </span>
              </p>
              
              {/* Display document if exists */}
              {app.document && (
                <div className="document-section">
                  <h4>Uploaded Resume:</h4>
                  <a href={app.document} target="_blank" rel="noopener noreferrer">View Resume</a>
                </div>
              )}

              <button className="accept-button" onClick={() => handleAccept(index)} aria-label={`Accept application for ${app.name}`}>
                Accept
              </button>
              <button className="reject-button" onClick={() => handleReject(index)} aria-label={`Reject application for ${app.name}`}>
                Reject
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
