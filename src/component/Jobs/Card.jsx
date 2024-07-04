import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ data }) => {

    return (
        <div className=''>
           

            <div className='lg:px-20'>
                <div className='lg:grid grid-cols-3 justify-center bg-gray-300 items-center py-6 px-6 rounded'>
                    <h1 className='text-2xl text-black pl-8'>{data.job_position}</h1>
                    <div className='flex gap-4 justify-start pl-8 mt-4 md:mt-0 md:pl-0 md:justify-end text-black'>
                        <p>{data.job_type}</p>
                        <span className='font-extrabold'>.</span>
                        <p>{data.workplace}</p>
                    </div>
                    <div className='flex pl-8 md:pl-0 lg:justify-end mt-4 md:mt-0'>
                        <a
                            target='_blank'
                            className="group flex items-center justify-center gap-4 w-40 border border-indigo-600 bg-indigo-600 px-10 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                            href={data.link}
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