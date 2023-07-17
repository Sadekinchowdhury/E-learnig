import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import DarkModeToggle from "./DarkMode/DarkMode";
import { useEffect } from "react";

export default function Menu() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }

    }


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


                <div>
                    <label className="swap justify-center items-center w-8 h-8 swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input onChange={handleToggle} type="checkbox" />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                </div>



                <Link to='/profile/profileEdit' className="relative text-center lg:block flex  lg:px-2  lg:py-1 duration-1000 hover:scale-105 hover:text-pink-700 transition rounded-xl    lg:hover:border-sky-500 lg:hover:border-[2px]  py-2 group mb-1 md:mb-0" id="button_admin">
                    <i class="lg:mr-0 mr-2  fa-regular fa-user ml-2"></i><br />
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Profile</span>
                    </a>

                </Link>


            </ul>

        </div>
    );
}
