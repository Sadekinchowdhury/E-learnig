import React from "react";
import FeatureImg_1 from "./assects/images/12780652_5044055.jpg";
import FeatureImg_2 from "./assects/images/12780652_5044055.jpg";
import FeatureImg_3 from "./assects/images/22379569_6597472.jpg";
import FeatureImg_4 from "./assects/images/app-development.jpg";

// Import Swiper React components
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Banner } from './components/Banner/Banner'
import Services from './components/Service/Services'
import Statistics from './components/Statistics/Statistics'
import BannerImg from "./assects/images/bg-image.png"
import ServiceSlider from './components/Service/ServiceSlider'
import PublicStaticks from './components/Statistics/PuplicStaticks'
import HomePageMeeting from "./components/meeting/HomePageMeeting";


export default function Home() {
    return (<div className="bg-slate-700">

        {/* banner */}
        <section class="bg-slate-700 py-12 w-full mx-auto">
            <div class="container mx-auto px-4 w-4/5">
                <div class="flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2">
                        <h2 class="text-4xl font-bold text-white mb-4">
                            Providing  <span className="text-yellow-400">amazing</span>
                            <br />

                            online courses
                        </h2>
                        <p class="text-gray-300 text-lg mb-8">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley.
                        </p>
                        <a href="#_" class="px-5 p-10 py-2.5 rounded group overflow-hidden font-medium inline-block
                        
                        text-xl  bg-white text-black hover:border-[2px] hover:border-blue-700 transition duration-400 hover:bg-slate-800 hover:text-white  
                        
                        ">
                            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90"></span>
                            <span class="relative group-hover:text-purple-400 ">
                                <Link className="" to="/contact">Contact Now</Link>
                            </span>
                        </a>
                    </div>
                    <div class="lg:w-1/2 mt-8 lg:mt-0">
                        <img src={BannerImg}
                            alt="Banner"
                            class="w-full rounded-lg" />
                    </div>
                </div>
            </div>
        </section>


        {/* topics */}
        <div className='lg:mb-16 mb-3'>
            <div className="lg:my-10 my-5">
                <h1 className="text-3xl text-white font-medium text-center">
                    Our Topics
                </h1>
            </div>
            <ServiceSlider />
            <div className="flex  my-4 items-center justify-center">
                <Link
                    to="/service"
                    className="py-3 px-7 hover:border-[1px]  shadow-2xl to-amber-700 bg-gradient-to-l hover:transform hover:scale-105 duration-500 border-blue-700 text-white bg-blue-900 hover:bg-black text-xl font-semibold rounded-full"
                >
                    Get Started
                </Link>
            </div>
        </div>


        {/* Flexible price */}
        <div>
            <HomePageMeeting />
        </div>


        {/* testimonial */}
        {/* <div className='w-4/5  lg:py-16 py-2 mx-auto'>
            <div class="py-6">
                <div class="container flex mx-auto px-4">
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                            <div class="bg-white h-[280px] rounded-lg p-6">
                                <img src={FeatureImg_1}
                                    alt="Feature Image"
                                    class="w-16 h-16 mb-4 mx-auto" />
                                <h3 class="text-xl font-bold mb-2">Flexible Learning</h3>
                                <p class="text-gray-700">Learn at your own pace and fit your studies around your schedule.</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div class="bg-white h-[280px] rounded-lg p-6">
                            <img src={FeatureImg_3}
                                alt="Feature Image"
                                class="w-16 h-16 mb-4 mx-auto" />
                            <h3 class="text-xl font-bold mb-2">Expert Instructors</h3>
                            <p class="text-gray-700">
                                Learn from industry experts with real-world experience in
                                their fields.
                            </p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div class="bg-white h-[280px] rounded-lg p-6">
                            <img src={FeatureImg_2}
                                alt="Feature Image"
                                class="w-16 h-16 mb-4 mx-auto" />
                            <h3 class="text-xl font-bold mb-2">Interactive Courses</h3>
                            <p class="text-gray-700">
                                Engage with interactive course materials to enhance your
                                learning experience.
                            </p>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                        <div class="bg-white h-[280px] rounded-lg p-6">
                            <img src={FeatureImg_4}
                                alt="Feature Image"
                                class="w-16 h-16 mb-4 mx-auto" />
                            <h3 class="text-xl font-bold mb-2">Certification</h3>
                            <p class="text-gray-700">
                                Earn recognized certifications upon completion of your
                                courses.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}


        <div className=''>
            <Statistics />
            <PublicStaticks />
        </div>
        {/* <div>
                <Services />

            </div> */}
        <div className='py-20'>
            <Banner />
        </div>

        {/* FQA DESIGN */}
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
