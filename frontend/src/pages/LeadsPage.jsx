import React, { useState } from 'react';
import LeadList from '../components/leads/LeadList'; // Adjusted path
import LeadForm from '../components/leads/LeadForm'; // Adjusted path

function LeadsPage() {
  const [showForm, setShowForm] = useState(false);
  const [leadToEdit, setLeadToEdit] = useState(null);

  const handleAddNewLead = () => {
    setLeadToEdit(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setLeadToEdit(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('LeadsPage: Form submitted with data:', formData);
    if (leadToEdit) {
      console.log('LeadsPage: Would update lead:', leadToEdit.id, formData);
      // Placeholder: Update lead in your state/API
    } else {
      console.log('LeadsPage: Would add new lead:', formData);
      // Placeholder: Add new lead to your state/API
    }
    handleFormClose();
  };

  const handleEditLead = (lead) => {
    setLeadToEdit(lead);
    setShowForm(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Manage Leads</h1>
        {!showForm && (
          <button
            onClick={handleAddNewLead}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            Add New Lead
          </button>
        )}
      </div>

      {showForm && (
        <div className="mb-8 p-4 bg-white shadow-lg rounded-lg">
          <LeadForm
            onSubmit={handleFormSubmit}
            leadToEdit={leadToEdit}
            onCancel={handleFormClose}
          />
        </div>
      )}

      {!showForm && (
        <LeadList onEditLead={handleEditLead} />
      )}
      
      {/* If you want the list to be visible even when the form is open (e.g., form in a modal or a small section), adjust the above */}
      {/* For example, to always show LeadList: */}
      {/* <LeadList onEditLead={handleEditLead} /> */}
    </div>
  );
}

export default LeadsPage;
