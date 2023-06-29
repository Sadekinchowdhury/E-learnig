import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';
import { BsFillMicFill } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';


const Lives = () => {

    const onlinUser = [
        {
            name: "Sadekin Chowdhury",

        },

        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadeki",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin ",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin Chowdhury",
        },
        {
            name: "Sadekin Chowdhury",
        },
    ]

    return (
        <div className=''>
            <div className=" grid lg:h-screen h-[500px] grid-cols-12">
                <div className="col-span-2 lg:block hidden bg-black from-slate-900 to-gray-800 bg-gradient-to-l">
                    {/* Content for the first column */}

                    <div className='bg-purple-900 items-center shadow-2xl flex justify-between px-6 py-3'>
                        <h1 className='text-white font-semibold text-xl'>Participant </h1><span className='text-white px-2 bg-slate-800'>30</span>
                    </div>
                    <div>
                        {
                            onlinUser.map(online =>
                                <div>
                                    <ul>
                                        <li className='flex items-center px-2'>
                                            <FaCircle size={10} className='text-green-600 ' />
                                            <h1 className='text-white p-3'>{online.name}</h1>
                                        </li>
                                    </ul>

                                </div>
                            )
                        }
                    </div>
                    <p>First Column (20%)</p>
                </div>

                {/* MIddle colum */}
                <div className="lg:col-span-7 col-span-12 bg-slate-600 to-gray-300">


                    <div className=' h-3/4'>

                    </div>

                    <div className='h-1/4 lg:bg-black bg-none relative'>
                        <div className='md:w-2/6 w-[95%] lg:mx-auto z-10 absolute lg:left-[35%] justify-center mx-2 bottom-[30%]'  >
                            <ul className='grid grid-cols-4 lg:gap-4 gap-2'>

                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <FaCamera color='white' size={30} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-pink-600  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <BsFillMicFill color='white' size={30} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <RiComputerLine color='white' size={30} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <FiLogOut color='white' size={30} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


                {/* right side */}
                <div className="col-span-3 relative lg:block hidden bg-slate-800">

                    <div className='p-6'>

                        <div className='bg-white w-[80%] shadow-[4px] rounded-2xl p-2 px-2'>
                            <p className='font-semibold text-sky-400'>Md Mursalin</p>
                            <p className='text-black'>How to go your won way?</p>
                        </div>

                    </div>

                    <div className='absolute bottom-0 bg-slate-900 p-3 w-full'>
                        <input
                            className="w-[98%] mx-auto bottom-2  bg-white border border-gray-300  rounded-[4px] py-4 px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Send a message..."
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Lives;
