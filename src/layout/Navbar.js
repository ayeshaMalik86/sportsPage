import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent font-mona">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg text-black flex items-center gap-2 bg-white rounded-full px-2 py-2">
            <div className="bg-[#FEBB02] p-2 rounded-full flex items-center justify-center">
              <img
                src="/assets/icons/logo.png"
                alt="Slugger Logo"
                className="w-4 h-4"
              />
            </div>
            Slugger.
          </div>

          {/* Hamburger Icon for mobile */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <img
              src="/assets/icons/menu-icon.png"
              alt="Hamburger Icon"
              className="w-6 h-6 cursor-pointer"
            />
          </div>

          {/* Menu for larger screens */}
          <ul className="hidden md:flex space-x-4">
            <li className="text-gray-100 border rounded-full px-3 py-2 hover:text-yellow-600">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-100 border rounded-full px-3 py-2 hover:text-yellow-600">
              <a href="#programs">Programs</a>
            </li>
            <li className="text-gray-100 border rounded-full px-3 py-2 hover:text-yellow-600">
              <a href="#coaches">Coaches</a>
            </li>
            <li className="text-gray-100 border rounded-full px-3 py-2 hover:text-yellow-600">
              <a href="#schedule">Schedule</a>
            </li>
            <li className="bg-white rounded-full items-center flex px-3">
              <img
                src="/assets/icons/search.png"
                alt="search logo"
                className="w-5 h-5"
              />
            </li>
          </ul>

          <button className="hidden md:flex text-black gap-2 items-center bg-white pr-1 pl-3 py-1 rounded-full hover:bg-yellow-700">
            Free Trial
            <div className="bg-black p-2 rounded-full flex items-center justify-center">
              <img
                src="/assets/icons/arrow.png"
                alt="arrow logo"
                className="w-5 h-5"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-4 rounded-md shadow-md absolute top-[-50px] left-0 w-[80%] mt-12`}
        >
          <ul className="space-y-4">
            <li className="text-gray-700 hover:text-yellow-600">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-700 hover:text-yellow-600">
              <a href="#programs">Programs</a>
            </li>
            <li className="text-gray-700 hover:text-yellow-600">
              <a href="#coaches">Coaches</a>
            </li>
            <li className="text-gray-700 hover:text-yellow-600">
              <a href="#schedule">Schedule</a>
            </li>
            <li className="flex items-center gap-2 text-gray-700 hover:text-yellow-600">
              <a href="#">Search</a>
              <img
                src="/assets/icons/search.png"
                alt="search logo"
                className="w-5 h-5"
              />
            </li>
          </ul>

          <button className="w-full text-black flex gap-2 items-center bg-white pr-1 pl-2 py-2 rounded-full hover:bg-yellow-700 mt-4">
            Free Trial
            <div className="bg-black p-2 rounded-full flex items-center justify-center">
              <img
                src="/assets/icons/arrow.png"
                alt="arrow logo"
                className="w-5 h-5"
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
