/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import Search from './Search';
import { Link, Links } from 'react-router';


const Navbar = () => {
const [showProfileMenu, setShowProfileMenus]= useState(false)
const[showSearch, setSearch] = useState(false)

const handleClick = () => {
  if ( showProfileMenu === true ) {
    setShowProfileMenus(false)
  } else{
    setShowProfileMenus(true)
  }
}

const handleSearch= ()=> {
  if(showSearch === true){
    setSearch(false)
  }
  else{
    setSearch(true)
  }
}

  return (
    <div>
      <nav className='flex items-center justify-between py-5 px-5 sm:px-10 md:px-[50px] xl:px--[80px] border-b '>
        <div className="left flex gap-1 items-center">
          <div className="">
            <p className='text-[25px]' ><MdLightbulb /></p>
            </div>
            <div className="text-xl font-bold">
              CodeBook
            </div>
        </div>
    {/* menu list */}
    <div className="">
      <ul className='flex gap-5'>
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
        <li>Contact</li>
        </ul>
        </div>
        <div className="right flex gap-5 items-center">
          <p className='text-[25px]' ><MdDarkMode /></p>
          <p className='text-[25px]' ><IoSearchSharp onClick={handleSearch} /></p>
          <p className=' relative text-[25px]'> <FaShoppingCart />
          
          <span className=' absolute -top-3 -right-3 bg-red-500  w-[25px] h-[23px] border-2
           border-white text-center flex items-center justify-center m-auto text-[10px] text-white rounded-full'>10+
          </span>
          </p>
          
          <div className=' relative rounded-md bg-white w-44 text-[25px]' >
            <CgProfile onClick={handleClick} />

          {
            showProfileMenu && 
            <ul className=' absolute py-2 text-sm bg-white w-44 text-gray-700 dark:text-gray-200 shadow-lg'>
            <Link to='/Cartitem'>
            <li className='px-4 py-2 '>All eBooks</li>
            </Link>
            <Link to='/Loginpage'>
            <li className='px-4 py-2'>Login</li>
            </Link>
            <Link to='/Signinpage'>
            <li className='px-4 py-2'>Register</li>
            </Link>
          </ul>
          }
          </div>
        </div>
      </nav>
     {
      showSearch &&  <Search/>
     }
     
    </div>
  )
}

export default Navbar