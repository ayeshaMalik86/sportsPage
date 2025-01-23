import React, { useState } from "react";
import { motion } from "framer-motion";

const Schedule = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const events = [
    {
      title: "Home Run Derby",
      img: "/assets/images/schedule-dd.jpg",
      description:
        "This event is all about power hitting, where players aim to hit the most home runs and claim the slugger crown.",
    },
    {
      title: "Diamond Showdown",
      img: "/assets/images/schedule-dd.jpg",
      description:
        "A competitive event where teams face off to showcase their baseball prowess.",
    },
    {
      title: "Fastpitch Frenzy",
      img: "/assets/images/schedule-dd.jpg",
      description:
        "An adrenaline-pumping event focusing on speed and accuracy in pitching.",
    },
    {
      title: "All-Star Weekend",
      img: "/assets/images/schedule-dd.jpg",
      description:
        "A weekend celebration of the sport featuring games, challenges, and fan interactions.",
    },
  ];

  return (
    <motion.div 
      className="p-6 md:p-12 bg-white text-black font-mona"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.div
          className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm"
          whileHover={{ scale: 1.2, rotate: 15 }}
        >
          03
        </motion.div>
        <motion.span
          className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          Schedule
        </motion.span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
        <motion.div 
          className="md:w-[50%]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl mt-10">
            <span className="text-[#FEBB02]">Game On:<br /></span> Upcoming Match Schedule
          </h1>
          <motion.p 
            className="text-gray-500 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Don’t miss a single inning! Check out our upcoming matches to stay updated on game times, locations, and opponents.
          </motion.p>
          <motion.div 
            className="mt-10"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/assets/images/schedule-img.jpg"
              alt="Lacrosse Match"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-[100%] md:w-[50%] space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <hr className="my-4 border-gray-300" />
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-4 rounded-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <motion.h2 className="text-2xl flex items-center gap-5" whileHover={{ scale: 1.05 }}>
                    <span className="text-gray-400 text-sm">{`0${index + 1}.`}</span> {event.title}
                  </motion.h2>
                  <motion.span
                    className={`rounded-full py-2 px-4 ${activeIndex !== index ? 'bg-gray-100' : 'bg-transparent'}`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {activeIndex === index ? "" : ">"}
                  </motion.span>
                </div>

                {activeIndex === index && (
                  <motion.div 
                    className="mt-10 flex gap-4 items-start"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <p className="text-gray-500">{event.description}</p>
                      <motion.button
                        className="mt-6 px-4 py-2 border border-black rounded-full hover:bg-[#FEBB02] hover:border-none hover:text-white transition"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        View Details
                      </motion.button>
                    </div>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      src={event.img}
                      alt={event.title}
                      className="w-36 h-36 object-cover rounded-lg shadow-md"
                    />
                  </motion.div>
                )}
              </div>
              <hr className="my-4 border-gray-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div className='flex self-center w-[90%] border-b-2 mb-5 mt-20' initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1 }}></motion.div>
    </motion.div>
  );
};

export default Schedule;
