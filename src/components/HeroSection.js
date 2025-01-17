import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover h-screen text-white"
      style={{
        backgroundImage: `url('/assets/images/hero-sec-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col justify-center h-full text-center">
        <p className="text-lg mb-4">
          Join a growing community of{" "}
          <span className="text-yellow-400">baseball enthusiasts</span> who’ve
          sharpened their skills and boosted their confidence with our
          expert-led training. Be part of the success stories!
        </p>
        <h1 className="text-5xl font-bold mb-6">
          Join a Passionate Community of Softball Enthusiasts!
        </h1>
        <button className="bg-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-700">
          Join us →
        </button>
      </div>
      <div className="absolute bottom-4 w-full text-center">
        <p className="text-gray-300 animate-bounce">Scroll Down ↓</p>
      </div>
    </section>
  );
};

export default HeroSection;
