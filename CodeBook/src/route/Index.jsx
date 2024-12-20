/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Itemcard from '../pages/Itemcard';
import Nulldashbord from '../components/Dashbord/Nulldashbord';

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/Cartitem" element={<Itemcard/>}/>
            <Route path="/Nulldashbord" element={<Nulldashbord/>}/>
        </Routes>
        <Footer/>
  </BrowserRouter> 
    </div>
  )
}

export default Index