import React from 'react';
import SummaryCard from '../components/SummaryCard'; 
import ChartComponent from '../components/ChartComponent'; 
import { mockClients } from '../components/clients/ClientList'; 
import { mockLeads } from '../components/leads/LeadList'; 
import { mockTasks } from '../components/tasks/TaskList'; 
import { 
  UserGroupIcon, 
  ArrowTrendingUpIcon, 
  ClockIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

function DashboardPage() {
  const totalClients = mockClients.length;
  const totalLeads = mockLeads.length;
  const pendingTasks = mockTasks.filter(task => task.status === 'Pending' || task.status === 'In Progress').length;
  const totalTasks = mockTasks.length; // Added for the chart title

  const summaryData = [
    { title: 'Total Clients', value: totalClients.toString(), icon: <UserGroupIcon /> },
    { title: 'Total Leads', value: totalLeads.toString(), icon: <ArrowTrendingUpIcon /> },
    { title: 'Pending Tasks', value: pendingTasks.toString(), icon: <ClockIcon /> },
    { title: 'Revenue (MTD)', value: '$15,600', icon: <CurrencyDollarIcon /> }, 
  ];

  return (
    // Adjusted padding to match DashboardLayout's main content for consistency
    <div className="space-y-4 sm:space-y-6"> {/* Using space-y for consistent vertical spacing */}
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartComponent title={`Client Acquisition Trends (Total: ${totalClients})`} />
        <ChartComponent title={`Lead Conversion Funnel (Total: ${totalLeads})`} />
      </div>
      
      <div className="grid grid-cols-1 gap-6"> 
        <ChartComponent title={`Tasks Overview (Pending: ${pendingTasks} / Total: ${totalTasks})`} />
      </div>
    </div>
  );
}

export default DashboardPage;
