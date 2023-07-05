import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { FaCircle } from 'react-icons/fa';
import { FaCamera } from 'react-icons/fa';
import { BsFillMicFill } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
import { FaPaperPlane } from 'react-icons/fa';
import { FaExpand } from 'react-icons/fa';

const Lives = () => {

    const onlinUser = [
        {
            name: "Sadekin",
            icons: [FaCircle],
            color: "text-green-700"
        },
        {
            name: "Rumel",
            icons: [FaCircle],
            color: "text-red-300"
        },
        {
            name: "Chowdhury",
            icons: [FaCircle],
            color: "text-green-700"
        },
        {
            name: "Rumel",
            icons: [FaCircle],
            color: "text-red-300"
        },
        {
            name: "karim",
            icons: [FaCircle],
            color: "text-green-700"
        },
        {
            name: "Rumel",
            icons: [FaCircle],
            color: "text-red-300"
        },
        {
            name: "Sojib",
            icons: [FaCircle],
            color: "text-green-700"
        },
        {
            name: "Rumel",
            icons: [FaCircle],
            color: "text-red-300"
        },



    ]

    return (
        <div className=''>
            <div className="lg:h-screen grid  h-[500px] grid-cols-12">
                <div className="col-span-2 lg:block hidden bg-black from-slate-900 to-gray-800 bg-gradient-to-l">
                    {/* Content for the first column */}

                    <div className='bg-purple-900 items-center shadow-2xl flex justify-between px-6 py-3'>
                        <h1 className='text-white font-semibold text-xl'>Participant </h1><span className='text-white px-2 bg-slate-800'>30</span>
                    </div>
                    <div>
                        {
                            onlinUser.map(online =>
                                <div>
                                    <ul className='flex'>

                                        <li className='flex items-center px-2'>

                                            <img className='w-7 h-7 rounded-full' src="" alt="" />
                                            <h1 className='text-white p-3'>{online.name}</h1>

                                            {online.icons.map((Icon, index) => (
                                                <div

                                                >
                                                    <Icon size={10} className={`${online.color}`} key={index} />
                                                </div>
                                            ))}



                                        </li>
                                    </ul>

                                </div>
                            )
                        }
                    </div>

                </div>

                {/* MIddle colum */}
                <div className="lg:col-span-7 col-span-12 bg-slate-600 to-gray-300">


                    <div className=' h-3/4'>

                    </div>

                    <div className='h-1/4 lg:bg-black bg-none relative'>
                        <div className='md:w-5/12 w-11/12 mx-2 z-10 absolute lg:left-[30%] justify-center  bottom-[30%]'  >
                            <ul className='grid grid-cols-5 lg:gap-5 gap-2'>

                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <FaCamera color='white' size={20} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-pink-600  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <BsFillMicFill color='white' size={20} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <RiComputerLine color='white' size={20} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <FiLogOut color='white' size={20} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
                                </li>
                                <li className='bg-slate-700  lg:py-2 lg:px-4   rounded-[4px] flex items-center justify-center'>
                                    <FaExpand color='white' size={30} className='lg:w-[100%] w-[50%] lg:h-full h-[50%]' />
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

                    <div className='absolute bottom-0 bg-slate-900 p-3 w-full flex'>
                        <input
                            className="w-[98%] mx-auto bottom-2  bg-white border border-gray-300  rounded-[4px] py-4 px-6 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Send a message...">

                        </input>
                        <button

                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r"
                        >
                            <FaPaperPlane />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Lives;
