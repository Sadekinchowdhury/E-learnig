import React from 'react'
import web from '../../assects/images/web-development.jpg'
import html from '../../assects/images/html.png'
import css from '../../assects/images/css.avif'
import js from '../../assects/images/js.png'
import bootstrap from '../../assects/images/bootstrap.webp'
import react from '../../assects/images/react.webp'
import next from '../../assects/images/next-js.webp'
import i1 from '../../assects/images/1.png'
import i2 from '../../assects/images/2.png'
import i3 from '../../assects/images/2.png'
import s1 from '../../assects/images/s1.png'
import s2 from '../../assects/images/s2.png'
import s3 from '../../assects/images/s3.png'
import { GiCheckMark} from 'react-icons/gi'

const WebDevelopment = () => {
  return (
    <div className=''>
      <section className="p-16 overflow-x-hidden lg:p-16 grid lg:grid-cols-2 gap-2 lg:gap-4">
        <div className='flex flex-col justify-center items-start text-[#1e3a8a]'>
          <h4 className='text-xl'>DISCOVER RESEARCH</h4>
          <h1 className='lg:text-6xl md:text-5xl text-4xl my-6'>Start your journy in web development with us</h1>
          <div className="flex flex-wrap gap-2 py-5">
            <div className="w-16">
              <img className='w-full' src={html} alt="" />
            </div>
            <div className="w-16">
              <img className='w-full' src={css} alt="" />
            </div>
            <div className="w-16">
              <img src={js} alt="w-full h-full" />
            </div>
            <div className="w-16 mx-1 p-1">
              <img className='w-full' src={bootstrap} alt="" />
            </div>
            <div className="w-16 mx-1 p-1">
              <img className='w-full' src={react} alt="" />
            </div>
            <div className="w-16">
              <img className='w-full' src={next} alt="" />
            </div>
          </div>
          <button className='btn btn-lg bg-[#06b6d4] text-white lg:px-12 lg:py-5 px-8 py-3 lg:text-xl text-lg font-bold mt-4'>ENROLL NOW</button>
        </div>
        <div>
          <img className='w-full' src={web} alt="" />
        </div>
      </section>
      <section className='' style={{marginTop:'-50px'}}>
        <div className="w-full lg:w-3/4 mx-auto lg:grid grid-cols-3 gap-4 bg-teal-700 p-8 rounded font-semibold text-white">
          <div className='col-span-1 lg:text-start text-center mb-5 lg:md-0 lg:border-r border-[#FFFF00]'>
            <h2 className='text-3xl py-2 font-bold'>Vivamus maximus</h2>
            <p className='text-lg'>Lorem ipsum dolor sadipscing elitr, sed diam nonum</p>
            <ul className='pt-5'>
              <li><GiCheckMark className='font-extrabold inline'/> Nullam est</li>
              <li><GiCheckMark className='font-extrabold inline'/> Mattis dictum nunc</li>
            </ul>
          </div>
          <div className="col-span-2">
            <div className="lg:grid flex flex-col items-center grid-cols-3 gap-3">
              <div className='flex flex-col items-center justify-center lg:border-r border-[#FFFF00]'>
                <img src={i1} alt="" />
                <h3 className='text-2xl font-bold'>Postgraduate</h3>
                <p>Lorem ipsum dolor</p>
              </div>
              <div className='flex flex-col items-center justify-center lg:border-r border-[#FFFF00]'>
                <img src={i2} alt="" />
                <h3 className='text-2xl font-bold'>Postgraduate</h3>
                <p>Lorem ipsum dolor</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src={i3} alt="" />
                <h3 className='text-2xl font-bold'>Postgraduate</h3>
                <p>Lorem ipsum dolor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-100 p-16 border-1 border-red-500 mt-5'>
        <div className="lg:grid grid-cols-3 gap-10  text-[#083344]">
          <div className='col-span-2'>
            <p className='text-xl font-semibold'>Funfact</p>
            <h2 className='text-4xl font-bold mt-3 mb-6'>Strength in Numbers</h2>
            <p className='font-semibold'>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy</p>
            <div className="flex items-center justify-center mt-8 w-[250px] py-5 px-5 bg-[#02812a] text-white rounded">
              <h3 className='font-bold text-3xl'>2.4k+</h3>
              <span className='font-semibold leading-5'>Successful <br /> students</span>
            </div>
          </div>
          <div className='col-span-1 mt-5 lg:mt-0'>
            <div className='flex items-center bg-white px-5 py-5 rounded-lg'>
              <div className="bg-[#00ff50] p-2 rounded">
               <img className='w-[50px]' src={s1} alt="" />
              </div>
              <div className='ps-5 text-[#083344]'>
                <h3 className='text-2xl font-bold'>1200+</h3>
                <p className='font-semibold'>Learners & counting</p>
              </div>
            </div>
            <div className='flex items-center bg-white px-5 py-5 rounded-lg my-5'>
              <div className="bg-[#00ff50] p-2 rounded">
               <img className='w-[50px]' src={s2} alt="" />
              </div>
              <div className='ps-5 text-[#083344]'>
                <h3 className='text-2xl font-bold'>320+</h3>
                <p className='font-semibold'>Total courses</p>
              </div>
            </div>
            <div className='flex items-center bg-white px-5 py-5 rounded-lg'>
              <div className="bg-[#00ff50] p-2 rounded">
               <img className='w-[50px]' src={s3} alt="" />
              </div>
              <div className='ps-5 text-[#083344]'>
                <h3 className='text-2xl font-bold'>1200+</h3>
                <p className='font-semibold'>Successful students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebDevelopment;