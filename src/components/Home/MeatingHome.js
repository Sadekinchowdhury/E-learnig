import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import begginer from "../../assects/images/pricing-box-img1.png";
import business from "../../assects/images/pricing-box-img2.png";
import professional from "../../assects/images/pricing-box-img3.png";
const MeatingHome = () => {
  const pricing = [
    {
      img: begginer,
      title: "Beginner",
      price: 120,
      infos: [
        "0% transaction fee",
        "100 products.",
        "100 funnels",
        "Unlimited landing pages.",
        "Unlimited marketing emails",
        "100,000 contacts",
        "2000 active customers",
        "3 websites",
        "25 admin users",
      ],
    },
    {
      img: business,
      title: "Business",
      price: 180,
      infos: [
        "0% transaction fee",
        "100 products.",
        "100 funnels",
        "Unlimited landing pages.",
        "Unlimited marketing emails",
        "100,000 contacts",
        "2000 active customers",
        "3 websites",
        "25 admin users",
      ],
    },
    {
      img: professional,
      title: "Professional",
      price: 200,
      infos: [
        "0% transaction fee",
        "100 products.",
        "100 funnels",
        "Unlimited landing pages.",
        "Unlimited marketing emails",
        "100,000 contacts",
        "2000 active customers",
        "3 websites",
        "25 admin users",
      ],
    },
    {
      img: begginer,
      title: "Beginner",
      price: 120,
      infos: [
        "0% transaction fee",
        "100 products.",
        "100 funnels",
        "Unlimited landing pages.",
        "Unlimited marketing emails",
        "100,000 contacts",
        "2000 active customers",
        "3 websites",
        "25 admin users",
      ],
    },
    {
      img: begginer,
      title: "Beginner",
      price: 120,
      infos: [
        "0% transaction fee",
        "100 products.",
        "100 funnels",
        "Unlimited landing pages.",
        "Unlimited marketing emails",
        "100,000 contacts",
        "2000 active customers",
        "3 websites",
        "25 admin users",
      ],
    },
    {
      img: begginer,
      title: "Beginner",
      price: 120,
      infos: [
        "0% transaction fee",
        "100 products.",
        "100 funnels",
        "Unlimited landing pages.",
        "Unlimited marketing emails",
        "100,000 contacts",
        "2000 active customers",
        "3 websites",
        "25 admin users",
      ],
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
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
          slidesToShow: 2,
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

  return (
    <section className="bg-[#091650] py-12 lg:px-[200px] px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Our Flexible Pricing Plans
        </h1>
      </div>
      <div className="mt-8">
        <Slider {...settings}>
          {pricing.map((item, i) => (
            <div key={i * 3}>
              <div className="pricing-card bg-[#16256e] py-8 mx-3">
                <div className="flex flex-col content-center items-center">
                  <img className="w-[100px]" src={item.img} />
                  <h3 className="text-2xl text-white mt-4 mb-4">
                    {item.title}
                  </h3>
                  <h2 className="text-5xl font-bold text-[#0ad3ef]">
                    ${item.price}
                  </h2>
                  <span className="text-lg font-normal text-gray-400 mt-2">
                    / Per Month
                  </span>
                </div>
                <ul className="list-none mt-4 px-7">
                  {item.infos.map((info, i) => (
                    <li
                      key={i + 7}
                      className={`flex mb-2 gap-2 items-center text-gray-400 text-lg ${
                        i == 0 && "text-bold"
                      }`}
                    >
                      <span className="text-[#0ad3ef]">
                        <BsFillCheckCircleFill />
                      </span>
                      {info}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 text-center">
                  <Link className="mx-auto" to="/payment">
                    <button className="flex mx-auto items-center content-center px-8 py-3 text-white text-lg font-semibold bg-[#0ad3ef] rounded-[50px] border border-[#0ad3ef] hover:bg-[#091650]">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default MeatingHome;
