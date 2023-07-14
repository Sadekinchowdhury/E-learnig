import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import ProfileModal from './ProfileModal';
import { useState } from 'react';
const ProfileEdit = () => {

    const [open, setOpen] = useState(false)


    return (

        <div className='bg-pink-700 from-blue-700 to-slate-700 via-orange-700 bg-gradient-to-t shadow-2xl mt-3 rounded-xl w-11/12 mx-auto p-3 '>

            <div className='flex justify-between p-10'>
                <div>
                    <h1 className='text-3xl text-white font-semibold'>Profile</h1>
                </div>
                <div>
                    <ProfileModal />
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='flex items-center justify-center'>
                    <div>
                        <img className='h-52 w-52 rounded-full' src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?w=740&t=st=1688743360~exp=1688743960~hmac=3ab12c63c932e4328be04a3360e3751d0ff7fa79e5a1500f6c27dc33117fc6fc" alt="" />


                        <div className='flex justify-center my-10 gap-4 text-yellow-400'>
                            <FaFacebookSquare size={24} />
                            <FaInstagramSquare size={24} />
                            <FaTwitterSquare size={24} />
                            <FaLinkedin size={24} />
                            <FaGithubSquare size={24} />
                        </div>
                    </div>

                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div className='text-left text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Full Name</label>
                            <p className='text-xl font-medium'>Sadekin Chowdhury</p>
                        </div>
                        <div className='text-left text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Email Adress</label>
                            <p className='text-xl font-medium'>Sadek124@gmail.com</p>
                        </div>
                        <div className='text-left text-white mb-3'>
                            <label htmlFor="" className=' font-normal'>Date of birth</label>
                            <p className='text-xl font-medium'> 11/12/2000</p>
                        </div>
                        <div className='text-left text-white mb-3'>
                            <label htmlFor="" className=' font-normal'> Educational Qualification</label>
                            <p className='text-xl font-medium'>Bachalor Of Science</p>
                        </div>
                    </div>


                    <div className='text-left text-white mb-3'>
                        <label htmlFor="" className=' font-normal'>Streat Adress line 1</label>
                        <p className='text-xl font-medium'> </p>
                    </div>
                    <div className='text-left text-white mb-3'>
                        <label htmlFor="" className=' font-normal'>Streat Adress line 2</label>
                        <p className='text-xl font-medium'> </p>
                    </div>
                    <div className='text-left text-white mb-3'>
                        <label htmlFor="" className=' font-normal'>Country</label>
                        <p className='text-xl font-medium'> Bangladesh</p>
                    </div>
                    <div className='text-left text-white mb-3'>
                        <label htmlFor="" className=' font-normal'>Contact Info</label>
                        <p className='text-xl font-medium'> +8801720985568</p>
                    </div>
                    <div className='text-left text-white mb-3'>
                        <label htmlFor="" className=' font-normal'> City</label>
                        <p className='text-xl font-medium'> Sylhet</p>
                    </div>
                    <div className='text-left text-white mb-3'>
                        <label htmlFor="" className=' font-normal'> Zip Code</label>
                        <p className='text-xl font-medium'> 3040</p>
                    </div>

                </div>
            </div>


        </div>

    );
};

export default ProfileEdit;