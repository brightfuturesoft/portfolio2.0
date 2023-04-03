import React from 'react';
import logo from '../../../Assctes/logo.png'
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="bg-orange-400 w-full footer-bg">
            <div className="px-1 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 md:w-[80%] w-[95%]">
                 <div className="grid md:grid-cols-3  gap-2">
                      <div className="">
                          <img src={logo} alt="" className="w-[120px] md:mx-0 mx-auto" />
                          <p className="mt-4 text-sm md:text-left text-center text-[gray]">
                            Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam.
                          </p>
                      </div>
                      <div className="col-span-2">
                           <div className="grid md:grid-cols-3 grid-cols-2 gap-2 cols-3">
                                 <div className="">
                                    <h2 className="text-white font-semibold md:text-left text-center md:mt-0 mt-4">Social media</h2>
                                     <ul className="mt-3">
                                         <li>
                                            <Link to="" className="text-blue-500 flex items-center md:justify-start justify-center gap-2">
                                                <BsFacebook className='text-xl'/> Facebook
                                            </Link>
                                         </li>
                                         <li className='mt-3'>
                                            <Link to="" className="text-blue-500 flex items-center md:justify-start justify-center gap-2">
                                                <BsLinkedin className='text-xl'/> Linked In
                                            </Link>
                                         </li>
                                         <li className='mt-3'>
                                            <Link to="" className="text-blue-400 flex items-center md:justify-start justify-center gap-2">
                                                <BsTwitter className='text-xl'/> Twitter
                                            </Link>
                                         </li>
                                         <li className='mt-3'>
                                            <Link to="" className="text-green-400 flex items-center md:justify-start justify-center gap-2">
                                                <BsWhatsapp className='text-xl'/> Twitter
                                            </Link>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="">
                                    <h2 className="text-white font-semibold md:text-left text-center md:mt-0 mt-4">Cherry</h2>
                                     <ul className="">
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500 ">Web</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">eCommerce</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Business</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Entertainment</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Portfolio</Link> 
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="md:block hidden">
                                       <h2 className="text-white font-semibold md:text-left text-center md:mt-0 mt-4">Apples</h2>
                                     <ul className="">
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Media</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Brochure</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Nonprofit</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Educational</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Project</Link> 
                                         </li>
                                     </ul>
                                 </div>
                                  
                           </div>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default Footer;