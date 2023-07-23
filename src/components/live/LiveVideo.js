import React from 'react';
import ReactPlayer from 'react-player';

const LiveVideo = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className="w-full grid gap-5 grid-cols-1 lg:grid-cols-4">
                <div className="">
                    <ReactPlayer url="https://www.youtube.com/watch?v=t4fwWjXj_x8" controls width="100%" height={300} />
                    <div className='p-3'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold'>Web Design</h1>
                            <h1 className='text-xl font-semibold'>$200</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ReactPlayer url="https://www.youtube.com/watch?v=t4fwWjXj_x8" controls width="100%" height={300} />
                    <div className='p-3'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold'>Web Design</h1>
                            <h1 className='text-xl font-semibold'>$200</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ReactPlayer url="https://www.youtube.com/watch?v=t4fwWjXj_x8" controls width="100%" height={300} />
                    <div className='p-3'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold'>Web Design</h1>
                            <h1 className='text-xl font-semibold'>$200</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ReactPlayer url="https://www.youtube.com/watch?v=t4fwWjXj_x8" controls width="100%" height={300} />
                    <div className='p-3'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold'>Web Design</h1>
                            <h1 className='text-xl font-semibold'>$200</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ReactPlayer url="https://www.youtube.com/watch?v=t4fwWjXj_x8" controls width="100%" height={300} />
                    <div className='p-3'>
                        <div className='flex justify-between'>
                            <h1 className='font-semibold'>Web Design</h1>
                            <h1 className='text-xl font-semibold'>$200</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LiveVideo;