import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='bg-green-400 text-white border-b border-gray-400'>
      <div className='flex items-center justify-between px-4 py-3 md:px-8'>
        {/* Logo */}
        <h1 className='text-2xl font-bold underline'>
          <Link to='/'>Task Manager</Link>
        </h1>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-5 text-lg'>
          <Link to="/taskform" className='hover:underline'>TaskForm</Link>
          <Link to="/taskitem" className='hover:underline'>TaskItem</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='md:hidden px-4 pb-4 flex flex-col gap-3 text-lg bg-green-500'>
          <Link to="/taskform" className='hover:underline' onClick={() => setIsMenuOpen(false)}>TaskForm</Link>
          <Link to="/taskitem" className='hover:underline' onClick={() => setIsMenuOpen(false)}>TaskItem</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
