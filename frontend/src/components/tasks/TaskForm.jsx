import React, { useState, useEffect } from 'react';

const initialFormState = {
  title: '',
  description: '',
  dueDate: '',
  priority: 'Medium', // Default priority
  status: 'Pending',   // Default status
  assignedTo: '',
  relatedTo: '', // e.g., client ID, lead ID, or project name
};

// Sample data (in a real app, this would come from state/API or context)
const assignableUsers = ['Sales Rep A', 'Sales Rep B', 'Support Team', 'Account Manager', 'Admin User'];
const taskPriorities = ['High', 'Medium', 'Low'];
const taskStatuses = ['Pending', 'In Progress', 'Completed', 'On Hold', 'Blocked'];

function TaskForm({ onSubmit, taskToEdit, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        title: taskToEdit.title || '',
        description: taskToEdit.description || '',
        // Ensure date is in YYYY-MM-DD format for the input type="date"
        dueDate: taskToEdit.dueDate ? new Date(taskToEdit.dueDate).toISOString().split('T')[0] : '',
        priority: taskToEdit.priority || 'Medium',
        status: taskToEdit.status || 'Pending',
        assignedTo: taskToEdit.assignedTo || '',
        relatedTo: taskToEdit.relatedTo || '',
      });
    } else {
      setFormData(initialFormState);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('TaskForm submitted with data:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
    // Optionally reset form or handle post-submission logic
    // setFormData(initialFormState); // uncomment to reset after submit
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6 w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
        {taskToEdit ? 'Edit Task' : 'Add New Task'}
      </h2>
      
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required 
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
          <input type="date" name="dueDate" id="dueDate" value={formData.dueDate} onChange={handleChange} 
                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Priority</label>
          <select name="priority" id="priority" value={formData.priority} onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            {taskPriorities.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
          <select name="status" id="status" value={formData.status} onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            {taskStatuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
          <select name="assignedTo" id="assignedTo" value={formData.assignedTo} onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <option value="">Unassigned</option>
            {assignableUsers.map(user => <option key={user} value={user}>{user}</option>)}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="relatedTo" className="block text-sm font-medium text-gray-700">Related To (e.g., Client ID, Lead Name)</label>
        <input type="text" name="relatedTo" id="relatedTo" value={formData.relatedTo} onChange={handleChange}
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
               placeholder="Client X, Lead Y, Project Alpha" />
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
          {taskToEdit ? 'Update Task' : 'Save Task'}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
