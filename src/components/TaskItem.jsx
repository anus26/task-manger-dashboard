import React, { useState } from 'react'
import useTaskStore from '../taskstore'
import toast from 'react-hot-toast';

const TaskItem = () => {
  const {tasks, setTaskToEdit,deleteTask,toggleTaskStatus}=useTaskStore()
  const [filter,setFilter]=useState('all')
  console.log(tasks);
const handleDelete=(id)=>{
  deleteTask(id)
  toast.error("Delete")
}
const handleFilter=tasks.filter((task)=>{
  if (filter === 'all') return true
  return task.status  === filter
})



  return (
  <>
  <section>
    <div className='container'>
     <h1 className='font-bold text-center text-2xl m-6 flex gap-4'>Task Item  <img src="./images/clipboard.png" alt="clipboard"  className='w-10'/> </h1>

     <div className='flex items-center justify-center gap-5'>
 <button className='border '  onClick={()=>setFilter('all')}>
        All</button>
      <button onClick={()=>setFilter('completed')}>Completed</button>
      <button onClick={()=>setFilter('pending')}>Pending</button>
     </div>
     <div className='task gap-3'>
      {handleFilter.length === 0 ? (
              <p className='text-gray-500 flex items-center justify-center'>No tasks found.</p>
      ) : (
 <ul>

        {handleFilter.map((task,index)=>(
          <div key={index} className='border-2 border-dashed  border-gray-400 m-8 p-5 ' >
      <h1  className='font-semibold text-xl gap-10  border-b'>Title :  {task.title}</h1>
      <h2 > Description : {task.description}</h2>
      <p>
        status :{''}
        <span
        className={`font-semibold ${
          task.status === 'completed'? 'text-green-400':'text-yellow-400'
        }`}
        >
{task.status}
        </span>
      </p>
  
      <button onClick={()=>setTaskToEdit (task)} className='border p-2 rounded-md  text-white bg-green-400 hover:bg-gray-400 duration-300 transition-all'>
        update
      </button>

  
        <button onClick={()=>handleDelete(task.id)}   className='border p-2 rounded-md  text-white bg-red-400 hover:bg-gray-400 duration-300 transition-all'>
     
        Delete  
      </button>
    </div>
  ))}
  </ul>
)}

     </div>
    </div>
  </section>
  </>
  )
}

export default TaskItem