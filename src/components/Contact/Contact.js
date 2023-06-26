import React from 'react'
import location from '../../assects/images/contact-card-img1.png'
import phone from '../../assects/images/contact-card-img2.png'
import mail from '../../assects/images/contact-card-img3.png'
const Contact = () => {
  return (
    <div className='bg-black text-white'>
      <section className='max-w-[1000px] mx-auto py-16 px-5 lg:px-0'>
        <h1 className='text-4xl lg:text-6xl md:text-5xl text-center font-bold mb-3'>Contact Us</h1>
        <p className='lg:px-16 md:px-8 font-semibold text-[#c1cbf3] text-lg text-center'>Dolor sit amet consectetur adipisicing elit seu do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
        <div className='mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5'>
          <div className='rounded-lg shadow-lg transition-all duration-300 hover:bg-[#0e4043] lg:pl-12 md:pl-3 pl-8 py-8 bg-[#1e1e1e]'>
            <div>
              <img src={location} />
            </div>
            <h3 className='text-2xl pt-5'>Location</h3>
            <p className="mt-4 text-[#c1cbf3] text-xl">121 Lincoln Pl Brooklyn, NY 11217</p>
          </div>
          <div className='rounded-lg shadow-lg transition-all duration-300 hover:bg-[#0e4043] lg:pl-12 md:pl-3 pl-8 py-8 bg-[#1e1e1e]'>
            <div>
              <img src={phone} />
            </div>
            <h3 className='text-2xl pt-5'>Phone</h3>
            <p className="mt-4 text-[#c1cbf3] text-xl">+12 234567</p>
            <p className="text-[#c1cbf3] text-xl">+12 234567</p>
          </div>
          <div className='rounded-lg shadow-lg transition-all duration-300 hover:bg-[#0e4043] lg:pl-12 md:pl-3 pl-8 py-8 bg-[#1e1e1e]'>
            <div>
              <img src={mail} />
            </div>
            <h3 className='text-2xl pt-5'>Email</h3>
            <p className="mt-4 text-[#c1cbf3] text-xl">office@securitymag.com</p>
          </div>
        </div>
      </section>
      <section className='py-16 '>
      
        <div className='max-w-[1000px] mx-auto px-6'>
          <div className='text-center mb-8'>
          <p className='text-xl text-[#05994a]'>GET IN TOUCH</p>
          <h2 className='text-5xl mt-3 font-bold'>Send us a Message</h2>
          </div>
        <form className="mx-auto">
          <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          <div className="lg:mb-4 mb-2">
            <label htmlFor="name" className="block text-gray-100 font-bold mb-2">Name:</label>
            <input type="text" id="name" className="w-full px-3 py-3 placeholder-gray-100 bg-gray-700 border border-gray-400 rounded focus:outline-none focus:border-[#00b83d]" placeholder="Enter your name" />
          </div>
          <div className="lg:mb-4 mb-2">
            <label htmlFor="email" className="block text-gray-100 font-bold mb-2">Email:</label>
            <input type="email" id="email" className="w-full px-3 py-3 placeholder-gray-100 bg-gray-700 border border-gray-400 rounded focus:outline-none focus:border-[#00b83d]" placeholder="Enter your email" />
          </div>
          <div className="lg:mb-4 mb-2">
            <label htmlFor="phone" className="block text-gray-100 font-bold mb-2">Phone:</label>
            <input type="tel" id="phone" className="w-full px-3 py-3 placeholder-gray-100 bg-gray-700 border border-gray-400 rounded focus:outline-none focus:border-[#00b83d]" placeholder="Enter your phone number" />
          </div>
          </div>
          <div className="lg:mb-4 mb-2">
            <label htmlFor="message" className="block text-gray-100 font-bold mb-2">Message:</label>
            <textarea id="message" className="w-full px-3 py-3 placeholder-gray-100 bg-gray-700 border border-gray-400 rounded focus:outline-none focus:border-[#00b83d]" rows="7" placeholder="Enter your message"></textarea>
          </div>
         <div className='flex justify-center'>
         <button type="submit" className="bg-[#05994a] text-white font-bold py-4 px-16 mx-auto rounded hover:bg-[#086f38]">Submit</button>
         </div>
        </form>
        </div>
      </section>
      <section >
      <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.6022510694637!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1624596218837!5m2!1sen!2s"  height="450"  allowfullscreen="" loading="lazy"></iframe>
      </section>
    </div>
  )
}


export default Contact;