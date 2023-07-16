import React from 'react';
import { FaEnvelope, FaRegBell, FaRegCalendarMinus, FaSearch } from 'react-icons/fa';

const ProfileDashboard = () => {
    return (
        <div className=''>
            <div className='flex h-[70px] shadow-2xl  px-[25px] items-center justify-between rounded-xl'>
                <div className='flex items-center w-1/3 border-none'>

                    <input type="text" color='white' placeholder="Search..." className="flex-1 -[300px] bg-slate-50 pl-[2px] rounded-l-lg py-1 h-[35px] bg-transparent outline-none text-white placeholder-gray-500" />
                    <button class="p-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 h-[35px] px-3">
                        <i class="fas fa-search"></i>
                    </button>


                </div>
                <div className='flex items-center relative gap-10'>
                    <div className='flex items-center gap-5 '>
                        <FaRegBell className='cursor-pointer' color='white' />
                        <FaEnvelope className='cursor-pointer' color='white' />
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='text-white cursor-pointer'>Rumel</p>
                        <img className='w-9 cursor-pointer bg-slate-400 h-9 rounded-full' src="" alt="" />
                    </div>
                </div>
            </div>
            <div className='grid  w-11/12 my-20 mx-auto grid-cols-1 lg:grid-cols-4 gap-5'>
                <div className='flex p-3 transition cursor-pointer duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-purple-500 shadow-2xl items-center h-[100px]     justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-pink-500'>Total course</h1>
                        <h1 className='text-[20px] font-bold text-white'>$23874</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='white' size={28} />
                    </div>
                </div>
                <div className='flex p-3 cursor-pointer transition duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-blue-500 shadow-2xl items-center h-[100px] justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-green-400'>Complete Course</h1>
                        <h1 className='text-[20px] font-bold text-white'>3874</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='white' size={28} />
                    </div>
                </div>
                <div className='flex p-3 transition cursor-pointer duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-green-500 shadow-2xl items-center h-[100px] justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-lime-500'>Running</h1>
                        <h1 className='text-[20px] font-bold text-white'>$23874</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='white' size={28} />
                    </div>
                </div>
                <div className='flex p-3 transition cursor-pointer duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-yellow-600 shadow-2xl items-center h-[100px] justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-sky-600'>Pending Request</h1>
                        <h1 className='text-[20px] font-bold text-white'>3423</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='white' size={28} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;