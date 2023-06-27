import React from 'react';

const BackGroundInfinity = () => {


    return (
        <div className="flex justify-center items-center">
            <div className="relative mx-auto">

                {/* <img>
                
                    url="https://www.youtube.com/watch?v=eEr56MfFP6I"
                    playing
                    loop
                    onPlay={true}
                    muted
                    width="1300px"
                    height="700px"
                    className=""
                /> */}
                <img className='w-full h-[600px] lg:h-[800px]' src="https://media.istockphoto.com/id/1419766496/photo/abstract-concepts-of-cybersecurity-technology-and-digital-data-protection-protect-internet.jpg?b=1&s=170667a&w=0&k=20&c=ymHzOpQBTrldJ5egITZZAgfc7PGmxZ2bP83eo-KjARM=" alt="" />

            </div>
            <div className="absolute top-1/3 left-[15%] lg:left-1/4 transform lg:-translate-x-1/2">
                <div className=''>
                    <h1 style={{
                        fontFamily: "rumel"
                    }} className="text-3xl mt-4   lg:text-[52px] font-medium text-white">
                        More <span className="text-[#ffcd00]">Visibility</span>
                    </h1>
                    <h1 style={{
                        fontFamily: "rumel"
                    }} className="text-3xl mt-4   lg:text-[52px] font-medium text-white">
                        more <span className="text-[#ffcd00]">followers</span>
                    </h1>
                    <h1 style={{
                        fontFamily: "rumel"
                    }} className="text-3xl mt-4  lg:text-[52px] font-medium text-white">
                        more <span className="text-[#ffcd00]">customers</span>
                    </h1>
                </div>

                <p className="mt-6 mb-6 text-xl lg:text-2xl text-white">
                    Your future customers are on Instagram. <br />
                    Be active where they are receptive.
                </p>
                <div>
                    <button className="bg-[#ffcd00] transition-all cursor-pointer duration-200 hover:bg-yellow-300 hover:scale-100   hover:shadow-2xl hover:-rotate-3 font-semibold px-7 py-3 rounded text-black">
                        Contact Us
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BackGroundInfinity;