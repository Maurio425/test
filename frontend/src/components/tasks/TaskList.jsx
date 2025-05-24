import React from 'react';

const mockTasks = [
  { id: 1, title: 'Follow up with Client X', dueDate: '2024-06-15', priority: 'High', status: 'Pending', assignedTo: 'Sales Rep A', relatedTo: 'Client X' },
  { id: 2, title: 'Prepare proposal for Lead Y', dueDate: '2024-06-20', priority: 'High', status: 'In Progress', assignedTo: 'Sales Rep B', relatedTo: 'Lead Y' },
  { id: 3, title: 'Schedule demo for Client Z', dueDate: '2024-06-25', priority: 'Medium', status: 'Pending', assignedTo: 'Support Team', relatedTo: 'Client Z' },
  { id: 4, title: 'Send onboarding materials to New Client A', dueDate: '2024-06-10', priority: 'Low', status: 'Completed', assignedTo: 'Account Manager', relatedTo: 'New Client A' },
];

function TaskList({ onEditTask, onMarkComplete }) { // Added props for future use
  const handleView = (task) => console.log('View task:', task);
  const handleEdit = (task) => {
    console.log('Edit task:', task);
    if (onEditTask) {
      onEditTask(task);
    }
  };
  const handleDelete = (task) => console.log('Delete task:', task);
  const handleMarkComplete = (task) => {
    console.log('Mark task as complete:', task);
    if (onMarkComplete) {
      onMarkComplete(task.id); // Pass task ID to handler
    }
  };

  if (mockTasks.length === 0) {
    return <p className="text-gray-500">No tasks found.</p>;
  }

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'bg-gray-200 text-gray-700';
      case 'In Progress': return 'bg-blue-200 text-blue-700';
      case 'Completed': return 'bg-green-200 text-green-700';
      case 'Blocked': return 'bg-red-200 text-red-700';
      default: return 'bg-purple-200 text-purple-700'; // For other statuses like 'On Hold'
    }
  };


  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
            <th className="px-5 py-3 border-b-2 border-gray-200">Title</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Due Date</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Priority</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Status</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Assigned To</th>
            <th className="px-5 py-3 border-b-2 border-gray-200">Related To</th>
            <th className="px-5 py-3 border-b-2 border-gray-200 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {mockTasks.map((task) => (
            <tr key={task.id} className={`border-b border-gray-200 hover:bg-gray-50 ${task.status === 'Completed' ? 'bg-green-50 line-through' : ''}`}>
              <td className="px-5 py-4">{task.title}</td>
              <td className="px-5 py-4">{task.dueDate}</td>
              <td className="px-5 py-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getPriorityClass(task.priority)}`}>
                  {task.priority}
                </span>
              </td>
              <td className="px-5 py-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(task.status)}`}>
                  {task.status}
                </span>
              </td>
              <td className="px-5 py-4">{task.assignedTo}</td>
              <td className="px-5 py-4">{task.relatedTo}</td>
              <td className="px-5 py-4 text-right whitespace-nowrap">
                <button 
                  onClick={() => handleView(task)} 
                  className="text-blue-600 hover:text-blue-900 mr-2 transition duration-150 ease-in-out text-xs">
                  View
                </button>
                <button 
                  onClick={() => handleEdit(task)} 
                  className="text-yellow-600 hover:text-yellow-900 mr-2 transition duration-150 ease-in-out text-xs">
                  Edit
                </button>
                {task.status !== 'Completed' && (
                  <button 
                    onClick={() => handleMarkComplete(task)} 
                    className="text-green-600 hover:text-green-900 mr-2 transition duration-150 ease-in-out text-xs">
                    Complete
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(task)} 
                  className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out text-xs">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskList;
