import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="font-mona relative border-w-[80%] flex flex-col text-center p-2 bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <motion.div
        className="z-10 flex p-6 justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex items-center">
          <motion.div
            className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            01
          </motion.div>
          <motion.span
            className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            About
          </motion.span>
        </div >
        <motion.div
          className="text-black text-md flex items-center"
          whileHover={{ x: 10 }}
        >
          <button className="hover:bg-[#FFBB01] rounded-full px-2">Learn more <span className="ml-1">&#8599;</span></button>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-3xl mt-[10rem] md:mt-[5rem] flex flex-col self-center text-center relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          className="inset-0 transform -rotate-6 z-0 flex -top-32"
          animate={{ rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        >
          <img
            src="assets/images/twobb.png"
            alt="Baseball"
            className="h-36 object-cover rounded-lg -mt-32"
            style={{ zIndex: -1, position: "absolute" }}
          />
        </motion.div>
        <p className="text-2xl md:text-3xl text-gray-900 relative z-10 px-6 py-4">
          We provide exceptional baseball <motion.img
            src="/assets/icons/batter.png"
            alt="batter"
            className="w-10 inline-block"
            whileHover={{ scale: 1.5 }}
          /> training at over
          <motion.span
            className="bg-[#FFBB01] text-black px-2 py-1 rounded-full mx-1 inline-block text-[20px] transform"
            whileHover={{ rotate: -10, scale: 1.2 }}
          >
            <img
              src="assets/icons/baseball.png"
              alt="baseball"
              className="w-5 inline-block bg-white rounded-full p-1"
            />
            100+
          </motion.span>
          locations, catering to players of all skill levels. From cutting-edge
          facilities in <motion.span
          className="bg-[#FFBB01] rounded-full px-3 py-1 inline-flex"
            whileHover={{ scale: 1.4, color: "#FF8800" }}
            >
            <img src="assets/icons/baseball.png" alt="baseball" className="w-6 inline-block" />
          </motion.span> bustling cities to picturesque fields in serene settings to create the<motion.span
            className="text-[#FFBB01]"
            whileHover={{ scale: 1.2, color: "#FF8800" }}
          > perfect environment for honing your skills and enjoying the game you love
          </motion.span>.
        </p>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="mt-8 mb-8 flex self-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="flex items-center justify-center space-x-2">
          <motion.div
            className="relative flex items-center"
            animate={{ x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <div className="absolute w-16 h-px -right-4 bg-[#FFBB01] transform -translate-x-1/2"></div>
            <div className="w-4 h-4 rounded-full bg-[#FFBB01] absolute -right-2 transform -translate-x-1/2"></div>
          </motion.div>
          <div className="border p-2 rounded-full border-gray-20">
            <motion.div
              className="border p-2 rounded-full border-gray-400"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <div className="border border-black px-1 py-3 rounded-full">
                <span>
                  <img
                    src="/assets/icons/baseball-logo.png"
                    alt="baseball-logo"
                    className="w-8"
                  />
                </span>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="relative flex items-center"
            animate={{ x: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <div className="absolute w-16 h-px bg-[#FFBB01] -left-4 transform translate-x-1/2"></div>
            <div className="w-4 h-4 rounded-full bg-[#FFBB01] absolute -left-2 transform translate-x-1/2"></div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="flex self-center w-[90%] border-b-2 mb-10 mt-10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>
    </motion.div>
  );
};

export default About;
