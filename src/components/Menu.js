import React from "react";
import {Link} from "react-router-dom";

export default function Menu() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (<div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-100" id="main_menu">
        <ul className="md:flex p-1 md:p-2 text-sm md:text-base" id="menu_nav"> {/* Home */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_home">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="last firstlevel">
                        <Link to="/">Home</Link>
                    </span>
                </a>
            </li>
            {/* Topics */}

            <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <Link to="/service" class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span class="firstlevel">Topics</span>
                </Link>
                {/* <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="py-1">
                                <span class="">
 
                <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Topics</span>
                    </a>
                    {/* <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="py-1">
                                <span className="">
 
                                    {" "}
                                    <Link to="/digitalMarketing">Digital Marketing</Link>
                                </span>
                            </a>
                        </li>
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="py-1">
                                <span className="">
                                    {" "}
                                    <Link to="/appDevelopment">App Development</Link>
                                </span>
                            </a>
                        </li>
 
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            {/* <<<<<<< HEAD */}
                {/* <a class=" py-1">
                                <span class="">
                                    <Link to="/seo" >Seo </Link>
                                </span>
                            </a>
                            {/* ======= */}
                {/* <a class="py-1">
                                <span class="">
 
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className=" py-1">
                                <span className="">
                                    <Link to="/seo" >Seo </Link>
                                </span>
                                </a>
                            <a className="py-1">
                                <span className="">
 
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className=" py-1">
                                <span className="">
                                    <Link to="/seo" >Seo </Link>
                                </span>
                                </a>
                            <a className="py-1">
                                <span className="">
 
                                    {" "}
                                    <Link to="/webDevelopment">Web Development</Link>
                                </span>
                            </a>
                        </li>
 
 
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-20 py-1">
                                <span class=""></span> */}
                {/* >>>>>>> e2135cf41761257621e0031228d856c48566ca5b */}
                {/* </a>
 
 
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-20 py-1">
                                <span className=""></span>
                            </a>
 
                        </li>
                    </ul> */} </li>
            {/* Notices */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="firstlevel">Notice</span>
                </a>
                <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-2 py-1">
                            <span className=""> {" "}
                                <Link to="/privateNotice">Private Notice</Link>
                            </span>
                        </a>
                    </li>
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-2 py-1">
                            <span className=""> {" "}
                                <Link to="/publicNotice">Public Notice</Link>
                            </span>
                        </a>
                    </li>
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-20 py-1">
                            <span className=""></span>
                        </a>
                    </li>
                </ul>
            </li>
            {/* Courses */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="firstlevel">
                        <Link to="/course">Courses</Link>
                    </span>
                </a>
                {/* <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
                                    <Link to="/privateCourse">Private Crouse</Link>
                                </span>
                            </a>
                        </li>
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
                                    <Link to="/publicCourse">Public Crouse</Link>
                                </span>
                            </a>
                        </li>
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-20 py-1">
                                <span className=""></span>
                            </a>
                        </li>
                    </ul> */} </li>
            {/* Meeting */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="last firstlevel">
                        <Link to="/meeting">Meeting</Link>
                    </span>
                </a>
            </li>
            {/* Live */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="firstlevel">Live</span>
                </a>
                <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-2 py-1">
                            <span className=""> {" "}
                                <Link to="/liveVideos">Live Videos</Link>
                            </span>
                        </a>
                    </li>
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-2 py-1">
                            <span className=""> {" "}
                                <Link to="/liveMeetings">Live Meetings</Link>
                            </span>
                        </a>
                    </li>
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-20 py-1">
                            <span className=""></span>
                        </a>
                    </li>
                </ul>
            </li>
            {/* Certificate */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="last firstlevel">
                        <Link to="/certificateForm">Certification</Link>
                    </span>
                </a>
            </li>
            {/* <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <Link to="/certificate">Certificate</Link>
                        </span>
                    </a>
                </li> */}
            {/* Login */}
            <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                    <span className="firstlevel">Login</span>
                </a>
                <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-2 py-1">
                            <span className=""> {" "}
                                <Link to="/profile">Profile</Link>
                            </span>
                        </a>
                    </li>
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-2 py-1"> {/* <span className="">
                                    {" "}
                                    <Link to="/publicNotice">Log out</Link>
                                </span> */}
                            <span className="">
                                Log out
                            </span>
                        </a>
                    </li>
                    <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                        <a className="px-20 py-1">
                            <span className=""></span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    );
                                                    }
