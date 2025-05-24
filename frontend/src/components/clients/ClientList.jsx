import React from 'react';

const mockClients = [
  { id: 1, name: 'Alice Wonderland', email: 'alice.wonderland@example.com', company: 'Wonderland Inc.', status: 'Active', phone: '555-0101', address: '123 Rabbit Hole, Fairyland' },
  { id: 2, name: 'Bob The Builder', email: 'bob.builder@example.com', company: 'Builders Co.', status: 'Active', phone: '555-0102', address: '456 Fixit Ave, Bobsville' },
  { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', company: 'Peanuts LLC', status: 'Inactive', phone: '555-0103', address: '789 Kite St, Hometown' },
  { id: 4, name: 'Diana Prince', email: 'diana.prince@example.com', company: 'Themyscira Corp.', status: 'Lead', phone: '555-0104', address: '1 Amazon Way, Paradise Island' },
  { id: 5, name: 'Edward Scissorhands', email: 'edward.hands@example.com', company: 'Topiary Creations', status: 'Active', phone: '555-0105', address: '24 Art St, Suburbia' },
  { id: 6, name: 'Fiona Gallagher', email: 'fiona.gallagher@example.com', company: 'Southside Solutions', status: 'Active', phone: '555-0106', address: '369 Shameless Rd, Chicago' },
  { id: 7, name: 'George Jetson', email: 'george.jetson@example.com', company: 'Spacely Sprockets', status: 'Lead', phone: '555-0107', address: '7 Orbit City Plaza, Future' },
  { id: 8, name: 'Harry Potter', email: 'harry.potter@example.com', company: 'Wizarding World Supplies', status: 'Inactive', phone: '555-0108', address: '4 Privet Drive, Little Whinging' },
  { id: 9, name: 'Irene Adler', email: 'irene.adler@example.com', company: 'Adler Consulting', status: 'Active', phone: '555-0109', address: '221B Baker St, London (Neighbor)' },
  { id: 10, name: 'John Snow', email: 'john.snow@example.com', company: 'Night Watch Security', status: 'Active', phone: '555-0110', address: '1 Wall North, Winterfell' },
  { id: 11, name: 'Kevin McCallister', email: 'kevin.mccallister@example.com', company: 'Home Security Innovations', status: 'Lead', phone: '555-0111', address: '671 Lincoln Ave, Chicago' },
  { id: 12, name: 'Lucy Pevensie', email: 'lucy.pevensie@example.com', company: 'Narnia Adventures Ltd.', status: 'Active', phone: '555-0112', address: '10 Wardrobe Passage, Countryside' },
  { id: 13, name: 'Michael Scott', email: 'michael.scott@example.com', company: 'Dunder Mifflin Scranton', status: 'Inactive', phone: '555-0113', address: '1725 Slough Ave, Scranton' },
  { id: 14, name: 'Nancy Drew', email: 'nancy.drew@example.com', company: 'Drew Detective Agency', status: 'Active', phone: '555-0114', address: '3 Carson Dr, River Heights' },
  { id: 15, name: 'Oliver Twist', email: 'oliver.twist@example.com', company: 'Workhouse Catering', status: 'Lead', phone: '555-0115', address: '7 Orphanage Lane, London' },
];

function ClientList({ onEditClient }) {
  const handleView = (client) => console.log('View client:', client);
  const handleDelete = (client) => console.log('Delete client:', client);

  const handleEdit = (client) => {
    console.log('ClientList: Edit client:', client);
    if (onEditClient) {
      onEditClient(client);
    }
  };

  if (mockClients.length === 0) {
    return <p className="text-gray-500 italic">No clients found. Consider adding some!</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact Info</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
          {mockClients.map((client) => (
            <tr key={client.id} className="hover:bg-gray-50 transition-colors duration-150">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{client.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>{client.email}</div>
                <div className="text-xs text-gray-500 mt-1">{client.phone}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{client.company}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full leading-tight ${
                  client.status === 'Active' ? 'bg-green-100 text-green-800' : 
                  client.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {client.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                <button 
                  onClick={() => handleView(client)} 
                  className="px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
                  View
                </button>
                <button 
                  onClick={() => handleEdit(client)} 
                  className="px-3 py-1 text-xs font-medium text-yellow-600 hover:text-yellow-800 bg-yellow-100 hover:bg-yellow-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(client)} 
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

export { mockClients }; 
export default ClientList;
