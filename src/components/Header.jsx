import React from 'react'
import { BiAward, BiBarChartAlt } from 'react-icons/bi'
import { BsArrowRightCircle } from 'react-icons/bs'
import { GrDashboard } from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  <>
  <nav className='border border-gray-400  bg-green-400 text-white'>
    <h1 className='font-bold text-2xl  m-3 underline '> <Link to='/'>Task Manager Dashboard</Link></h1>
    <div className=' flex items-center justify-center  relative gap-5'>


<Link to="/taskform" >TaskForm </Link>  
<Link to="/taskitem">TaskItem </Link>  
    </div>
  </nav>
  </>
  )
}

export default Header