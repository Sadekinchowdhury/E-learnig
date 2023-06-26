import React from 'react';

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
    ]
    return (
        <div className=''>

            <div className='grid w-10/12 py-8 mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {
                    Courses.map(course =>
                        <div className='bg-sky-50 rounded-xl shadow-2xl ' course={course}>
                            <div>
                                <img className='w-full h-48' src={course.picture} alt="" />
                            </div>
                            <div className='p-5'>
                                <h1 className='text-xl py-3 font-medium'>{course.title}</h1>
                                <div className='flex justify-between'>
                                    <div>{course.Ratting}</div>
                                    <div className='text-2xl font-bold'>{course.price}</div>
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