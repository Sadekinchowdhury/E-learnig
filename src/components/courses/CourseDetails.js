import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import { AiTwotonePlusSquare } from "react-icons/ai";
import mentor from "../../assects/images/mentor_details_image_1.jpg";
const CourseDetails = () => {
  return (
    <div>
      <section className="bg-[#f6f6f6] lg:py-16 py-6">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 w-4/5 mx-auto lg:my-5">
          <div className="flex flex-col justify-center">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold">
              Introduction to User Experience Design
            </h1>
            <div className="flex lg:gap-3 md:gap-2 gap-1 lg:py-12 md:py-8 py-5">
              <p className="flex items-center lg:text-lg md:text-lg text-sm gap-1">
                <BsCalendarDate className="text-[#ffe800]" />
                12/03/23
              </p>
              <span>-</span>
              <p className="flex items-center lg:text-lg md:text-lg text-sm gap-1">
                <BsCalendarDate className="text-[#ffe800]" />
                12/03/23
              </p>
              <p className="flex items-center lg:text-lg md:text-lg text-sm gap-1">
                <BsClockFill className="text-[#ffe800]" />3 months
              </p>
            </div>

            <div className="flex lg:gap-5 gap-3">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold">
                $19.99
              </h2>
              <button className="bg-[#181818] text-white text-small font-bold py-4 lg:px-12 md:px-12 px-6 rounded hover:bg-[#303030] flex items-center gap-2 lg:text-lg text-sm">
                <FaShoppingCart className="text-[#ffe800]" />
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="">
            <img
              className="w-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_HbOix0HF9SRXTPJCel_5OdIp7NqyRF8fIT1aFES3LX40PkYbZPd6x0AJrxED1KF9AA&usqp=CAU"
            />
          </div>
        </div>
      </section>

      <section className="lg:py-16 md:py-12 py-6">
        <div className="grid lg:grid-cols-2 gap-10  w-4/5 mx-auto">
          <div>
            <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-bold">
              What You will Learn
            </h2>
            <ul className="list-none mt-10">
              <li className="flex mb-2 gap-3 items-center text-gray-700 text-lg">
                <span className="text-[#ffe800]">
                  <FaCheck />
                </span>
                <span>
                  Fermentum iaculis eu non diam phasellus vestibulum. Porta non
                  pulvinar neque laoreet suspendisse. Justo nec ultrices dui
                  sapien proin sed libero
                </span>
              </li>

              <li className="flex mb-2 gap-3 items-center text-gray-700 text-lg">
                <span className="text-[#ffe800]">
                  <FaCheck />
                </span>
                <span>
                  At consectetur lorem donec massa sapien. Pulvinar sapien et
                  ligula ullamcorper malesuada proin
                </span>
              </li>
              <li className="flex mb-2 gap-3 items-center text-gray-700 text-lg">
                <span className="text-[#ffe800]">
                  <FaCheck />
                </span>
                <span>
                  Quisque id diam vel quam elementum pulvinar. Eget felis eget
                  nunc lobortis mattis aliquam faucibus purus.
                </span>
              </li>
            </ul>
          </div>
          <div className="">
            <div class="bg-white rounded-lg shadow-lg p-6 lg:pl-10 md:pl-8">
              <h2 class="text-3xl font-bold mb-3">Course Features</h2>
              <ul className="list-none lg:pl-5 md:pl-5 pl-3">
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Course Type: Company</span>
                </li>

                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Course Name: Web Development</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Course ID: XK73927UI</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Course Application Last Date: 22/07/2023</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Class Start Date: 25/08/2023</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Course Language: Bangla</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Class per week: 6 days</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Total Duration of the Course: 90 days</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Total Students: 60</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Course Compleation Date: 28/09/2023</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Certificate: Yes</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Assessments: Yes</span>
                </li>
                <li className="flex mb-1 gap-3 items-center text-gray-700 text-m">
                  <span className="text-[#ffe800] border-r border-b border-t-0 border-l-0 border-black border-3">
                    <AiTwotonePlusSquare />
                  </span>
                  <span>Active Live Class</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
