import React from 'react';

const mockLeads = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'Doe Industries', source: 'Website', status: 'New', assignedTo: 'Sales Team A' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Smith Solutions', source: 'Referral', status: 'Contacted', assignedTo: 'Sales Rep B' },
  { id: 3, name: 'Peter Pan', email: 'peter.pan@example.com', company: 'Neverland LLC', source: 'Cold Call', status: 'Qualified', assignedTo: 'Sales Rep C' },
  { id: 4, name: 'Wendy Darling', email: 'wendy.darling@example.com', company: 'Story Books Inc.', source: 'Webinar', status: 'Proposal Sent', assignedTo: 'Sales Team A' },
];

function LeadList({ onEditLead }) { // Added onEditLead prop for future use
  const handleView = (lead) => console.log('View lead:', lead);
  const handleEdit = (lead) => {
    console.log('Edit lead:', lead);
    if (onEditLead) {
      onEditLead(lead); // Call parent handler if provided
    }
  };
  const handleDelete = (lead) => console.log('Delete lead:', lead);

  if (mockLeads.length === 0) {
    return <p className="text-gray-500">No leads found.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
            <th className="px-5 py-3 border-b-2 border-gray-200">Name</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Email & Company</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Source</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Status</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Assigned To</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {mockLeads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-4">{lead.name}</td>
              <td className="px-5 py-4">
                <div>{lead.email}</div>
                <div className="text-xs text-gray-500">{lead.company}</div>
              </td>
              <td className="px-5 py-4">{lead.source}</td>
              <td className="px-5 py-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                  lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                  lead.status === 'Qualified' ? 'bg-green-100 text-green-800' :
                  lead.status === 'Proposal Sent' ? 'bg-purple-100 text-purple-800' :
                  'bg-gray-100 text-gray-800' // Default for other statuses
                }`}>
                  {lead.status}
                </span>
              </td>
              <td className="px-5 py-4">{lead.assignedTo}</td>
              <td className="px-5 py-4 text-right whitespace-nowrap">
                <button 
                  onClick={() => handleView(lead)} 
                  className="text-blue-600 hover:text-blue-900 mr-3 transition duration-150 ease-in-out">
                  View
                </button>
                <button 
                  onClick={() => handleEdit(lead)} 
                  className="text-yellow-600 hover:text-yellow-900 mr-3 transition duration-150 ease-in-out">
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(lead)} 
                  className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadList;
