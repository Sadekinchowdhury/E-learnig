import {IoIosNotifications} from 'react-icons/io'
import {AiOutlineFolderView} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'
import Img from '../../assects/images/course-image.webp'
import './Notice.css'
const PrivateNotice =() =>{
    const notices = [{
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolores ratione. Explicabo deserunt doloribus corporis at aperiam commodi, exercitationem dolorum tenetur blanditiis, laborum vero architecto.',
        img:Img
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolores ratione. Explicabo deserunt doloribus corporis at aperiam commodi, exercitationem dolorum tenetur blanditiis, laborum vero architecto.',
        img:Img
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolores ratione. Explicabo deserunt doloribus corporis at aperiam commodi, exercitationem dolorum tenetur blanditiis, laborum vero architecto.',
        img:Img
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolores ratione. Explicabo deserunt doloribus corporis at aperiam commodi, exercitationem dolorum tenetur blanditiis, laborum vero architecto.',
        img:Img
    },{
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolores ratione. Explicabo deserunt doloribus corporis at aperiam commodi, exercitationem dolorum tenetur blanditiis, laborum vero architecto.',
        img:Img
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

export default PrivateNotice