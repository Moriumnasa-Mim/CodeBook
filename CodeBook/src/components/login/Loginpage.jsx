/* eslint-disable no-unused-vars */
import React from 'react'

const Loginpage = () => {
  return (
  <div className='bg-zinc-100 flex items-center justify-center min-h-screen'>
   <div className="w-full max-w-sm bg-transparent p-6 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold text-left text-gray-700 mb-4 ">Log In</h2>
    <form className='space-y-4 md:space-y-6'>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 mb-2">Your email</label>
        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-blue-500" placeholder="name@company.com"/>
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
        <input type="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••"/>
      </div>
      <button type="submit" className="w-full bg-blue-700 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-800 
      focus:outline-none focus:ring-4 focus:ring-blue-500"> Log in
      </button>
      <button type="button" className="w-cover mt-3 bg-blue-700 text-white text-sm py-2 px-4 rounded-md hover:bg-blue-800
      focus:outline-none focus:ring-4 focus:ring-gray-400"> Log As a Guest
      </button>
    </form>
  </div>
</div>
  )
}

export default Loginpage