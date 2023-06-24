import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <div class="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-100" id="main_menu">
            <ul class="md:flex p-1 md:p-2 text-sm md:text-base" id="menu_nav">
                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_home">
                    <a class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="last firstlevel">
                            <Link to="/">Home</Link>
                        </span>
                    </a>
                </li>
                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Topics</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/digitalMarketing">Digital Marketing</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/appDevelopment">App Development</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class=" py-1">
                                <span class="">
                                    <Link to="/seo" >Seo </Link>
                                </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Notice</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/privateNotice">Private Notice</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/publicNotice">Public Notice</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-20 py-1">
                                <span class=""></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a class="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span class="firstlevel">Courses</span>
                    </a>
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/privateCourse">Private Course</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/publicCourse">Public Course</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/publicCourse">Public Course</Link>
                                </span>
                            </a>
                        </li>

                    </ul>
                </li>
                <li class="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <img className="w-8 h-8 rounded-full" src="" alt="" />
                    <ul class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/privateNotice">Profile</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-2 py-1">
                                <span class="">
                                    {" "}
                                    <Link to="/publicNotice">Log Out</Link>
                                </span>
                            </a>
                        </li>
                        <li class="p-1 whitespace-no-wrap text-sm md:text-base text-slate-100 hover:text-gray-800 hover:bg-gray-100">
                            <a class="px-20 py-1">
                                <span class=""></span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
