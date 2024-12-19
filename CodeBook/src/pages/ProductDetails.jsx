/* eslint-disable no-unused-vars */
import React from 'react'
import Rating from '../components/rating'
import { Link, useParams } from 'react-router'

const products = [
    {
      id:1,
      name: "Basics to Advanced in React",
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      rating: 5,
      best_seller: true,
      price: "$99"
    },
    {
      id:2,
      name: "Django Framework for Beginners",
      overview: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      rating: 4,
      best_seller: false,
      price: "$100"
    },
    {
      id:3,
      name: "The Future of Design Systems",
      overview: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      rating : 3,
      best_seller: true,
      price:"$98"
    },
    {
      id:4,
      name: "Basics to Advanced in React",
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      rating: 5,
      best_seller: true,
      price: "$99"
    },
    {
      id:5,
      name: "Basics to Advanced in React",
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      rating: 5,
      best_seller: true,
      price: "$99"
    },
    {
      id:6,
      name: "Basics to Advanced in React",
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      rating: 5,
      best_seller: true,
      price: "$99"
    },
  ]
  
  
const ProductDetails = () => {
    const { id } = useParams();//Get the 'id' from the URL

    const product = products?.find((p)=> p.id === parseInt(id, 10))
    console.log(product);

  return (
    
    <section>
        
        <div className="px-5 py-8 md:p-10">
            <div className="top flex flex-col gap-5">
                <h2 className='text-2xl font-bold text-center'>The Complete Guide to Backend Development</h2>
                <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
            </div>
            <div className="bottom md:flex gap-8 pb-5">
                <div className="left left-1">
                    <img className='w-full h-full object-cover rounded-md' src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40" alt="" />
                </div>
                <div className="right flex-1 flex flex-col gap-5 pt-4 md:pt-0">
                    <h2 className='text-2xl font-semibold '>${product.price}</h2>
                    <Rating rating={product.rating}/>
                    <div className="flex gap-5 items-center">
                        <span className=' uppercase bg-amber-50 text-amber-500 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>${product.best_seller}</span>
                        <span className='uppercase bg-slate-100 text-emerald-600 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>INSTOCK</span>
                        <span className='uppercase bg-slate-100 text-blue-500 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>7MB</span>
                    </div>
                    <Link to='' className='py-2 px-3 bg-blue-600 text-sm cursor-pointer rounded-md w-fit text-white font-semibold'>Add to Cart +</Link>
                    <p className='text-sm font-semibold' >{product.overview}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails