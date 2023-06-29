import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDashboard, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineCalendar, AiOutlinePlayCircle, AiOutlineMonitor } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='flex justify-center items-center py-3'>
            <div className="flex flex-col h-full bg-gray-900 text-white">

                <nav className="flex-grow">
                    <ul className="flex flex-col">
                        <Link to="/profile/dashboard" className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineDashboard size={20} />
                            </IconContext.Provider>
                            Dashboard
                        </Link>
                        <Link to="/profile/setting" className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineSetting size={20} />
                            </IconContext.Provider>
                            Settings
                        </Link>
                        <Link to="/profile/meeting" className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineCalendar size={20} />
                            </IconContext.Provider>
                            Meetings
                        </Link>
                        <Link to="/profile/livecourse" className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlinePlayCircle size={20} />
                            </IconContext.Provider>
                            Live Courses
                        </Link>
                        <Link to="/profile/onlinecourse" className="p-4 mt-4 hover:rounded-lg  hover:border-blue-700 hover:border-[0.5px] transition duration-300 hover:scale-110 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
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
