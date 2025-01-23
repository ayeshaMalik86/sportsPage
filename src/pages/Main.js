import React from 'react'
import HeroSection from '../components/HeroSection'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Schedule from '../components/Schedule'

const Main = () => {
  return (
    <div className='rounded-full'>
      <HeroSection/>
      <About/>
      <Programs/>
      <Schedule/>
      <Testimonials/>
    </div>
  )
}

export default Main
