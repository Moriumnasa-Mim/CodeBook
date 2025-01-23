/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Itemcard from '../pages/Itemcard';
import Signinpage from '../components/login/Signinpage';
import Loginpage from '../components/login/Loginpage';
import ProtectedRoute from './ProtectedRoute';


const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cartitem" element={<ProtectedRoute><Itemcard/></ProtectedRoute>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/Signinpage" element={<Signinpage/>}/>
            <Route path="/Loginpage" element={<Loginpage/>}/>
            
        </Routes>
        <Footer/>
  </BrowserRouter> 
    </div>
  )
}

export default Index
