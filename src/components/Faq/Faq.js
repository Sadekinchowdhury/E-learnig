import React from 'react';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
const Faq = () => {
    const [open, setOpen] = useState(false)

    const handlOpen = () => {
        setOpen(!open)

    }

    return (
        <div className='h-screen bg-indigo-600'>
            <div>
                <div className='relative w-2/5 mx-auto'>
                    <div className='flex justify-between bg-white py-3 text-3xl font-medium  p-2 shadow-2xl rounded-sm'>
                        <h1 className=''>Why will you buy this course?
                        </h1>

                        <FaPlus onClick={handlOpen} />
                    </div>

                    {
                        open ? <div className='absolute bg-white py-5 mt-2 p-3'>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, modi?
                            </p>
                        </div> : false
                    }
                </div>
            </div>
        </div>
    );
};

export default Faq;