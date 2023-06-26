import React from 'react'
import {Link} from "react-router-dom";


export default function JoinTheLiveClass() {
    return (
        <div>
            <div class="h-screen bg-gradient-to-b from-gray-500 to-gray-700">
                <div className="w-4/5 mx-auto py-4">
                    <h1 className="text-xl font-bold mb-2 text-white">Date of Birth</h1>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <select id="dob-month" className="w-full border border-gray-300 rounded">
                                <option value="">Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <label htmlFor="dob-month" className="block mb-1 text-white">Month</label>

                        </div>
                        <div>
                            <input type="number" id="dob-day" className="w-full border border-gray-300 rounded" placeholder="Enter Day"/>
                            <label htmlFor="dob-day" className="block mb-1 text-white">Day</label>
                        </div>
                        <div>
                            <input type="number" id="dob-year" className="w-full border border-gray-300 rounded" placeholder="Enter Year"/>
                            <label htmlFor="dob-year" className="block mb-1 text-white">Year</label>
                        </div>
                    </div>
                    <div className="container mx-auto py-4">
                        <h1 className="text-xl font-bold mb-2 text-white">Passenger Name</h1>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label htmlFor="first-name" className="block mb-1 text-white">First Name</label>
                                <input type="text" id="first-name" className="w-full border border-gray-300 rounded" placeholder="Enter First Name"/>
                            </div>
                            <div>
                                <label htmlFor="middle-name" className="block mb-1 text-white">Middle Name</label>
                                <input type="text" id="middle-name" className="w-full border border-gray-300 rounded" placeholder="Enter Middle Name"/>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block mb-1 text-white">Last Name</label>
                                <input type="text" id="last-name" className="w-full border border-gray-300 rounded" placeholder="Enter Last Name"/>
                            </div>
                        </div>
                    </div>
                    <a href="#_" class="box-border relative mt-10 mx-auto z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-semibold text-white transition-all duration-300 bg-slate-500 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span class="relative z-20 flex items-center text-sm  text-red-600">
                            <svg class="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                            <Link to="/liveVideo">Live Video Course Package</Link>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}
