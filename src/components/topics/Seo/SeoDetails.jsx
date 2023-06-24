import React from 'react'
import './SeoDetails.css'
export const SeoDetails = () => {
    return (
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
    )
}
