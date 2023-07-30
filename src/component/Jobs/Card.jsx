import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = () => {

    return (
        <div className='px-4  mx-auto sm:max-w-xl md:max-w-full text-white lg:max-w-screen-xl '>
            <h1 className='text-5xl font-bold text-center mb-8'>Come join us at Bright Future</h1>

            <div className='lg:px-20'>
                <div className='lg:grid grid-cols-3 justify-center bg-gray-300 items-center py-6 px-6 rounded'>
                    <h1 className='text-2xl text-black pl-8'>Product Designer</h1>
                    <div className='flex gap-4 justify-start pl-8 mt-4 md:mt-0 md:pl-0 md:justify-end text-black'>
                        <p>Design</p>
                        <span className='font-extrabold'>.</span>
                        <p>Remote</p>
                    </div>
                    <div className='flex pl-8 md:pl-0 lg:justify-end mt-4 md:mt-0'>
                        <a
                            target='_blank'
                            className="group flex items-center justify-center gap-4 w-40 border border-indigo-600 bg-indigo-600 px-10 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                            href='https://forms.gle/dVnFY7Qcmk3fV19R8'
                        >
                            <span
                                className="font-medium text-white transition-colors text-center group-hover:text-indigo-600 group-active:text-indigo-500"
                            >
                                Apply
                            </span>


                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;