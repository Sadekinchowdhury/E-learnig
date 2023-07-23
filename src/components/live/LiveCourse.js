import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiEyeLine } from 'react-icons/ri';
import { AiFillClockCircle } from 'react-icons/ai';
const LiveCourse = () => {

    const Courses = [
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            Time: "000 Hours",

            Ratting: <> <FaStar /> <FaStar />
                <FaStar /> <FaStar />
            </>,
            price: "500",
            C_time: "3 Months",
            category: "Web Development"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            Time: "000 Hours",

            Ratting: <> <FaStar /> <FaStar />
            </>,
            price: "500",
            C_time: "3 Months",
            category: "Web Development"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            Time: "000 Hours",

            Ratting: <> <FaStar />
            </>,
            price: "500",
            C_time: "3 Months",
            category: "Web Development"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            Time: "000 Hours",

            Ratting: <> <FaStar /> <FaStar />
            </>,
            price: "500",
            C_time: "3 Months",
            category: "Web Development"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            Time: "000 Hours",

            Ratting: <> <FaStar /> <FaStar />
            </>,
            price: "500",
            C_time: "3 Months",
            category: "Web Development"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            Time: "000 Hours",

            Ratting: <> <FaStar /> <FaStar />
            </>,
            price: "500",
            C_time: "3 Months",
            category: "Web Development"
        },


    ]
    return (
        <div className='rounded-xl  mt-6 py-5 '>


            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-2  py-6'>
                {
                    Courses.map(course =>
                        <Link className='bg-sky-50  rounded-xl shadow-2xl ' course={course}>
                            <div className='relative'>
                                <img className='w-full h-48' src={course.picture} alt="" />
                                <div>
                                    <p className='absolute bottom-2 right-1 bg-gray-400 text-black font-semibold px-2 py-[4px] rounded-md'>{course.category}</p>
                                </div>
                            </div>
                            <div className='p-5'>
                                <h1 className='text-xl py-3 font-medium text-black'>{course.title}</h1>
                                <div className='flex justify-between'>
                                    <div className=''>
                                        <span className='flex'> {course.Ratting}</span>
                                        <p className='flex items-center py-2'>  <AiFillClockCircle color='black' className='
                                        mr-1 text-black' />  {course.Time} </p>

                                    </div>
                                    <div className='text-2xl font-bold text-black'>${course.price}</div>
                                </div>
                                <div className='flex items-center justify-between pt-3'>
                                    <div className='text-sm font-semibold'>
                                        <div>
                                            <img className='w-10 h-10 rounded-full' src="" alt="" />
                                        </div>


                                    </div>
                                    <div className=''>
                                        <button className='flex justify-center  hover:bg-gradient-to-t hover:bg-sky-800 hover:from-gray-500 hover:to-indigo-900 hover:text-white hover:border-none items-center py-1 shadow-2xl rounded-[4px] px-2 transition-transform hover:scale-110 hover:bottom-3 duration-700  border-[1px] border-blue-950'>  <span className='mr-2'> <RiEyeLine color='black' /> </span> <span className='text-sm font-semibold text-blue-800 hover:text-black'>View</span></button>
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

export default LiveCourse;