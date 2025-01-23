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
import { useCart } from '../context/cartContext';


const Navbar = () => {

  //login korle logout show korbe and logout thakle login dekhabe start
  const token = JSON.parse(sessionStorage.getItem("token"))
  //login korle logout show korbe and logout thakle login dekhabe end

  //dark mode start
  const[darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode"))|| false);
  //dark mode end

  // add to cart import start
  const {cartList} = useCart()
  // add to cart import end
  
const [showProfileMenu, setShowProfileMenus]= useState(false)

//search e click kore submit howar por search button hide start
const[showSearch, setSearch] = useState(false)
//search e click kore submit howar por search button hide end

const handleClick = () => {
  if ( showProfileMenu === true ) {
    setShowProfileMenus(false)
  } else{
    setShowProfileMenus(true)
  }
}
//search hide start
const handleSearch= ()=> {
  if(showSearch === true){
    setSearch(false)
  }
  else{
    setSearch(true)
  }
  //search hide end
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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">products</Link>
            <Link to="/contact">Contact</Link>
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

          <p className='text-[25px] ' >
            <IoSearchSharp onClick={handleSearch} />
          </p>

          <Link to="/Cartitem">
          <p className=' relative text-[25px]' >
          <FaShoppingCart />

          <span className=' absolute -top-3 -right-3 bg-red-500  w-[25px] h-[23px] border-2
           border-white text-center flex items-center justify-center m-auto text-[10px] text-white rounded-full'>
            {cartList.length}
          </span> 

          </p>
          </Link>

          <div className=' relative rounded-md  w-44 text-[25px] z-50' >
            <CgProfile onClick={handleClick} />

          {
            showProfileMenu && 
            <ul className=' absolute py-2 text-sm shadow-lg bg-white w-44 text-gray-700 dark:text-[#1E293B]'>
            <li className='px-4 py-2 '>All eBooks</li>
            <li className='px-4 py-2'><Link to="/Loginpage">Login</Link></li>
            <li className='px-4 py-2'> <Link to="/Signinpage">Register</Link> </li>
          </ul>
          }
            </div>
        </div>
      </nav>
     {
      showSearch &&  <Search setSearch={setSearch}/>
     }
     
    </div>
  )
}

export default Navbar
