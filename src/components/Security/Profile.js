import React from 'react';
import Avator from '../../assects/images/avator.jpg'
import {AiOutlineLogout} from 'react-icons/ai';
import Sidebar from '../../DashBoard/SidebarMenu';
import {Outlet} from 'react-router-dom';
const ProfileDashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="bg-gray-900 text-white  shadow-2xl w-full lg:w-1/5 px-4 py-6">
                <div className='py-10'>
                    <div className="flex mt-10  text-center items-center justify-center mb-8">
                        <img src={Avator}
                            alt=""
                            className="w-20 border-[6px] border-blue-500 h-20 rounded-full mr-4"/>
                    </div>
                    <div className='text-center mb-8'>
                        <h2 className="text-xl font-bold">Showkat Ali</h2>
                        <p className="text-sm">
                            rumel36@gmail.com
                        </p>
                    </div>
                    <hr className='border-t-2 border-blue-400"'/>
                    <Sidebar></Sidebar>
                    <hr color='black' className='text-blue-600 '/>

                    <div className="flex items-center justify-center my-8 ">
                        <button className='text-xl font-semibold bg-white text-black px-4 hover:border-[2px] hover:border-blue-700 transition duration-700 hover:bg-slate-800 hover:text-white py-1 rounded'>
                            <AiOutlineLogout className='inline-block'/>
                            Logout</button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200  flex-grow ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProfileDashboard;
