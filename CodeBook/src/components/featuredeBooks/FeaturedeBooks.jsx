/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Card from '../Card'

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
  }
]

const FeaturedeBooks = () => {
  
  const [productsList, setProductsList]=useState(products)

  console.log(productsList)

  return (
    <section>
        <div className='p-10'>
            <h2 className='text-center text-[30px] font-bold text-black underline underline-offset-4'>Featured eBooks</h2>
            <div className='grid grid-cols-3'>
              {
                productsList.map((product)=>(
                 
                  <article>
                    <Card product={product}/>
                  </article>
                  
                ))
              }
                
               
            </div>
        </div>
    </section>
  )                  
}

export default FeaturedeBooks