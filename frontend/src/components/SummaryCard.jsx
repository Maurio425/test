import React from 'react';

// Placeholder for an icon component or library if you decide to use one.
// For now, icons can be simple emojis or text.
// const Icon = ({ iconName }) => <span className="mr-2">{iconName}</span>;

function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center">
        {icon && <span className="text-3xl mr-4 text-blue-500">{icon}</span>}
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-2xl font-semibold text-gray-800">{value}</p>
        </div>
      </div>
      {/* Optionally, you can add a footer or a link here */}
      {/* <div className="mt-4">
        <a href="#" className="text-sm text-blue-500 hover:text-blue-700">View Details</a>
      </div> */}
    </div>
  );
}

export default SummaryCard;
