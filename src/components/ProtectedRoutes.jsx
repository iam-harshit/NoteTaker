import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Show a loading screen while checking authentication
  if (isLoading) {
    return <div>Loading...</div>; // Replace with a spinner if desired
  }

  // Redirect to the root page if not authenticated
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
