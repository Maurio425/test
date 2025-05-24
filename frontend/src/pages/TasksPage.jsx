import React, { useState } from 'react';
import TaskList from '../components/tasks/TaskList'; // Adjusted path
import TaskForm from '../components/tasks/TaskForm'; // Adjusted path

function TasksPage() {
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  // Placeholder for tasks data - in a real app, this would come from state management (e.g., Context, Redux) or API
  // const [tasks, setTasks] = useState(mockTasks); // Assuming mockTasks is imported or defined here if TaskList doesn't manage its own data

  const handleAddNewTask = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('TasksPage: Form submitted with data:', formData);
    if (taskToEdit) {
      console.log('TasksPage: Would update task:', taskToEdit.id, formData);
      // Placeholder: Update task in your state/API
      // setTasks(prevTasks => prevTasks.map(task => task.id === taskToEdit.id ? {...task, ...formData} : task));
    } else {
      console.log('TasksPage: Would add new task:', formData);
      // Placeholder: Add new task to your state/API
      // setTasks(prevTasks => [...prevTasks, {id: Date.now(), ...formData}]); // Example: adding with a temp ID
    }
    handleFormClose();
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowForm(true);
  };

  const handleMarkTaskComplete = (taskId) => {
    console.log('TasksPage: Would mark task as complete:', taskId);
    // Placeholder: Update task status in your state/API
    // setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? {...task, status: 'Completed'} : task));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-gray-800">Manage Tasks</h1>
        {!showForm && (
          <button
            onClick={handleAddNewTask}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out"
          >
            Add New Task
          </button>
        )}
      </div>

      {showForm && (
        <div className="mb-8 p-4 bg-white shadow-lg rounded-lg">
          <TaskForm
            onSubmit={handleFormSubmit}
            taskToEdit={taskToEdit}
            onCancel={handleFormClose}
          />
        </div>
      )}

      {!showForm && (
        <TaskList 
          onEditTask={handleEditTask} 
          onMarkComplete={handleMarkTaskComplete} 
          // tasks={tasks} // Pass tasks if TaskList doesn't fetch/manage its own
        />
      )}
      
      {/* If you want the list to be visible even when the form is open (e.g., form in a modal or a small section), adjust the logic */}
    </div>
  );
}

export default TasksPage;
