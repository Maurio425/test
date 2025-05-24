import React from 'react';

function ChartComponent({ title = "Chart Title" }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 sm:p-6 border border-gray-200 flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out min-h-[320px] sm:min-h-[350px]">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4">
        <p className="text-gray-500 text-center">Chart will be displayed here.</p>
      </div>
      {/* Placeholder for chart legend or controls if needed later */}
      {/* <div className="mt-4 text-xs text-gray-400 text-center">
        Chart legend / controls
      </div> */}
    </div>
  );
}

export default ChartComponent;
