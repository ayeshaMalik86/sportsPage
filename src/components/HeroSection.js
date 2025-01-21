import React from "react";


const Hero = () => {
  return (
    <section className="relative rounded-3xl font-mona w-full h-[750px] flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-sec-bg.jpg')" }}>
      <div className="relative max-w-lg text-white mt-28 md:mt-[10rem] px-6 md:px-12">
        <div className="inline-flex bg-slate-200 bg-opacity-40 p-1 rounded-full space-x-[-10px] justify-center mb-4">
          <img src="/assets/icons/person1.jpg" alt="Avatar 1" className="w-10 h-10 border-2 rounded-full" />
          <img src="/assets/icons/person2.jpg" alt="Avatar 2" className="w-10 h-10 border-2 rounded-full" />
          <img src="/assets/icons/person3.jpg" alt="Avatar 3" className="w-10 h-10 border-2 rounded-full" />
        </div>
        <p className="text-lg md:text-xl font-light mb-6">
          Join a growing community of <span className="text-yellow-400">baseball enthusiasts</span> who've
          sharpened their skills and boosted their confidence with our expert-led training. Be part of the success stories!
        </p>
      </div>
      <div className="mt-6 items-left px-6 md:px-12 text-white">
        <h1 className="text-4xl md:text-6xl max-w-lg leading-tight">
          Join a Passionate Community of Softball Enthusiasts!
        </h1>
        <div className="mt-6 flex items-center justify-between">
          <a href="#" className="bg-black text-white inline-flex px-3 py-2 rounded-full text-lg flex items-center space-x-2 hover:bg-[#FFBB01]">
            <span>Join us</span>
            <img src="assets/icons/right-up.png" alt="arrow" className="w-10 h-10  bg-white pr-1 pl-2 py-2 rounded-full"/>
          </a>
          <div className="hidden text-white text-sm md:flex items-center gap-3">
            <p>Scroll Down</p>
            <img src="assets/icons/mouse.png" alt="" className="w-10 h-10"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
