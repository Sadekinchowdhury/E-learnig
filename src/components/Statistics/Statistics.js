import React from 'react';
import { GiEarthAmerica } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import { IoMdPerson } from 'react-icons/io';
import { IoIosAnalytics } from 'react-icons/io';

import { Link } from 'react-router-dom';

const Statistics = () => {
    const statistics = [
        {
            name: "Global Project",
            number: "4329",
            icon: [GiEarthAmerica]
        },
        {
            name: "Client Project",
            number: "2545",
            icon: [BsPeopleFill]
        },
        {
            name: "Service",
            number: "9349",
            icon: [IoIosAnalytics]
        },
        {
            name: "Team expert",
            number: "4329",
            icon: [IoMdPerson]
        },
    ]

    return (
        <div className=' to-blue-950 from-red-950 py-24   bg-gradient-to-t'>

            <div className='grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2'>


                <div className="grid  gap-5  w-11/12 mx-auto grid-cols-1 md:grid-cols-2">
                    {statistics.map((statics, index) => (
                        <Link className='text-white transition duration-200 hover:scale-110 cursor-pointer bg-blue-900    border-[0.01px] border-gray-700 rounded-2xl shadow-2xl p-4 flex-col text-center items-center justify-center'>
                            <div className='flex items-center justify-center mb-2 rounded-full'>
                                {statics.icon.map(Icon =>
                                    <div className='
                                         '>

                                        <Icon className='w-16 hover:transition hover:translate-y-1/4 duration-700  h-16' key={index} />

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
                        <h1 className='text-4xl text-white font-medium text-left'>Our Large Achievment</h1>
                        <p className=' my-8 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, fuga Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure saepe ullam quibusdam atque recusandae tenetur animi nobis, eius dicta ad?.</p>

                        <Link className='btn py-3 px-6 rounded-full bg-blue-500 shadow-2xl  font-medium'>Get Started</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;