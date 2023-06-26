import React from 'react'
import MeetingInmg from '../../assects/images/elearning-03.jpg'

export default function LiveMeeting() {
    return (
        <div>
            <div class="container mx-auto mt-8 px-4 mb-12">
                <section>
                    <h2 class="text-xl font-bold mb-4">Live Meetings</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 1</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    {width: "10rem"}
                                }
                                alt="Meeting Image"
                                class="mb-4"/>
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </div>

                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 2</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    {width: "10rem"}
                                }
                                alt="Meeting Image"
                                class="mb-4"/>
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </div>

                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 3</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    {width: "10rem"}
                                }
                                alt="Meeting Image"
                                class="mb-4"/>
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 4</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    {width: "10rem"}
                                }
                                alt="Meeting Image"
                                class="mb-4"/>
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 5</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    {width: "10rem"}
                                }
                                alt="Meeting Image"
                                class="mb-4"/>
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 6</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    {width: "10rem"}
                                }
                                alt="Meeting Image"
                                class="mb-4"/>
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
