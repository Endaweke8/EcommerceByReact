import React from 'react'
import Logo from './Logo'
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='shadow-md h-16 bg-white'>
      <div className='container mx-auto h-full flex items-center px-4 justify-between'>
        <div className=''>
          <Link  to={"/"}> 
          <Logo w={90} h={50}/>
          </Link>
        </div>
        <div className='flex hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full h-8 max-w-sm focus-within:shadow-md'>
         <input type='text' placeholder='Search product here ...' className='w-full outline-none  ml-2 h-10' />
         <div className='text-lg min-w-[60px] h-10 flex pl-2 justify-center items-center bg-green-600 rounded-r-full'>
           <FaSearch color='white'/>
         </div>
        </div>
        <div className='flex items-center gap-7'>
        <div className='text-2xl cursor-pointer '>
        <FaUserCircle />
        </div>
        <div className='text-2xl cursor-pointer relative'>
          <span> <FaShoppingCart /></span>
          <div className='bg-green-600 -right-4 top-0 absolute rounded-full text-white w-5 h-5 p-1 flex items-center justify-center'>
            <p className='text-sm'>0</p>
          </div>
        </div>
        <div>
          <button className='px-3 bg-green-600 text-white py-1 rounded-full hover:bg-green-700'>Login</button>
        </div>
        </div>
        
      </div>
    </header>
  )
}

export default Header