import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    // const [showModal, setShowModal] = useState(null);

    return (
        <div className="px-2  md:px-0  space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-100" id="main_menu">
            <ul className="md:flex lg:items-center lg:justify-center text-start gap-2 md:p-2 text-sm md:text-base" id="menu_nav">
                {/* Home */}
                <Link to="/" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] py-2  group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-1 fa-sharp fa-solid fa-house-user ml-2"></i><br />
                    <li class=" font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Home</span>
                    </li>
                </Link>
                {/* Topics */}
                <Link to="/service" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-solid fa-address-book ml-3"></i><br />
                    <li class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Topics</span>
                    </li>
                </Link>
                {/* Notices */}
                <Link to="/notices" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-solid fa-bell ml-4"></i><br />
                    <li className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Notices</span>
                    </li>
                </Link>
                {/* Courses */}
                <Link to="/course" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-solid fa-book-open-reader ml-5"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">
                            <li >Courses</li>
                        </span>
                    </a>
                </Link>
                {/* Meeting */}
                <Link to="/meeting" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-solid fa-users ml-6"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li >
                                Meeting
                            </li>

                        </span>
                    </a>
                </Link>
                {/* Live */}
                <Link to="/live" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-solid fa-video ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-slate-100">
                        <span className="firstlevel pt-6 text-red-600">
                            <li>Live</li>
                        </span>
                    </a>
                </Link>
                {/* Certificate */}
                <Link to="/certificateForm" className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-solid fa-graduation-cap ml-8"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li>Certification</li>
                        </span>
                    </a>
                    {/* <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li to="/certificate">Certificate</li>
                        </span>
                    </a> */} </Link>
                {/* Login */}
                <Link to='/profile' className="relative lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="fa-regular fa-user ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Profile</span>
                    </a>
                    {/* <ul className="absolute left-0 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <Link to="/profile" className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
                                    <li >Profile</li>
                                </span>
                            </a>
                        </Link>
                        <Link className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                
                               
                            </a>
                        </Link>
                        <Link className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-20 py-1">
                                <span className=""></span>
                            </a>
                        </Link>
                    </ul> */}
                </Link>
            </ul>
        </div>
    );
}
