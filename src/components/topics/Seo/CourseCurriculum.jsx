import React, { useState } from 'react';
import './CourseCurriculum.css'
import Instructor from '../../../assects/images/instructor.jpeg'
const CourseCurriculam = () => {
  
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleAccordion1 = (num) => {
    setIsOpen1(!isOpen1);
  };
  const toggleAccordion2 = (num) => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = (num) => {
    setIsOpen3(!isOpen3);
  };
  const toggleAccordion4 = (num) => {
    setIsOpen4(!isOpen4);
  };
  const toggleAccordion5 = (num) => {
    setIsOpen5(!isOpen5);
  };
  return (
    <section className='course-curriculum'>
      <h2 className='text-2xl font-bold'>COURSE CURRICULUM</h2>
      <div className='course-instructors pt-5'>
        <div className="border border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
            onClick={toggleAccordion1}
          >
              <div className="number rounded-full">
                <span>1</span>
              </div>
              <div className="seo-basics">
              <h4 className='text-lg font-bold'>SEO Basics</h4>
              </div>
             <div className="video-info">
             <span>4 videos (34 minutes)</span>
             </div>
              <div className='instructor'>
                <img className='rounded-full' src={Instructor} alt="" />
                <span>Rachel Sheldon</span>
              </div>
            {/* </div> */}
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen1 ? 'rotate-180' : 'rotate-0'
                }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.4 15.4L12 18l2.6-2.6L16 16l-6 6-6-6 1.4-1.4L10 16l-.6-.6z"
              ></path>
            </svg>
          </div>
          {isOpen1 && (
            <div className="p-4 bg-white">
              <h3 className='text-xl'>Lesson Description:</h3>
              <div className='flex'>
                <div className="w-10/12">
                  <p className='me-5'>In this lesson, you'll learn the history of search engines and how they became ingrained in our day-to-day lives. You'll discover how search engines like Google crawl, index, and rank web pages. You'll also learn how to create the right SEO strategy for your business by setting goals and KPIs, and perform an audit of your own website's SEO authority using the included worksheet.</p>
                </div>
                <div className='w-2/12'>
                  <button className='start-course ms-auto'>START COURSE</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
            onClick={toggleAccordion2}
          >

            {/* <div className="course-information w-90 flex"> */}
              <div className="number rounded-full">
                <span>1</span>
              </div>
              <div className="seo-basics">
              <h4 className='text-lg font-bold'>SEO Basics</h4>
              </div>
             <div className="video-info">
             <span>4 videos (34 minutes)</span>
             </div>
              <div className='instructor'>
                <img className='rounded-full' src={Instructor} alt="" />
                <span>Rachel Sheldon</span>
              </div>
            {/* </div> */}
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen2 ? 'rotate-180' : 'rotate-0'
                }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.4 15.4L12 18l2.6-2.6L16 16l-6 6-6-6 1.4-1.4L10 16l-.6-.6z"
              ></path>
            </svg>
          </div>
          {isOpen2 && (
            <div className="p-4 bg-white">
              <h3 className='text-xl'>Lesson Description:</h3>
              <div className='flex'>
                <div className="w-10/12">
                  <p className='me-5'>In this lesson, you'll learn the history of search engines and how they became ingrained in our day-to-day lives. You'll discover how search engines like Google crawl, index, and rank web pages. You'll also learn how to create the right SEO strategy for your business by setting goals and KPIs, and perform an audit of your own website's SEO authority using the included worksheet.</p>
                </div>
                <div className='w-2/12'>
                  <button className='start-course ms-auto'>START COURSE</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
            onClick={toggleAccordion3}
          >

            {/* <div className="course-information w-90 flex"> */}
              <div className="number rounded-full">
                <span>1</span>
              </div>
              <div className="seo-basics">
              <h4 className='text-lg font-bold'>SEO Basics</h4>
              </div>
             <div className="video-info">
             <span>4 videos (34 minutes)</span>
             </div>
              <div className='instructor'>
                <img className='rounded-full' src={Instructor} alt="" />
                <span>Rachel Sheldon</span>
              </div>
            {/* </div> */}
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen3 ? 'rotate-180' : 'rotate-0'
                }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.4 15.4L12 18l2.6-2.6L16 16l-6 6-6-6 1.4-1.4L10 16l-.6-.6z"
              ></path>
            </svg>
          </div>
          {isOpen3 && (
            <div className="p-4 bg-white">
              <h3 className='text-xl'>Lesson Description:</h3>
              <div className='flex'>
                <div className="w-10/12">
                  <p className='me-5'>In this lesson, you'll learn the history of search engines and how they became ingrained in our day-to-day lives. You'll discover how search engines like Google crawl, index, and rank web pages. You'll also learn how to create the right SEO strategy for your business by setting goals and KPIs, and perform an audit of your own website's SEO authority using the included worksheet.</p>
                </div>
                <div className='w-2/12'>
                  <button className='start-course ms-auto'>START COURSE</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border border-gray-300 rounded mb-2">
          <div
            className="flex justify-between items-center px-4 py-2 bg-gray-100 cursor-pointer"
            onClick={toggleAccordion4}
          >

            {/* <div className="course-information w-90 flex"> */}
              <div className="number rounded-full">
                <span>1</span>
              </div>
              <div className="seo-basics">
              <h4 className='text-lg font-bold'>SEO Basics</h4>
              </div>
             <div className="video-info">
             <span>4 videos (34 minutes)</span>
             </div>
              <div className='instructor'>
                <img className='rounded-full' src={Instructor} alt="" />
                <span>Rachel Sheldon</span>
              </div>
            {/* </div> */}
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen4 ? 'rotate-180' : 'rotate-0'
                }`}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.4 15.4L12 18l2.6-2.6L16 16l-6 6-6-6 1.4-1.4L10 16l-.6-.6z"
              ></path>
            </svg>
          </div>
          {isOpen4 && (
            <div className="p-4 bg-white">
              <h3 className='text-xl'>Lesson Description:</h3>
              <div className='flex'>
                <div className="w-10/12">
                  <p className='me-5'>In this lesson, you'll learn the history of search engines and how they became ingrained in our day-to-day lives. You'll discover how search engines like Google crawl, index, and rank web pages. You'll also learn how to create the right SEO strategy for your business by setting goals and KPIs, and perform an audit of your own website's SEO authority using the included worksheet.</p>
                </div>
                <div className='w-2/12'>
                  <button className='start-course ms-auto'>START COURSE</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-md mx-auto">
        </div>
      </div>
    </section>
  )
}

export default CourseCurriculam