import React, { useEffect } from 'react';
import JobCard from './Card';
import { useState } from 'react';

const Job = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [jobList, setBlogList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setBlogList(data))
    }, [])

    return (
        <div className='join-bg py-20'>

            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full text-white lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                {/* <div className="grid gap-10 lg:grid-cols-2 mb-4">
                    <div className="lg:pr-10">
                        <a
                            href="/"
                            aria-label="Go Home"
                            title="Logo"
                            className="inline-block mb-5"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg
                                    className="w-10 h-10 text-purple-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                        </a>
                        <h5 className="mb-4 text-4xl font-extrabold leading-none">
                            Come work
                            <br className="hidden md:block" />
                            with us at
                            <span className="inline-block ml-4 text-purple-400">
                                Bright Future
                            </span>
                        </h5>
                        <p className="mb-6 text-gray-100">
                            Bright Future is a trusted tech company offering software solutions, web development, app solutions, and software consulting. Our skilled team of innovators creates scalable, secure, and forward-thinking solutions for businesses across industries. Join us and discover the limitless potential for your business.Bright Future is a trusted tech company offering software solutions, web development, app solutions, and software consulting. Our skilled team of innovators creates scalable, secure, and forward-thinking solutions for businesses across industries. Join us and discover the limitless potential for your business.
                        </p>
                        <hr className="mb-5 border-gray-100" />
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://twitter.com/thebrihgtfuture"
                                target='_blank'
                                className="text-gray-100 transition-colors duration-300 hover:text-purple-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/thebrightfuture/"
                                target='_blank'
                                className="text-gray-100 transition-colors duration-300 hover:text-purple-400"
                            >
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4" />
                                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                                </svg>
                            </a>
                            <a
                                href="/"
                                className="text-gray-100 transition-colors duration-300 hover:text-purple-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.youtube.com/@thebrightfuture-co"
                                className="text-gray-100 transition-colors duration-300 hover:text-purple-400"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                                    <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt=""
                        />
                    </div>
                </div> */}

                <div className='flex justify-center'>
                    <h1 className='lg:text-[180px] md:text-7xl text-5xl font-bold text-[#6666671a] text-center z-1 absolute'>Bright Future</h1>
                </div>
                <h1 className='lg:text-5xl text-xl md:text-2xl text-center font-sans font-bold lg:mt-36 mt-8 relative z-5'>At Bright Future, our company values reflect the core beliefs and guiding principles that shape our culture, decision-making process, and overall behavior.</h1>
            </div>
            <h1 className='text-5xl font-bold text-center mb-8'>Come join us at Bright Future</h1>
            <div className='grid grid-cols-1 gap-4 px-4  mx-auto sm:max-w-xl md:max-w-full text-white lg:max-w-screen-xl '>
                {jobList.map(data => <JobCard data={data}></JobCard>)}

            </div>
        </div>
    );
};

export default Job;