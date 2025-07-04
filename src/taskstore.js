// src/store/taskStore.js
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  
  persist(
    (set) => ({
      tasks: [],
      taskToEdit: null,
      taskToDelete:[],
   


      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      updateTask: (updatedTask) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === updatedTask.id ? updatedTask : t
          ),
          taskToEdit: null,
        })),


        deleteTask:(taskId)=>
       set((state)=>({
          tasks:state.tasks.filter((t) =>t.id !== taskId),
        
       })),
       toggleTaskStatus:(id)=>
        set((state)=>({
          task:state.tasks.map((task)=>
          task.id === id
          ?{
            ...task,
            status:task.status === "completed"?'pending':'completed',
          }
          :task
        ),
        })),
      setTaskToEdit: (task) => set({ taskToEdit: task }),

    }),

    {
      name: 'task-storage', // localStorage key
    }
  )
);

export default useTaskStore;
