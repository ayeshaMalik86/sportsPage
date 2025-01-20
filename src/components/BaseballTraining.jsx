import React from "react";

const BaseballTraining = () => {
  return (
    <div className="font-mona relative flex flex-col text-center p-8 bg-white">
      <div className="z-10 flex p-6 justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm">01</div>
          <span className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full">About</span>
        </div>
        <div className="text-black text-md flex items-center">
          Learn more <span className="ml-1">&#8599;</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mt-20 flex flex-col self-center text-center relative">
        <div className="inset-0 transform -rotate-6 z-0 flex -top-32">
          <img
            src="assets/images/twobb.png"
            alt="Baseball"
            className="h-36 object-cover rounded-lg -mt-32"
            style={{
              transform: "rotate(-10deg)",
              zIndex: -1, 
              position: "absolute",
            }}
          />
        </div>
        <p className="text-3xl text-gray-900 relative z-10 px-6 py-4">
          We provide exceptional baseball <img src="/assets/icons/batter.png" alt="batter" className="w-10 inline-block" /> training at over
          <span className="bg-[#FFBB01] text-black px-2 py-1 rounded-full mx-1 inline-block text-[20px] transform -rotate-6">
            <img src="assets/icons/baseball.png" alt="baseball" className="w-5 inline-block bg-white rounded-full p-1" /> 100+
          </span> locations, catering to players of all skill levels. From cutting-edge facilities in <span className="bg-[#FFBB01] rounded-full px-5 pb-1">
            <img src="assets/icons/baseball.png" alt="baseball" className="w-6 inline-block" />
          </span> bustling cities to picturesque fields in serene settings to create the
          <span className="text-[#FFBB01]"> perfect environment for honing your skills and enjoying the game you love</span>
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex self-center items-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="relative flex items-center">
            <div className="absolute w-16 h-px -right-4 bg-[#FFBB01] transform -translate-x-1/2"></div>
            <div className="w-4 h-4 rounded-full bg-[#FFBB01] absolute -right-2 transform -translate-x-1/2"></div>
          </div>
          <div className="border p-2 rounded-full border-gray-20">
            <div className="border p-2 rounded-full border-gray-400">
              <div className="border border-black px-1 py-3 rounded-full">
                <span><img src="/assets/icons/baseball-logo.png" alt="baseball-logo" className="w-8" /></span>
              </div>
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="absolute w-16 h-px bg-[#FFBB01] -left-4 transform translate-x-1/2"></div>
            <div className="w-4 h-4 rounded-full bg-[#FFBB01] absolute -left-2 transform translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseballTraining;
