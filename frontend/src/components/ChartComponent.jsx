import React from 'react';

function ChartComponent({ title = "Chart Title" }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 min-h-[300px] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
        <div className="flex items-center justify-center h-full min-h-[200px] border-2 border-dashed border-gray-300 rounded-md">
          <p className="text-gray-500">Chart will be displayed here.</p>
        </div>
      </div>
      {/* Placeholder for chart legend or controls if needed later */}
      {/* <div className="mt-4 text-sm text-gray-500">
        Additional chart information or controls.
      </div> */}
    </div>
  );
}

export default ChartComponent;
