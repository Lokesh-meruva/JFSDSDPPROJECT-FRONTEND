import './UserDashboard.css';

function Dashboard() {
  // Static data for demonstration
  const dashboardData = {
    applied: 10,
    accepted: 4,
    pending: 3,
    completed: 2,
    ongoing: 1,
  };

  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Applied</h3>
          <p>{dashboardData.applied}</p>
        </div>
        <div className="dashboard-card">
          <h3>Accepted</h3>
          <p>{dashboardData.accepted}</p>
        </div>
        <div className="dashboard-card">
          <h3>Pending</h3>
          <p>{dashboardData.pending}</p>
        </div>
        <div className="dashboard-card">
          <h3>Completed</h3>
          <p>{dashboardData.completed}</p>
        </div>
        <div className="dashboard-card">
          <h3>Ongoing</h3>
          <p>{dashboardData.ongoing}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
