import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineDashboard,
  AiOutlineForm,
  AiOutlineMail,
  AiOutlineHistory,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaExclamationCircle } from "react-icons/fa";
import {
  AiOutlineCalendar,
  AiOutlinePlayCircle,
  AiOutlineMonitor,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        <div className="flex mt-10  text-center items-center justify-center mb-8">
          <img src=''
            alt=""
            className="w-20 border-[6px] border-blue-500 h-20 rounded-full mr-4" />
        </div>
        <div className='text-center mb-8'>
          <h2 className="text-xl font-bold">Showkat Ali</h2>
          <p className="text-sm">
            rumel36@gmail.com
          </p>
        </div>
        <hr className='border-t-2  border-blue-400"' />
      </div>
      <div className="flex justify-center h-[100%] items-center py-3">


        <div className="flex lg:h-full h-1/2 flex-col  bg-gray-900 text-white">
          <nav className="flex-grow">
            <ul className="flex flex-col">
              <Link
                to="/profile/profileEdit"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <AiOutlineUser size={20} />
                </IconContext.Provider>
                Profile
              </Link>
              <Link
                to="/profile/dashboard"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <AiOutlineDashboard size={20} />
                </IconContext.Provider>
                Dashboard
              </Link>
              <Link
                to="/profile/teacherragistration"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <AiOutlineForm size={20} />
                </IconContext.Provider>
                Teacher Registration
              </Link>
              <Link
                to="/profile/course-teacher-admin"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <AiOutlineForm size={20} />
                </IconContext.Provider>
                Course Teacher Admin Panel
              </Link>
              {/* <Link
        to="/profile/livecourse"
        className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
      >
        <IconContext.Provider value={{ className: "inline-block mr-2" }}>
          <AiOutlinePlayCircle size={20} />
        </IconContext.Provider>
        Join Live Active Course
      </Link> */}
              <Link
                to="/profile/missingclass"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <FaExclamationCircle size={20} />
                </IconContext.Provider>
                Missing Class today
              </Link>
              <Link
                to="/profile/courseHistory"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <AiOutlineHistory size={20} />
                </IconContext.Provider>
                Course History
              </Link>
              <Link
                to="/profile/personal-meeting-admin"
                className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
              >
                <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                  <AiOutlineCalendar size={20} />
                </IconContext.Provider>
                Personal Meetings Admin Pannel
              </Link>


            </ul>
          </nav>
          <hr color='black' className='text-blue-600 ' />

          <div className="flex items-center justify-center my-8  ">
            <button className='text-xl font-semibold bg-white text-black px-4 hover:border-[2px] hover:border-blue-700 transition duration-700 hover:bg-slate-800 hover:text-white py-1 rounded'>

              <AiOutlineLogout className='inline-block' />
              Logout</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Sidebar;
