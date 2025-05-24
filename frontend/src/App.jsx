import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ClientsPage from './pages/ClientsPage';
import LeadsPage from './pages/LeadsPage';
import TasksPage from './pages/TasksPage';
import NotesPage from './pages/NotesPage';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardLayout from './components/DashboardLayout'; // Import DashboardLayout

// import './App.css'; // Optional

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected routes */}
        {/* First, ProtectedRoute checks for authentication. */}
        {/* If authenticated, it renders an Outlet. */}
        <Route element={<ProtectedRoute />}>
          {/* If authenticated, DashboardLayout is rendered. */}
          {/* DashboardLayout contains the Sidebar and an Outlet for its children. */}
          <Route path="/" element={<DashboardLayout />}>
            {/* Default protected route: Navigate to /dashboard */}
            {/* This 'index' route is relative to the parent '/', so it effectively handles '/' for the protected section */}
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="leads" element={<LeadsPage />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="notes" element={<NotesPage />} />
          </Route>
        </Route>
        
        {/* Fallback for unknown routes (optional, could be a NotFoundPage) */}
        {/* For now, redirecting to login if no other route matches and not authenticated, */}
        {/* or to dashboard if authenticated but route is unknown (handled by ProtectedRoute/DashboardLayout structure). */}
        <Route path="*" element={<Navigate to="/login" replace />} /> 
      </Routes>
    </Router>
  );
}

export default App;
