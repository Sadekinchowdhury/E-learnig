import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const SearchBar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    return (
        <div
            className={`flex  items-center rounded-full bg-white shadow-md ${isActive ? 'w-full' : ''
                }`}
        >
            <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 outline-none rounded-l-full w-64 sm:w-80 focus:ring-2 focus:ring-blue-500"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-full">
                <RiSearchLine size={20} />
            </button>
        </div>
    );
};

export default SearchBar;
