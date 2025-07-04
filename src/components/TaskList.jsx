import React from 'react'
import useTaskStore from '../taskstore'
import toast from 'react-hot-toast';

const TaskList = () => {
  const {tasks}=useTaskStore()

  console.log(tasks);


  return (
  <>
  <section>
    <div className='container'>
     <h1 className='font-bold text-center text-2xl m-6 flex gap-4'>Task List  <img src="./images/clipboard.png" alt="clipboard"  className='w-10'/> </h1>

 
     <div className='task gap-3'>
      {tasks.length === 0 ? (
              <p className='text-gray-500 flex items-center justify-center'>No tasks found.</p>
      ) : (
 <ul>

        {tasks.map((task,index)=>(
          <div key={index} className='border-2 border-dashed  border-gray-400 m-8 p-5 ' >
      <h1  className='font-semibold text-xl gap-10  border-b'>Title :  {task.title}</h1>
      <h2 > Description : {task.description}</h2>
    

  
      
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

export default TaskList













