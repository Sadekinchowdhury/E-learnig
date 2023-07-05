import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush, FaBlog } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = () => {
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
      image: "image4.jpg",
      title: "Search Engine Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaBlog],
      path: "/seo",
    },
    {
      image: "image4.jpg",
      title: "Digital marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaBlog],
      path: "/digitalMarketing",
    },

    {
      image: "image3.jpg",
      title: "Graphics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaPaintBrush],
    },
    {
      image: "image4.jpg",
      title: "Blog",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaBlog],
    },
    {
      image: "image4.jpg",
      title: "Blog",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaBlog],
    },
    {
      image: "image4.jpg",
      title: "Blog",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icons: [FaBlog],
    },
  ];
  return (
    <div className=" bg-slate-800 lg:py-24 from-orange-950 to-green-800">
      <div className="p-5">
        <h1 className="text-3xl text-white font-medium text-center">
          Our Topics
        </h1>
        <p className="text-center text-white w-1/3 mx-auto py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          doloremque! Distinctio, doloribus.{" "}
        </p>
      </div>

      <div>
        <div className="container  py-4">
          <div className="grid  grid-cols-1 gap-6  w-11/12 mx-auto sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
            {cards.map((card, index) => (
              <Link
                to={card.path}
                className="text-white transition duration-300 hover:scale-110 cursor-pointer bg-indigo-500 bg-gradient-to-tr from-cyan-500  border-[0.01px] border-gray-700 rounded-xl shadow-2xl p-8 flex-col text-center items-center justify-center hover:bg-gray-800"
              >
                <div className="flex items-center justify-center mb-3 rounded-full">
                  {card.icons.map((Icon) => (
                    <div
                      className="
                                        border-[1px] border-b-indigo-600 border-r-amber-500 hover:translate-y-4 duration-500 p-3 rounded-full"
                    >
                      <Icon className="w-8 h-8 text-red-500" key={index} />
                    </div>
                  ))}
                </div>
                <h1 className="text-2xl font-medium py-2 ">{card.title}</h1>
                <p className="text-sm font-normal text-black">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
