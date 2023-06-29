import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineDashboard, AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai';
import { AiOutlineCalendar, AiOutlinePlayCircle, AiOutlineMonitor } from 'react-icons/ai';

const Sidebar = () => {
    return (
        <div className='flex justify-center items-center py-3'>
            <div className="flex flex-col h-full bg-gray-900 text-white">

                <nav className="flex-grow">
                    <ul className="flex flex-col">
                        <li className="p-4 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineDashboard size={20} />
                            </IconContext.Provider>
                            Dashboard
                        </li>
                        <li className="p-4 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineSetting size={20} />
                            </IconContext.Provider>
                            Settings
                        </li>
                        <li className="p-4 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineCalendar size={20} />
                            </IconContext.Provider>
                            Meetings
                        </li>
                        <li className="p-4 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlinePlayCircle size={20} />
                            </IconContext.Provider>
                            Live Courses
                        </li>
                        <li className="p-4 hover:bg-gray-800">
                            <IconContext.Provider value={{ className: 'inline-block mr-2' }}>
                                <AiOutlineMonitor size={20} />
                            </IconContext.Provider>
                            Online Courses
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    );
};

export default Sidebar;
