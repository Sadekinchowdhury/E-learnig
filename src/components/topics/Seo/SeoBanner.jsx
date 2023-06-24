import React from 'react'
import seoImage from '../../../assects/images/seo.jpg'
import './SeoBanner.css'
const SeoBanner = () => {
  return (
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
  )
}

export default SeoBanner