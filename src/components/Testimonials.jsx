import React from "react";

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

const TestimonialCard = ({ logo, text, name, company, address, image }) => (
  <div className="bg-[#F1F1F1] p-6 rounded-xl flex flex-col justify-between max-w-96 mt-10">
    <div className="flex justify-between items-center">
        <div className="flex border border-gray-400 py-1 px-3 rounded-full items-center gap-2">
        <img src="/assets/icons/logo1.png" alt={name} className="w-8 h-8 rounded-full" />     
      <span className="text-sm">{logo}</span>
      </div>
      <img src={image} alt={name} className="w-12 h-12 rounded-full" />
    </div>
    <p className="text-2xl text-gray-800 mb-4"><span className="font-thin text-5xl text-[#FFBA00]">❝</span><br/> {text}</p>
    <div>
    <p className="font-semibold text-gray-900">{name}</p>
    <p className="text-gray-600 text-sm">{company}</p>
    <p className="text-gray-500 text-xs">{address}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="font-mona flex flex-col gap-6 px-8 mb-10 bg-white">
     <div className="flex items-center">
          <div className="w-10 h-10 bg-black text-[#FFBB01] flex items-center justify-center rounded-full text-sm">03</div>
          <span className="text-black bg-[#F1F1F1] px-3 py-2 rounded-full">Testimonials</span>
        </div>
        <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col text-left ml-10 mt-10">
        <img src="/assets/images/player1.jpg" alt="" className="w-28 h-28 rounded-lg"/>
        <h2 className="text-4xl text-gray-900 mt-20 mb-10">From Our Baseball Community</h2>
        <div className="flex gap-2">
              <button className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center">←</button>
              <button className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">→</button>
            </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
