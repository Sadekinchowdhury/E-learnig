import React from "react";
// import { FaGlobe } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { BsFillMicFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { FaPaperPlane } from "react-icons/fa";
import { FaExpand } from "react-icons/fa";
import { useState } from "react";

const TeacherLive = () => {
  const onlinUser = [
    {
      name: "Sadekin",
      icons: [FaCircle],
      color: "text-green-700",
    },

    {
      name: "Chowdhury",
      icons: [FaCircle],
      color: "text-green-700",
    },
  ];
  const OfflineUser = [
    {
      name: "Sadekin",
      icons: [FaCircle],
      color: "text-red-300",
    },

    {
      name: "Chowdhury",
      icons: [FaCircle],
      color: "text-red-300",
    },

    {
      name: "karim",
      icons: [FaCircle],
      color: "text-red-300",
    },

    {
      name: "Sojib",
      icons: [FaCircle],
      color: "text-red-300",
    },
  ];

  const [user, setUser] = useState(false);

  const userCondition = () => {
    setUser(!user);
  };
  return (
    <div className="">
      <div className="lg:h-screen grid  h-[500px] grid-cols-12">
        <div className="col-span-2 lg:block hidden bg-black from-slate-900  to-gray-800 bg-gradient-to-l">
          {/* Content for the first column */}

          <div className="bg-purple-900 items-center shadow-2xl flex justify-between gap-2 px-6 py-3">
            <button
              onClick={userCondition}
              className="text-white font-semibold  bg-green-700 py-1 px-2 rounded-2xl "
            >
              Active
            </button>
            <button
              onClick={userCondition}
              className="text-white font-semibold  bg-red-400 py-1 px-2 rounded-2xl "
            >
              Offline
            </button>

            <span
              className={`${
                user ? "bg-green-700" : "bg-red-400"
              }  text-white px-2 rounded-full `}
            >
              {user ? onlinUser.length : OfflineUser.length}
            </span>
          </div>
          <div>
            {user &&
              onlinUser.map((online) => (
                <div>
                  <ul className="flex">
                    <li className="flex items-center px-2">
                      <img className="w-7 h-7 rounded-full" src="" alt="" />
                      <h1 className="text-white p-3">{online.name}</h1>

                      {online.icons.map((Icon, index) => (
                        <div>
                          <Icon
                            size={10}
                            className={`${online.color}`}
                            key={index}
                          />
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
              ))}
            {!user &&
              OfflineUser.map((offline) => (
                <div>
                  <ul className="flex">
                    <li className="flex items-center px-2">
                      <img className="w-7 h-7 rounded-full" src="" alt="" />
                      <h1 className="text-white p-3">{offline.name}</h1>

                      {offline.icons.map((Icon, index) => (
                        <div>
                          <Icon
                            size={10}
                            className={`${offline.color}`}
                            key={index}
                          />
                        </div>
                      ))}
                    </li>
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* MIddle colum */}
        <div className="lg:col-span-7 col-span-12 bg-slate-600 to-gray-300">
          <div className=" h-3/4"></div>

          <div className="h-1/4 lg:bg-black bg-none relative">
            <div className="md:w-5/12 w-11/12 mx-2 z-10 absolute lg:left-[30%] justify-center  bottom-[30%]">
              <ul className="grid grid-cols-5 lg:gap-5 gap-2">
                <li className="bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center">
                  <FaCamera
                    color="white"
                    size={20}
                    className="lg:w-[100%] w-[50%] lg:h-full h-[50%]"
                  />
                </li>
                <li className="bg-pink-600  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center">
                  <BsFillMicFill
                    color="white"
                    size={20}
                    className="lg:w-[100%] w-[50%] lg:h-full h-[50%]"
                  />
                </li>
                <li className="bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center">
                  <RiComputerLine
                    color="white"
                    size={20}
                    className="lg:w-[100%] w-[50%] lg:h-full h-[50%]"
                  />
                </li>
                <li className="bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center">
                  <FiLogOut
                    color="white"
                    size={20}
                    className="lg:w-[100%] w-[50%] lg:h-full h-[50%]"
                  />
                </li>
                <li className="bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center">
                  <FaExpand
                    color="white"
                    size={30}
                    className="lg:w-[100%] w-[50%] lg:h-full h-[50%]"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="col-span-3 relative lg:block hidden bg-slate-800">
          <div className="p-3">
            <div className="py-4 shadow-[4px]">
              <p className="font-semibold text-sky-400">Md Mursalin</p>
              <div
                style={{ borderRadius: "10px 0px 10px 0px" }}
                className="bg-white py-2 px-3   border-blue-400"
              >
                <p className="text-black">How to go your won way?</p>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div>
                <p className="font-semibold text-sky-400 text-right">
                  Md Mursalin
                </p>
                <div
                  style={{ borderRadius: "0px 10px 0px 10px" }}
                  className="bg-white py-2 px-3  border-blue-400"
                >
                  <p className="text-black">How to go your won way?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 bg-slate-900 p-3 w-full flex">
            <input
              className="w-[98%] mx-auto bottom-2  bg-white border border-gray-300  rounded-[4px] py-4 px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Send a message..."
            ></input>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLive;
