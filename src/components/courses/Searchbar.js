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
            className={`flex border-2  lg:w-3/6  w-11/12 mx-auto items-center rounded-full bg-white shadow-md ${isActive ? 'w-full' : ''
                }`}
        >
            <input
                type="text"

                placeholder="Search"
                className="px-4 py-2 outline-none rounded-l-full w-full"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <button className="px-4 py-2 bg-blue-600   border-[2px] rounded-r-full">
                <RiSearchLine size={25} />
            </button>
        </div>
    );
};

export default SearchBar;
