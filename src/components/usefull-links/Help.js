import React from 'react'
import FeatureImg_1 from "../../assects/images/telephone.png";
import {Link} from "react-router-dom";


export default function Help() {
    return (
        <div>
            <div className='w-full bg-support h-96 bg-no-repeat bg-cover'></div>
            <div className="w-4/5 mx-auto py-10">
                <div class="py-6">
                    <div class="w-full mx-auto px-4">
                        <div class="flex  justify-center flex-wrap gap-10">
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2 rounded-md border-red-100 border-2">
                                <div>
                                    <img src={FeatureImg_1}
                                        alt=''
                                        className='img-fluid w-20 mx-auto p-3'/>
                                </div>
                                <div className=''>
                                    <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Help & Documentation</h3>
                                </div>
                                <div>
                                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                                </div>
                                <div className='text-center py-2'>
                                    <a href="#_" class="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                            <Link to="/contact">Contact Now</Link>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2 rounded-md border-red-100 border-2">
                                <div>
                                    <img src={FeatureImg_1}
                                        alt=''
                                        className='img-fluid w-20 mx-auto p-3'/>
                                </div>
                                <div className=''>
                                    <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Community & Support</h3>
                                </div>
                                <div>
                                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                                </div>
                                <div className='text-center py-2'>
                                    <a href="#_" class="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                            <Link to="/contact">Contact Now</Link>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-2 rounded-md border-red-100 border-2">
                                <div>
                                    <img src={FeatureImg_1}
                                        alt=''
                                        className='img-fluid w-20 mx-auto p-3'/>
                                </div>
                                <div className=''>
                                    <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Developer & Resources</h3>
                                </div>
                                <div>
                                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</p>
                                </div>
                                <div className='text-center py-2'>
                                    <a href="#_" class="relative inline-flex items-center justify-start py-1 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                        <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                                        <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                            </svg>
                                        </span>
                                        <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                            <Link to="/contact">Contact Now</Link>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
