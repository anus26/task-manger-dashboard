import React from 'react';
import useTaskStore from '../taskstore';

const TaskList = () => {
  const { tasks, setTaskToEdit } = useTaskStore();

  return (
    <div className='mt-8'>
      <h2 className='text-lg font-bold mb-4'>📋 Task List</h2>
      {tasks.length === 0 ? (
        <p className='text-gray-500'>No tasks found.</p>
      ) : (
        <ul className='space-y-2'>
          {tasks.map((task) => (
            <li key={task.id} className='border p-4 rounded shadow'>
              <h3 className='font-semibold'>{task.title}</h3>
              <p className='text-gray-600'>{task.description}</p>
              <button
                onClick={() => setTaskToEdit(task)}
                className='text-blue-500 mt-2'
              >
                ✏️ Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
