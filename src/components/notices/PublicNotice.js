import Img from '../../assects/images/course-image.webp'
import {IoIosNotifications} from 'react-icons/io'
import {AiOutlineFolderView} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'

import web from '../../assects/images/notice-image-web.jpg'
import './Notice.css'
const PublicNotice =() =>{
    const notices = [{
        title: 'Learn how to increase your web development skills',
        desc: 'Define your learning goals: Determine what specific areas or technologies you want to improve in web development. It could be front-end development, back-end development, database management, or mastering a particular framework or language.',
        img:web
    },
    {
        title: 'Learn how to increase your web development skills',
        desc: 'Define your learning goals: Determine what specific areas or technologies you want to improve in web development. It could be front-end development, back-end development, database management, or mastering a particular framework or language.',
        img:web
    },
    {
        title: 'Learn how to increase your web development skills',
        desc: 'Define your learning goals: Determine what specific areas or technologies you want to improve in web development. It could be front-end development, back-end development, database management, or mastering a particular framework or language.',
        img:web
    },
    {
        title: 'Learn how to increase your web development skills',
        desc: 'Define your learning goals: Determine what specific areas or technologies you want to improve in web development. It could be front-end development, back-end development, database management, or mastering a particular framework or language.',
        img:web
    },{
        title: 'Learn how to increase your web development skills',
        desc: 'Define your learning goals: Determine what specific areas or technologies you want to improve in web development. It could be front-end development, back-end development, database management, or mastering a particular framework or language.',
        img:web
    }
] 
    return (<div className='notifications pb-5 text-white'>
        <div className='notice-container m-auto px-5'>
            {
                notices.map( (notice ,i) => <div key={i} className="notice flex lg:flex-row md:flex-row flex-col ">
                <div className='notice-img'>
                    <img className='w-full' src={notice.img} alt="" />
                </div>
                <div className="notice-info ms-4 mt-3 lg:mt-0 md:mt-0  p-4">
                    <h2 className="title text-xl md:text-2xl lg:text-3xl text-[#00ba57]">{notice.title}</h2>
                    <p className='mt-3'>{notice.desc}</p>
                    <div className="mt-4 flex">
                    <button className='notice-btn mr-4'><span className='mr-3'><AiOutlineFolderView /></span> Preview</button>
                    <button className='notice-btn'><span className='mr-3'><HiDownload /></span> Download</button>
                    </div>
                </div>
                
                <div className="seriul">{i+1}</div>
            </div>)
            }
        </div>
    </div>)
}

export default PublicNotice