/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Rating from '../components/rating'
import { Link, useParams } from 'react-router'
import { getProductDetails } from '../apiServices/ProductServices';
import { useCart } from '../context/cartContext';
 
  
const ProductDetails = () => {

  const { id } = useParams();//Get the 'id' from the URL

  const [product, setProductDetails]= useState()

  //add to cart item start
  const{cartList, addToCart, removeToCart}=useCart()
  //add to cart item end

  //add to card to remove to card start
  const[inCart,setInCart]= useState(false)
  
  useEffect(()=>{
    const cartItem = cartList.find((item)=>item.id == id)
  
    if(cartItem){
      setInCart(true)
    }
    else{
      setInCart(false)
    }
  }
  ,[cartList, id])
  //add to card to remove to card end
  

    //const product = products?.find((p)=> p.id === parseInt(id, 10))
    //console.log(product);

    useEffect(()=>{
      async function fetchDetails() {
        try{
          const fDetails = await getProductDetails(id);
          setProductDetails(fDetails);
        }
        catch(error){
          alert(error);
          
        }
      }
      fetchDetails()
    },[])

  return (
    
    <section className='dark:text-slate-300'> 
        
        <div className="px-5 py-8 md:p-10 ">
            <div className="top flex flex-col gap-5 ">
                <h2 className='text-2xl font-bold text-center '>
                  {product?.name} hihihi
                </h2> 
                <p className='text-sm text-center'>
                  {product?.long_description}
                </p>
            </div>
            <div className="bottom md:flex gap-8 pb-5">
                <div className="left left-1">
                    <img className='w-full h-full object-cover rounded-md' src={product?.poster} alt="" />
                </div>
                <div className="right flex-1 flex flex-col gap-5 pt-4 md:pt-0">
                    <h2 className='text-2xl font-semibold '>${product?.price}</h2>
                    <Rating rating={product?.rating}/>
                    <div className="flex gap-5 items-center">
                        {
                          product?.best_seller ?
                          <span className=' uppercase bg-amber-50 text-amber-500 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>best_seller{product?.best_seller}</span>
                          : ""
                        }
                        
                        
                        {product?.in_stock ? 
                        <span className='uppercase bg-slate-100 text-emerald-600 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>INSTOCK</span> 
                        : 
                        <span className='uppercase bg-slate-100 text-red-600 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>OutofStock</span> 
                        }
                       
                        <span className='uppercase bg-slate-100 text-blue-500 border py-1.5 px-3 rounded-md text-[10px] font-semibold'>{product?.size}</span>
                    </div>

                    {!inCart && <button onClick ={()=>addToCart(product)}
                    className='py-2 px-3 bg-blue-600 text-sm cursor-pointer rounded-md w-fit text-white font-semibold'>
                    Add to Cart +
                    </button>
                    }

                    {inCart && <button onClick ={()=>removeToCart(product)}
                    className='py-2 px-3 bg-green-500 text-sm cursor-pointer rounded-md w-fit text-white font-semibold'>
                    Remove to Cart +
                    </button>
                    }

                    <p className='text-sm font-semibold' >{product?.overview}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDetails
