import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkMode/DarkMode";

export default function Menu() {
    return (
        <div className="px-2  md:px-0  space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-100" id="main_menu">
            <ul className="md:flex lg:items-center lg:justify-center text-start gap-2 md:p-2 text-sm md:text-base" id="menu_nav">
                <Link to="/" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] py-2  group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2   fa-sharp fa-solid fa-house-user ml-2"></i><br />
                    <li class=" font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Home</span>
                    </li>
                </Link>
                <Link to="/service" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px] py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-address-book ml-2"></i><br />
                    <li class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Topics</span>
                    </li>
                </Link>
                <Link to="/notices" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-bell ml-2"></i><br />
                    <li className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Notices</span>
                    </li>
                </Link>
                <Link to="/course" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-book-open-reader ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">
                            <li>Courses</li>
                        </span>
                    </a>
                </Link>
                <Link to="/meeting" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-users ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li>
                                Meeting
                            </li>

                        </span>
                    </a>
                </Link>
                <Link to="/live" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-video ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-slate-100">
                        <span className="firstlevel pt-6 text-red-600">
                            <li>Live</li>
                        </span>
                    </a>
                </Link>
                <Link to="/certificateForm" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2   fa-solid fa-graduation-cap ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li>Certification</li>
                        </span>
                    </a>
                </Link>
                <Link to="/signin" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-graduation-cap ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li>Login</li>
                        </span>
                    </a>
                </Link>
                <Link to="/signup" className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-solid fa-graduation-cap ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <li>SignUp</li>
                        </span>
                    </a>
                </Link>

                <Link to='/profile' className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-regular fa-user ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Profile</span>
                    </a>

                </Link>


            </ul>

        </div>
    );
}
