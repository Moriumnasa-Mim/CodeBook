/* eslint-disable no-unused-vars */
/**Sir er ta nam SignUp.jsx and sir folder korse page er vitor */
import React from 'react'
import { signUp } from '../../apiServices/authService';
import { useNavigate } from 'react-router';

const Signinpage = () => {

    const navigate = useNavigate()

    const handleSubmit = async(event)=>{

        event.preventDefault();
        try{
            const authDetail = {
                name: event.target.name.value,
                email: event.target.email.value,
                password: event.target.password.value
            }

            const data = await signUp(authDetail);
            data.accessToken? navigate("/login"):alert("error")
           

        }catch{
            alert("")
        }
    }


  return (
    <div className='bg-zinc-100 flex items-center justify-center min-h-screen'>
    <div className="w-full max-w-sm bg-transparent p-6 rounded-lg shadow-lg">
     <h2 className="text-2xl font-bold text-left text-black mb-4 ">Register</h2>
     <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>
     <div className="mb-4">
        <label htmlFor="name" className="block text-gray-600 mb-2">Your Name</label>
        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
        placeholder="Enter Your Name"/>
      </div>
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
       focus:outline-none focus:ring-4 focus:ring-blue-500"> Register
       </button>

     </form>
   </div>
 </div>
  )
}

export default Signinpage
