import React from 'react';
import vectorHdr from '../../../Assctes/vectors/vector(header).png';
import Typewriter from 'typewriter-effect';
import { HiArrowSmallRight } from "react-icons/hi2";
import "animate.css/animate.min.css";
import homeVc from '../../../Assctes/vectors/App Development.json';
import Lottie from "lottie-react";

const HeadSection = () => {
    return (
        <div className=" header-bg w-full md:pt-[10px] pt-[100px]  md:pb-[0px] pb-[90px]  capitalize">
           <div className="px-4 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:grid grid-cols-2 md:w-[85%] w-[98%] mx-auto">
                <div className="md:flex items-center ">
                          <h4 className="text-lg md:text-left text-center md:hidden block">You have the idea</h4>
                        <h1 className='md:text-left text-center md:text-5xl text-2xl md:hidden flex md:font-bold font-[900]'>WE HAVE THE <span className="text-[orange]">TECHNOLOGY</span></h1>

                       <div className="flex -mt-10 justify-end overflow-hidden md:hidden ">
                            <Lottie className="md:hidden block" animationData={homeVc} loop={true}/>
                      </div>

                   <div className="contain text-white w-full md:block hidden">
                       <h4 className="text-lg md:text-left text-center">You have the idea</h4>
                        <h1 className='md:text-left text-center md:text-5xl text-3xl  md:font-bold font-[900] flex gap-2'><div className="text-left">WE HAVE THE</div> <div className="text-[#ff9d00]"> Technology</div></h1>
                        <h4 className="font-bold md:mt-4 -mt-20 md:text-2xl text-xl md:w-[auto] w-[170px] mx-auto relative after:absolute after:shadow-lg after:rounded-full after:shadow-[#13ccff] after:bg-[#09a1e8] after:w-[50px] after:h-[5px] after:left-0 after:bottom-0 after:mt-[-20px] pb-3">Service Provider</h4>
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
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSebfghbC9kvuOcJ6QQTF0gRFkqJZLFhvGsgSdkNLrF51qWXmQ/viewform" className="mt-[50px] w-[200px] flex shadow-btn items-center gap-2 bg-[#079dbf] px-3 py-2 rounded-lg "><span className="bg-[#125e82] w-[30px] h-[30px] flex justify-center items-center rounded-lg text-xl duration-200 "><HiArrowSmallRight /> </span> Build your future </a>
                        </div>
                   </div>
                </div>
                <div className="flex items-center md:justify-end justify-end ">
                      <div className="hidden md:flex justify-end overflow-hidden ">
                            <Lottie className="hidden md:block" animationData={homeVc} loop={true}/>
                      </div>

                       <div className="contain text-white w-full md:hidden block">
                       <h4 className="text-lg md:text-left text-center md:block hidden">You have the idea</h4>
                        <h1 className='md:text-left text-center md:text-5xl text-3xl md:flex hidden md:font-bold font-[900] '>WE HAVE TH<span className="text-[orange]">TECHNOLOGY</span></h1>
                        <h4 className="font-bold md:mt-4 -mt-[50px] md:text-2xl text-xl md:w-[auto] w-[170px] mx-auto relative after:absolute after:shadow-lg after:rounded-full after:shadow-[#13ccff] after:bg-[#09a1e8] after:w-[50px] after:h-[5px] after:left-0 after:bottom-0 after:mt-[-20px] pb-3">Service Provider</h4>
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