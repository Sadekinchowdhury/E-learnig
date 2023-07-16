import React, { useState } from 'react';
import Avator from '../../assects/images/avator.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineLogout } from 'react-icons/ai';

import Sidebar from '../../DashBoard/SidebarMenu';
import { Outlet } from 'react-router-dom';
const ProfileDashboard = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className={`bg-gray-900 text-white z-50  shadow-2xl w-1/2 lg:w-2/12 px-4 lg:hidden block relative lg:static  lg:m-2 m-0 lg:my-2 my-0 lg:mx-2 mx-0 lg:rounded-xl rounded-b-lg py-6 ${!open && 'w-[1px] transform duration-1000   mt-2  z-50'} `}>
                {
                    open && <div className=''>
                        <div className="flex mt-10  text-center items-center justify-center mb-8">
                            <img src={Avator}
                                alt=""
                                className="w-20 border-[6px] border-blue-500 h-20 rounded-full mr-4" />
                        </div>
                        <div className='text-center mb-8'>
                            <h2 className="text-xl font-bold">Showkat Ali</h2>
                            <p className="text-sm">
                                rumel36@gmail.com
                            </p>
                        </div>
                        <hr className='border-t-2  border-blue-400"' />
                        <div>
                            <Sidebar></Sidebar>
                        </div>
                        <hr color='black' className='text-blue-600 ' />

                        <div className="flex items-center justify-center my-8  ">
                            <button className='text-xl font-semibold bg-white text-black px-4 hover:border-[2px] hover:border-blue-700 transition duration-700 hover:bg-slate-800 hover:text-white py-1 rounded'>
                                <AiOutlineLogout className='inline-block' />
                                Logout</button>
                        </div>
                    </div>
                }
                <div className='-right-4  bg-gray-900 rounded-r-full top-0 w-10 h-[46px] flex justify-center items-center absolute lg:static lg:hidden'>

                    {
                        open ? <AiOutlineArrowLeft onClick={() => setOpen(!open)} size={30} color='white' className='cursor-pointer' /> :

                            <AiOutlineArrowRight onClick={() => setOpen(!open)} size={30} color='white' className='cursor-pointer' />
                    }

                </div>
            </div>
            <div className={`bg-gray-900 text-white z-50  shadow-2xl w-1/2 lg:w-2/12 px-4 lg:block hidden lg:m-2 m-0 lg:my-2 my-0 lg:mx-2 mx-0 lg:rounded-xl rounded-b-lg py-6  `}>
                <div className=''>
                    <div className="flex mt-10  text-center items-center justify-center mb-8">
                        <img src={Avator}
                            alt=""
                            className="w-20 border-[6px] border-blue-500 h-20 rounded-full mr-4" />
                    </div>
                    <div className='text-center mb-8'>
                        <h2 className="text-xl font-bold">Showkat Ali</h2>
                        <p className="text-sm">
                            rumel36@gmail.com
                        </p>
                    </div>
                    <hr className='border-t-2  border-blue-400"' />
                    <div>
                        <Sidebar></Sidebar>
                    </div>
                    <hr color='black' className='text-blue-600 ' />


                </div>

                <div className='-right-4  bg-gray-900 rounded-r-full top-8 w-14 h-[50px] flex justify-center items-center absolute lg:static lg:hidden'>


                </div>
            </div>
            <div className="bg-slate-700 absolute  lg:static w-full mx-auto lg:w-10/12 lg:m-3 m-0 lg:rounded-xl rounded-none flex-grow ">

                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProfileDashboard;
