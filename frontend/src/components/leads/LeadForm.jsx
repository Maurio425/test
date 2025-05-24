import React, { useState, useEffect } from 'react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  source: '',
  status: 'New', // Default status
  notes: '',
  assignedTo: '',
};

function LeadForm({ onSubmit, leadToEdit, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (leadToEdit) {
      setFormData({
        name: leadToEdit.name || '',
        email: leadToEdit.email || '',
        phone: leadToEdit.phone || '',
        company: leadToEdit.company || '',
        source: leadToEdit.source || '',
        status: leadToEdit.status || 'New',
        notes: leadToEdit.notes || '',
        assignedTo: leadToEdit.assignedTo || '',
      });
    } else {
      setFormData(initialFormState);
    }
  }, [leadToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('LeadForm submitted with data:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
    // Optionally reset form or handle post-submission logic
    // setFormData(initialFormState); // uncomment to reset after submit
  };

  // Sample users/teams for assignment (in a real app, this would come from state/API)
  const assignableUsers = ['Sales Rep A', 'Sales Rep B', 'Sales Team Alpha', 'Marketing Team'];
  const leadSources = ['Website', 'Referral', 'Cold Call', 'Webinar', 'Advertisement', 'Other'];
  const leadStatuses = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Negotiation', 'Closed - Won', 'Closed - Lost'];


  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        {leadToEdit ? 'Edit Lead' : 'Add New Lead'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <input type="text" name="company" id="company" value={formData.company} onChange={handleChange}
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-gray-700">Source</label>
          <select name="source" id="source" value={formData.source} onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="">Select Source</option>
            {leadSources.map(src => <option key={src} value={src}>{src}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select name="status" id="status" value={formData.status} onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            {leadStatuses.map(stat => <option key={stat} value={stat}>{stat}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
        <select name="assignedTo" id="assignedTo" value={formData.assignedTo} onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
          <option value="">Unassigned</option>
          {assignableUsers.map(user => <option key={user} value={user}>{user}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
        <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange} rows="4"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
      </div>

      <div className="flex justify-end space-x-4">
        {onCancel && (
          <button type="button" onClick={onCancel}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Cancel
          </button>
        )}
        <button type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          {leadToEdit ? 'Update Lead' : 'Save Lead'}
        </button>
      </div>
    </form>
  );
}

export default LeadForm;
