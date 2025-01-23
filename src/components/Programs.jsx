import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.3 } },
};

const Programs = () => {
  return (
    <motion.div
      className="bg-white font-mona p-2 flex flex-col gap-6"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      variants={stagger}
    >

      <motion.div className="md:flex p-8 justify-between" variants={fadeIn}>
        <div className="flex items-center">
          <motion.div
            className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm"
            whileHover={{ scale: 1.1 }}
          >
            02
          </motion.div>
          <motion.span
            className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            Programs
          </motion.span>
        </div>
        <motion.div className="text-black text-5xl mt-8 md:mt-0">
          Courses Designed for <br />All Levels
        </motion.div>
      </motion.div>


      <motion.div className="flex gap-6 self-center justify-evenly flex-wrap" variants={stagger}>

        <motion.div
          className="relative h-[80%] max-w-[100%] rounded-xl overflow-hidden flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          variants={fadeIn}
        >
          <img src="/assets/images/player.jpg" alt="Rookie Ready" className="object-cover w-full h-full" />
          <div className="absolute top-4 left-4 flex gap-2">
            <motion.span className="border text-white px-3 py-1 rounded-full text-sm"
            whileHover={{ scale: 1.2 }}
            >Beginner
            </motion.span>
            <motion.span className="border text-white px-3 py-1 rounded-full text-sm"
            whileHover={{ scale: 1.2 }}
            >Basics</motion.span>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-5xl">Rookie <br />Ready</div>
          <motion.div
            className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center"
            whileHover={{ rotate: 90 }}
          >
            <img src="assets/icons/right-up.png" alt="arrow-up" className="w-6" />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative w-[15rem] h-[10rem] flex-shrink-0 flex flex-col justify-between gap-3 p-4 border-2 border-gray-100 rounded-xl bg-white overflow-hidden"
          whileHover={{ scale: 1.05 }}
          variants={fadeIn}
        >
          <div className="absolute z-0 -bottom-5 -left-5 rotate-[15deg] w-24 h-24 bg-contain bg-no-repeat" style={{ backgroundImage: "url('/assets/images/baseball.png')" }}></div>
          <div className="z-10 rounded-lg flex justify-between">
            <motion.span className="text-xl border-2 self-center px-3 py-1 rounded-full" whileHover={{ rotate: 180 }}>+</motion.span>
            <img src="/assets/images/player1.jpg" alt="Slugger Squad" className="w-[5rem] h-20 object-cover rounded-lg" />
          </div>
          <span className="z-10 text-xl self-start">Slugger Squad</span>
        </motion.div>

        <motion.div className="relative w-[15rem] flex-shrink-0 flex flex-col" variants={fadeIn}>
          <motion.div className="relative w-full h-44 rounded-xl overflow-hidden" whileHover={{ scale: 1.05 }}>
            <img src="/assets/images/mvp-grind.jpg" alt="MVP Grind" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-6">
              <motion.span className="text-white border border-white rounded-full flex items-center justify-center w-10 h-10" whileHover={{ rotate: 180 }}>+</motion.span>
              <span className="text-white text-2xl">MVP Grind</span>
            </div>
          </motion.div>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex gap-4 self-end">
              <motion.button className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center" whileHover={{ scale: 1.2 }}>←</motion.button>
              <motion.button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center" whileHover={{ scale: 1.2 }}>→</motion.button>
            </div>
            <motion.div className="text-gray-400 mt-20"
            whileHover={{ scale: 1.05 }}>
              Discover the ideal program tailored to your unique goals, skill level, and aspirations, ensuring the perfect fit for your baseball journey.
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className='flex self-center w-[90%] border-b-2 mb-5 mt-10' initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1 }}></motion.div>
    </motion.div>
  );
};

export default Programs;
