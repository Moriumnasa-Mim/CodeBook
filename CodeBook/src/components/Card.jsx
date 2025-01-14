/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import Rating from './rating';
import { Link } from 'react-router';
import { useCart } from '../context/cartContext';

const Card = ({product}) => {
//add to card er logic start
  const{cartList, addToCart} = useCart();
  console.log("CartList",cartList)
//add to card er logic end
 
  return (
    <div className='card bg-red-500 max-w-[380px] rounded-md
     shadow-md shadow-black overflow-hidden flex gap-3 flex-col'>
    <div className="top relative">
      
      <Link to={`/product/${product.id}`}>
      <img className='w-full h-full object-cover rounded-md' src={product.poster} alt={product.name}/>
      </Link>     
      
      {product.best_seller? 
      <div className="absolute top-5 left-5 bg-orange-500 px-3 py-2 text-white rounded-md">
        <h2>Best Seller</h2>
      </div>:""
      }

    </div>
    <div className="bottom flex flex-col gap3 px-3">
      <h2 className='text-2xl truncate text-gray-900  font-bold'>{product.name}</h2>
      <p className='text-md '>{product.overview.slice(0, 100)}... See more</p>
      
        <div className="flex gap-2 items-center text-yellow-200 ">
        <Rating rating={product.rating}/>
        <span className='bg-blue-200 px-2 rounded-md text-black text-sm'>{product.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <p className='text-3xl text-black font-semibold'>{product.price}</p>
          <button onClick ={()=>addToCart(product)} className='flex items-center gap-2 bg-blue-500 text-white p-3  '>Add to cart <FaPlus /> 
          </button>
        </div>
    </div>
    </div>
  )
}

export default Card
