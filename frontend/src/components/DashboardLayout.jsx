import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Assuming Sidebar.jsx is in the same directory

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        {/* The Outlet will render the specific page component (DashboardPage, ClientsPage, etc.) */}
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
