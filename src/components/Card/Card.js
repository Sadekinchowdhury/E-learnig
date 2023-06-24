import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Card = () => {
    const cards = [
        {
            title: "Python",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHU_ZJnThbZkVFx-Rj5ShWcPxhOShFdcLOw&usqp=CAU",
            name: "Aledx",
            ratting: "",
            price: "$15"
        },
        {
            title: "Python",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTGVnaXLcrG9b_PuZBc6Er6WPw_pcxTUqoQ&usqp=CAU",
            name: "Aledx",
            ratting: "",
            price: "$15"
        },
        {
            title: "Python",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTBsvhEoa9-PA1sEiZAGpMM-PXQHGFwg2ywTWw9Iek6IV6LZ9LGfuKc27CfvPYLuexrE&usqp=CAU",
            name: "Aledx",
            ratting: "",
            price: "$15"
        },
        {
            title: "Python",
            img: "https://emeritus.org/wp-content/uploads/2021/10/What-Are-Small-Private-Online-Courses-SPOCs-Feature.jpg.optimal.jpg",
            name: "Aledx",
            ratting: "",
            price: "$15"
        },
    ]

    return (
        <div className='bg-slate-800 lg:py-24 from-orange-950 to-green-800'>

            <h1 className='text-4xl  font-medium text-center text-white '>Start Your learning</h1>
            <div className='py-8  flex items-center justify-center  mb-8 mt-8'>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 w-11/12 mx-auto'>
                    {
                        cards.map(card =>
                            <div className='bg-white border-[1px bg-black]  transform  duration-500 hover:scale-110 rounded-ss-3xl shadow-2xl'>
                                <div>
                                    <img className='w-full h-56' src={card.img} alt="" />
                                </div>
                                <div className='p-3'>
                                    <p className='text-2xl font-semibold mt-2 '>{card.title}</p>
                                    <p className='text-1xl font-semibold mt-2'>{card.name}</p>
                                    <p className='font-bold mt-2'>{card.price}</p>
                                </div>

                                <div className='flex mr-3 p-4 items-end justify-end'>
                                    <button className='px-7 py-2 shadow-2xl bg-gradient-to-tr bg-violet-700 from-red-200 hover:bg-orange-500 hover:to-lime-500 border-[2px] border-b-gray-900 '>
                                        <IoIosArrowForward />
                                    </button>
                                </div>

                            </div>


                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;