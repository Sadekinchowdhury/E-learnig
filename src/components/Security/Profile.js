import React from 'react'
import Avator from '../../assects/images/avator.jpg'

export default function Profile() {
    return (
        <div>

            <main class="container mx-auto mt-8 mb-8 px-4">
                <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 class="text-gray-600 flex mb-10 text-3xl font-bold">Profile Page</h1>
                    <div class="flex items-center mb-6">
                        <img src={Avator}
                            alt="Profile Picture"
                            class="w-16 h-16 rounded-full mr-4"/>
                        <div>
                            <h2 class="text-xl font-bold">Showkat Ali</h2>
                            <p class="text-gray-600">Enrolled Student</p>
                        </div>
                    </div>

                    <div class="mb-6">
                        <h3 class="text-lg font-bold mb-2">About Me</h3>
                        <p class="text-gray-600">I am a dedicated learner passionate about expanding my knowledge in various domains. Excited to be a part of the online educational community!</p>
                    </div>

                    <div>
                        <h3 class="text-lg font-bold mb-2">Courses Enrolled</h3>
                        <ul class="list-disc list-inside">
                            <li>Introduction to Web Development</li>
                            <li>Data Science Fundamentals</li>
                            <li>Python for Beginners</li>
                            <li>Machine Learning Algorithms</li>
                            <li>Advanced JavaScript</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}
