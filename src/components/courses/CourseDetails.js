import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BsClockFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { AiTwotonePlusSquare } from "react-icons/ai";
import { FaInfo } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBookmarksFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { GiBlackBook } from "react-icons/gi";
const CourseDetails = () => {
  const earnings = [
    {
      days: "Monday",
      time: "02:30 - 4:30",
      date: "22/07/2023",
      earnings: "Nonstop",
    },
    {
      days: "Saturday",
      time: "02:30 - 4:30",
      date: "22/07/2023",
      earnings: "Nonstop",
    },
    {
      days: "Wednesday",
      time: "02:30 - 4:30",
      date: "22/07/2023",
      earnings: "Nonstop",
    },
    {
      days: "Thirsday",
      time: "02:30 - 4:30",
      date: "22/07/2023",
      earnings: "Nonstop",
    },
  ];
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
          <div className="h-full flex flex-col justify-center">
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
      <section className="lg:py-16 md:py-12 py-6">
        <div className="w-4/5 mx-auto">
          <div>
            <h2 className="text-uppercase text-3xl mb-5 font-semibold">
              Expert web design and Development live course
            </h2>
            <p className="text-lg">
              This live course is specifically tailored for individuals who
              already possess a foundational understanding of web design and
              development and are looking to elevate their expertise to an
              advanced level. It covers a wide range of topics related to both
              web design and development. The web design aspect of the course
              focuses on advanced principles and techniques, including user
              experience (UX) design, user interface (UI) design, visual design,
              and responsive design. Participants will learn how to create
              engaging and user-friendly website interfaces, incorporating
              elements such as typography, color theory, and layout composition.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center">
              <FaInfo className="text-sky-600" size={26} />
              <h3 className="text-5xl ml-2 font-semibold">Description</h3>
            </div>
            <p className="px-9 pt-5 text-lg">
              The "Expert Web Design and Development Live Course" is an
              intensive program that advances participants' skills in web design
              and development. It covers advanced topics in UX/UI design,
              responsive design, front-end and back-end development, and offers
              live instruction, fostering interactive learning for enhanced
              expertise.It covers a wide range of topics related to both web
              design and development. The web design aspect of the course
              focuses on advanced principles and techniques, including user
              experience (UX) design, user interface (UI) design, visual design,
              and responsive design.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center">
              <BsFillPersonFill className="text-sky-600" size={23} />
              <h3 className="text-3xl ml-2 font-semibold">
                Who is the course for?
              </h3>
            </div>
            <p className="px-9 pt-5 text-lg">
              The course for web development is typically designed for
              individuals who want to learn how to create websites and web
              applications. It is suitable for beginners with little or no prior
              programming experience, as well as for those with some programming
              knowledge who want to expand their skills in web development. The
              "Expert Web Design and Development Live Course" is an intensive
              program that advances participants' skills in web design and
              development. It covers advanced topics in UX/UI design, responsive
              design, front-end and back-end development, and offers live
              instruction, fostering interactive learning for enhanced
              expertise.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center">
              <GiBlackBook className="text-sky-600" size={23} />
              <h3 className="text-3xl ml-2 font-semibold">
                What will be taught in the course
              </h3>
            </div>
            <p className="px-9 pt-5 text-lg">
              The specific content of a web development course can vary
              depending on the curriculum and the level of the course (beginner,
              intermediate, or advanced). However, in a comprehensive web
              development course, you can expect to learn the following topics:
              The web design aspect of the course focuses on advanced principles
              and techniques, including user experience (UX) design, user
              interface (UI) design, visual design, and responsive design.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center">
              <BsFillBookmarksFill className="text-sky-600" size={23} />
              <h3 className="text-3xl ml-2 font-semibold">
                What is required before starting the course?
              </h3>
            </div>
            <p className="px-9 pt-5 text-lg">
              The "Expert Web Design and Development Live Course" is an
              intensive program that advances participants' skills in web design
              and development. It covers advanced topics in UX/UI design,
              responsive design, front-end and back-end development, and offers
              live instruction, fostering interactive learning for enhanced
              expertise.It covers a wide range of topics related to both web
              design and development. The web design aspect of the course
              focuses on advanced principles and techniques, including user
              experience (UX) design, user interface (UI) design, visual design,
              and responsive design.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center">
              <BsFillSunFill className="text-sky-600" size={23} />
              <h3 className="text-3xl ml-2 font-semibold">
                With special benefits
              </h3>
            </div>
            <p className="px-9 pt-5 text-lg">
              The "Expert Web Design and Development Live Course" is an
              intensive program that advances participants' skills in web design
              and development. It covers advanced topics in UX/UI design,
              responsive design, front-end and back-end development, and offers
              live instruction, fostering interactive learning for enhanced
              expertise.It covers a wide range of topics related to both web
              design and development. The web design aspect of the course
              focuses on advanced principles and techniques, including user
              experience (UX) design, user interface (UI) design, visual design,
              and responsive design.
            </p>
          </div>
          <div className="pt-5">
            <div className="flex items-center">
              <BsGift className="text-sky-600" size={23} />
              <h3 className="text-3xl ml-2 font-semibold">
                Areas of earnings at the end of the course:
              </h3>
            </div>
            <p className="px-9 pt-5 text-lg">
              The "Expert Web Design and Development Live Course" is an
              intensive program that advances participants' skills in web design
              and development. It covers advanced topics in UX/UI design,
              responsive design, front-end and back-end development, and offers
              live instruction, fostering interactive learning for enhanced
              expertise.It covers a wide range of topics related to both web
              design and development. The web design aspect of the course
              focuses on advanced principles and techniques, including user
              experience (UX) design, user interface (UI) design, visual design,
              and responsive design.
            </p>
          </div>

          <table className="min-w-full mt-5 divide-y divide-gray-200 rounded-2xl">
            <thead className="">
              <tr className="">
                <th
                  scope="col"
                  className="bg-[#ff1919] text-center px-4 py-4 font-semibold text-white uppercase tracking-wider"
                >
                  Days
                </th>
                <th
                  scope="col"
                  className="bg-[#ff1919] text-center px-4 py-4 font-semibold text-white uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="bg-[#ff1919] text-center px-4 py-4 font-semibold text-white uppercase tracking-wider"
                >
                  Date
                </th>

                <th
                  scope="col"
                  className="bg-[#ff1919] text-center px-4 py-34text-xs font-semibold text-white uppercase tracking-wider"
                >
                  Earnings
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {earnings.map((e, i) => (
                <tr key={i}>
                  <th className="border-1  bg-gray-100 px-6 py-3 text-xsm text-black whitespace-nowrap">
                    {e.days}
                  </th>
                  <td className="border-1  bg-gray-100 px-6 py-3 text-xsm text-black whitespace-nowrap">
                    {e.time}
                  </td>
                  <td className="border-1  bg-gray-100 px-6 py-3 text-xsm text-black whitespace-nowrap">
                    {e.date}
                  </td>
                  <td className="border-1  bg-gray-100 px-6 py-3 text-xsm text-black whitespace-nowrap">
                    {e.earnings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
