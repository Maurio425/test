import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function DashboardLayout() {
  // State to manage sidebar visibility. Default to true for larger screens.
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Effect to handle window resize and adjust sidebar visibility
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // Close sidebar on small screens
      } else {
        setIsSidebarOpen(true); // Open sidebar on larger screens
      }
    };
    window.addEventListener('resize', handleResize);
    // Call handler right away so state is updated with initial window size
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar: Pass open state and toggle function (if close button is in sidebar) */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar: Pass toggle function for the hamburger menu */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto bg-gray-50"> {/* Standardized padding */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
