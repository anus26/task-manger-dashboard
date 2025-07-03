// src/store/taskStore.js
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set) => ({
      tasks: [],
      taskToEdit: null,

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

      setTaskToEdit: (task) => set({ taskToEdit: task }),
    }),
    {
      name: 'task-storage', // localStorage key
    }
  )
);

export default useTaskStore;
