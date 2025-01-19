/* eslint-disable no-unused-vars */
//sir er ta all_product
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { CiMenuKebab } from 'react-icons/ci'

import getProductList from '../apiServices/ProductServices'
import { useLocation } from 'react-router'
import Loading from '../components/Loading'

const Products = () => {

const[products, setProducts] = useState()
const[isLoading, setIsLoading]=useState(false)
// search er kaj start
const search = useLocation().search;
const searchTerm = new URLSearchParams(search).get("q");

//console.log(searchTerm)
//search er kaj sesh

console.log(products)

  useEffect(()=>{
     async function fetchAllproduct(){
      /*loading start*/
      setIsLoading(true) 
      /*loading end*/ 
      try{
        const productsData = await getProductList(searchTerm);
        setProducts(productsData);
      }
      catch(error){
        alert(error.message)
      }
     /**loading start */
      finally{
        setIsLoading(false)
      }
      /**loading end */
    
     }
     fetchAllproduct()
  },[searchTerm])

  return (
    <section className='relative'>
      {isLoading && <Loading/>}
      
      <div className='header flex justify-between p-10 font-bold '>
        <h1 className='dark:text-slate-100'>All eBooks(15)</h1>

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
