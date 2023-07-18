import React from 'react';
import { useState } from 'react';

const CoursePage = ({ totalpost, postperpage, setCurrentPage }) => {

    const allitems = []

    for (let i = 1; i <= Math.ceil(totalpost / postperpage); i++) {
        allitems.push(i)
    }

    return (
        <div>
            {
                allitems.map((item, index) => {
                    return <button onClick={() => setCurrentPage(item)} className='ml-2 bg-black text-white px-4 py-1 rounded-md'>
                        {
                            item
                        }
                    </button>
                })
            }
        </div>
    );
};

export default CoursePage;