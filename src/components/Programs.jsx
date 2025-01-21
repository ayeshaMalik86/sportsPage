import React from 'react';

const Programs = () => {
  return (
    <div className="bg-white font-mona p-2 flex flex-col gap-6">
      {/* Header */}
      <div className="md:flex p-8 justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm">02</div>
          <span className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full">Programs</span>
        </div>
        <div className="text-black text-5xl mt-8 md:mt-0">
          Courses Designed for <br />All Levels
        </div>
      </div>
      
      {/* Courses */}
      <div className="flex gap-6 self-center justify-evenly flex-wrap">
        {/* Rookie Ready */}
        <div className="relative h-[80%] max-w-[100%] rounded-xl overflow-hidden flex-shrink-0">
          <img 
            src="/assets/images/player.jpg" 
            alt="Rookie Ready" 
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="border text-white px-3 py-1 rounded-full text-sm">Beginner</span>
            <span className="border text-white px-3 py-1 rounded-full text-sm">Basics</span>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-5xl">
            Rookie <br />Ready
          </div>
          <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img 
              src="assets/icons/right-up.png" 
              alt="arrow-up" 
              className="w-6" 
            />
          </div>
        </div>

        {/* Slugger Squad */}
        <div className="relative w-[15rem] h-[10rem] flex-shrink-0 flex flex-col justify-between gap-3 p-4 border-2 border-gray-100 rounded-xl">
          <div className="rounded-lg flex justify-between">
            <span className="text-xl border-2 self-center px-3 py-1 rounded-full">+</span>
            <img 
              src="/assets/images/player1.jpg" 
              alt="Slugger Squad" 
              className="w-[5rem] h-20 object-cover rounded-lg" 
            />
          </div>
          <span className="text-xl self-start">Slugger Squad</span>
        </div>

        {/* MVP Grind */}
        <div className="relative w-[15rem] flex-shrink-0 flex flex-col">
          <div className="relative w-full h-44 rounded-xl overflow-hidden">
            <img 
              src="/assets/images/mvp-grind.jpg" 
              alt="MVP Grind" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-6">
              <span className="text-white border border-white rounded-full flex items-center justify-center w-10 h-10">
                +
              </span>
              <span className="text-white text-2xl">MVP Grind</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex gap-4 self-end">
              <button className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center">←</button>
              <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">→</button>
            </div>
            <div className="text-gray-400 mt-20">
              Discover the ideal program tailored to your unique goals, skill level, and aspirations, ensuring the perfect fit for your baseball journey.
            </div> 
          </div>
        </div>
      </div>
      <div className='flex self-center w-[90%] border-b-2 mb-20 mt-10'></div>
    </div>
    
  );
};

export default Programs;
