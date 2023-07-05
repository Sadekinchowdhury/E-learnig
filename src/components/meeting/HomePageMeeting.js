import React, { useState } from 'react'
// import MeetingInmg from '../../assects/images/meeting.jpg'
import begginer from '../../assects/images/pricing-box-img1.png'
import business from '../../assects/images/pricing-box-img2.png'
import professional from '../../assects/images/pricing-box-img3.png'
import english from '../../assects/images/english.jpg'
import sun from '../../assects/images/sun-with-cameraman.jpg'
import org from '../../assects/images/organizational-resilence.jpg'
import digital from '../../assects/images/digital-strategy.jpg'
import dataDriven from '../../assects/images/data-driven.jpg'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function HomePageMeeting() {
    const pricing = [{
        img: begginer,
        title: 'Beginner',
        price: 120,
        infos: ['0% transaction fee', '100 products.', '100 funnels', 'Unlimited landing pages.', 'Unlimited marketing emails',]
    }, {
        img: business,
        title: 'Business',
        price: 180,
        infos: ['0% transaction fee', '100 products.', '100 funnels', 'Unlimited landing pages.', 'Unlimited marketing emails',]
    },
    {
        img: professional,
        title: 'Professional',
        price: 200,
        infos: ['0% transaction fee', '100 products.', '100 funnels', 'Unlimited landing pages.', 'Unlimited marketing emails',]
    },

    ]
    return (
        <>

            <section className='bg-[#091650] py-16 lg:px-[200px] px-4 md:px-8'>
                <div className='text-center'>
                    <h3 className='text-xl text-[#0ad3ef]'>WHAT WE OFFER</h3>
                    <h1 className='text-5xl font-bold text-white mt-4'>Our Flexible Pricing Plans</h1>
                </div>
                <div className='pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5'>
                    {
                        pricing.map((item, i) => <div key={i * 10} className='pricing-card  bg-[#16256e] py-8 px-5'>
                            <div className='flex flex-col content-center items-center'>
                                <img className='w-[100px]' src={item.img} />
                                <h3 className='text-2xl text-white mt-4 mb-4'>{item.title}</h3>
                                <h2 className='text-5xl font-bold text-[#0ad3ef]'>${item.price}
                                </h2>
                                <span className='text-lg font-normal text-gray-400 mt-2'>/ Per Month</span>
                            </div>
                            <ul className='list-none mt-4 px-7'>
                                {item.infos.map((info, i) => <li key={i + 7} className={`flex mb-2 gap-2 items-center text-gray-400 text-lg ${i == 0 && 'text-bold'}`}>
                                    <span className='text-[#0ad3ef]'><BsFillCheckCircleFill /></span>
                                    {info}
                                </li>)}
                            </ul>

                            <div className='pt-4 text-center'>
                                <Link className='mx-auto' to="/payment">
                                    <button className='flex mx-auto items-center content-center btn btn-lg h-[50px] px-8 py-4 text-black hover:black hover:text-white text-xl bg-[#0ad3ef] rounded-[50px] border border-[#0ad3ef] hover:bg-[#091650]'>
                                        Get Started
                                    </button>
                                </Link>

                            </div>
                        </div>)
                    }
                </div>
            </section>




        </>
    )
}
