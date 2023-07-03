import React from 'react'

export const Banner = () => {
    return (
        <div className="w-11/12 my-8 lg:h-[500px]  text-white p-2 m-3 grid grid-cols-1 gap-10 md:grid-cols-2 mx-auto">
            <div className="w-full h-full">
                <img
                    className="rounded-2xl w-full  h-full"
                    src="https://qph.cf2.quoracdn.net/main-qimg-915b7365383ff59ccf4b651294694c70-pjlq"
                    alt=""
                />
            </div>
            <div className="p-3 flex items-center justify-center">
                <div className=''>
                    <h1 className="text-xl text-center lg:text-4xl mb-4 lg:mb-8 mt-2 lg:mt-5">
                        Take the next step <br /> toward your personal and <br /> professional goals with
                    </h1>
                    <p className="text-xs text-center lg:text-sm font-medium">
                        Join now to receive personalized recommendations from the full Course
                    </p>
                </div>
            </div>
        </div>

    )
}
