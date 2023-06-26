import React, { useState } from 'react'
// import MeetingInmg from '../../assects/images/meeting.jpg'
import begginer from '../../assects/images/pricing-box-img1.png'
import business from '../../assects/images/pricing-box-img2.png'
import professional from '../../assects/images/pricing-box-img3.png'
import english from '../../assects/images/english.jpg'
import sun from '../../assects/images/sun-with-cameraman.jpg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function Meeting() {
    const pricing = [{
        img:begginer,
        title:'Beginner',
        price:120,
        infos:['Quia voluptas sit asern','Exercitationem ullam corois.','Modi tempora incidunt','Laudantium totam rem aei.','Duis aute irure dolor reae.']
    },{
        img:business,
        title:'Business',
        price:180,
        infos:['Quia voluptas sit asern','Exercitationem ullam corois.','Modi tempora incidunt','Laudantium totam rem aei.','Duis aute irure dolor reae.']
    },
    {
        img:professional,
        title:'Professional',
        price:200,
        infos:['Quia voluptas sit asern','Exercitationem ullam corois.','Modi tempora incidunt','Laudantium totam rem aei.','Duis aute irure dolor reae.']
    },
    {
        img:begginer,
        title:'Beginner',
        price:120,
        infos:['Quia voluptas sit asern','Exercitationem ullam corois.','Modi tempora incidunt','Laudantium totam rem aei.','Duis aute irure dolor reae.']
    },
    {
        img:begginer,
        title:'Beginner',
        price:120,
        infos:['Quia voluptas sit asern','Exercitationem ullam corois.','Modi tempora incidunt','Laudantium totam rem aei.','Duis aute irure dolor reae.']
    },
    {
        img:begginer,
        title:'Beginner',
        price:120,
        infos:['Quia voluptas sit asern','Exercitationem ullam corois.','Modi tempora incidunt','Laudantium totam rem aei.','Duis aute irure dolor reae.']
    }
]
    return (
        <>
            {/* <div class="container mx-auto mt-8 px-4 mb-12">
                <section class="mb-8 bg-meeting">
                    <h2 class="text-xl font-bold mb-4">Upcoming Meeting</h2>
                    <div class="bg-white border border-gray-300 p-4">
                        <h3 class="text-lg font-bold mb-2">Title of the Meeting</h3>
                        <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                        <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                        <img src={MeetingInmg}
                            style={
                                { width: "10rem" }
                            }
                            alt="Meeting Image"
                            class="mb-4" />
                        <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    </div>
                </section>

                <section>
                    <h2 class="text-xl font-bold mb-4">Previous Meetings</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 1</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    { width: "10rem" }
                                }
                                alt="Meeting Image"
                                class="mb-4" />
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </div>

                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 2</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    { width: "10rem" }
                                }
                                alt="Meeting Image"
                                class="mb-4" />
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        </div>

                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 3</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    { width: "10rem" }
                                }
                                alt="Meeting Image"
                                class="mb-4" />
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 4</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    { width: "10rem" }
                                }
                                alt="Meeting Image"
                                class="mb-4" />
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 5</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    { width: "10rem" }
                                }
                                alt="Meeting Image"
                                class="mb-4" />
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="bg-white border border-gray-300 p-4">
                            <h3 class="text-lg font-bold mb-2">Meeting 6</h3>
                            <p class="text-gray-500 mb-2">Date: 26-06-2023</p>
                            <p class="text-gray-500 mb-4">Time: 10:30:00 pm</p>
                            <img src={MeetingInmg}
                                style={
                                    { width: "10rem" }
                                }
                                alt="Meeting Image"
                                class="mb-4" />
                            <p class="text-gray-800">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </section>
            </div> */}
    
            <section className='bg-[#091650] py-16 lg:px-[200px] px-4 md:px-8'>
                <div className='text-center'>
                    <h3 className='text-xl text-[#0ad3ef]'>WHAT WE OFFER</h3>
                    <h1 className='text-5xl font-bold text-white mt-4'>Our Flexible Pricing Plans</h1>
                </div>
                <div className='pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        pricing.map((item,i) => <div key={i*10} className='pricing-card bg-[#16256e] py-12 px-5'>
                        <div className='flex flex-col content-center items-center'>
                            <img className='w-[100px]' src={item.img} />
                            <h3 className='text-2xl text-white mt-5 mb-4'>{item.title}</h3>
                            <h2 className='text-5xl font-bold text-[#0ad3ef]'>${item.price}
                            </h2>
                            <span className='text-lg font-normal text-gray-400 mt-2'>/ Per Month</span>
                        </div>
                        <ul className='list-none mt-5 px-7'>
                            {item.infos.map((info,i)=> <li key={i+7} className='flex mb-2 gap-2 items-center text-gray-400 text-lg'>
                                <span className='text-[#0ad3ef]'><BsFillCheckCircleFill /></span>
                                {info}
                            </li>)}
                        </ul>

                        <div className='pt-5 text-center'>
                            <Link className='mx-auto' to="/payment">
                                <button className='flex mx-auto items-center content-center btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] rounded-[50px] border border-[#0ad3ef] hover:bg-[#091650]'>
                                    Get Started
                                </button>
                            </Link>

                        </div>
                    </div>)
                    }
                </div>
            </section>

            <section className=''>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <div>
                        <img className='w-full' src={english} />
                    </div>
                    <div className='px-16 flex flex-col bg-[#030f43] justify-center pr-16'>
                        <div className='text-white'>
                        <h2 className='text-4xl mb-4'>Lets take a trip to our english spoken learning Blog</h2>
                        <p>As we embark on our journey to the English spoken learning blog, we find ourselves immersed in a world of language exploration and improvement. The blog, aptly named "Speak Well," is a treasure trove of resources, tips, and engaging content designed to help learners of English enhance their spoken language skills.</p>
                        <button className='flex items-center content-center rounded-lg mt-5 btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]'>
                                   Learn More
                        </button>
                        </div>
                    </div>

                </div>
            </section>
            <section className='pt-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                  
                    <div className='px-16 flex flex-col bg-[#030f43] justify-center pr-16'>
                        <div clasName="px-16">
                        <h2 className='text-4xl mb-4 text-white'>Subscribe to access 2000 classes tought by the world's top expert</h2>
                        <ul className="list-disc ps-10 text-white">
                            <li>Get started for less than $13/mongth</li>
                            <li className='mt-3'>24/7 access via desktop,mobile or tv</li>
                            <li className='mt-3'>New classes added every month</li>
                            <li className='mt-3'>Download lessons for offline viewing</li>
                            <li className='mt-3'>Exclusive content for subscriber</li>
                        </ul>
                        <button className='flex items-center content-center rounded-lg mt-5 btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]'>
                                   Learn More
                        </button>
                        </div>
                    </div>
                    <div>
                        <img className='w-full' src={sun} />
                    </div>

                </div>
            </section>

        </>
    )
}
