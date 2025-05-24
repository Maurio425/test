import React, { useState } from 'react';
import LeadList from '../components/leads/LeadList';
import LeadForm from '../components/leads/LeadForm';
import { PlusIcon } from '@heroicons/react/24/solid';

function LeadsPage() {
  const [showForm, setShowForm] = useState(false);
  const [leadToEdit, setLeadToEdit] = useState(null);

  const handleAddNewLead = () => {
    setLeadToEdit(null);
    setShowForm(true);
  };

  const handleEditLead = (lead) => {
    setLeadToEdit(lead);
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
    } else {
      console.log('LeadsPage: Would add new lead:', formData);
    }
    // In a real app, you'd refresh data here
    handleFormClose();
  };
  
  return (
    <div className="space-y-6 sm:space-y-8"> {/* Consistent vertical spacing */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {showForm ? (leadToEdit ? 'Edit Lead' : 'Add New Lead') : 'Manage Leads'}
        </h1>
        {!showForm && (
          <button
            onClick={handleAddNewLead}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-sm sm:text-base"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Lead
          </button>
        )}
      </div>

      {showForm ? (
        <div className="mt-0"> 
          <LeadForm
            onSubmit={handleFormSubmit}
            leadToEdit={leadToEdit}
            onCancel={handleFormClose}
          />
        </div>
      ) : (
        <LeadList onEditLead={handleEditLead} />
      )}
    </div>
  );
}

export default LeadsPage;
