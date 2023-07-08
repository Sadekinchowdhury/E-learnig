import React from "react";
import { Link } from "react-router-dom";
import BannerImg from "../../assects/images/bg-image.png";
const HomeBanner = () => {
  return (
    <section class="bg-slate-700 py-12 w-full mx-auto">
      <div class="container mx-auto px-4 w-4/5">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2">
            <h2 class="text-4xl font-bold text-white mb-4">
              Onlive Live Courses
            </h2>
            <p class="text-gray-300 text-lg mb-8 text-justify mr-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
            <div className="py-2">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    class="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  <Link to="/contact">Contact Now</Link>
                </span>
              </a>
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <img src={BannerImg} alt="Banner" class="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomeBanner;
