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
const assignableUsers = ['Sales Rep A', 'Sales Rep B', 'Support Team', 'Account Manager', 'Admin User', 'Marketing Team'];
const taskPriorities = ['High', 'Medium', 'Low'];
const taskStatuses = ['Pending', 'In Progress', 'Completed', 'On Hold', 'Blocked', 'Needs Review'];

function TaskForm({ onSubmit, taskToEdit, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (taskToEdit) {
      setFormData({
        title: taskToEdit.title || '',
        description: taskToEdit.description || '',
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
  };

  const inputClass = "mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-150";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        {taskToEdit ? 'Edit Task' : 'Add New Task'}
      </h2>
      
      <div>
        <label htmlFor="title" className={labelClass}>Task Title</label>
        <input type="text" name="title" id="title" value={formData.title} onChange={handleChange} required 
               className={inputClass} placeholder="e.g., Follow up with Client X" />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>Description</label>
        <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows="4"
                  className={`${inputClass} resize-none`} placeholder="e.g., Discuss new product line and gather feedback."></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div>
          <label htmlFor="dueDate" className={labelClass}>Due Date</label>
          <input type="date" name="dueDate" id="dueDate" value={formData.dueDate} onChange={handleChange} 
                 className={inputClass} />
        </div>
        <div>
          <label htmlFor="priority" className={labelClass}>Priority</label>
          <select name="priority" id="priority" value={formData.priority} onChange={handleChange}
                  className={`${inputClass} bg-white`}>
            {taskPriorities.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="status" className={labelClass}>Status</label>
          <select name="status" id="status" value={formData.status} onChange={handleChange}
                  className={`${inputClass} bg-white`}>
            {taskStatuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="assignedTo" className={labelClass}>Assigned To</label>
          <select name="assignedTo" id="assignedTo" value={formData.assignedTo} onChange={handleChange}
                  className={`${inputClass} bg-white`}>
            <option value="">Unassigned</option>
            {assignableUsers.map(user => <option key={user} value={user}>{user}</option>)}
          </select>
        </div>
      </div>
      
      <div>
        <label htmlFor="relatedTo" className={labelClass}>Related To (e.g., Client, Lead, Project)</label>
        <input type="text" name="relatedTo" id="relatedTo" value={formData.relatedTo} onChange={handleChange}
               className={inputClass} 
               placeholder="e.g., Client: Alice W, Lead: Peter P, Project: Summer Campaign" />
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
          {taskToEdit ? 'Update Task' : 'Save Task'}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
