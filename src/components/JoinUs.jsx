import React from 'react';
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <motion.div
      className="font-mona rounded-3xl mb-10 relative p-8 w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/join-us.jpg')" }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >

      <motion.div
        className="absolute rounded-3xl inset-0 bg-black z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      <motion.div
        className="flex items-center relative z-10"
      >
        <motion.div
          className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm"
          whileHover={{ scale: 1.3, rotate: 30 }}
        >
          05
        </motion.div>
        <motion.span
          className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full"
          whileHover={{ scale: 1.2, backgroundColor: "#FFD700" }}
        >
          Join Us
        </motion.span>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center p-6 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-lg max-w-lg text-center relative"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.h2
            className="text-4xl text-black mb-6"
            initial={{ letterSpacing: "-5px", opacity: 0 }}
            animate={{ letterSpacing: "0px", opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Join the team today and start{' '}
            <motion.span
              className="bg-[#FFBB01] rounded-full px-3 py-1 inline-flex"
              whileHover={{ scale: 1.4, rotate: 10, color: "#FF8800" }}
            >
              <motion.img
                src="assets/icons/baseball.png"
                alt="baseball"
                className="w-6 inline-block"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
              />
            </motion.span>{' '}
            your journey toward excellence!
          </motion.h2>

          <motion.p
            className="text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.a
              href="#"
              className="text-black font-semibold underline"
              whileHover={{ color: "#FFBB01", scale: 1.1 }}
            >
              Join our team
            </motion.a>{' '}
            <motion.span
              className="text-[#FFBB01] text-xl"
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              ↗
            </motion.span>{' '}
            to grow your skills, connect with a supportive community, and achieve your goals. Start your journey to excellence today!
          </motion.p>

          <motion.div
            className="hidden md:block absolute md:bottom-[-35px] md:right-[-30px] w-24 h-24 rounded-lg overflow-hidden border-2 border-white shadow-md"
            initial={{ scale: 0.5, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            whileHover={{ scale: 1.2 }}
          >
            <img
              src="/assets/images/player2.jpg"
              alt="Baseball player"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default JoinUs;
