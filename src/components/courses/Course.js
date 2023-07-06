import React from 'react'
import Filters from './Filter'
import AllCourse from './AllCourse'

export default function Course() {
    return (
        <div className=''>

            <div className='lg:flex'>
                <div className='md:w-2/12 mx-auto p-3 w-full '>
                    <Filters/>
                </div>
                <div className='md:w-10/12 mx-auto'>
                    <AllCourse/>
                </div>
            </div>


            <div>
                <div class="w-11/12 mx-auto mt-10 mb-10 bg-gray-100 py-8">
                    <h2 class="text-xl font-bold mb-4 ml-8">Regular Courses</h2>
                    <div class="container mx-auto px-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe title='if' class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-11/12 mx-auto mt-5 mb-5 bg-gray-100 py-8">
                    <h2 class="text-xl font-bold mb-4 ml-8">Populer Courses</h2>
                    <div class="container mx-auto px-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-11/12 mx-auto mt-5 mb-5 bg-gray-100 py-8">
                    <h2 class="text-xl font-bold mb-4 ml-8">Fee Courses</h2>
                    <div class="container mx-auto px-4">
                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow-md">
                                <div class="aspect-video">
                                    <iframe class="w-full h-full" src="https://www.youtube.com/embed/FF3fuYLnApQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                                <div class="p-4">
                                    <h3 class="text-lg font-bold mb-2">Video Title</h3>
                                    <p class="text-gray-500">Video Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
