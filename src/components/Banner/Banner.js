import React from 'react'

export const Banner = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 my-10'>
                <div className=''>
                    <img className="rounded-md w-full  h-full" src="https://qph.cf2.quoracdn.net/main-qimg-915b7365383ff59ccf4b651294694c70-pjlq" alt=""/>
                </div>
                <div className='text-white'>
                    <h2 className='text-3xl font-semibold my-1'>Our Company Courses</h2>
                    <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href="#_" class="px-5 p-10 py-2 mt-4 rounded group overflow-hidden font-medium bg-slate-100 text-slate-700 inline-block">
                        <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90"></span>
                        <span class="relative group-hover:text-purple-400">
                            {/* <Link to="/contact">Contact Now</Link> */}
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
                            {/* <Link to="/contact">Contact Now</Link> */}
                            Read More
                        </span>
                    </a>
                </div>
                <div className=''>
                    <img className="rounded-md w-full  h-full" src="https://qph.cf2.quoracdn.net/main-qimg-915b7365383ff59ccf4b651294694c70-pjlq" alt=""/>
                </div>
            </div>
        </div>
    // <div className="w-4/5 my-2 lg:h-[500px]  text-white grid grid-cols-1 gap-4 md:grid-cols-2 mx-auto">
    //     <div className="w-full h-full">
    //         <img className="rounded-2xl w-full  h-2/4" src="https://qph.cf2.quoracdn.net/main-qimg-915b7365383ff59ccf4b651294694c70-pjlq" alt=""/>
    //     </div>
    //     {/* <div className="flex items-center justify-center">
    //         <div className=''>
    //             <h1 className="text-xl text-center lg:text-2xl">
    //                 Take the next step
    //                 <br/>
    //                 toward your personal and
    //                 <br/>
    //                 professional goals with
    //             </h1>
    //             <p className="text-xs text-center lg:text-sm font-medium">
    //                 Join now to receive personalized recommendations from the full Course
    //             </p>
    //         </div>
    //     </div> */}
    // </div>

    )
}
