import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Tesmonial from '../components/Tesmonial'
import Question from '../components/Question'
import FeaturedeBooks from '../components/featuredeBooks/FeaturedeBooks'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <FeaturedeBooks/>
        <Tesmonial/>
        <Question/>
    </div>
  )
}

export default Home