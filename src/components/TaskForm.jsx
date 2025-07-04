import React, { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useTaskStore from '../taskstore';
import toast from 'react-hot-toast';

const TaskForm = () => {
  const {addTask,updateTask,taskToEdit,setTaskToEdit}=useTaskStore()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status,setStatus]=useState('')
  // Auto-fill form when editing
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status||'pending')
    } 
    else {
      setTitle('');
      setDescription('');
    }
    toast.success("Updated now")
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return
    const taskData = {
      id: taskToEdit ? taskToEdit.id : Date.now(),
      title,
      description,
     status,
    };
    toast.success("Successfully Add")

   
    if (taskToEdit) {
      updateTask(taskData);
    } else {
      addTask(taskData); // ✅ Important
    }



    // Reset fields after submit
    setTitle('');
    setDescription('');
    setStatus('pending')
  };
  return (
    <section>
      <div className='flex items-center justify-center flex-col gap-5 min-h-screen w-full '>
        <h1 className='font-bold text-xl flex gap-4'>
        Task Form <img src="./images/done.png" alt="done image"  className='w-10'/>
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
          <select value={status} onChange={(e)=>setStatus(e.target.value)} className='w-96 p-2 border rounded-md'>
            <option  value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
          <button
            className='bg-green-400 hover:bg-gray-400 text-white rounded-md h-10 w-1/2 transition duration-300'
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
