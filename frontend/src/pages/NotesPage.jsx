import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid'; 
import NoteList from '../components/notes/NoteList'; // Import NoteList
import NoteForm from '../components/notes/NoteForm'; // Import NoteForm

function NotesPage() {
  const [showForm, setShowForm] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);

  const handleAddNewNote = () => {
    setNoteToEdit(null);
    setShowForm(true);
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setNoteToEdit(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('NotesPage: Form submitted with data:', formData);
    if (noteToEdit) {
      console.log('NotesPage: Would update note:', noteToEdit.id, formData);
      // Placeholder: Update note in your state/API (e.g., update mockNotes array)
    } else {
      console.log('NotesPage: Would add new note:', formData);
      // Placeholder: Add new note to your state/API (e.g., add to mockNotes array)
    }
    // In a real app, you'd refresh data here
    handleFormClose();
  };

  const handleDeleteNote = (noteId) => {
    console.log('NotesPage: Would delete note with ID:', noteId);
    // Placeholder: Delete note from your state/API (e.g., filter mockNotes array)
    // For now, just logging. If form is open for this note, close it.
    if (noteToEdit && noteToEdit.id === noteId) {
        handleFormClose();
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {showForm ? (noteToEdit ? 'Edit Note' : 'Add New Note') : 'Manage Notes'}
        </h1>
        {!showForm && (
          <button
            onClick={handleAddNewNote}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-sm sm:text-base"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Note
          </button>
        )}
      </div>

      {showForm ? (
        <NoteForm 
          onSubmit={handleFormSubmit} 
          noteToEdit={noteToEdit} 
          onCancel={handleFormClose} 
        />
      ) : (
        <NoteList 
          onEditNote={handleEditNote} 
          onDeleteNote={handleDeleteNote} 
        />
      )}
    </div>
  );
}

export default NotesPage;
