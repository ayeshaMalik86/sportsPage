// pages/Main.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Schedule from '../components/Schedule';
import JoinUs from '../components/JoinUs'

const Main = () => {
  return (
    <div className='main-content'>
      <HeroSection />
      <About />
      <Programs />
      <Schedule />
      <Testimonials />
      <JoinUs/>
    </div>
  );
};

export default Main;
