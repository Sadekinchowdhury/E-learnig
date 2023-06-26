import React ,{useState} from 'react'
import seoImage from '../../../assects/images/seo.jpg'
import Instructor from '../../../assects/images/instructor.jpeg'
import './Seo.css'
const SeoPage = () =>{
    
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleAccordion1 = (num) => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleAccordion2 = (num) => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
    setIsOpen4(false);
  };
  const toggleAccordion3 = (num) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
    setIsOpen4(false);
  };
  const toggleAccordion4 = (num) => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
    setIsOpen4(!isOpen4);
  };

    return (
        <>
         <section className='seo-banner m-lg-5'>
        <div className="grid lg:grid-cols-2 gap-3">
            <div className="flex items-center">
               <div className='seo-intro text-white'>
               <h1 className='text-4xl mb-5'>Search Engine Optimization (SEO)</h1>
                <p className='text-lg mb-4'>Search engine optimization (SEO) is the process of improving your website to increase visibility on popular search engines such as Google and Bing. In this certification course, you'll learn all things SEO, including website optimization, link building, keyword research, and much more.</p>
                <button className='enroll-seo mt-3'>ENROLL NOW</button>
               </div>
            </div>
            <div className="flex items-center justify-center lg:mt-0 mt-4">
                <img className='w-lg-4/5 w-full' src={seoImage} alt="" />
            </div>
        </div>
    </section>
    <section className='seo-details'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <div>
                    <div className="course-info py-3">
                        <h3 className='text-xl md:text-2xl lg:text-3xl'>Who is this for?</h3>
                        <ul className='list-disc ps-5'>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>Marketers</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>Content creators</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>Anyone looking to skill up on SEO</li>
                        </ul>
                    </div>
                    <div className="course-info">
                        <h3 className='text-xl md:text-2xl lg:text-3xl mt-5'>What you'll learn:</h3>
                        <ul className="list-disc ps-5">
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>Evaluate and improve your website's SEO</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>Build backlinks to your website at scale to increase your website's visibility on the search engine results page</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>Use insights from keyword research and reporting to improve your search performance</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <div className="course-info">
                        <h3 className='text-xl md:text-2xl lg:text-3xl'>Course Details</h3>
                        <ul className="list-disc ps-5">
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>6 lessons</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>26 videos</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>5 quizzes</li>
                            <li className='text-sm lg:text-lg md:text-lg mt-2'>3:51 hours</li>
                        </ul>
                    </div>
                    <div className="course-info mt-5">
                        <h3 className='text-xl md:text-2xl lg:text-3xl mb-4'>SKILLS YOU WILL GAIN</h3>
                        <div className="skills">
                            <div className="skill">
                                <span>Search Algorithm</span>
                            </div>
                            <div className="skill">
                                <span>Social Media Marketing</span>
                            </div>
                            <div className="skill">
                                <span>Search Engine Optimization (SEO)</span>
                            </div>
                            <div className="skill">
                                <span>Mathematical Optimization</span>
                            </div>
                            <div className="skill">
                                <span>Social Media</span>
                            </div>
                            <div className="skill">
                                <span>Keyword Research</span>
                            </div>
                            <div className="skill">
                                <span>Semantics</span>
                            </div>
                            <div className="skill">
                                <span>Marketing</span>
                            </div>
                            <div className="skill">
                                <span>Content Marketing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        </>
    )
    
}

export default SeoPage