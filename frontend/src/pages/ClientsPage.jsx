import React, { useState } from 'react';
import ClientList from '../components/clients/ClientList'; // Adjusted path
import ClientForm from '../components/clients/ClientForm'; // Adjusted path

function ClientsPage() {
  const [showForm, setShowForm] = useState(false);
  const [clientToEdit, setClientToEdit] = useState(null); // To pass to ClientForm for editing

  // Handler for the "Add New Client" button
  const handleAddNewClient = () => {
    setClientToEdit(null); // Ensure we are in "add" mode
    setShowForm(true);
  };

  // Handler for when the form needs to be closed (e.g., after submission or cancellation)
  const handleFormClose = () => {
    setShowForm(false);
    setClientToEdit(null); // Clear any client being edited
  };

  // Placeholder for actual form submission logic
  const handleFormSubmit = (formData) => {
    console.log('ClientsPage: Form submitted with data:', formData);
    if (clientToEdit) {
      console.log('ClientsPage: Would update client:', clientToEdit.id, formData);
      // Placeholder: Update client in your state/API
    } else {
      console.log('ClientsPage: Would add new client:', formData);
      // Placeholder: Add new client to your state/API
    }
    handleFormClose(); // Close form after submission
  };
  
  // Placeholder for edit action from ClientList (to be implemented in ClientList)
  // For now, we'll simulate it if needed, or ClientList can call this directly if props are passed
  // const handleEditClient = (client) => {
  //   setClientToEdit(client);
  //   setShowForm(true);
  // };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Manage Clients</h1>
        {!showForm && ( // Only show "Add New Client" if form is not visible
          <button
            onClick={handleAddNewClient}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            Add New Client
          </button>
        )}
      </div>

      {/* Conditional rendering for the ClientForm */}
      {showForm && (
        <div className="mb-8 p-4 bg-white shadow-lg rounded-lg">
          <ClientForm
            onSubmit={handleFormSubmit}
            clientToEdit={clientToEdit}
            onCancel={handleFormClose} // Pass the cancel handler
          />
        </div>
      )}

      {/* ClientList is always visible unless form is shown fullscreen (not the case here) */}
      {!showForm && <ClientList /* onEditClient={handleEditClient} ... other props */ />}
      
      {/* If you want the list to be visible even when the form is open (e.g., form in a modal or a small section), adjust the above */}
      {/* For example, to always show ClientList: */}
      {/* <ClientList /> */}

    </div>
  );
}

export default ClientsPage;
