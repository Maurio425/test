import React from 'react';

function SummaryCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex items-center"> {/* Changed to justify-between if icon is on the right */}
        {icon && (
          <div className="flex-shrink-0 mr-3 text-blue-500 h-8 w-8 sm:h-10 sm:w-10 opacity-80"> {/* Ensure icon doesn't shrink and has margin */}
            {icon}
          </div>
        )}
        <div className="flex-grow"> {/* Text content takes available space */}
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <p className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-1">{value}</p>
        </div>
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
