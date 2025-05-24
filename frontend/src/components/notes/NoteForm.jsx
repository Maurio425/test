import React, { useState, useEffect } from 'react';

const initialFormState = {
  title: '',
  content: '',
};

function NoteForm({ onSubmit, noteToEdit, onCancel }) {
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (noteToEdit) {
      setFormData({
        title: noteToEdit.title || '',
        content: noteToEdit.content || '',
      });
    } else {
      setFormData(initialFormState);
    }
  }, [noteToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('NoteForm submitted with data:', formData);
    if (onSubmit) {
      onSubmit(formData); // This will call handleFormSubmit in NotesPage
    }
  };

  const inputClass = "mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-shadow duration-150";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-2xl mx-auto space-y-6">
      {/* The heading is now part of NotesPage.jsx, so no h2 here unless specifically needed for form sections */}
      {/* <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">
        {noteToEdit ? 'Edit Note' : 'Add New Note'}
      </h2> */}
      
      <div>
        <label htmlFor="title" className={labelClass}>Title</label>
        <input 
          type="text" 
          name="title" 
          id="title" 
          value={formData.title} 
          onChange={handleChange} 
          required 
          className={inputClass} 
          placeholder="Enter note title" 
        />
      </div>

      <div>
        <label htmlFor="content" className={labelClass}>Content</label>
        <textarea 
          name="content" 
          id="content" 
          value={formData.content} 
          onChange={handleChange} 
          required 
          rows="8" // Increased rows for more content
          className={`${inputClass} resize-none`} 
          placeholder="Enter note content..."
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
        {onCancel && (
          <button 
            type="button" 
            onClick={onCancel}
            className="w-full sm:w-auto px-6 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors duration-150"
          >
            Cancel
          </button>
        )}
        <button 
          type="submit"
          className="w-full sm:w-auto px-6 py-2.5 border border-transparent rounded-lg shadow-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
        >
          {noteToEdit ? 'Update Note' : 'Save Note'}
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
