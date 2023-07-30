import React from 'react';
import vectorHdr from '../../../Assctes/vectors/vector(header).png';
import Typewriter from 'typewriter-effect';
import { HiArrowSmallRight } from "react-icons/hi2";
import "animate.css/animate.min.css";
import homeVc from './company.json';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

const HeadSection = () => {
      return (
            <div className=" header-bg w-full md:pt-[100px] pt-[100px]     capitalize">

                  <div className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8 ">
                        <div className="flex flex-col items-center justify-between w-full  lg:flex-row">
                              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                                    <div className="max-w-xl mb-6">
                                          <div>
                                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-400 text-teal-900 rounded-full">
                                                      <Typewriter
                                                            options={{
                                                                  strings: ['Web Design', 'Web Development', 'Apps Design', 'Apps Development', 'Software Consultant', 'Software Solutions', 'POS', 'E-commerce', 'E-learning'],
                                                                  autoStart: true,
                                                                  loop: true,
                                                            }}
                                                      />
                                                </p>
                                          </div>
                                          <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl sm:leading-none max-w-lg mb-6">
                                                You have an {' '}
                                                <span className="inline-block text-purple-400">IDEA,</span>
                                                <br className="" />
                                                we have the{' '}
                                                <span className="inline-block text-purple-400">technology.</span>
                                          </h2>
                                          <p className="text-gray-300 text-base md:text-lg">You can be confident that we will provide you with nothing but the best service from our side.</p>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                          <Link
                                                className="group flex items-center justify-between gap-4  border border-indigo-600 bg-indigo-600 px-10 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                                                to='/contract'
                                          >
                                                <span
                                                      className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                                                >
                                                      Contract Us
                                                </span>


                                          </Link>

                                          {/* Border */}

                                          <Link
                                                className="group flex items-center justify-between gap-4  border border-current px-10 py-3 text-indigo-600 transition-colors hover:bg-indigo-600 focus:outline-none focus:ring active:bg-indigo-500"
                                                to="/careers"
                                          >
                                                <span className="font-medium transition-colors group-hover:text-white">

                                                      View Jobs
                                                </span>


                                          </Link>
                                    </div>
                              </div>
                              <div className="flex items-center justify-center lg:w-1/2">
                                    <Lottie className='lg:w-10/12' animationData={homeVc} loop={true} />
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default HeadSection;