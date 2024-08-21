import React from 'react'
import Navbar from './componets/navbar'
import HeroSection from './componets/HeroSection'
import FeatureSection from './componets/FeatureSection'
import WorkflowSection from './componets/WorkflowSection'
import { Pricing } from './componets/Pricing'
import { Testimonial } from './componets/Testimonial'
import Footer from './componets/Footer'

export const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection /> 
        <FeatureSection /> 
        <WorkflowSection /> 
        <Pricing /> 
        <Testimonial /> 
        <Footer /> 
      </div>
    </>
  )
}

export default App
