import React from 'react'
import img1 from './assects/images/write.png'
import FeatureImg_1 from './assects/images/12780652_5044055.jpg'
import FeatureImg_2 from './assects/images/12780652_5044055.jpg'
import FeatureImg_3 from './assects/images/22379569_6597472.jpg'
import FeatureImg_4 from './assects/images/app-development.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import elearningImg_03 from './assects/images/elearning-03.jpg'
import elearningImg_02 from './assects/images/elearning-02.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Banner } from './components/Banner/Banner'
import Card from './components/Card/Card'
import Services from './components/Service/Services'


export default function Home() {
    return (
        <div>
            <div>
                <div className="w-screen mx-auto flex justify-center">
                    <Swiper spaceBetween={30}
                        centeredSlides={true}
                        loop={true}

                        speed={800}
                        autoplay={
                            { delay: 3000 }
                        }


                        pagination={
                            { clickable: true }
                        }
                        navigation={true}
                        modules={
                            [Autoplay, Pagination, Navigation]
                        }
                        className="mySwiper">
                        <SwiperSlide>
                            <img className="object-fill w-full h-96 "
                                src={elearningImg_02}
                                alt="image slide 1" />
                        </SwiperSlide>
                        <SwiperSlide>

                            <img className="object-fill w-full h-96"
                                src={elearningImg_03}
                                alt="image slide 2" />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="object-fill w-full h-96"
                                src={elearningImg_02}
                                alt="image slide 3" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <section class="bg-gray-200 py-12">
                    <div class="container mx-auto px-4">
                        <div class="flex items-center justify-center">
                            <div class="w-2/3">
                                <h2 class="text-4xl font-bold mb-4">Learn Anytime, Anywhere</h2>
                                <p class="text-gray-700 text-lg mb-8">Access a wide range of courses and enhance your skills at your own pace.</p>
                                <a href="#" class="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600">Get Started</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-slate-700 py-12">
                    <div class="container mx-auto px-4">
                        <div class="flex flex-col lg:flex-row items-center">
                            <div class="lg:w-1/2">
                                <h2 class="text-4xl font-bold text-white mb-4">Learn and Grow with Online Education</h2>
                                <p class="text-gray-300 text-lg mb-8">Access a wide range of courses from industry experts and enhance your skills at your own pace.</p>
                                <a href="#" class="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600">Get Started</a>
                            </div>
                            <div class="lg:w-1/2 mt-8 lg:mt-0">
                                <img src={FeatureImg_1}
                                    alt="Banner Image"
                                    class="w-full rounded-lg" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-4/5 mx-auto'>
                    <div class="py-6">
                        <div class="container mx-auto px-4">
                            <div class="flex flex-wrap -mx-4">
                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                                    <div class="bg-white rounded-lg p-6">
                                        <img src={FeatureImg_1}
                                            alt="Feature Image"
                                            class="w-16 h-16 mb-4 mx-auto" />
                                        <h3 class="text-xl font-bold mb-2">Flexible Learning</h3>
                                        <p class="text-gray-700">Learn at your own pace and fit your studies around your schedule.</p>
                                    </div>
                                </div>
                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                                    <div class="bg-white rounded-lg p-6">
                                        <img src={FeatureImg_3}
                                            alt="Feature Image"
                                            class="w-16 h-16 mb-4 mx-auto" />
                                        <h3 class="text-xl font-bold mb-2">Expert Instructors</h3>
                                        <p class="text-gray-700">Learn from industry experts with real-world experience in their fields.</p>
                                    </div>
                                </div>
                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                                    <div class="bg-white rounded-lg p-6">
                                        <img src={FeatureImg_2}
                                            alt="Feature Image"
                                            class="w-16 h-16 mb-4 mx-auto" />
                                        <h3 class="text-xl font-bold mb-2">Interactive Courses</h3>
                                        <p class="text-gray-700">Engage with interactive course materials to enhance your learning experience.</p>
                                    </div>
                                </div>
                                <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                                    <div class="bg-white rounded-lg p-6">
                                        <img src={FeatureImg_4}
                                            alt="Feature Image"
                                            class="w-16 h-16 mb-4 mx-auto" />
                                        <h3 class="text-xl font-bold mb-2">Certification</h3>
                                        <p class="text-gray-700">Earn recognized certifications upon completion of your courses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* FAQ section */}
                <div className="flex items-center justify-center w-10/12 mx-auto mt-2">
                    <div className="bg-white">
                        <h2 className="text-2xl font-semibold">
                            Frequently Asked Questions
                        </h2>
                        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">

                            <div className="space-y-4">
                                <details className="w-full rounded-lg ring-1 ring-purple-600">
                                    <summary className="px-4 py-6">
                                        Q. Who can take a Disney Institute professional development course?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                        Disney Institute courses are open to anyone ages 18 and older.
                                    </p>
                                </details>
                                <details className="w-full rounded-lg ring-1 ring-purple-600">
                                    <summary className="px-4 py-6">
                                        Q. Do you offer scholarships or financial aid?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                        No. Disney Institute does not offer any financial-aid assistance or scholarships. We are neither a college nor university.
                                    </p>
                                </details>
                                <details className="w-full rounded-lg ring-1 ring-purple-600">
                                    <summary className="px-4 py-6">
                                        How to install tailwind css in react js ?
                                    </summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                        What are synthetic events in React?
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Banner />

            </div>
            <div>
                <Services />
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}
