import React, { useEffect, useState } from 'react';

const TaskForm = ({ onAddTask, onUpdateTask, taskToEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Auto-fill form when editing
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      description,
      completed: taskToEdit ? taskToEdit.completed : false,
    };

    if (taskToEdit) {
      onUpdateTask(taskData);
    } else {
      onAddTask(taskData);
    }

    // Reset fields after submit
    setTitle('');
    setDescription('');
  };

  return (
    <section>
      <div className='flex items-center justify-center flex-col gap-5 min-h-screen w-full'>
        <h1 className='font-bold text-xl'>
          {taskToEdit ? '✏️ Edit Task' : '📝 Add New Task'}
        </h1>

        <form
          onSubmit={handleSubmit}
          className='flex items-center justify-center flex-col gap-5 border p-5 shadow-md rounded-md max-w-xl w-full bg-white'
        >
          <input
            className='w-96 h-10 px-4 border rounded-md'
            type="text"
            placeholder='Task Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className='w-96 h-10 px-4 border rounded-md'
            type="text"
            placeholder='Description (optional)'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className='bg-green-500 hover:bg-green-600 text-white rounded-md h-10 w-1/2 transition duration-300'
            type='submit'
          >
            {taskToEdit ? 'Update Task' : 'Add Task'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default TaskForm;
