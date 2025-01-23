import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="bg-black rounded-3xl text-white p-8 relative w-full mx-auto font-mona"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="border-t flex mt-10 mb-10 border-gray-700"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Logo */}
      <motion.div
        className="text-lg text-black inline-flex items-center gap-2 bg-white rounded-full px-2 py-2"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="bg-[#FEBB02] p-2 rounded-full flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/assets/icons/logo.png"
            alt="Slugger Logo"
            className="w-4 h-4"
          />
        </motion.div>
        Slugger.
      </motion.div>

      {/* Main Text */}
      <motion.div
        className="flex flex-wrap items-center justify-between mt-10 md:mt-20 max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.p className="text-2xl md:text-4xl" whileHover={{ scale: 1.05 }}>
          We’re dedicated to<br /> empowering baseball players<br /> of all skill
          levels.
        </motion.p>
        <motion.div className="p-2" whileHover={{ scale: 1.1 }}>
          <img
            src="/assets/images/footer-img.png"
            alt="Baseball Equipment"
            className="hidden md:block w-48 object-cover rounded-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="mt-8 flex flex-col md:flex-row justify-between md:text-xl text-gray-400 border-t border-gray-700 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <p>123 Baseball Lane, Sports City, USA</p>
        <p>+1 (555) 123-4567</p>
        <p>info@sluggeracademy.com</p>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        className="mt-6 flex flex-col md:flex-row md:items-center justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className="text-xs text-gray-400">© 2025 Slugger All Rights Reserved</p>
        <motion.div className="flex flex-wrap mt-10 md:mt-2 gap-4">
          {["Home", "Programs", "Coaches", "Schedule"].map((item, index) => (
            <motion.button
              key={item}
              className="border border-gray-500 px-4 py-2 rounded-full hover:bg-[#FEBB02]"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
            >
              {item}
            </motion.button>
          ))}
          <motion.p
            className="text-black bg-white py-3 px-5 text-xl rounded-full cursor-pointer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            ↑
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
