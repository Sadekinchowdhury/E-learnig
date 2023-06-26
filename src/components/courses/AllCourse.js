import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const AllCourse = () => {

    const Courses = [
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web asdfsd",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
        {
            name: "Web Development",
            picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU",
            title: "Start your carryar by web",
            StartDay: "12/03/2023",
            LastDay: "02/07/2023",
            Ratting: "werwer",
            price: "500",
            C_time: "3 Months"
        },
    ]
    return (
        <div className=''>

            <div className='grid w-10/12 py-8   mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {
                    Courses.map(course =>
                        <div className='bg-sky-50 m-1 lg:m-auto rounded-xl shadow-2xl ' course={course}>
                            <div>
                                <img className='w-full h-48' src={course.picture} alt="" />
                            </div>
                            <div className='p-5'>
                                <h1 className='text-xl py-3 font-medium'>{course.title}</h1>
                                <div className='flex justify-between'>
                                    <div className='text-xl font-semibold'>{course.Ratting}</div>
                                    <div className='text-2xl font-bold'>${course.price}</div>
                                </div>
                                <div className='flex items-center justify-between pt-3'>
                                    <div className='text-sm font-semibold'>
                                        <h1>Start Day:- {course.StartDay}</h1>
                                        <p>Last Day:- {course.LastDay}</p>
                                        <p>Duration:- {course.C_time}</p>
                                    </div>
                                    <div className=''>
                                        <button className='flex justify-center items-center py-1 shadow-2xl rounded-[4px] px-4 border-[1px] border-blue-950'>  <span className='mr-2'><FaShoppingCart /></span> <span className='text-sm font-semibold text-blue-800'>Add to cart</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllCourse;