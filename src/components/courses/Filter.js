import React, { useState } from 'react';
import SearchBar from './Searchbar';
const Filters = () => {
    const [filterValue, setFilterValue] = useState('');
    const [selects, setSelects] = useState("")
    const [selects1, setSelects1] = useState("")
    const [selects2, setSelects2] = useState("")
    const [selects3, setSelects3] = useState("")
    const [selects4, setSelects4] = useState("")
    const [selects5, setSelects5] = useState("")
    const [selects6, setSelects6] = useState("")

    const fruits = ['Apple', 'Banana sdfsdfsdfsdf', 'Cherry', 'Grape', 'Lemon', 'Orange'];

    return (
        <div className="container  from-violet-600 to-sky-600 bg-gradient-to-t shadow-2xl hover:bg-gradient-to-br    rounded-2xl lg:w-10/12 mx-auto mt-8">

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-11/12 mx-auto  lg:gap-6 gap-6 p-5 m-3 '>
                {/* country */}
                <div>
                    <select value={selects} onChange={e => setSelects(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Choose Country</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                {/* course type */}
                <div>
                    <select value={selects1} onChange={e => setSelects1(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Course Type</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                {/* language */}
                <div>
                    <select value={selects2} onChange={e => setSelects2(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Choose Language</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                {/* course category */}
                <div>
                    <select value={selects3} onChange={e => setSelects3(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Course Category</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                {/* course duration */}
                <div>
                    <select value={selects4} onChange={e => setSelects4(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Course Duration</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                {/* course start day */}
                <div>
                    <select value={selects5} onChange={e => setSelects5(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Course Start Day</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                {/* course start time */}
                <div>
                    <select value={selects6} onChange={e => setSelects6(e.target.value)} placeholder='choose' className='className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500' name="" id="">
                        <option disabled hidden value="">Course start time</option>
                        {fruits
                            .filter((fruit) => fruit.toLowerCase().includes(filterValue.toLowerCase()))
                            .map((fruit) => (
                                <option  >
                                    {fruit}
                                </option>
                            ))}
                    </select>
                </div>
                <SearchBar />
            </div>
        </div>
    );
};

export default Filters;

