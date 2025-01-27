/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { getUser } from '../apiServices/orderAuthServices'


// eslint-disable-next-line react/prop-types
const Cartcheckout = ({setCartCheck}) => {
    //submit korar porer kaj orderAuthservices.jsx theke niye asha
    const [user, setUser]=useState()
    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await getUser()
                setUser(data);
            }catch (error){
                alert('not found user')
            }
        };
        fetchData();
    },[]);



  return (
<section>
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50'>

    </div>

    <div className='card w-full h-full'>
        <div className='item rounded-sm bg-white dark:bg-slate-800 py-5 px-8 w-[310px] md:w-[350px] absolute top-1/2 left-1/2
        transform -translate-x-1/2 -translate-y-1/2 '>
            
            <div className='1 Heading flex items-center justify-between uppercase dark:text-white text-xl'>
                <span>Card payment</span>
                <span onClick={()=> setCartCheck(false)} className='text-[20px] w-[25px] h-[25px]
                 bg-slate-500 flex justify-center rounded-[50px] items-center 
                 hover:bg-slate-600 text-white cursor-pointer'>
                    x
                </span>
            </div>

            <div className='2'>
                <form className='flex flex-col gap-[15px]'>
                    <div className="1 mt-5">
                        <label htmlFor = "name" 
                        className='block mb-2 text-sm font-medium 
                        text-gray-900 dark:text-white capitalize'>
                            name:
                        </label>
                        <input type="text" value={user?.name||'Undefined'}
                        name='name' id='name' 
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none'
                        placeholder='Your Full Name' required="" />

                    </div>
                    <div className="2">
                        <label htmlFor = "email" 
                        className='block mb-2 text-sm font-medium 
                        text-gray-900 dark:text-white capitalize'>
                            email:
                        </label>
                        <input type="email" value={user?.email||'...@gmail.com'}
                        name='email' id='email' 
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none'
                        placeholder='name@company.com' required="" />
                    </div>
                    <div className="3">
                    <label htmlFor = "number" 
                        className='block mb-2 text-sm font-medium 
                        text-gray-900 dark:text-white capitalize'>
                            Card number:
                        </label>
                        <input type="number" value="122328"
                        name='number' id='numberr' 
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none'
                        placeholder='Your card number' required="" />
                    </div>
                    <div className="4">
                    <label htmlFor = "date" 
                        className='block mb-2 text-sm font-medium 
                        text-gray-900 dark:text-white capitalize'>
                            Expiry date:
                        </label>
                        <div className='flex items-center gap-3'>
                        <input type="number" value="122328"
                        name='number' id='numberr' 
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none'
                        placeholder='month' required="" />

                        <input type="number" value="122328"
                        name='number' id='numberr' 
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none'
                        placeholder='day' required="" />
                        </div>
                    </div>
                    <div className="5">
                    <label htmlFor = "name" 
                        className='block mb-2 text-sm font-medium 
                        text-gray-900 dark:text-white capitalize'>
                            name:
                        </label>
                        <input type="text" value=""
                        name='name' id='name' 
                        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white focus:ring-blue-100 focus:ring-4 focus:outline-none'
                        placeholder='Your Full Name' required="" />

                    </div>
                    <div className="6 price text-center text-2xl font-bold text-green-700">
                        <span>$500</span>
                    </div>
                    <button className='w-full flex items-center justify-center gap-1 text-white bg-blue-700 hover:bg-blue-800
                    focus:right-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 uppercase'>
                        Pay now
                    </button>
                </form>

            </div>

        </div>
    </div>
</section>
  )
}

export default Cartcheckout
