import React from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

const mockNotes = [
  { id: 1, title: 'Meeting Recap - Project Alpha', content: 'Discussed Q3 roadmap, key deliverables identified. Action items assigned to team members. Follow-up meeting scheduled for next week.', updatedAt: '2024-07-15T10:30:00Z' },
  { id: 2, title: 'Client Call Notes - Acme Corp', content: 'Client expressed interest in new service package. Sent follow-up email with pricing. Need to schedule a demo.', updatedAt: '2024-07-14T15:00:00Z' },
  { id: 3, title: 'Brainstorming Ideas - New Feature', content: 'Generated several ideas for the upcoming user dashboard enhancement. Top contenders: real-time notifications, customizable widgets.', updatedAt: '2024-07-14T11:00:00Z' },
  { id: 4, title: 'Personal Reminder - Doctor Appointment', content: 'Dentist appointment on July 20th at 2 PM. Remember to bring insurance card.', updatedAt: '2024-07-13T08:00:00Z' },
  { id: 5, title: 'Quick Note - Supplier Contact', content: 'Supplier X contact: John Smith, john.smith@supplierx.com, (555) 987-6543. Quoted us for new materials.', updatedAt: '2024-07-12T16:45:00Z' },
  { id: 6, title: 'Ideas for Blog Post', content: 'Topic: "5 Ways to Boost Productivity with Our CRM". Outline key points and find relevant stats.', updatedAt: '2024-07-11T14:20:00Z' },
  { id: 7, title: 'Training Session Feedback', content: 'The recent sales training was very informative. Suggestion: add more role-playing exercises.', updatedAt: '2024-07-10T12:00:00Z' },
];

// Helper to format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
};

function NoteList({ onEditNote, onDeleteNote }) {
  if (!mockNotes || mockNotes.length === 0) {
    return <p className="text-center text-gray-500 italic">No notes found. Add your first note!</p>;
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      {mockNotes.map((note) => (
        <div key={note.id} className="bg-white shadow-lg rounded-xl border border-gray-200 p-5 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
            <div className="flex-shrink-0 space-x-2">
              <button
                onClick={() => onEditNote(note)}
                className="p-1.5 text-yellow-600 hover:text-yellow-800 bg-yellow-100 hover:bg-yellow-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150"
                aria-label="Edit note"
              >
                <PencilSquareIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDeleteNote(note.id)}
                className="p-1.5 text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150"
                aria-label="Delete note"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-3">
            {note.content}
          </p>
          <p className="text-xs text-gray-400">
            Last updated: {formatDate(note.updatedAt)}
          </p>
        </div>
      ))}
    </div>
  );
}

export { mockNotes };
export default NoteList;
