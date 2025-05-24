import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../services/authService';

function ProtectedRoute() {
  const isAuthenticated = !!getToken(); // Using placeholder getToken

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    // Pass the current location to redirect back after login (optional)
    // For now, just redirecting to /login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
}

export default ProtectedRoute;
