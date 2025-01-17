import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-yellow-600 flex items-center">
            <img
              src="/logo.png"
              alt="Slugger Logo"
              className="w-8 h-8 mr-2"
            />
            Slugger.
          </div>
          <ul className="flex space-x-6">
            <li className="text-gray-100 hover:text-yellow-600">
              <a href="#home">Home</a>
            </li>
            <li className="text-gray-100 hover:text-yellow-600">
              <a href="#programs">Programs</a>
            </li>
            <li className="text-gray-100 hover:text-yellow-600">
              <a href="#coaches">Coaches</a>
            </li>
            <li className="text-gray-100 hover:text-yellow-600">
              <a href="#schedule">Schedule</a>
            </li>
          </ul>
          <button className="text-white bg-yellow-600 px-4 py-2 rounded-lg hover:bg-yellow-700">
            Free Trial
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
