const Hero = () => {
  return (
    <section className="relative w-full h-[750px] flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hero-sec-bg.jpg')" }}>
      <div className="relative max-w-lg text-white text-center px-6 md:px-12">
        <div className="inline-flex bg-slate-200 bg-opacity-40 p-1 rounded-full space-x-[-10px] justify-center mb-4">
          <img src="/assets/icons/person1.jpg" alt="Avatar 1" className="w-10 h-10 border-2 rounded-full" />
          <img src="/assets/icons/person2.jpg" alt="Avatar 2" className="w-10 h-10 border-2 rounded-full" />
          <img src="/assets/icons/person3.jpg" alt="Avatar 3" className="w-10 h-10 border-2 rounded-full" />
        </div>
        <p className="text-lg md:text-xl font-light mb-6">
          Join a growing community of <span className="text-yellow-400">baseball enthusiasts</span> who've
          sharpened their skills and boosted their confidence with our expert-led training. Be part of the success stories!
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Join a Passionate Community of Softball Enthusiasts!
        </h1>
        <div className="mt-6">
          <a href="#" className="bg-black text-white px-6 py-3 rounded-full text-lg flex items-center space-x-2 hover:bg-gray-800">
            <span>Join us</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
      <p className="absolute bottom-4 text-white text-sm">Scroll Down</p>
    </section>
  );
};

export default Hero;
