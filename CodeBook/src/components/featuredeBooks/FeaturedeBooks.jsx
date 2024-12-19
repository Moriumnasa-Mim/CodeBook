/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react'
import Card from '../Card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const FeaturedeBooks = () => {
  
  const [productsList, setProductsList]=useState(products)

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section>
        <div className='p-10'>
            <h2 className='text-center text-[30px] font-bold text-black underline underline-offset-4'>Featured eBooks</h2>
            
            <br /><br />
            <div className=' '>
            <Slider {...settings}>


              {
                productsList.map((product)=>(
                  <article>
                    <Card product={product}/>
                  </article> 
                ))
              } 
               
           
            </Slider>
            </div>
        </div>
    </section>
  )                  
}

export default FeaturedeBooks