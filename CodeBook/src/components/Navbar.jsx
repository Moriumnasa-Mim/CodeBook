/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdLightbulb } from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import Search from './Search';

import { FiSun } from "react-icons/fi";
import { Link } from 'react-router';


const Navbar = () => {

  //dark mode start
  const[darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode"))|| false);
  //dark mode end
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


//for Darkmode
useEffect(()=>{
  localStorage.setItem("darkMode", JSON.stringify(darkMode));


  if(darkMode){
    document.documentElement.classList.add("dark");
  } else{
    document.documentElement.classList.remove("dark");
  }
},[darkMode])

  return (
    <div className='dark:text-slate-300'>
      <nav className='flex items-center justify-between py-5 px-5 sm:px-10
      md:px-[50px] xl:px--[80px] border-b '>
        <div className="left flex gap-1 items-center">
        <div className="">
        <p className='text-[25px]' ><MdLightbulb /></p>
        </div>
        <div className="text-xl font-bold">
          CodeBook
        </div>
        </div>

        {/* menu list */}
        <div className="flex gap-5 font-bold">
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>About</li>
            <Link to="/products">products</Link>
            <li>Contact</li>
          </ul>
        </div>

        <div className="right flex gap-5 items-center">
{/**Dark ICON */}
          <p onClick={()=>setDarkMode(!darkMode)} className='text-[25px] cursor-pointer' >
            {
              darkMode? <MdDarkMode /> : <FiSun />
            } 
          </p>
{/**Dark ICON */}

          <p className='text-[25px]' ><IoSearchSharp onClick={handleSearch} /></p>

          <p className=' relative text-[25px]' >
          <FaShoppingCart />

          <span className=' absolute -top-3 -right-3 bg-red-500  w-[25px] h-[23px] border-2
           border-white text-center flex items-center justify-center m-auto text-[10px] text-white rounded-full'>10+
          </span> 

          </p>

          <div className=' relative rounded-md  w-44 text-[25px]' >
            <CgProfile onClick={handleClick} />

          {
            showProfileMenu && 
            <ul className=' absolute py-2 text-sm shadow-lg bg-white w-44 text-gray-700 dark:text-[#1E293B]'>
            <li className='px-4 py-2 '>All eBooks</li>
            <li className='px-4 py-2'>Login</li>
            <li className='px-4 py-2'>Register</li>
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
