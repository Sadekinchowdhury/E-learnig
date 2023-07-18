import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
import Filters from './Filter';
import CoursePage from './CoursePage';
import PagaNation from './CoursePage';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./AllCourses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    // const [currentPage, setCurrentPage] = useState(1)
    // const [postPerpage, setPostperPage] = useState(8)
    // const indexOfLastItem = currentPage * postPerpage;
    // const indexOfFirstItem = indexOfLastItem - postPerpage;
    // const currentPost = courses.slice(indexOfFirstItem, indexOfLastItem);






    // const [page, setPage] = useState(1)

    // const [size, setSize] = useState(5)

    // console.log(page, "page current")
    // const numberoftotalPage = Math.ceil(courses.length / size)

    // const pages = [...Array(numberoftotalPage + 1).keys()].slice(1)

    const [currentPage, setcurrentPage] = useState(1)
    const [postperPage, setPostperPage] = useState(8)




    const lastpostindex = currentPage * postperPage;
    const firstpostindex = lastpostindex - postperPage;
    const currentpost = courses.slice(firstpostindex, lastpostindex)



    return (
        <div className='rounded-xl mx-2  py-5 '>
            <SearchBar />
            <Filters />
            <div className='grid w-11/12 mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                {
                    currentpost.map(course =>
                        <Link key={course.id} className={`bg-sky-50  rounded-lg border border-gray-300 shadow-2xl `} course={course} to={`/course/${course.id}`}>
                            <div className='relative'>
                                <img className='w-full rounded-t-lg  h-48' src={course.picture} alt="" />
                                <div className='absolute top-2 left-2'>
                                    <img className='h-9 w-9 rounded-full border-black border-[1px] py-1' src="" alt="" />
                                </div>
                                <div>
                                    <p className='font-bold absolute bottom-0 text-[16px] right-2 text-black bg-slate-400 py-[5px] mb-1 rounded-[5px] px-[4px]'>{course.course_name}</p>
                                </div>
                            </div>
                            <div className='p-3'>
                                <h1 className='text-xl  font-medium text-black'>{course.title}</h1>

                                <div className='flex items-center justify-between '>
                                    <div className='text-sm font-sans text-black'>
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

                                        <div className='text-2xl font-bold text-black'>${course.price}</div>

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
            <div className='py-6 justify-center flex items-center'>

                <PagaNation totalpost={courses.length}
                    postperPage={postperPage}

                    setcurrentPage={setcurrentPage} />

                {/* <button className='gap-4 m-2 border px-3 py-1 rounded-md border-gray-400' onClick={handlPrevious}>Previous</button> */}
                {/* {
                    pages.map((pag, index) =>

                        <button
                            onClick={() => setPage(pag)}
                            className={`gap-4 m-2 border px-3 py-1 rounded-md border-gray-400${page === pag ? ' bg-purple-400' : ""}`}> {pag}</button>

                    )
                } */}
                {/* <button className='gap-4 m-2 border px-3 py-1 rounded-md border-gray-400' onClick={handlNext}>Next</button> */}
            </div>
        </div>
    );
};

export default AllCourse;