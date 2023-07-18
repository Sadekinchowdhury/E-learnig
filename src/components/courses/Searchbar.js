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
            className={`flex  lg:w-3/6 border w-11/12 mx-auto items-center rounded-full bg-white  ${isActive ? 'w-full' : ''
                }`}
        >
            <input
                type="text"

                placeholder="Search"
                className="px-4 py-2 border-none rounded-l-full w-full"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <button className="px-4 py-2 bg-blue-600  rounded-r-full">
                <RiSearchLine size={25} />
            </button>
        </div>
    );
};

export default SearchBar;
