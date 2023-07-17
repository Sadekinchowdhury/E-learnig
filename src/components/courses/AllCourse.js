import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
import Filters from './Filter';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./AllCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses]);

    console.log(courses)
    return (
        <div className='rounded-xl mx-2  py-5 '>
            <SearchBar />
            <Filters />
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-2  py-6'>
                {
                    courses.map(course =>
                        <Link key={course.id} className='bg-sky-50  rounded-[1px_1px_1px_20px] shadow-2xl ' course={course} to={`/course/${course.id}`}>
                            <div className='relative'>
                                <img className='w-full  h-48' src={course.picture} alt="" />
                                <div className='absolute top-2 left-2'>
                                    <img className='h-9 w-9 rounded-full border-black border-[1px] py-1' src="" alt="" />
                                </div>
                                <div>
                                    <p className='font-bold absolute bottom-0 text-[16px] right-2'>{course.course_name}</p>
                                </div>
                            </div>
                            <div className='p-3'>
                                <h1 className='text-xl  font-medium'>{course.title}</h1>

                                <div className='flex items-center justify-between '>
                                    <div className='text-sm font-sans'>
                                        <h1>Application Last Date:- {course.Application_last_date}</h1>
                                        <h1>Start Day:- {course.StartDay}</h1>
                                        <p>Complete Day:- {course.CompleteDay}</p>
                                        <p>Duration:- {course.C_time}</p>
                                    </div>

                                </div>
                                <div className='flex justify-between py-2'>
                                    <div className='text-xl font-semibold flex text-yellow-500 '>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar color='black' />
                                        <FaStar />
                                    </div>
                                    <div>
                                        <h1 className='text-black font-semibold   p-1  border-black'>English </h1>
                                    </div>

                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className=''>

                                        <div className='text-2xl font-bold'>${course.price}</div>

                                    </div>
                                    <div>
                                        <button className='flex justify-center hover:bg-gradient-to-t hover:bg-sky-800 hover:from-gray-500 hover:to-indigo-900 hover:text-white hover:border-none items-center py-1 shadow-2xl rounded-[4px] px-2 transition-transform hover:scale-110 hover:bottom-3 duration-700  border-[1px] border-blue-950'>  <span className='mr-2'><FaShoppingCart /></span> <span className='text-sm font-semibold text-blue-800 hover:text-white'>Add to cart</span></button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default AllCourse;