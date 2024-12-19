/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tesmonial from '../components/Tesmonial'
import Question from '../components/Question'
import FeaturedeBooks from '../components/featuredeBooks/FeaturedeBooks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        
        <Hero/>
        <FeaturedeBooks/>
        <Tesmonial/>
        <Question/>
 
    </div>
  )
}

export default Home