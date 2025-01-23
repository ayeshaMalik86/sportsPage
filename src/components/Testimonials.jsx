import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    logo: "Lesch.",
    text: "The coaching here transformed my game. I’m more confident at the plate!",
    name: "Kristin Watson",
    company: "Lesch - Jakubowski",
    address: "577 Glover Lights, Reichertland, British Indian",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    logo: "OReilly LLC.",
    text: "My kid loves the Rookie Ready sessions. It’s incredible to see them learn !",
    name: "Cody Fisher",
    company: "OReilly LLC",
    address: "1089 Caesar Place, New Kyle, Tajikistan",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const TestimonialCard = ({ logo, text, name, company, address, image }) => (
  <motion.div 
    className="bg-[#F1F1F1] p-6 rounded-xl flex flex-col justify-between max-w-96 mt-10 shadow-lg"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true }}
  >
    <div className="flex justify-between items-center">
      <div className="flex border border-gray-400 py-1 px-3 rounded-full items-center gap-2">
        <img src="/assets/icons/logo1.png" alt={name} className="w-8 h-8 rounded-full" />     
        <span className="text-sm">{logo}</span>
      </div>
      <img src={image} alt={name} className="w-12 h-12 rounded-full" />
    </div>
    <p className="text-2xl text-gray-800 mb-4 mt-10"><span className="font-thin text-5xl text-[#FFBA00]">❝</span><br/> {text}</p>
    <div className="mt-10">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-gray-600 text-sm">{company}</p>
      <p className="text-gray-500 text-xs">{address}</p>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <motion.div 
      className="font-mona flex flex-col gap-6 px-8 mb-10 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="flex items-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm"
        whileHover={{ scale: 1.1 }}>04
        </motion.div>
        <motion.span className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full"
        whileHover={{ scale: 1.1 }}
        >Testimonials</motion.span>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center">
        <motion.div 
          className="flex flex-col text-left ml-10 mt-10"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src="/assets/images/player1.jpg" alt="" className="w-28 h-28 rounded-lg"/>
          <motion.h2 className="text-4xl text-gray-900 mt-20 mb-10" whileHover={{ scale: 1.05 }}>From Our Baseball Community</motion.h2>
          <div className="flex gap-2">
            <motion.button 
              className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button 
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
