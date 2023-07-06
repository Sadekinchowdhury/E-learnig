import React from "react";
import FeatureImg_3 from "./assects/images/22379569_6597472.jpg";
import FeatureImg_4 from "./assects/images/app-development.jpg";
import {Link} from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Banner} from './components/Banner/Banner'
import Services from './components/Service/Services'
import Statistics from './components/Statistics/Statistics'
import BannerImg from "./assects/images/bg-image.png"
import ServiceSlider from './components/Service/ServiceSlider'


export default function Home() {
    return (
        <div className="bg-slate-700">
            <div>
                <section class="bg-slate-700 py-12 w-full mx-auto">
                    <div class="container mx-auto px-4 w-4/5">
                        <div class="flex flex-col lg:flex-row items-center">
                            <div class="lg:w-1/2">
                                <h2 class="text-4xl font-bold text-white mb-4">
                                    Onlive Live Courses
                                </h2>
                                <p class="text-gray-300 text-lg mb-8 text-justify mr-10">
                                    Lorem Ipsum is simply dummy text of the printing and
                                                                                                                                                                                                                                                                                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                                                                                                                                                                                                                                                                                    standard dummy text ever since the 1500s, when an unknown
                                                                                                                                                                                                                                                                                                                                    printer took a galley.
                                </p>
                                <div className='py-2'>
                                    <a href="#_" class="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                            <div class="lg:w-1/2 mt-8 lg:mt-0">
                                <img src={BannerImg}
                                    alt="Banner"
                                    class="w-full rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="lg:mb-16 mb-3">
                    <ServiceSlider/>
                    <div className="flex items-center justify-center">
                        <Link to="/service" className="py-3 px-7 hover:border-[1px]  shadow-2xl to-amber-700 bg-gradient-to-l hover:transform hover:scale-105 duration-500 border-blue-700 text-white bg-blue-900 hover:bg-black text-xl font-semibold rounded-full">
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="">
                    <Statistics/>
                </div>
            </div>
            <div>
                <ServiceSlider/>
            </div>
            <div className="">
                <Statistics/>
            </div>
            <div>
                <Services/>
            </div>
            <div className="w-4/5 mx-auto my-10">
                <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-5">
                    <div className="rounded-md border-red-100 border-2 bg-white">
                        <div>
                            <img src={FeatureImg_3}
                                alt=''
                                className='img-fluid w-20 mx-auto p-3'/>
                        </div>
                        <div className='m-2'>
                            <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Web Development</h3>
                        </div>
                        <div className="m-2">
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
                    <div className="rounded-md border-red-100 border-2 bg-white">
                        <div>
                            <img src={FeatureImg_4}
                                alt=''
                                className='img-fluid w-20 mx-auto p-3'/>
                        </div>
                        <div className='m-2'>
                            <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Certification</h3>
                        </div>
                        <div className="m-2">
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
                    <div className="rounded-md border-red-100 border-2 bg-white">
                        <div>
                            <img src={FeatureImg_3}
                                alt=''
                                className='img-fluid w-20 mx-auto p-3'/>
                        </div>
                        <div className='m-2'>
                            <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Help & Support</h3>
                        </div>
                        <div className="m-2">
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
                    <div className="rounded-md border-red-100 border-2 bg-white">
                        <div>
                            <img src={FeatureImg_4}
                                alt=''
                                className='img-fluid w-20 mx-auto p-3'/>
                        </div>
                        <div className='m-2'>
                            <h3 class="text-xl font-bold mb-2 text-center text-indigo-600">Digital Marketing</h3>
                        </div>
                        <div className="m-2">
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
            <div className="py-20">
                <Banner/>
            </div>
            <div className=" w-4/5 mx-auto bg-white py-5 rounded-md">
                <div className="">
                    <h2 className="text-2xl font-semibold flex justify-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="row">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1">
                            <div className="container flex flex-col justify-center px-2 py-4 mx-auto md:p-8">
                                <div className="space-y-4">
                                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                                        <summary className="px-1 py-2">
                                            Q. Who can take a Disney Institute professional
                                                                                                                                                                                                                                                                                                                                                                                                            development course?
                                        </summary>
                                        <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                                            Disney Institute courses are open to anyone ages 18 and
                                                                                                                                                                                                                                                                                                                                                                                                            older.
                                        </p>
                                    </details>
                                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                                        <summary className="px-1 py-2">
                                            Q. Do you offer scholarships or financial aid?
                                        </summary>
                                        <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                                            No. Disney Institute does not offer any financial-aid
                                                                                                                                                                                                                                                                                                                                                                                                            assistance or scholarships. We are neither a college nor
                                                                                                                                                                                                                                                                                                                                                                                                            university.
                                        </p>
                                    </details>
                                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                                        <summary className="px-1 py-2">
                                            How to install tailwind css in react js ?
                                        </summary>
                                        <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                                            What are synthetic events in React?
                                        </p>
                                    </details>
                                </div>
                            </div>
                            <div className="container flex flex-col justify-center px-2 py-4 mx-auto md:p-8">
                                <div className="space-y-4">
                                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                                        <summary className="px-1 py-2">
                                            Q. Who can take a Disney Institute professional
                                                                                                                                                                                                                                                                                                                                                                                                            development course?
                                        </summary>
                                        <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                                            Disney Institute courses are open to anyone ages 18 and
                                                                                                                                                                                                                                                                                                                                                                                                            older.
                                        </p>
                                    </details>
                                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                                        <summary className="px-1 py-2">
                                            Q. Do you offer scholarships or financial aid?
                                        </summary>
                                        <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                                            No. Disney Institute does not offer any financial-aid
                                                                                                                                                                                                                                                                                                                                                                                                            assistance or scholarships. We are neither a college nor
                                                                                                                                                                                                                                                                                                                                                                                                            university.
                                        </p>
                                    </details>
                                    <details className="w-full rounded-lg ring-1 ring-purple-600">
                                        <summary className="px-1 py-2">
                                            How to install tailwind css in react js ?
                                        </summary>
                                        <p className="px-1 py-2 pt-0 ml-4 -mt-4 text-gray-600">
                                            What are synthetic events in React?
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
