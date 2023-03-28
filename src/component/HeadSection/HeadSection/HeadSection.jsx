import React from 'react';
import vectorHdr from '../../../Assctes/vectors/vector(header).png';
import Typewriter from 'typewriter-effect';
import { HiArrowSmallRight } from "react-icons/hi2";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const HeadSection = () => {
    return (
        <div className=" header-bg w-full pt-[100px]  md:pb-[0px] pb-[90px]  capitalize">
           <div className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:grid grid-cols-2 md:w-[85%] w-[98%] mx-auto">
                <div className="md:flex items-center ">
                          <h4 className="text-lg md:text-left text-center md:hidden block">We Are Professional</h4>
                        <h1 className='md:text-left text-center md:text-5xl text-3xl md:hidden block md:font-bold font-[900]'>Design & <span className="text-[orange]">Development</span></h1>
                      <img src={vectorHdr} alt="" className="md:w-[400px] m-auto md:hidden block w-[300px]" />

                   <div className="contain text-white w-full md:block hidden">
                       <h4 className="text-lg md:text-left text-center">We Are Professional</h4>
                        <h1 className='md:text-left text-center md:text-5xl text-3xl  md:font-bold font-[900]'>Design & <span className="text-[orange]">Development</span></h1>
                        <h4 className="font-bold mt-4 md:text-2xl text-xl md:w-[auto] w-[170px] mx-auto relative after:absolute after:shadow-lg after:rounded-full after:shadow-[#13ccff] after:bg-[#09a1e8] after:w-[50px] after:h-[5px] after:left-0 after:bottom-0 after:mt-[-20px] pb-3">Service Provider</h4>
                        <span className="md:text-left text-center text-lg text-gray-400 mt-[40px] pt-4">
                              <Typewriter
                                options={{
                                    strings: ['Develop and design', 'Client Management', 'Web application based interface'],
                                    autoStart: true,
                                    loop: true,
                                }}
                               />
                        </span>
                        <div className="md:block flex justify-center items-center">
                                <button className="mt-[50px] flex shadow-btn items-center gap-2 bg-[#079dbf] px-3 py-2 rounded-lg "><span className="bg-[#125e82] w-[30px] h-[30px] flex justify-center items-center rounded-lg text-xl duration-200 "><HiArrowSmallRight /> </span> Let's Work Together </button>
                        </div>
                   </div>
                </div>
                <div className="p-3 flex items-center md:justify-end justify-center">
                    <img src={vectorHdr} alt="" className="md:w-[400px] md:block hidden w-[300px]" />

                       <div className="contain text-white w-full md:hidden block">
                       <h4 className="text-lg md:text-left text-center md:block hidden">We Are Professional</h4>
                        <h1 className='md:text-left text-center md:text-5xl text-3xl md:block hidden md:font-bold font-[900]'>Design & <span className="text-[orange]">Development</span></h1>
                        <h4 className="font-bold mt-4 md:text-2xl text-xl md:w-[auto] w-[170px] mx-auto relative after:absolute after:shadow-lg after:rounded-full after:shadow-[#13ccff] after:bg-[#09a1e8] after:w-[50px] after:h-[5px] after:left-0 after:bottom-0 after:mt-[-20px] pb-3">Service Provider</h4>
                        <span className="md:text-left text-center text-lg text-gray-400 mt-[40px] pt-4">
                              <Typewriter
                                options={{
                                    strings: ['Develop and design', 'Client Management', 'Web application based interface'],
                                    autoStart: true,
                                    loop: true,
                                }}
                               />
                        </span>
                        <div className="md:block flex justify-center items-center">
                                <button className="mt-[50px] flex shadow-btn items-center gap-2 bg-[#079dbf] px-3 py-2 rounded-lg "><span className="bg-[#125e82] w-[30px] h-[30px] flex justify-center items-center rounded-lg text-xl duration-200 "><HiArrowSmallRight /> </span> Let's Work Together </button>
                        </div>
                   </div>
                </div>
           </div>
        </div>
    );
};

export default HeadSection;