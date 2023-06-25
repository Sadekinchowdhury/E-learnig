import React from 'react';

const TopBanner = () => {


    return (
        <div style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url('https://img.freepik.com/free-photo/young-woman-smiling-reading-bench-outdoors-generated-by-ai_24640-82507.jpg?size=626&ext=jpg&uid=R64660198&ga=GA1.1.528516975.1687684770&semt=ais_ai_generated')`


        }} className="z-50 cover h-[1000px]">
            <div className={`  grid grid-cols-1 md:grid-cols-2 gap-8`}>

                <div>
                    <div>
                        <h1>Welcome to E-Learnig</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div>
                        <button>Contact Us</button>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default TopBanner;