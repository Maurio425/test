import React from 'react';

const mockClients = [
  { id: 1, name: 'Alice Wonderland', email: 'alice@example.com', company: 'Wonderland Inc.', status: 'Active' },
  { id: 2, name: 'Bob The Builder', email: 'bob@example.com', company: 'Builders Co.', status: 'Active' },
  { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', company: 'Peanuts LLC', status: 'Inactive' },
  { id: 4, name: 'Diana Prince', email: 'diana@example.com', company: 'Themyscira Corp.', status: 'Lead' },
];

function ClientList() {
  const handleView = (client) => console.log('View client:', client);
  const handleEdit = (client) => console.log('Edit client:', client);
  const handleDelete = (client) => console.log('Delete client:', client);

  if (mockClients.length === 0) {
    return <p className="text-gray-500">No clients found.</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
            <th className="px-5 py-3 border-b-2 border-gray-200">Name</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Email</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Company</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Status</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {mockClients.map((client) => (
            <tr key={client.id} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="px-5 py-4">{client.name}</td>
              <td className="px-5 py-4">{client.email}</td>
              <td className="px-5 py-4">{client.company}</td>
              <td className="px-5 py-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  client.status === 'Active' ? 'bg-green-100 text-green-800' : 
                  client.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800' // Lead or other statuses
                }`}>
                  {client.status}
                </span>
              </td>
              <td className="px-5 py-4 text-right">
                <button 
                  onClick={() => handleView(client)} 
                  className="text-blue-600 hover:text-blue-900 mr-3 transition duration-150 ease-in-out">
                  View
                </button>
                <button 
                  onClick={() => handleEdit(client)} 
                  className="text-yellow-600 hover:text-yellow-900 mr-3 transition duration-150 ease-in-out">
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(client)} 
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

export default ClientList;
