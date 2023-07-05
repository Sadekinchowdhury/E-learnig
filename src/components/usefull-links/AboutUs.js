import React from 'react'
import Img1 from '../../assects/images/online-course.jpg'

export default function AboutUs() {
    return (
        <div>
            <div className='w-full bg-aboutUs h-full bg-no-repeat bg-cover'>
                <div className='w-4/5 mx-auto'>
                    <h2 className='text-center text-5xl text-black font-semibold p-5'>
                        <span className='border-b-4 border-red-600'>Abut US</span>
                    </h2>

                </div>
                <div className='w-4/5 mx-auto p-10'>
                    <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5 my-10'>
                        <div className=''>
                            <img className="rounded-md w-full  h-full"
                                src={Img1}
                                alt=""/>
                        </div>
                        <div className='text-black'>
                            <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
