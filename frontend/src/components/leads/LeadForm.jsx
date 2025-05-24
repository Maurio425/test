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

// Sample data (in a real app, this would come from state/API or context)
const assignableUsers = ['Sales Rep A', 'Sales Rep B', 'Sales Team Alpha', 'Marketing Team', 'Support Team'];
const leadSources = ['Website', 'Referral', 'Cold Call', 'Webinar', 'Advertisement', 'Trade Show', 'Other'];
const leadStatuses = ['New', 'Contacted', 'Qualified', 'Proposal Sent', 'Negotiation', 'Closed - Won', 'Closed - Lost', 'On Hold'];


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
  };

  const inputClass = "mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-150";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        {leadToEdit ? 'Edit Lead' : 'Add New Lead'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                 className={inputClass} placeholder="e.g., Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                 className={inputClass} placeholder="e.g., jane.doe@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
                 className={inputClass} placeholder="e.g., (555) 234-5678" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input type="text" name="company" id="company" value={formData.company} onChange={handleChange}
                 className={inputClass} placeholder="e.g., Innovations Ltd." />
        </div>
        <div>
          <label htmlFor="source" className={labelClass}>Lead Source</label>
          <select name="source" id="source" value={formData.source} onChange={handleChange}
                  className={`${inputClass} bg-white`}>
            <option value="">Select Source</option>
            {leadSources.map(src => <option key={src} value={src}>{src}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="status" className={labelClass}>Lead Status</label>
          <select name="status" id="status" value={formData.status} onChange={handleChange}
                  className={`${inputClass} bg-white`}>
            {leadStatuses.map(stat => <option key={stat} value={stat}>{stat}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="assignedTo" className={labelClass}>Assigned To</label>
        <select name="assignedTo" id="assignedTo" value={formData.assignedTo} onChange={handleChange}
                className={`${inputClass} bg-white`}>
          <option value="">Unassigned</option>
          {assignableUsers.map(user => <option key={user} value={user}>{user}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className={labelClass}>Notes</label>
        <textarea name="notes" id="notes" value={formData.notes} onChange={handleChange} rows="4"
                  className={`${inputClass} resize-none`} placeholder="e.g., Initial contact made, interested in product demo."></textarea>
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
          {leadToEdit ? 'Update Lead' : 'Save Lead'}
        </button>
      </div>
    </form>
  );
}

export default LeadForm;
