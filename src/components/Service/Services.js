import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
const Services = () => {
  const cards = [
    {
      image: "image1.jpg",
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaCode],
      path: "/webDevelopment",
    },
    {
      image: "image2.jpg",
      title: "App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaMobileAlt],
      path: "/appDevelopment",
    },
    {
      image: "image3.jpg",
      title: "Search Engine Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaPaintBrush],
      path: "/seo",
    },
    {
      image: "image4.jpg",
      title: "Digital marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaBlog],
      path: "/digitalMarketing",
    },
  ];
  return (
    <div className=" bg-slate-800 lg:py-20 from-orange-950 to-green-800">
      <div className="p-5">
        <h1 className="text-3xl text-white font-medium text-center">
          Our Topics
        </h1>
      </div>

      <div>
        <div className="container  py-4">
          <div className="grid py-4  grid-cols-1 gap-7  w-11/12 mx-auto sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
            {cards.map((card, index) => (
              <Link
                to={card.path}
                className="text-white text-left  bg-gradient-to-b  transition duration-200 hover:scale-110 cursor-pointer hover:border-[1px] hover:border-blue-400  border-[0.01px] border-gray-700 hover:translate-y-10 hover:rotate-3 hover:duration-500 rounded-xl shadow-2xl p-8 flex-col  items-center justify-center"
              >
                <div className="flex items-center justify-center mb-3 rounded-full">
                  {card.icons.map((Icon) => (
                    <div
                      className="border-[1px] border-blue-400  p-3 rounded-full"
                    >
                      <Icon className="w-8 h-8" key={index} />
                    </div>
                  ))}
                </div>
                <div className="py-4">
                  <h1 className="text-2xl font-medium py-2">{card.title}</h1>
                  <p>{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="py-16 flex items-center justify-center">
            <Link
              to="/service"
              className="py-3 px-7 hover:border-[1px]  shadow-2xl to-amber-700 bg-gradient-to-l hover:transform hover:scale-105 duration-500 border-blue-700 text-white bg-blue-900 hover:bg-black text-xl font-semibold rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
