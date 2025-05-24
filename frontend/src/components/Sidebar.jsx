import React from 'react';
import { NavLink } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'; // Example: Using Heroicons

const navigationLinks = [
  { name: 'Dashboard', href: '/dashboard' }, // icon: <HomeIcon className="h-5 w-5 mr-3" /> (example if icons are added)
  { name: 'Clients', href: '/clients' },
  { name: 'Leads', href: '/leads' },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Notes', href: '/notes' },
];

function Sidebar({ isOpen, toggleSidebar }) {
  // Base classes for links
  const baseLinkClasses = "flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out";
  // Active link: different background and text color
  const activeLinkClasses = "bg-primary text-white border-l-4 border-blue-300 font-bold"; 
  // Inactive link: hover effect
  const inactiveLinkClasses = "text-neutral-300 hover:bg-neutral-700 hover:text-neutral-100"; 

  return (
    <>
      {/* Overlay for mobile when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden" 
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      <div 
        className={`
          fixed inset-y-0 left-0 z-40 flex flex-col
          bg-neutral-800 text-neutral-100 
          w-64 min-h-screen p-4 space-y-3 border-r border-neutral-700 shadow-lg
          transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:min-h-0 md:shadow-none md:flex 
          ${isOpen ? 'md:w-64' : 'md:w-0 md:p-0 md:opacity-0 md:invisible'} 
          md:transition-all md:duration-300 md:ease-in-out
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`text-2xl font-semibold text-white p-2 ${!isOpen && 'md:hidden'}`}> {/* Kept text-white for high prominence */}
            My CRM
          </div>
          {/* Close button for mobile - visible only when sidebar is open and on small screens */}
          <button 
            onClick={toggleSidebar} 
            className={`md:hidden p-1 text-neutral-400 hover:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-300
              ${!isOpen && 'hidden'} 
            `}
            aria-label="Close sidebar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className={`flex-grow ${!isOpen && 'md:hidden'}`}>
          {navigationLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={window.innerWidth < 768 ? toggleSidebar : undefined} // Close sidebar on mobile after click
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}` // Already updated activeLinkClasses and inactiveLinkClasses definitions
              }
            >
              {/* item.icon && item.icon */} {/* Render icon if provided */}
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Optional: User profile section or logout at the bottom of sidebar */}
        {/* <div className={`mt-auto ${!isOpen && 'md:hidden'}`}>
          <div className="p-2 border-t border-neutral-700">
            User Profile / Logout
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Sidebar;
