import React, { useState } from 'react';
import TaskList from '../components/tasks/TaskList';
import TaskForm from '../components/tasks/TaskForm';
import { PlusIcon } from '@heroicons/react/24/solid';

function TasksPage() {
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddNewTask = () => {
    setTaskToEdit(null);
    setShowForm(true);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
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
    } else {
      console.log('TasksPage: Would add new task:', formData);
    }
    // In a real app, you'd refresh data here
    handleFormClose();
  };

  const handleMarkTaskComplete = (taskId) => {
    console.log('TasksPage: Would mark task as complete:', taskId);
    // In a real app, you'd update task status and refresh data here
  };
  
  return (
    <div className="space-y-6 sm:space-y-8"> {/* Consistent vertical spacing */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          {showForm ? (taskToEdit ? 'Edit Task' : 'Add New Task') : 'Manage Tasks'}
        </h1>
        {!showForm && (
          <button
            onClick={handleAddNewTask}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out text-sm sm:text-base"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add New Task
          </button>
        )}
      </div>

      {showForm ? (
        <div className="mt-0">
          <TaskForm
            onSubmit={handleFormSubmit}
            taskToEdit={taskToEdit}
            onCancel={handleFormClose}
          />
        </div>
      ) : (
        <TaskList 
          onEditTask={handleEditTask} 
          onMarkComplete={handleMarkTaskComplete} 
        />
      )}
    </div>
  );
}

export default TasksPage;
