import React from 'react'
import HeroSection from '../components/HeroSection'
import Programs from '../components/Programs'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

const Main = () => {
  return (
    <div className='rounded-full'>
      <HeroSection/>
      <About/>
      <Programs/>
      <Testimonials/>
    </div>
  )
}

export default Main
