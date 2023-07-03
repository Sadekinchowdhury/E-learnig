// import React from 'react'
// import Avator from '../../assects/images/avator.jpg'

// export default function Profile() {
//     return (
//         <div className=''>

//             {/* <main className="container mx-auto mt-8 mb-8 px-4">
//                 <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
//                     <h1 className="text-gray-600 flex mb-10 text-3xl font-bold">Profile Page</h1>
//                     <div className="flex items-center mb-6">
//                         <img src={Avator}
//                             alt=""
//                             className="w-16 h-16 rounded-full mr-4" />
//                         <div>
//                             <h2 className="text-xl font-bold">Showkat Ali</h2>
//                             <p className="text-gray-600">Enrolled Student</p>
//                         </div>
//                     </div>

//                     <div className="mb-6">
//                         <h3 className="text-lg font-bold mb-2">About Me</h3>
//                         <p className="text-gray-600">I am a dedicated learner passionate about expanding my knowledge in various domains. Excited to be a part of the online educational community!</p>
//                     </div>

//                     <div>
//                         <h3 className="text-lg font-bold mb-2">Courses Enrolled</h3>
//                         <ul className="list-disc list-inside">
//                             <li>Introduction to Web Development</li>
//                             <li>Data Science Fundamentals</li>
//                             <li>Python for Beginners</li>
//                             <li>Machine Learning Algorithms</li>
//                             <li>Advanced JavaScript</li>
//                         </ul>
//                     </div>
//                 </div>
//             </main> */}

//             <div>

//             </div>


//         </div>
//     )
// }


import React from 'react';
import Avator from '../../assects/images/avator.jpg'
import { AiOutlineLogout } from 'react-icons/ai';
import Sidebar from '../../DashBoard/SidebarMenu';
import { Outlet } from 'react-router-dom';
const ProfileDashboard = () => {
    return (
        <div className="flex flex-col lg:flex-row h-screen">
            {/* Sidebar */}
            <div className="bg-gray-900 text-white  shadow-2xl w-full lg:w-1/5 px-4 py-6">
                {/* Sidebar content */}


                <div className='py-10'>
                    <div className="flex mt-10  text-center items-center justify-center mb-8">
                        <img src={Avator}
                            alt=""
                            className="w-20 border-[6px] border-blue-500 h-20 rounded-full mr-4" />

                    </div>
                    <div className='text-center mb-8'>
                        <h2 className="text-xl font-bold">Showkat Ali</h2>
                        <p className="text-sm"> rumel36@gmail.com </p>
                    </div>

                    <hr className='border-t-2 border-blue-400"' />
                    <Sidebar></Sidebar>
                    <hr color='black' className='text-blue-600 ' />

                    <div className="flex items-center justify-center my-8 ">
                        <button className='text-xl font-semibold bg-white text-black px-4 hover:border-[2px] hover:border-blue-700 transition duration-700 hover:bg-slate-800 hover:text-white py-1 rounded'> <AiOutlineLogout className='inline-block' /> Logout</button>
                    </div>
                </div>

                {/* Add your sidebar content here */}
            </div>

            {/* Main Content */}
            <div className="bg-gray-200  flex-grow ">
                {/* Main content */}

                <Outlet></Outlet>
                {/* Add your main content here */}
            </div>
        </div>
    );
};

export default ProfileDashboard;
