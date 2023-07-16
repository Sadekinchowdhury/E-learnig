import React from "react";
import { IconContext } from "react-icons";
import {
  AiOutlineDashboard,
  AiOutlineForm,
  AiOutlineMail,
  AiOutlineHistory,
  AiOutlineSetting,
  AiOutlineUser,
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
    <div className="flex justify-center  items-center py-3">
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
              to="/profile/teacherregistration"
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
            <Link
              to="/profile/livecourse"
              className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
            >
              <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                <AiOutlinePlayCircle size={20} />
              </IconContext.Provider>
              Join Live Active Course
            </Link>
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

            <Link
              to="/profile/onlinecourse"
              className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800"
            >
              <IconContext.Provider value={{ className: "inline-block mr-2" }}>
                <AiOutlineMonitor size={20} />
              </IconContext.Provider>
              Online Courses
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
