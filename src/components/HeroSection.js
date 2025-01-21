import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="relative rounded-3xl font-mona w-full h-[700px] flex flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/hero-sec-bg.jpg')" }}
    >
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative max-w-lg text-white mt-28 md:mt-[10rem] px-6 md:px-12"
      >
        <motion.div 
          className="inline-flex bg-slate-200 bg-opacity-40 p-1 rounded-full space-x-[-10px] justify-center mb-4"
        >
          <motion.img 
            whileHover={{ scale: 1.1 }}
            src="/assets/icons/person1.jpg" alt="Avatar 1" 
            className="w-10 h-10 border-2 rounded-full" 
          />
          <motion.img 
            whileHover={{ scale: 1.1 }}
            src="/assets/icons/person2.jpg" alt="Avatar 2" 
            className="w-10 h-10 border-2 rounded-full" 
          />
          <motion.img 
            whileHover={{ scale: 1.1 }}
            src="/assets/icons/person3.jpg" alt="Avatar 3" 
            className="w-10 h-10 border-2 rounded-full" 
          />
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl font-light mb-6"
        >
          Join a growing community of <span className="text-yellow-400">baseball enthusiasts</span> who've
          sharpened their skills and boosted their confidence with our expert-led training. Be part of the success stories!
        </motion.p>
      </motion.div>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-7 md:mt-10 items-left px-6 md:px-12 text-white"
      >
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-3xl md:text-5xl max-w-lg leading-tight"
        >
          Join a Passionate Community of Softball Enthusiasts!
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-6 flex items-center justify-between"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#" 
            className="bg-black text-white inline-flex px-3 py-2 rounded-full text-lg flex items-center space-x-2 hover:bg-[#FFBB01]"
          >
            <span>Join us</span>
            <motion.img 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              src="assets/icons/right-up.png" alt="arrow" 
              className="w-10 h-10 bg-white pr-1 pl-2 py-2 rounded-full"
            />
          </motion.a>
          <motion.div 
            className="hidden text-white text-sm md:flex items-center gap-3"
            animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <p>Scroll Down</p>
            <img              
              src="assets/icons/mouse.png" alt="" className="w-10 h-10"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
