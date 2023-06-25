import React from 'react'
import Certified from '../../assects/images/certified-stamp-transparent-images-0-300x225.png'

export default function Certificate() {
    return (<div>
        <div class="w-11/12 md:w-9/12 bg-certificateImage mx-auto mt-10 mb-10 p-4 relative custom-background bg-cover bg-center">
            <h1 class="text-2xl font-bold mb-1 mt-20 flex justify-center">Certificate of Completion</h1>
            <div className='w-11-12 ml-20 mr-20'>
                <p class="text-lg ">This is to certify that {" "}
                    <span className='text-lg font-bold'>
                        Showkat Ali
                    </span>
                    {" "}
                    has successfully completed the online course{" "}
                    <span class="text-xl font-bold">
                        App Development</span>
                    {" "}
                    offered by{" "}
                    <span class="text-xl font-bold">
                        tutor.com</span>
                </p>
                <h4 class="text-lg font-bold mb-1">Course Details:</h4>
                <ul class="list-disc ml-8">
                    <li class="text-lg">Course Name: App Development</li>
                    <li class="text-lg">Course Duration: 6 Months</li>
                    <li class="text-lg">Course Instructor: Mujibor</li>
                    <li class="text-lg">Date of Completion: 24-06-2023</li>
                </ul>
                <p class="text-lg mb-2">By successfully completing this course, {" "}
                    <span className='text-lg font-bold'>
                        Showkat Ali
                    </span>
                    {" "}
                    has demonstrated a strong understanding of the course material and has acquired the necessary skills and knowledge as outlined in the course curriculum.</p>
            </div>
            <div class="flex justify-end ml-20 mr-20 mb-20">
                <div>
                    <img src={Certified}
                        alt="Seal or stamp of the Online Course Provider"
                        class="h-8"/>
                    <p class="text-sm">Mujibor</p>
                    <p class="text-sm">www.mujibor.com</p>
                </div>
            </div>
        </div>
    </div>)
}
