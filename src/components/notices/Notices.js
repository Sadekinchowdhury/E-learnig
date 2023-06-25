import React from 'react'
import { Link } from 'react-router-dom'

const Notices = () => {

  return (
    <div className='py-8 bg-[#00194a]'>
        <h2 className='text-3xl text-center text-white'>Notifications</h2>
        <div className='max-w-[900px] mx-auto border border-red-500 mt-5'>
<ul className='flex gap-5'>
                <li>
                <Link className='btn btn-lg bg-black text-white font-semibold py-3 px-4 rounded' to="/notices/private">Private Notice</Link>
                </li>
                <li>
                <Link className='btn btn-lg bg-black text-white font-semibold py-3 px-4 rounded' to="/notices/public">Private Notice</Link>
                </li>
            </ul>            
        </div>
    </div>
  )
}

export default Notices