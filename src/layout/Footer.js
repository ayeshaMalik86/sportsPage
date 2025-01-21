import React from "react";

const Footer = () => {
  return (
    <div className="bg-black rounded-3xl text-white p-8 relative w-full mx-auto font-mona">
        <div className="border-t flex mt-10 mb-10 border-gray-700"></div>
      {/* Logo */}
      <div className="text-lg text-black inline-flex items-center gap-2 bg-white rounded-full px-2 py-2">
            <div className="bg-[#FEBB02] p-2 rounded-full flex items-center justify-center">
              <img
                src="/assets/icons/logo.png"
                alt="Slugger Logo"
                className="w-4 h-4"
              />
            </div>
            Slugger.
          </div>
      
      {/* Main Text */}
      <div className="flex flex-wrap items-center justify-between mt-20 max-w-5xl">
        <p className="text-2xl md:text-4xl">We’re dedicated to<br/> empowering baseball players<br/> of all skill levels.</p>
        <div className="p-2 rounded-lg">
        <img 
          src="/assets/images/footer-img.png" 
          alt="Baseball Equipment" 
          className="hidden md:block w-48 object-cover rounded-lg"
        />
      </div>
      </div>
      
      {/* Contact Info */}
      <div className="mt-8 flex flex-col md:flex-row justify-between md:text-xl  text-gray-400 border-t border-gray-700 pt-4">
        <p>123 Baseball Lane, Sports City, USA</p>
        <p>+1 (555) 123-4567</p>
        <p>info@sluggeracademy.com</p>
      </div>
      
      {/* Image */}
      
      
      {/* Navigation Buttons */}
      <div className="mt-6 flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-xs text-gray-400">© 2025 Slugger All Rights Reserved</p>
        <div className="flex flex-wrap mt-10 md:mt-2 gap-4">
        {['Home', 'Programs', 'Coaches', 'Schedule'].map((item) => (
          <button key={item} className="border border-gray-500 px-4 py-2 rounded-full hover:bg-gray-800">{item}</button>
        ))}
        <p className="text-black bg-white py-3 px-5 text-xl rounded-full">↑</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
