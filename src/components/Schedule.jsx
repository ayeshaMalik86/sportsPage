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
    <div className="p-6 md:p-12 bg-white text-black font-mona">
      <div className="flex items-center">
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
      </div>

      {/* Left Section */}
      <div className="flex flex-col md:flex-row gap-20 justify-between items-center">
        <div className="md:w-[50%]">
          <h1 className="text-5xl mt-10">
            <span className="text-[#FEBB02]">Game On:<br /></span> Upcoming Match Schedule
          </h1>
          <p className="text-gray-500 mt-10">
            Don’t miss a single inning! Check out our upcoming matches to stay updated on game times, locations, and opponents.
          </p>
          <div className="mt-10">
            <img
              src="/assets/images/schedule-img.jpg"
              alt="Lacrosse Match"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[100%] md:w-[50%] space-y-6">
          <hr className="my-4 border-gray-300" />
          {events.map((event, index) => (
            <div key={index}>
              <div className="p-4 rounded-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                >
                  <h2 className="text-2xl flex items-center gap-5">
                    <span className="text-gray-400 text-sm">{`0${index + 1}.`}</span> {event.title}
                  </h2>
                  <span
                    className={`rounded-full py-2 px-4 ${activeIndex !== index ? 'bg-gray-100' : 'bg-transparent'}`}
                  >
                    {activeIndex === index ? "" : ">"}
                  </span>
                </div>

                {activeIndex === index && (
                  <div className="mt-10 flex gap-4 items-start">
                    <div>
                      <p className="text-gray-500">{event.description}</p>
                      <button className="mt-6 px-4 py-2 border border-black rounded-full hover:bg-[#FEBB02] hover:border-none hover:text-white transition">
                        View Details
                      </button>
                    </div>
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-36 h-36 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
              <hr className="my-4 border-gray-300" />
            </div>
          ))}

          <div className="flex justify-end">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#" 
              className="bg-black text-white flex px-3 py-2 rounded-full text-lg items-center space-x-2 hover:bg-[#FFBB01]"
            >
              <span>Join us</span>
              <motion.img 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                src="assets/icons/right-up.png" alt="arrow" 
                className="w-10 h-10 bg-white pr-1 pl-2 py-2 rounded-full"
              />
            </motion.a>
          </div>

        </div>
      </div>
      <motion.div
        className="flex self-center w-[90%] border-b-2 mb-10 mt-20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default Schedule;
