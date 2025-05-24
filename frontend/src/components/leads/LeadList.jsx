import React from 'react';

const mockLeads = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', company: 'Doe Industries', source: 'Website', status: 'New', assignedTo: 'Sales Team A', phone: '555-0201', notes: 'Interested in Product X.' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', company: 'Smith Solutions', source: 'Referral', status: 'Contacted', assignedTo: 'Sales Rep B', phone: '555-0202', notes: 'Follow-up call scheduled.' },
  { id: 3, name: 'Peter Pan', email: 'peter.pan@example.com', company: 'Neverland LLC', source: 'Cold Call', status: 'Qualified', assignedTo: 'Sales Rep C', phone: '555-0203', notes: 'Demo completed, positive feedback.' },
  { id: 4, name: 'Wendy Darling', email: 'wendy.darling@example.com', company: 'Story Books Inc.', source: 'Webinar', status: 'Proposal Sent', assignedTo: 'Sales Team A', phone: '555-0204', notes: 'Proposal sent on 2024-06-01.' },
  { id: 5, name: 'Captain Hook', email: 'captain.hook@example.com', company: 'Jolly Roger Co.', source: 'Website', status: 'Lost', assignedTo: 'Sales Rep B', phone: '555-0205', notes: 'Chose a competitor.' },
  { id: 6, name: 'Smee Jolly', email: 'smee.jolly@example.com', company: 'Pirate Supplies Ltd.', source: 'Referral', status: 'New', assignedTo: 'Sales Rep C', phone: '555-0206', notes: 'Needs basic info pack.' },
  { id: 7, name: 'Tinker Bell', email: 'tinker.bell@example.com', company: 'Fairy Dust Corp', source: 'Webinar', status: 'Contacted', assignedTo: 'Sales Team A', phone: '555-0207', notes: 'Attended webinar, requested info.' },
  { id: 8, name: 'Aladdin Prince', email: 'aladdin.prince@example.com', company: 'Agrabah Merchants', source: 'Cold Call', status: 'Qualified', assignedTo: 'Sales Rep B', phone: '555-0208', notes: 'Strong interest in premium package.' },
  { id: 9, name: 'Jasmine Agrabah', email: 'jasmine.agrabah@example.com', company: 'Sultanate Goods', source: 'Website', status: 'Proposal Sent', assignedTo: 'Sales Rep C', phone: '555-0209', notes: 'Negotiating terms.' },
  { id: 10, name: 'Genie Lamp', email: 'genie.lamp@example.com', company: 'Wish Fulfillment Inc.', source: 'Referral', status: 'New', assignedTo: 'Sales Team A', phone: '555-0210', notes: 'High potential value.' },
  { id: 11, name: 'Jafar Vizier', email: 'jafar.vizier@example.com', company: 'Royal Advisors Co.', source: 'Cold Call', status: 'Lost', assignedTo: 'Sales Rep B', phone: '555-0211', notes: 'Budget constraints.' },
  { id: 12, name: 'Abu Monkey', email: 'abu.monkey@example.com', company: 'Treasure Hunters', source: 'Webinar', status: 'Contacted', assignedTo: 'Sales Rep C', phone: '555-0212', notes: 'Looking for specific features.' },
  { id: 13, name: 'Simba Lion', email: 'simba.lion@example.com', company: 'Pride Rock Group', source: 'Website', status: 'Qualified', assignedTo: 'Sales Team A', phone: '555-0213', notes: 'Decision maker for the company.' },
  { id: 14, name: 'Nala Queen', email: 'nala.queen@example.com', company: 'Jungle Consulting', source: 'Referral', status: 'Proposal Sent', assignedTo: 'Sales Rep B', phone: '555-0214', notes: 'Awaiting final approval.' },
  { id: 15, name: 'Scar Brother', email: 'scar.brother@example.com', company: 'Outlands Corp', source: 'Cold Call', status: 'New', assignedTo: 'Sales Rep C', phone: '555-0215', notes: 'Initial contact, seems skeptical.' },
];

function LeadList({ onEditLead }) {
  const handleView = (lead) => console.log('View lead:', lead);
  const handleEdit = (lead) => {
    console.log('LeadList: Edit lead:', lead);
    if (onEditLead) {
      onEditLead(lead);
    }
  };
  const handleDelete = (lead) => console.log('Delete lead:', lead);

  if (mockLeads.length === 0) {
    return <p className="text-gray-500 italic">No leads found. Consider adding some!</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
          {mockLeads.map((lead) => (
            <tr key={lead.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{lead.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{lead.email}</div>
                <div className="text-xs text-gray-500 mt-1">{lead.company}</div> {/* Assuming phone was meant to be company here based on previous header "Email & Company" */}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{lead.source}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full leading-tight ${
                  lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                  lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                  lead.status === 'Qualified' ? 'bg-green-100 text-green-800' :
                  lead.status === 'Proposal Sent' ? 'bg-purple-100 text-purple-800' :
                  lead.status === 'Lost' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {lead.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{lead.assignedTo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                <button 
                  onClick={() => handleView(lead)} 
                  className="px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
                  View
                </button>
                <button 
                  onClick={() => handleEdit(lead)} 
                  className="px-3 py-1 text-xs font-medium text-yellow-600 hover:text-yellow-800 bg-yellow-100 hover:bg-yellow-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(lead)} 
                  className="px-3 py-1 text-xs font-medium text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
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

export { mockLeads };
export default LeadList;
