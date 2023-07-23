

import React, { useState } from 'react';

const LiveFilters = () => {
    const [filterValue] = useState('');
    const [selects, setSelects] = useState("")
    const [selects1, setSelects1] = useState("")
    const [selects2, setSelects2] = useState("")
    const [selects3, setSelects3] = useState("")
    const [selects4, setSelects4] = useState("")
    const [selects5, setSelects5] = useState("")
    const [selects6, setSelects6] = useState("")
    const [date, setDate] = useState("")

    const fruits = [
        'Apple',
        'Banana sdfsdfsdfsdf',
        'Cherry',
        'Grape',
        'Lemon',
        'Orange'
    ];
    const skillsAndCourses = [
        "Web Development",
        "Web Design",
        "Android App Development",
        "Flutter Android & IOS App Dev.",
        "WPT Theme Development",
        "WordPress Theme Customization",
        "Laravel",
        "Graphic Design",
        "T-SHIRT DESIGN COURSE",
        "Complete Digital Marketing Advance SEO (Search Engine Opt.) CPA Marketing",
        "Affiliate Marketing",
        "Social Media Marketing",
        "Data Entry",
        "Computer+IT Specialist for Office work YouTube Marketing",
        "Ecommerce Business Development(With Learn Logo Design with Professional Designer website building)",
        "UI/UX Design",
        "Video Editing",
        "Motion Graphic",
        "3D Studio Max and VFX",
        "IELTS",
        "AutoCad 2D and 3D",
        "Spoken English",
        "Ethical Hacking",
        "CCNA",
        "MikroTik",
        "Complete Python Programming",
        "Freelancing Masterclass for Skilled People Complete Java"
    ];

    return (



        <div className='grid  grid-cols-1 lg:grid-cols-7    lg:gap-4 gap-3 '>
            <div>
                <select value={selects1}
                    onChange={
                        e => setSelects1(e.target.value)
                    }
                    placeholder=''
                    className='w-full  px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    name=""
                    id="">
                    <option disabled hidden value="">Course Type</option>

                    <option value="Paid">
                        Paid
                    </option>
                    <option value='Free'>
                        Free
                    </option>

                </select>
            </div>

            <div>
                <select value={selects5}
                    onChange={
                        e => setSelects(e.target.value)
                    }
                    placeholder=''
                    className="px-3 w-full  py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'"
                    name=""
                    id="">
                    <option disabled hidden value="">Course</option>
                    <option value="Company">
                        Company
                    </option>
                    <option value="Public">
                        Public
                    </option>


                </select>
            </div>
            <div>
                <select value={selects6}
                    onChange={
                        e => setSelects(e.target.value)
                    }
                    placeholder=''
                    className="px-3 w-full px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'"
                    name=""
                    id="">
                    <option disabled hidden value=""> Country</option>
                    <option value="Bangladesh">
                        Bangladesh
                    </option>
                    <option value="India">
                        India
                    </option>
                    <option value="Pakistan">
                        Pakistan
                    </option>
                    <option value="Nepal">
                        Nepal
                    </option>
                    <option value="Myanmar">
                        Mayanmar
                    </option>


                </select>
            </div>

            <div>
                <select value={selects2}
                    onChange={
                        e => setSelects2(e.target.value)
                    }
                    placeholder=''
                    className='w-full  px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    name=""
                    id="">
                    <option disabled hidden value=""> Language</option>
                    <option value="Bangla">
                        Bangla
                    </option>
                    <option value='Hindi'>
                        Bangla
                    </option>
                    <option value='English'>
                        English
                    </option></select>
            </div>


            <div>
                <select value={selects3}
                    onChange={
                        e => setSelects3(e.target.value)
                    }
                    placeholder=''
                    className='w-full  px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    name=""
                    id="">
                    <option disabled hidden value="">Category</option>
                    {
                        skillsAndCourses.map(skill =>
                            <option value={skill}>

                                {skill}
                            </option>
                        )
                    }

                </select>
            </div>

            <div>
                <select value={selects4}
                    onChange={
                        e => setSelects4(e.target.value)
                    }
                    placeholder=''
                    className='w-full  px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    name=""
                    id="">
                    <option disabled hidden value="">Price</option>
                    <option value="50-100">
                        $50-$100
                    </option>
                    <option value="100-200">
                        $100-$200
                    </option>
                    <option value="200-300">
                        $200-$300
                    </option>
                </select>
            </div>
            <div>
                <select value={selects4}
                    onChange={
                        e => setSelects4(e.target.value)
                    }
                    placeholder=''
                    className='w-full  px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    name=""
                    id="">
                    <option disabled hidden value="">Course Duration</option>
                    <option value="1 Month">
                        1 Month
                    </option>
                    <option value="2 Month">
                        2 Month
                    </option>
                    <option value="3 Month">
                        3 Month
                    </option>
                    <option value="4 Month">
                        4 Month
                    </option>
                    <option value="5 Month">
                        5 Month
                    </option>
                    <option value="6 Month">
                        6 Month
                    </option>
                    <option value="12 Month">
                        12 Month
                    </option></select>
            </div>



        </div>


    );
};

export default LiveFilters;
