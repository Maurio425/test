import React, { useState, useEffect } from 'react';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  address: '',
  status: 'Lead', // Default status
};

// Sample statuses (can be moved to a config file or fetched)
const clientStatuses = ['Lead', 'Active', 'Inactive', 'Contacted', 'Proposal Sent', 'On Hold'];


function ClientForm({ onSubmit, clientToEdit, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (clientToEdit) {
      setFormData({
        name: clientToEdit.name || '',
        email: clientToEdit.email || '',
        phone: clientToEdit.phone || '',
        company: clientToEdit.company || '',
        address: clientToEdit.address || '',
        status: clientToEdit.status || 'Lead',
      });
    } else {
      setFormData(initialFormState);
    }
  }, [clientToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ClientForm submitted with data:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  const inputClass = "mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-150";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    // Increased max-w for better layout with grid
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-2xl mx-auto space-y-6"> 
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        {clientToEdit ? 'Edit Client' : 'Add New Client'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                 className={inputClass} placeholder="e.g., John Doe" />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                 className={inputClass} placeholder="e.g., john.doe@example.com" />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                 className={inputClass} placeholder="e.g., (555) 123-4567" />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input type="text" name="company" id="company" value={formData.company} onChange={handleChange}
                 className={inputClass} placeholder="e.g., Acme Corp" />
        </div>
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>Address</label>
        <textarea name="address" id="address" value={formData.address} onChange={handleChange} rows="3"
                  className={`${inputClass} resize-none`} placeholder="e.g., 123 Main St, Anytown, USA"></textarea>
      </div>

      <div>
        <label htmlFor="status" className={labelClass}>Status</label>
        <select name="status" id="status" value={formData.status} onChange={handleChange}
                className={`${inputClass} bg-white`}>
          {clientStatuses.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
        {onCancel && (
          <button type="button" onClick={onCancel}
                  className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors duration-150">
            Cancel
          </button>
        )}
        <button type="submit"
                className="w-full sm:w-auto px-6 py-2.5 border border-transparent rounded-lg shadow-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150">
          {clientToEdit ? 'Update Client' : 'Save Client'}
        </button>
      </div>
    </form>
  );
}

export default ClientForm;
