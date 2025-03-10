// pages/Main.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Schedule from '../components/Schedule';
import JoinUs from '../components/JoinUs'
import ShowModel from '../components/ShowModel';

const Main = () => {
  return (
    <div className='main-content max-w-full mx-auto'>
      <HeroSection />
      <About />
      <Programs />
      <Schedule />
      <Testimonials />
      <JoinUs/>
      <ShowModel/>
    </div>
  );
};

export default Main;
