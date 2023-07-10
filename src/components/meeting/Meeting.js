import React, { useState } from "react";
// import MeetingInmg from '../../assects/images/meeting.jpg'
// import begginer from "../../assects/images/pricing-box-img1.png";
// import business from "../../assects/images/pricing-box-img2.png";
// import professional from "../../assects/images/pricing-box-img3.png";
import english from "../../assects/images/english.jpg";
import sun from "../../assects/images/sun-with-cameraman.jpg";
import org from "../../assects/images/organizational-resilence.jpg";
import digital from "../../assects/images/digital-strategy.jpg";
import dataDriven from "../../assects/images/data-driven.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Meeting() {
  const [pricing, setPricing] = useState([]);

  useEffect(() => {
    fetch("./Pricing.json")
      .then((res) => res.json())
      .then((data) => setPricing(data));
  }, []);

  return (
    <>
      <section className="bg-[#091650] py-16 lg:px-[200px] px-4 md:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mt-4">
            Our Flexible Pricing Plans
          </h1>
        </div>
        <div className="pt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {pricing.map((item, i) => (
            <div key={i * 10} className="pricing-card bg-[#16256e] py-8 px-5">
              <div className="flex flex-col content-center items-center">
                <img className="w-[100px]" src={item.img} />
                <h3 className="text-2xl text-white mt-4 mb-4">{item.title}</h3>
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
                  <button className="flex mx-auto items-center content-center btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] rounded-[50px] border border-[#0ad3ef] hover:bg-[#091650]">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <img className="w-full" src={english} />
          </div>
          <div className="px-16 flex flex-col bg-[#030f43] justify-center pr-16">
            <div className="text-white">
              <h2 className="text-4xl mb-4">
                Lets take a trip to our english spoken learning Blog
              </h2>
              <p>
                As we embark on our journey to the English spoken learning blog,
                we find ourselves immersed in a world of language exploration
                and improvement. The blog, aptly named "Speak Well," is a
                treasure trove of resources, tips, and engaging content designed
                to help learners of English enhance their spoken language
                skills.
              </p>
              <button className="flex items-center content-center rounded-lg mt-5 btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="px-16 flex flex-col bg-[#030f43] justify-center pr-16">
            <div clasName="px-16">
              <h2 className="text-4xl mb-4 text-white">
                Subscribe to access 2000 classes tought by the world's top
                expert
              </h2>
              <ul className="list-disc ps-10 text-white">
                <li>Get started for less than $13/mongth</li>
                <li className="mt-3">24/7 access via desktop,mobile or tv</li>
                <li className="mt-3">New classes added every month</li>
                <li className="mt-3">Download lessons for offline viewing</li>
                <li className="mt-3">Exclusive content for subscriber</li>
              </ul>
              <button className="flex items-center content-center rounded-lg mt-5 btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img className="w-full" src={sun} />
          </div>
        </div>
      </section>

      <section className="lg:px-[200px] px-4 md:px-8 py-16 bg-gray-100">
        <h2 className="text-4xl mb-3">Gain the MIT edge</h2>
        <p className="lg:w-4/5">
          MIT is renowned for its strong emphasis on innovation,
          interdisciplinary collaboration, and hands-on learning. It offers
          undergraduate and graduate programs in fields such as engineering,
          science, architecture, business, economics, computer science, and
          social sciences. The university's academic departments are organized
          into five schools: Architecture and Planning, Engineering, Humanities,
          Arts, and Social Sciences, Management, and Science.
        </p>
        <div className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 gap-5">
          <div className="lg:px-2 h-full">
            <div class="h-full flex flex-col justify-between bg-white shadow-lg rounded overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src={org}
                alt="Card image"
              />
              <div className="px-3 pb-4">
                <div class="mx-auto py-4 text-center px-3">
                  <p className="mb-2">June,13-15-23</p>
                  <h3 class="font-semibold text-xl mb-2">
                    Building Organizational Resilence
                  </h3>
                </div>
                <div class="mx- py-4">
                  <button className="flex mx-auto items-center content-center rounded-lg btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:px-2 h-full">
            <div class="h-full flex flex-col justify-between bg-white shadow-lg rounded overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src={digital}
                alt="Card image"
              />
              <div class="mx-auto py-4 text-center px-3">
                <p className="mb-2">June,13-15-23</p>
                <h3 class="font-semibold text-xl mb-2">
                  Digital Strategies for Transforming Your Business
                </h3>
              </div>
              <div class="mx- py-4">
                <button className="flex mx-auto items-center content-center rounded-lg btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="lg:px-2 h-full">
            <div class="h-full flex flex-col justify-between bg-white shadow-lg rounded overflow-hidden">
              <img
                class="w-full h-48 object-cover"
                src={dataDriven}
                alt="Card image"
              />
              <div class="mx-auto py-4 text-center px-3">
                <p className="mb-2">June,13-15-23</p>
                <h3 class="font-semibold text-xl mb-2">Data-Driven Teams</h3>
              </div>
              <div class="mx- py-4">
                <button className="flex mx-auto items-center content-center rounded-lg btn btn-lg h-[50px] px-8 py-4 text-white text-xl bg-[#0ad3ef] border border-[#0ad3ef] hover:bg-[#091650]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
