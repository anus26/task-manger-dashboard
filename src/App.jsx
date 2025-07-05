import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Header from './components/Header'


import Footer from './components/Footer'

const App = () => {
  return (
    <>

   
    <BrowserRouter>
    <Header/>
    <Routes>
     
      <Route  path='/' excat element={<TaskList/>}/>
    <Route  path='TaskForm' excat element={<TaskForm />}/>
     <Route  path='taskitem' excat element={<TaskItem/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    <Toaster/> 
    </>
    
  )
}

export default App
