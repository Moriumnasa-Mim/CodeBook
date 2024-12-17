import React from 'react'
import heroimg from '../assets/hero.jpg'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className='hero'>
      <div className="flex flex-col md:flex-row items-center py-10 px-5 sm:px-10
      md:px-[50px] xl:px--[80px]">
        <div className="left flex flex-col gap-5">
          <h1 className='text-5xl font-bold'>The Ultimate eBook Store</h1>
          <p className='text-2xl my-7 px-1 dark:text-slate-300 items-center'>CodeBook is the world&apos;s most popular and authoritative source for computer science ebooks. 
            Find ratings and access to the newest books digitally.</p>

          <Link to="/products">
          <button className='w-fit bg-blue-700 py-2 px-4 text-white rounded-md hover:bg-blue-900 
          text-md'>Explore eBooks
          </button>
          </Link>
          
        </div>
        <div className="right max-w-[36rem]">
          <img className='w-full h-full rounded-md object-cover' src={heroimg} alt="Hero_img" />
        </div>
      </div>
    </section>
  )
}

export default Hero