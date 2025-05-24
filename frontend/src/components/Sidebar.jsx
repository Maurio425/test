import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationLinks = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Clients', href: '/clients' },
  { name: 'Leads', href: '/leads' },
  { name: 'Tasks', href: '/tasks' },
  { name: 'Notes', href: '/notes' },
];

function Sidebar() {
  const baseLinkClasses = "block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-white rounded-md";
  const activeLinkClasses = "bg-gray-700 text-white border-l-4 border-blue-500"; // Active link will have a different background and text color
  const inactiveLinkClasses = "text-gray-300"; // Inactive link color

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4 space-y-2">
      <div className="text-2xl font-semibold text-white p-2 mb-4">My CRM</div>
      <nav>
        {navigationLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            // `isActive` is provided by NavLink
            className={({ isActive }) =>
              `${baseLinkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      {/* Additional sidebar content like user profile or logout button can go here later */}
    </div>
  );
}

export default Sidebar;
