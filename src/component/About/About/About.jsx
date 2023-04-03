import React from 'react';
import vec from '../../../Assctes/vectors/vector(mission).png'
import vt from '../../../Assctes/vectors/vector.jpg'
const About = () => {
    return (
        <div className='py-4 bg-[#020A1C] p-2'>
            <div className="head px-2 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:grid grid-cols-2 md:w-[85%] w-[98%] mx-auto bg-[#17242c] rounded-lg">
                    <div className="flex items-center justify-center">
                            <div className="md:pl-8">
                                <h1 className='text-white md:text-left text-center md:text-4xl text-2xl font-bold'>
                                    We Build <br className="md:block" /> Web & <span className="text-[orange]">Web Application</span>
                                </h1>
                                  <img src={vec} alt="" className="w-[200px] m-auto mt-5 md:hidden block" />
                                <p className="mt-3 text-gray-400 md:text-left text-center">
                                    Bright Future is a startup software company that specializes in
                                    creating web apps, Android apps, and UI/UX designs.
                                </p>
                               <div className="flex md:justify-start justify-center">
                                    <button className="bg-[#1795F0] text-white mt-8 px-8 py-3 rounded-lg ">Contact us</button>
                               </div>
                            </div>
                    </div>
                    <div className="flex items-center justify-center">
                       <img src={vec} alt="" className="w-[300px] md:block hidden" />
                    </div>
            </div>

            <br />
            {/* content */}
             <div className="head px-2 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:grid grid-cols-2 md:w-[85%] w-[98%] mx-auto bg-[rgb(23,36,44)] gap-3 rounded-lg">
                  <div className="">
                       <img src={vt} alt="" className="rounded-lg" />
                  </div>
                  <div className="md:mt-0 mt-4">
                          <h1 className="text-[#2cc5f4] text-4xl font-bold">Who Are <span className="text-white">We</span></h1>
                        <p className="mt-6">
                            Bright Future is a startup software company that specializes in creating web apps, Android apps, and UI/UX designs. We were founded in January 2023 in Dhaka, Bangladesh by a team of IT specialists who wanted to create a company that would not only be successful in business but also contribute to the transformation of society through software development. Our mission is to provide enterprise solutions to both local and international organizations, with a strong focus on software security and development for business automation. We work closely with our customers to ensure that we are meeting their needs and constantly improving our service performance...Read more
                        </p>
                  </div>
             </div>
        </div>
    );
};

export default About;