import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

    const [showModal, setShowModal] = useState(null);

    return (
        <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-100" id="main_menu">
            <ul className="md:flex p-1 md:p-2 text-sm md:text-base" id="menu_nav">
                {/* Home */}
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

                </li>
                {/* Notices */}
                <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Notice</span>
                    </a>
                    <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
                                    <Link to="/privateNotice">Private Notice</Link>
                                </span>
                            </a>
                        </li>
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
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
                </li>
                {/* Meeting */}
                <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="last firstlevel">
                            <Link onClick={() => setShowModal(true)} to="/meeting">Meeting

                            </Link>
                            <div>
                                {showModal && (
                                    <div className="fixed z-10 inset-0 overflow-y-auto">

                                        <div className="px-1 pb-8 text-center sm:block sm:p-0 mt-8">
                                            <div className="fixed inset-0 transition-opacity">
                                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                                            </div>
                                            <span
                                                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                                aria-hidden="true"
                                            >
                                                &#8203;
                                            </span>
                                            <div
                                                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                                role="dialog"
                                                aria-modal="true"
                                                aria-labelledby="modal-headline"
                                            >
                                                <div className="bg-white px-4  pt-5 pb-4 sm:p-6 sm:pb-4">
                                                    <div className="flex items-center justify-center">

                                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                                                            <div className="mt-2">
                                                                <div className="mb-4">

                                                                    <input
                                                                        type="text"
                                                                        id="username"
                                                                        placeholder="UserName"
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    />
                                                                </div>
                                                                <div className="mb-4">

                                                                    <input
                                                                        type="password"
                                                                        id="password"
                                                                        placeholder="Password"
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    />
                                                                </div>
                                                                <div className="mb-4">

                                                                    <input
                                                                        type="code"
                                                                        id="Secretcode"
                                                                        placeholder="Secret Code"
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    />
                                                                </div>
                                                                <div className="mb-4">

                                                                    <input
                                                                        type="id"
                                                                        id="Meeting Id"
                                                                        placeholder="Meeting Id"
                                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    />
                                                                </div>
                                                                <div className="flex justify-center">
                                                                    <button
                                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"


                                                                    >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                                                            <button
                                                                type="button"
                                                                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gradient-to-t bg-orange-500 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                                                onClick={() => setShowModal(false)}
                                                            >
                                                                Close
                                                            </button>
                                                        </span>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
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
                                <span className="">
                                    {" "}
                                    <Link to="/liveVideos">Live Videos</Link>
                                </span>
                            </a>
                        </li>
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
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
                            <Link to="/certificate">Certificate</Link>
                        </span>
                    </a>
                </li>
                {/* Login */}
                <li className="relative mx-1 px-1 py-2 group mb-1 md:mb-0" id="button_admin">
                    <a className="font-semibold whitespace-no-wrap text-slate-100 hover:text-yellow-300">
                        <span className="firstlevel">Login</span>
                    </a>
                    <ul className="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-white z-10 hidden group-hover:block">
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                <span className="">
                                    {" "}
                                    <Link to="/profile">Profile</Link>
                                </span>
                            </a>
                        </li>
                        <li className="p-1 whitespace-no-wrap text-sm md:text-base text-slate-700 hover:text-gray-800 hover:bg-gray-100">
                            <a className="px-2 py-1">
                                {/* <span className="">
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
