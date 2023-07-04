import React from 'react'
import { Link } from "react-router-dom";
import LiveFilters from './LiveFilters';
import LiveCourse from './LiveCourse';
import SearchBar from '../courses/Searchbar';



export default function Live() {
    return (
        <div className='bg-slate-700'>
            <section class="bg-slate-700 pt-20 pb-20 w-full mx-auto">
                <div class="container mx-auto px-2 w-4/5">
                    <div class="flex flex-col lg:flex-row items-center">
                        <div class="lg:w-1/2 mt-2 block rounded-lg m-5 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 class="text-3xl flex justify-center border-b-2 border-slate-500 font-semibold mx-auto text-black mb-4">Join The Live Class</h2>
                            <form class="mt-10">
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Course Type
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <select id="dob-month" className="w-full border px-8 border-gray-200 rounded">
                                            <option value="">Select Course</option>
                                            <option value="1">Company</option>
                                            <option value="2">Private</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Course Name
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='course name' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Course ID
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='Course ID' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Username
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='Username' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Password
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='Password' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center justify-center">
                                    <a href="#_" class="w-full flex justify-center p-10 py-2 mt-5 rounded group overflow-hidden font-medium bg-slate-300 text-slate-700">
                                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90"></span>
                                        <span class="relative group-hover:text-purple-400">
                                            <Link to="/liveVideo">Join Now</Link>
                                        </span>
                                    </a>
                                </div>
                            </form>
                        </div>
                        <div class="lg:w-1/2 mt-2 block rounded-lg m-5 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <h2 class="text-3xl flex justify-center border-b-2 border-slate-500 font-semibold mx-auto text-black mb-10">Join The Live Meeting</h2>
                            <form class="mt-10">
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Meeting  ID
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='Meeting ID' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Secret Code
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="number" placeholder='Secret Code' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Username
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='Username' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center mb-3">
                                    <div class="md:w-2/5 sm:w-full">
                                        <label class="block text-black float-left font-semibold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                            Password
                                        </label>
                                    </div>
                                    <div class="md:w-3/5 sm:w-full">
                                        <input class="bg-white appearance-none border-2 border-gray-200 rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-300" id="course name" type="text" placeholder='Password' />
                                    </div>
                                </div>
                                <div class="md:flex md:items-center justify-center  mt-10">
                                    <a href="#_" class="w-full flex justify-center p-10 py-2 mt-5 rounded group overflow-hidden font-medium bg-slate-300 text-slate-700">
                                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90"></span>
                                        <span class="relative group-hover:text-purple-400">
                                            <Link to="/lives">Join Now</Link>
                                        </span>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <LiveFilters />
            </div>
            <div className='my-8'>
                <SearchBar />
            </div>
            <div className='lg:w-9/12  w-full mx-auto'>
                <LiveCourse />
            </div>
        </div>
    )
}
