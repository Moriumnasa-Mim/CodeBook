import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/Home';
import Products from '../pages/Products';

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>}/>
        </Routes>
  </BrowserRouter> 
    </div>
  )
}

export default Index