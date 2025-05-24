import React from 'react';

function ChartComponent({ title = "Chart Title" }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border border-neutral-300 flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out min-h-[200px] sm:min-h-[250px]">
      <h3 className="text-lg font-semibold text-neutral-800 mb-4">{title}</h3>
      <div className="flex-grow flex items-center justify-center border-2 border-dashed border-neutral-300 rounded-lg p-4">
        <p className="text-neutral-500 text-center">Chart will be displayed here.</p>
      </div>
      {/* Placeholder for chart legend or controls if needed later */}
      {/* <div className="mt-4 text-xs text-gray-400 text-center">
        Chart legend / controls
      </div> */}
    </div>
  );
}

export default ChartComponent;
