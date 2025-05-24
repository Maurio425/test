import React from 'react';

const mockTasks = [
  { id: 1, title: 'Follow up with Alice Wonderland', dueDate: '2024-07-01', priority: 'High', status: 'Pending', assignedTo: 'Sales Rep A', relatedTo: 'Client: Alice Wonderland', description: 'Discuss new product line.' },
  { id: 2, title: 'Prepare proposal for Peter Pan', dueDate: '2024-07-05', priority: 'High', status: 'In Progress', assignedTo: 'Sales Rep B', relatedTo: 'Lead: Peter Pan', description: 'Proposal for premium services.' },
  { id: 3, title: 'Schedule demo for Bob The Builder', dueDate: '2024-07-08', priority: 'Medium', status: 'Pending', assignedTo: 'Support Team', relatedTo: 'Client: Bob The Builder', description: 'Demo of new software version.' },
  { id: 4, title: 'Send onboarding materials to Fiona Gallagher', dueDate: '2024-06-28', priority: 'Low', status: 'Completed', assignedTo: 'Account Manager', relatedTo: 'Client: Fiona Gallagher', description: 'Welcome pack and initial setup guide.' },
  { id: 5, title: 'Contact John Doe regarding invoice #123', dueDate: '2024-07-02', priority: 'Medium', status: 'Pending', assignedTo: 'Finance Team', relatedTo: 'Lead: John Doe', description: 'Outstanding payment reminder.' },
  { id: 6, title: 'Review contract with Diana Prince', dueDate: '2024-07-10', priority: 'High', status: 'In Progress', assignedTo: 'Legal Team', relatedTo: 'Client: Diana Prince', description: 'Final review before signing.' },
  { id: 7, title: 'Update CRM with notes for Captain Hook', dueDate: '2024-07-03', priority: 'Low', status: 'Pending', assignedTo: 'Sales Rep B', relatedTo: 'Lead: Captain Hook', description: 'Log details from last call.' },
  { id: 8, title: 'Qualify lead: Aladdin Prince', dueDate: '2024-07-04', priority: 'Medium', status: 'In Progress', assignedTo: 'Sales Team A', relatedTo: 'Lead: Aladdin Prince', description: 'Assess budget and needs.' },
  { id: 9, title: 'Quarterly business review with Irene Adler', dueDate: '2024-07-15', priority: 'High', status: 'Pending', assignedTo: 'Account Manager', relatedTo: 'Client: Irene Adler', description: 'Prepare slides and performance report.' },
  { id: 10, title: 'Send thank you note to Lucy Pevensie', dueDate: '2024-07-01', priority: 'Low', status: 'Completed', assignedTo: 'Sales Rep A', relatedTo: 'Client: Lucy Pevensie', description: 'Post-purchase follow-up.' },
  { id: 11, title: 'Investigate issue reported by Harry Potter', dueDate: '2024-07-06', priority: 'High', status: 'Blocked', assignedTo: 'Support Team', relatedTo: 'Client: Harry Potter', description: 'Cannot reproduce bug, need more info.' },
  { id: 12, title: 'Prepare marketing materials for Summer Campaign', dueDate: '2024-07-12', priority: 'Medium', status: 'In Progress', assignedTo: 'Marketing Team', relatedTo: 'Campaign: Summer 2024', description: 'Brochures and social media posts.' },
  { id: 13, title: 'On-site meeting with Nancy Drew', dueDate: '2024-07-18', priority: 'High', status: 'Pending', assignedTo: 'Sales Rep B', relatedTo: 'Client: Nancy Drew', description: 'Confirm meeting agenda.' },
  { id: 14, title: 'Internal training on new CRM features', dueDate: '2024-07-09', priority: 'Medium', status: 'Completed', assignedTo: 'Admin User', relatedTo: 'Internal Training', description: 'All sales team members attended.' },
  { id: 15, title: 'Follow up on proposal for Simba Lion', dueDate: '2024-07-07', priority: 'High', status: 'Pending', assignedTo: 'Sales Team A', relatedTo: 'Lead: Simba Lion', description: 'Check if they have any questions.' },
];

function TaskList({ onEditTask, onMarkComplete }) {
  const handleView = (task) => console.log('View task:', task);
  const handleEdit = (task) => {
    console.log('TaskList: Edit task:', task);
    if (onEditTask) {
      onEditTask(task);
    }
  };
  const handleDelete = (task) => console.log('Delete task:', task);
  const handleMarkComplete = (task) => {
    console.log('TaskList: Mark task as complete:', task);
    if (onMarkComplete) {
      onMarkComplete(task.id);
    }
  };

  if (mockTasks.length === 0) {
    return <p className="text-gray-500 italic">No tasks found. Consider adding some!</p>;
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
      default: return 'bg-purple-200 text-purple-700'; // For 'On Hold' or other custom statuses
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned To</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Related To</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-700">
          {mockTasks.map((task) => (
            <tr key={task.id} className={`hover:bg-gray-50 transition-colors duration-150 ${task.status === 'Completed' ? 'bg-green-50 opacity-70 line-through' : ''}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-medium text-gray-900">{task.title}</div>
                <div className="text-xs text-gray-500 truncate max-w-xs">{task.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{task.dueDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full leading-tight ${getPriorityClass(task.priority)}`}>
                  {task.priority}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2.5 py-1 text-xs font-semibold rounded-full leading-tight ${getStatusClass(task.status)}`}>
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{task.assignedTo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{task.relatedTo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                <button 
                  onClick={() => handleView(task)} 
                  className="px-3 py-1 text-xs font-medium text-blue-600 hover:text-blue-800 bg-blue-100 hover:bg-blue-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={task.status === 'Completed'}>
                  View
                </button>
                <button 
                  onClick={() => handleEdit(task)} 
                  className="px-3 py-1 text-xs font-medium text-yellow-600 hover:text-yellow-800 bg-yellow-100 hover:bg-yellow-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={task.status === 'Completed'}>
                  Edit
                </button>
                {task.status !== 'Completed' && (
                  <button 
                    onClick={() => handleMarkComplete(task)} 
                    className="px-3 py-1 text-xs font-medium text-green-600 hover:text-green-800 bg-green-100 hover:bg-green-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
                    Complete
                  </button>
                )}
                <button 
                  onClick={() => handleDelete(task)} 
                  className="px-3 py-1 text-xs font-medium text-red-600 hover:text-red-800 bg-red-100 hover:bg-red-200 rounded-md shadow-sm hover:shadow-md transition-all duration-150">
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

export { mockTasks };
export default TaskList;
