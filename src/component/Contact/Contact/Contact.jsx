import React, { useRef, useState } from 'react';
import { MdFacebook, MdOutlineMail, MdPhone } from 'react-icons/md';
import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import ReactDOM from "react-dom";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./groovyWalkAnimation.json";
import Title from '../../../layout/Title';

const Contact = () => {
    const [activeMdl, setActiveMdl] = useState(false);
    const [loading, setLoading] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();
        emailjs
            .sendForm(
                "thebrightfuture",
                "thebrightfuture.co",
                form.current,
                "k1X9xhaxBhNtWQbrr"
            )
            .then(
                (result) => {
                    setActiveMdl(true)
                    setLoading(false)


                },
                (error) => {
                    setActiveMdl(false)
                    setLoading(false)

                }
            );

        e.target.reset();
    };

    if (activeMdl) {
        setTimeout(() => setActiveMdl(false), 2000);
    }

    return (
        <div className="contact-bg">

            <div align="center" className={`${activeMdl ? "block" : "hidden"} 
            bg-[#192c3c]
            modal-box  text-blue-200 text-lg py-4 fixed top-0 bottom-0 left-0 right-0 m-auto z-50 overflow-hidden rounded-2xl p-2 h-[300px] items-center `}>
                <Lottie className="w-[170px]" animationData={groovyWalkAnimation} loop={false} /> <p className="text-4xl ">
                    Your message send successfully
                </p>
            </div>

            {/* <section class="py-10 bg-gray-100 sm:py-16 lg:py-24 contact-box ">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
                    <div class="max-w-2xl mx-auto text-center">
                        <h1 className="text-2xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Want to talk about <span className="shadow-tx"> your project?</span></h1>

                        <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
                    </div>

                    <div class="max-w-5xl mx-auto mt-12 sm:mt-16 ">
                        <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                            <div class="overflow-hidden text-gray-400 form-bg rounded-xl">
                                <div class="p-6">
                                    <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <a href="tel:+880 1792-205520" class="mt-6 text-lg font-medium ">+880 1792-205520</a>
                                    <p class="mt-1 text-lg font-medium ">+88</p>
                                </div>
                            </div>

                            <div class="overflow-hidden form-bg rounded-xl text-gray-400">
                                <div class="p-6">
                                    <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <p class="mt-6 text-lg font-medium ">contact@brightfuturesoft.com</p>
                                    <p class="mt-1 text-lg font-medium ">hr@brightfuturesoft.com</p>
                                </div>
                            </div>

                            <div class="overflow-hidden bg-white rounded-xl">
                                <div class="p-6">
                                    <svg class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p class="mt-6 text-lg font-medium leading-relaxed text-gray-900">Fully Remote, </p>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 overflow-hidden bg-white rounded-xl">
                            <div class="px-6 py-12 sm:p-12">
                                <h3 class="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                                <form action="#" method="POST" class="mt-14">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Your name </label>
                                            <div class="mt-2.5 relative">
                                                <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                            <div class="mt-2.5 relative">
                                                <input type="email" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Phone number </label>
                                            <div class="mt-2.5 relative">
                                                <input type="tel" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            </div>
                                        </div>

                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Company name </label>
                                            <div class="mt-2.5 relative">
                                                <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="" class="text-base font-medium text-gray-900"> Message </label>
                                            <div class="mt-2.5 relative">
                                                <textarea name="" id="" placeholder="" class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <div className="px-1 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                <h1 className="text-2xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Want to talk about <span className="shadow-tx"> your project?</span></h1>

                <div className="contact-box py-6 mt-12 p-2 rounded text-white">
                    <h1 className="font-bold text-3xl text-center ">Contact us</h1>
                    <div className="flex flex-col-reverse lg:flex-row w-full justify-between items-center">

                        <div className="px-20">


                            <ul className="flex item-center gap-3  justify-start">
                                {/* <li className=''>
                                    <a href="mailto:info@thebrightfuture.co" className=" gap-2 duration-200 hover:text-blue-400"><MdOutlineMail className='text-4xl bg-white hover:bg-blue-300 p-1 rounded-full text-[#00a2ff]' /> </a>
                                </li> */}
                                <li className='mt-6'>
                                    <a href="mailto:info@thebrightfuture.co" className=" gap-2 duration-200 hover:text-blue-400"><MdOutlineMail className='text-4xl text-[#00a2ff] bg-white hover:bg-blue-300 p-1 rounded-full' /></a>
                                </li>
                                <li className='mt-6'>
                                    <a href="tel:+8801792-205520" className=" gap-2 duration-200 hover:text-blue-400"><MdPhone className='text-4xl text-[#00a2ff] bg-white hover:bg-blue-300 p-1 rounded-full' /></a>
                                </li>
                                <li className='mt-6'>
                                    <Link target='_blank' to="https://www.facebook.com/thebrightfuture.co" className=" gap-2 duration-200 hover:text-blue-400"><MdFacebook className='text-4xl text-[#00a2ff] bg-white hover:bg-blue-300 p-1 rounded-full' /></Link>
                                </li>
                                <li className='mt-6'>
                                    <a target='_blank' href="https://bd.linkedin.com/company/thebrightfuture-co" className=" gap-2 duration-200 hover:text-blue-400"><BsLinkedin className=' text-[#00a2ff] bg-white hover:bg-blue-300 p-1 text-4xl rounded-full' /> </a>
                                </li>
                                <li className='mt-6'>
                                    <a target='_blank' href="https://www.instagram.com/thebrightfuture_co/" className=" gap-2 duration-200 hover:text-blue-400"><BsInstagram className='text-4xl text-[#00a2ff] bg-white hover:bg-blue-300 p-1 rounded-full' /></a>
                                </li>
                                <li className='mt-6'>
                                    <a target='_blank' href="https://twitter.com/thebrihgtfuture" className=" gap-2 duration-200 hover:text-blue-400"><BsTwitter className='text-4xl text-[#00a2ff] bg-white hover:bg-blue-300 p-1 rounded-full' /> </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full mt-10">
                            <form ref={form} onSubmit={sendEmail} className="text-[#0095ff] px-4 py-5 md:w-[60%] rounded-xl mx-auto form-bg capitalize">
                                <h3 className="text-4xl text-center">Your Message</h3>
                                <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-4">

                                    <input required name="from_name" id='from_name' type="text" className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="Enter your name" />
                                </div>

                                <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">

                                    <input required type="email" id='reply_to' name="reply_to" className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="Enter your email" />
                                </div>
                                <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">

                                    <textarea name="message" type="text" className="w-full h-[110px] rounded-lg outline-none border-none bg-[#00000034] " placeholder="Enter your message" />
                                </div>

                                <button type="submit" className="mt-8 bg-[#1A2644] hover:bg-blue-500 text-white w-full p-3 rounded-lg" disabled={loading}>{!loading ? "Submit" : <div align="center" className=' justify-center'>
                                    <div className="flex">
                                        <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-[#1e3d8d] border-4"></div>
                                        <div className="ml-2"> Processing... </div>
                                    </div>
                                </div>}
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;