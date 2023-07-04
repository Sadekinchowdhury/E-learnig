import React from 'react';
import { GiEarthAmerica } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';
import { IoIosAnalytics } from 'react-icons/io';
import { Link } from 'react-router-dom';


const Statistics = () => {
    const statistics = [
        {
            name: "Total Course",
            number: "4329",
            icon: [GiEarthAmerica]
        },
        {
            name: "Total people",
            number: "2545",
            icon: [BsPeopleFill]
        },
        {
            name: "Total Applicant",
            number: "9349",
            icon: [IoIosAnalytics]
        },
        {
            name: "Upcoming Course",
            number: "4329",
            icon: [IoMdPerson]
        },
    ]

    return (
        <div className='bg-yellow-400 py-24   bg-gradient-to-t'>

            <div className='grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2'>


                <div className="grid  gap-5  w-11/12 mx-auto grid-cols-1 md:grid-cols-2">
                    {statistics.map((statics, index) => (
                        <Link className='text-white transition duration-200 hover:scale-110 cursor-pointer via-pink-700 to-blue-700 from-sky-700 bg-gradient-to-r  hover:border-[1px] hover:border-blue-400  border-[0.01px] border-gray-700 rounded-2xl shadow-2xl p-4 flex-col text-center items-center justify-center'>
                            <div className='flex items-center justify-center mb-2 rounded-full'>
                                {statics.icon.map(Icon =>
                                    <div className='
                                         '>

                                        <Icon className='w-16 hover:transition hover:translate-y-1/4 duration-700 text-black h-16' key={index} />

                                    </div>
                                )}
                            </div>
                            <div className=''>
                                <h1 className='text-4xl font-bold py-2'>{statics.number}</h1>
                                <p>{statics.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>





                {/* header section right */}
                <div className='py-10 flex items-center justify-center w-4/5 mx-auto text-white'>
                    <div>
                        <h1 className='text-4xl text-white font-medium text-left'>Our Courses</h1>
                        <p className=' my-8 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fuga Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure saepe ullam quibusdam atque recusandae tenetur animi nobis, eius dicta ad?.</p>

                        <Link className='py-3 px-7 hover:border-[1px]  shadow-2xl  bg-gradient-to-l hover:transform hover:scale-105 duration-500 bg-slate-700 border-blue-400 text-white  from-sky-500 hover:bg-black text-xl font-semibold rounded-full'>Get Started</Link>
                    </div>
                </div>
            </div>
            <div>


            </div>
        </div>
    );
};

export default Statistics;