import React from 'react';

function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center justify-between"> {/* Changed to justify-between if icon is on the right */}
        <div className="flex-grow"> {/* Text content takes available space */}
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-1">{value}</p>
        </div>
        {icon && (
          <div className="flex-shrink-0 ml-4"> {/* Ensure icon doesn't shrink and has margin */}
            <span className="text-3xl sm:text-4xl text-blue-500 opacity-80">{icon}</span>
          </div>
        )}
      </div>
      {/* Optional footer for links like "View Details" */}
      {/* <div className="mt-4 pt-2 border-t border-gray-100">
        <a href="#" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          View Details &rarr;
        </a>
      </div> */}
    </div>
  );
}

export default SummaryCard;
