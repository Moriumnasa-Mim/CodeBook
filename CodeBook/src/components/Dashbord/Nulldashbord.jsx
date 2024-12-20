/* eslint-disable no-unused-vars */
import React from 'react'
import { MdShoppingCart } from "react-icons/md";


const Nulldashbord = () => {
  return (
    <div className='px-5 py-8 md:p-10 mx-auto' >
    <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center underline underline-offset-4">MY DASHBOARD</h1>
    <div className="w-full my-[90px] m-auto flex flex-col items-center justify-center">
        <div className='w-[500px] border rounded-md text-md p-5 flex gap-3 flex-col 
        items-center justify-center m-auto text-black dark:text-white'>
        <MdShoppingCart className="text-green-500 w-16 h-16 mb-4" />
        
        <p className="text-gray-700 mb-4">Oops! Your order dashboard looks empty!</p>
        <p className="text-gray-600 mb-6">Add eBooks to your cart from our store collection.</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-700">
            Continue Shopping <MdShoppingCart className="ml-2" />
        </button>
        </div>

    </div>
</div>
  )
}

export default Nulldashbord