import React from 'react';
import SummaryCard from '../components/SummaryCard'; // Adjusted path
import ChartComponent from '../components/ChartComponent'; // Adjusted path

function DashboardPage() {
  // Sample data for summary cards
  const summaryData = [
    { title: 'Total Clients', value: '1,250', icon: 'user-group' },
    { title: 'Active Leads', value: '350', icon: 'fire' },
    { title: 'Pending Tasks', value: '75', icon: 'clock' },
    { title: 'Revenue (MTD)', value: '$15,600', icon: 'currency-dollar' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-full"> {/* Changed background to gray-50 for better contrast with white cards */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h1>

      {/* Section for Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        {summaryData.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Section for Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartComponent title="Sales Trends (Placeholder)" />
        <ChartComponent title="Lead Conversion Rates (Placeholder)" />
      </div>

      {/* Future sections can be added here, e.g., Recent Activity, Top Performers */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="text-gray-600">Activity feed will go here...</p>
        </div>
      </div> */}
    </div>
  );
}

export default DashboardPage;
