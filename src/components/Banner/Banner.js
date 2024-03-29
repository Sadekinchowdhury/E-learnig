import React from 'react'

export const Banner = () => {
    return (
        <div className='w-4/5 lg:py-7 py-3 mx-auto'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-8 py-7'>
                <div className=''>
                    <img className="rounded-md w-full  h-full" src="https://qph.cf2.quoracdn.net/main-qimg-915b7365383ff59ccf4b651294694c70-pjlq" alt=""/>
                </div>
                <div className='text-white'>
                    <h2 className='text-3xl font-semibold my-1'>Our Company Courses</h2>
                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#_" class="px-5 p-10 py-2 mt-4 rounded group overflow-hidden font-medium bg-slate-100 text-slate-700 inline-block">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90"></span>
                        <span class="relative group-hover:text-purple-400">
                            Read More
                        </span>
                    </a>
                </div>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 my-10'>
                <div className='text-white'>
                    <h2 className='text-3xl font-semibold my-1'>Our Public Courses</h2>
                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#_" class="px-5 p-10 py-2 mt-4 rounded group overflow-hidden font-medium bg-slate-100 text-slate-700 inline-block">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90"></span>
                        <span class="relative group-hover:text-purple-400">
                            Read More
                        </span>
                    </a>
                </div>
                <div className=''>
                    <img className="rounded-md w-full  h-full" src="https://qph.cf2.quoracdn.net/main-qimg-915b7365383ff59ccf4b651294694c70-pjlq" alt=""/>
                </div>
            </div>
        </div>
    )
}
