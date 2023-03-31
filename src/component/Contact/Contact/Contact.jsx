import React from 'react';
import { MdFacebook, MdOutlineMail, MdPhone } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="contact-bg">
            <div className="px-1 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                    <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Want to talk about <span className="shadow-tx"> your project?</span></h1>

                    <div className="contact-box py-6 mt-12 p-2 rounded">
                         <div className="grid md:grid-cols-2 grid-cols-1">
                              <div className="py-[40px] px-[60px]">
                                  <h1 className="font-bold text-3xl">Contact us</h1>

                                  <ul className="mt-7">
                                      <li className=''>
                                         <Link to="" className="flex items-center gap-2 duration-200 hover:text-blue-400"><MdOutlineMail className='text-2xl text-[#00a2ff]'/> info@thebrightfuture.co</Link>
                                      </li>
                                      <li className='mt-6'>
                                         <Link to="" className="flex items-center gap-2 duration-200 hover:text-blue-400"><MdPhone className='text-2xl text-[#00a2ff]'/>01792-205520</Link>
                                      </li>
                                      <li className='mt-6'>
                                         <Link to="https://www.facebook.com/thebrightfuture.co" className="flex items-center gap-2 duration-200 hover:text-blue-400"><MdFacebook className='text-2xl text-[#00a2ff]'/>Facebook</Link>
                                      </li>
                                      <li className='mt-6'>
                                         <Link to="https://www.linkedin.com/company/thebrightfuture-co/mycompany/verification/" className="flex items-center gap-2 duration-200 hover:text-blue-400"><BsLinkedin className='text-xl text-[#00a2ff]'/> Linked In</Link>
                                      </li>
                                  </ul>
                              </div>
                              <div className="">
                                  <form action="" className="text-[#0095ff] px-4 py-5 md:w-[80%] rounded-xl mx-auto form-bg">
                                          <h3 className="text-xl text-center">Your Message</h3>
                                          <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-4">
                                            <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[47px] h-[3px] left-[14px] top-[-2px]">.</div>
                                            <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">Name</label>
                                            <input type="text" className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="enter your name" />
                                          </div>
                                        
                                          <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">
                                             <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[47px] h-[3px] left-[14px] top-[-2px]">.</div>
                                            <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">Email</label>
                                            <input type="email" className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="enter your email" />
                                          </div>
                                          <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">
                                             <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[67px] h-[3px] left-[14px] top-[-2px]">.</div>
                                            <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">Message</label>
                                            <textarea type="text" className="w-full h-[110px] rounded-lg outline-none border-none bg-[#00000034] " placeholder="enter your message" />
                                          </div>

                                          <input type="submit" className="mt-8 bg-[#1A2644] w-full p-3 rounded-lg"  value="send"/>
                                  </form>
                              </div>
                         </div>
                    </div>
            </div>
        </div>
    );
};

export default Contact;