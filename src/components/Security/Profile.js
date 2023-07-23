import React, { useState } from 'react';
import Avator from '../../assects/images/avator.jpg'
import { AiFillLeftCircle, AiFillRightCircle, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineLogout } from 'react-icons/ai';

import Sidebar from '../../DashBoard/SidebarMenu';
import { Outlet } from 'react-router-dom';
const ProfileDashboard = () => {
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className={`bg-gray-900 text-white z-50  shadow-2xl w-1/2 lg:w-2/12 px-4 lg:hidden block relative lg:static  lg:m-2 m-0 lg:my-2 my-0 lg:mx-2 mx-0 lg:rounded-xl  py-6 ${!open ? 'w-[0.1px] ml-1 rounded-l-full transform duration-1000   mt-20  z-50' : 'w-2/3'} `}>
                {
                    open &&
                    <Sidebar></Sidebar>
                }
                <div className='-right-4  bg-gray-900 rounded-r-full top-0 w-10 h-[46px] flex justify-center items-center absolute lg:static lg:hidden'>

                    {
                        open ? <AiFillLeftCircle onClick={() => setOpen(!open)} size={30} color='white' className='cursor-pointer' /> :

                            <AiFillRightCircle onClick={() => setOpen(!open)} size={30} color='white' className='cursor-pointer' />
                    }

                </div>
            </div>
            <div className={`bg-gray-900 text-white z-50  shadow-2xl w-1/2 lg:w-2/12 px-4 lg:block hidden lg:m-2 m-0 lg:my-2 my-0 lg:mx-2 mx-0 lg:rounded-xl rounded-b-lg py-6  `}>

                <Sidebar></Sidebar>
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
