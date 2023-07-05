// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// const ServiceSlider = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                 },
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2,
//                 },
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                 },
//             },
//         ],
//     };

//     const data = [
//         {
//             imageUrl: 'path/to/image1.jpg',
//             text: 'Card 1',
//         },
//         {
//             imageUrl: 'path/to/image2.jpg',
//             text: 'Card 2',
//         },
//         {
//             imageUrl: 'path/to/image3.jpg',
//             text: 'Card 3',
//         },
//         {
//             imageUrl: 'path/to/image4.jpg',
//             text: 'Card 4',
//         },
//         // Add more cards as needed
//     ];

//     return (
//         <Slider className='w-/12 mx-auto' {...settings}>
//             {data.map((card, index) => (
//                 <div key={index} className="p-4">
//                     <div className='bg-white'>
//                         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfEtDj_thLJJrm5glCUbBHDMQAkQ_SOjRRg&usqp=CAU' alt={card.text} className="w-full h-auto" />
//                         <p className="text-center">{card.text}</p>
//                     </div>
//                 </div>
//             ))}
//         </Slider>
//     );
// };
// export default ServiceSlider;


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { FaCode, FaMobileAlt, FaPaintBrush, FaBlog } from "react-icons/fa";

const ServiceSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const data = [
        {
            imageUrl: 'path/to/image1.jpg',
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad! 1',
            title: "App Development",
            path: "/appDevelopment",
            icons: [FaMobileAlt]
        },
        {
            imageUrl: 'path/to/image2.jpg',
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad! 2',
            title: "Web Development",
            path: "/webDevelopment",
            icons: [FaCode],
        },
        {
            imageUrl: 'path/to/image3.jpg',
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad! 3',
            title: "Digital marketing",
            path: "/digitalMarketing",
            icons: [FaBlog],
        },
        {
            imageUrl: 'path/to/image4.jpg',
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad! 4',
            title: "Search Engine Optimization",
            path: "/seo",

        },
        {
            imageUrl: 'path/to/image5.jpg',
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ad! 5',
            title: "Grapics Design",
            icons: [FaPaintBrush],
        },
        // Add more cards as needed
    ];

    return (
        <Slider {...settings}>
            {data.map((card, index) => (
                <div key={index} className="p-4 py-8 mb-8 h-full">


                    <div className='shadow-xl  mx-2 h-[300px] transition duration-300 hover:translate-y-7 hover:scale-110 cursor-pointer rounded-xl bg-slate-800 bg-gradient-to-b from-orange-950 to-green-800 hover:border-blue-400  hover:border-[0.01px] '>
                        {/* <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfEtDj_thLJJrm5glCUbBHDMQAkQ_SOjRRg&usqp=CAU' alt={card.text} className="w-full h-30" />
                            </div> */}
                        <div className="flex items-center justify-center  p-5 rounded-full">
                            {card.icons?.map((Icon) => (
                                <div
                                    className="border-[1px] border-blue-400  p-3 rounded-full text-white"
                                >
                                    <Icon className="w-8 h-8" key={index} />
                                </div>
                            ))}
                        </div>
                        <div className='p-4 mt-4 text-white text-center'>
                            <p className='text-xl font-semibold py-2'>{card.title}</p>
                            <p className="text-center">{card.text}</p>
                        </div>
                    </div>


                </div>
            ))}

        </Slider>
    );
};
export default ServiceSlider;