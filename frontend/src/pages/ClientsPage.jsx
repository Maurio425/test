import React, { useState } from 'react';
import ClientList from '../components/clients/ClientList';
import ClientForm from '../components/clients/ClientForm';
import { PlusIcon } from '@heroicons/react/24/solid'; // Example icon for button

function ClientsPage() {
  const [showForm, setShowForm] = useState(false);
  const [clientToEdit, setClientToEdit] = useState(null);

  const handleAddNewClient = () => {
    setClientToEdit(null);
    setShowForm(true);
  };

  const handleEditClient = (client) => { // This function will be passed to ClientList
    setClientToEdit(client);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setClientToEdit(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('ClientsPage: Form submitted with data:', formData);
    if (clientToEdit) {
      console.log('ClientsPage: Would update client:', clientToEdit.id, formData);
    } else {
      console.log('ClientsPage: Would add new client:', formData);
    }
    // In a real app, you'd refresh data here
    handleFormClose();
  };
  
  return (
    <div className="space-y-6 sm:space-y-8"> {/* Consistent vertical spacing */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {showForm ? (clientToEdit ? 'Edit Client' : 'Add New Client') : 'Manage Clients'}
        </h1>
        {!showForm && (
          <button
            onClick={handleAddNewClient}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-sm sm:text-base"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Client
          </button>
        )}
      </div>

      {showForm ? (
        // The ClientForm already has its own card-like styling (bg-white, shadow, rounded-xl, border)
        // So we don't need to wrap it in another card here, just provide margin if needed.
        <div className="mt-0"> {/* Margin top can be adjusted or removed if form's internal padding is enough */}
          <ClientForm
            onSubmit={handleFormSubmit}
            clientToEdit={clientToEdit}
            onCancel={handleFormClose}
          />
        </div>
      ) : (
        <ClientList onEditClient={handleEditClient} />
      )}
    </div>
  );
}

export default ClientsPage;
