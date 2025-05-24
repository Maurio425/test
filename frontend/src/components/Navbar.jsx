import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, removeToken } from '../services/authService';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Hamburger and Close icons

function Navbar({ toggleSidebar, isSidebarOpen }) { // Accept props from DashboardLayout
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = getCurrentUser();
    if (user && user.name) {
      setUserName(user.name);
    } else {
      setUserName('User'); 
    }
  }, []);

  const handleLogout = () => {
    removeToken();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-20 border-b border-gray-200"> {/* Subtle shadow and border */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* Use max-w-full for full-width bar */}
        <div className="flex items-center justify-between h-16">
          {/* Left side: Hamburger Menu Button (visible on md and below) */}
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isSidebarOpen}
              aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isSidebarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            {/* Optional: Can add a title here if sidebar is collapsed and brand is hidden */}
            {/* <span className={`text-xl font-semibold text-gray-800 ml-2 ${isSidebarOpen ? 'md:hidden' : 'md:block hidden'}`}>My CRM</span> */}
          </div>

          {/* Right side: User Info and Logout Button */}
          <div className="flex items-center">
            {userName && (
              <span className="text-gray-700 text-sm mr-3 sm:mr-4">
                Welcome, <span className="font-semibold">{userName}</span>
              </span>
            )}
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 sm:px-4 rounded-md text-sm transition duration-150 ease-in-out shadow-sm hover:shadow-md"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
