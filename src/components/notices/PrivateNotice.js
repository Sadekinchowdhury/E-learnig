import Img from '../../assects/images/course-image.webp'
import {IoIosNotifications} from 'react-icons/io'
import {AiOutlineFolderView} from 'react-icons/ai'
import {HiDownload} from 'react-icons/hi'
import './Notice.css'
const Notifications =() =>{
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
    return (<div className='notifications py-5'>
       <h3> <span><IoIosNotifications className='inline'/></span> Notifications</h3>
        <div className='notice-container m-auto px-5'>
            {
                notices.map( (notice ,i) => <div className="notice flex">
                <div className="notice-info p-4 ms-4">
                    <h2 className="title text-xl md:text-2xl lg:text-3xl ml-5">{notice.title}</h2>
                    <p className='mt-3'>{notice.desc}</p>
                    <div className="mt-4 flex">
                    <button className='notice-btn mr-4'><span className='mr-3'><AiOutlineFolderView /></span> Preview</button>
                    <button className='notice-btn'><span className='mr-3'><HiDownload /></span> Download</button>
                    </div>
                </div>
                <div className='notice-img'>
                    <img className='w-full' src={notice.img} alt="" />
                </div>
                <div className="seriul">{i+1}</div>
            </div>)
            }
        </div>
    </div>)
}

export default Notifications