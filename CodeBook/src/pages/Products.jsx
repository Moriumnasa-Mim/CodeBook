/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CiMenuKebab } from 'react-icons/ci'

import getProductList from '../apiServices/ProductServices'

const Products = () => {

const[products, setProducts] = useState()
console.log(products)

  useEffect(()=>{
     async function fetchAllproduct(){
      try{
        const productsData = await getProductList();
        setProducts(productsData);
      }
      catch(error){
        alert(error.message)
      }
     }
     fetchAllproduct()
  },[])

  return (
    <section>
      <div className='header flex justify-between p-10 font-bold'>
        <h1>All eBooks(15)</h1>

        <p className='bg-gray-200 p-3 rounded-md'>
          <CiMenuKebab/>
        </p>

      </div>
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-10'>
        {products?.map((product) => (
          <article key={product.id}>
            <Card product={product}/>
          </article>
        )
        
        )}
      </div>
    </section>
  )
}

export default Products