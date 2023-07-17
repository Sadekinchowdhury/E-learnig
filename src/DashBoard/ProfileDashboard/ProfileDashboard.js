import React from 'react';
import { FaEnvelope, FaRegBell, FaRegCalendarMinus, FaSearch, FaLinkedin, FaFillDrip, FaEllipsisV } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ProfilepiChart from './ProfilepiChart';

const ProfileDashboard = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className='bg-slate-950 from-fuchsia-950 via-sky-950 to-blue-950 bg-gradient-to-l border  rounded-lg h-[100%]'>
            <div className='flex h-[60px] shadow-2xl  px-[25px] items-center justify-between rounded'>
                <div className='flex items-center w-1/3 border-none'>

                    <input type="text" color='black' placeholder="Search..." className="flex-1 -[300px] bg-slate-100 pl-[2px] rounded-l-lg py-1 h-[35px] bg-transparent outline-none text-white placeholder-gray-500" />
                    <button class="p-2 rounded-r-lg bg-blue-500 text-black hover:bg-blue-600 focus:outline-none focus:bg-blue-600 h-[35px] px-3">
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
                <div className='flex p-3 transition cursor-pointer bg-slate-200 duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-purple-500 shadow-2xl items-center h-[100px]     justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-pink-500'>Total course</h1>
                        <h1 className='text-[20px] font-bold text-black'>$23874</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='black' size={28} />
                    </div>
                </div>
                <div className='flex p-3 cursor-pointer bg-slate-200 transition duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-blue-500 shadow-2xl items-center h-[100px] justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-green-400'>Complete Course</h1>
                        <h1 className='text-[20px] font-bold text-black'>3874</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='black' size={28} />
                    </div>
                </div>
                <div className='flex p-3 transition cursor-pointer bg-slate-200 duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-green-500 shadow-2xl items-center h-[100px] justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-lime-500'>Running</h1>
                        <h1 className='text-[20px] font-bold text-black'>$23874</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='black' size={28} />
                    </div>
                </div>
                <div className='flex p-3 transition cursor-pointer bg-slate-200 duration-300 hover:scale-[103%] hover:border-b-2 hover:border-r-[1px] rounded-xl border-l-4 border-yellow-600 shadow-2xl items-center h-[100px] justify-between  transform '>
                    <div>
                        <h1 className='text-[14px] font-bold text-sky-600'>Pending Request</h1>
                        <h1 className='text-[20px] font-bold text-black'>3423</h1>
                    </div>
                    <div>
                        <FaRegCalendarMinus color='black' size={28} />
                    </div>
                </div>
            </div>
            {/* <div className='flex mt-[22px] lg:w-[99%] w-full mx-auto gap-[30px]'>
                <div className='lg:w-8/12 w-full border rounded-xl '>
                    <div className='flex lg:pl-10 pl-0 px-3 py-6 justify-between items-center'>
                        <h1 className='font-semibold'>Course Overview</h1>
                        <FaEllipsisV />
                    </div>
                    <div className='flex justify-center items-center'>
                        <LineChart
                            width={700}
                            height={450}
                            data={data}
                            margin={{
                                top: 5,
                                right: 40,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </div>
                </div>
                <div className='flex w-4/12 items-center justify-center'>
                    <ProfilepiChart />
                </div>
            </div> */}
            <div className='flex flex-col w-[90%]  mx-auto lg:flex-row mt-[22px] gap-[30px]'>
                <div className='lg:w-8/12 w-full border rounded-xl mb-4 lg:mb-0'>
                    <div className='flex w-11/12 mx-auto lg:pl-10 pl-3 py-6 justify-between items-center'>
                        <h1 className='font-semibold text-white'>Course Overview</h1>
                        <FaEllipsisV color='white' size={20} />
                    </div>
                    <div className='flex justify-center items-center '>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart

                                data={data}
                                margin={{
                                    top: 5,
                                    right: 40,
                                    left: 20,
                                    bottom: 5,
                                    color: "white",


                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis color='white' dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='lg:w-4/12 w-full border p-3 flex items-center justify-center rounded-lg'>

                    <div>
                        <div className='flex justify-center items-center'>
                            <div className='flex w-9/12 items-center mx-auto justify-between'>
                                <h1 className='font-semibold text-white'>course</h1>
                                <FaEllipsisV color='white' size={20} />
                            </div>
                        </div>
                        <ProfilepiChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDashboard;