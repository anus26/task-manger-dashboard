import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>

   
    <BrowserRouter>
    <Routes>
    <Route  path='TaskForm' excat element={<TaskForm />}/>
     <Route  path='taskitem' excat element={<TaskItem/>}/>
      <Route  path='tasklist' excat element={<TaskList/>}/>

    </Routes>
    </BrowserRouter>
    <Toaster/> 
    {/* <TaskForm/> */}
    </>
    
  )
}

export default App
