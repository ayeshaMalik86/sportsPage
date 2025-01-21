import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="p-5 absolute top-0 left-0 w-full z-10 bg-transparent font-mona"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          className="flex justify-between items-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="text-lg text-black flex items-center gap-2 bg-white rounded-full px-2 py-2"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="bg-[#FEBB02] p-2 rounded-full flex items-center justify-center"
            >
              <img
                src="/assets/icons/logo.png"
                alt="Slugger Logo"
                className="w-4 h-4"
              />
            </motion.div>
            Slugger.
          </motion.div>

          {/* Hamburger Icon for mobile */}
          <motion.div 
            className="md:hidden flex items-center cursor-pointer"
            onClick={toggleMenu}
            whileTap={{ scale: 0.8 }}
          >
            <img
              src="/assets/icons/menu-icon.png"
              alt="Hamburger Icon"
              className="w-6 h-6"
            />
          </motion.div>

          {/* Menu for larger screens */}
          <motion.ul 
            className="hidden md:flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {["Home", "Programs", "Coaches", "Schedule"].map((item, index) => (
              <motion.li 
                key={item} 
                whileHover={{ scale: 1.1, color: "#FFBB01" }}
                className="text-gray-100 border rounded-full px-3 py-2 cursor-pointer"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.button 
            whileHover={{ scale: 1.1, backgroundColor: "#FFBB01" }}
            className="hidden md:flex text-black gap-2 items-center bg-white pr-1 pl-3 py-1 rounded-full"
          >
            Free Trial
            <motion.div
              className="bg-black p-2 rounded-full flex items-center justify-center"
            >
              <img
                src="/assets/icons/arrow.png"
                alt="arrow logo"
                className="w-5 h-5"
              />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white p-4 rounded-md shadow-md absolute top-0 left-0 w-[80%] mt-12"
            >
              <motion.ul className="space-y-4">
                {["Home", "Programs", "Coaches", "Schedule"].map((item) => (
                  <motion.li 
                    key={item} 
                    whileHover={{ scale: 1.1, color: "#FFBB01" }}
                    className="text-gray-700 hover:text-yellow-600"
                  >
                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button 
                whileHover={{ scale: 1.1, backgroundColor: "#FFBB01" }}
                className="w-full text-black flex gap-2 items-center bg-white pr-1 pl-2 py-2 rounded-full mt-4"
              >
                Free Trial
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="bg-black p-2 rounded-full flex items-center justify-center"
                >
                  <img
                    src="/assets/icons/arrow.png"
                    alt="arrow logo"
                    className="w-5 h-5"
                  />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
