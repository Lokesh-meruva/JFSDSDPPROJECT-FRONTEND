import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, role }) => {
  const { auth } = useAuth();

  // Check if the user is not logged in or the role doesn't match
  if (!auth?.isLoggedIn || auth?.role !== role) {
    return <Navigate to="/" replace />; // Redirect to homepage if unauthorized
  }

  return children; // Render the child components if authorized
};

export default ProtectedRoute;
