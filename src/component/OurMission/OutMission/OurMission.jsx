import React, { useState } from 'react';
import power from '../../../Assctes/icon/power.png';
import vct from "../../../Assctes/vectors/vector(mission).png"
const OurMission = () => {
      const [des, setDes] = useState('  Driving Innovation, Delivering Exceptional Experiences: Bright Future Soft empowers businesses with cutting-edge software solutions, fostering collaboration and making a positive impact on society.')
      const missionData = [
            {
                  id: 0,
                  img: power,
                  title: "Innovative Software Solutions",
                  des: 'We strive to develop innovative web and mobile applications that leverage cutting-edge technologies to drive digital transformation for our clients.'
            },
            {
                  id: 1,
                  img: power,
                  title: "Exceptional User Experiences",
                  des: 'We are committed to creating intuitive and user-centric designs that provide seamless and delightful experiences for end-users.'
            },
            {
                  id: 2,
                  img: power,
                  title: "Collaborative Partnerships",
                  des: 'We believe in building strong and collaborative partnerships with our clients, working closely with them to understand their unique needs and deliver tailored solutions.'
            },
            {
                  id: 3,
                  img: power,
                  title: "Continuous Innovation and Adaptation",
                  des: 'We foster a culture of continuous learning and growth, empowering our team members to stay updated with the latest industry trends and technologies.'
            },
            {
                  id: 4,
                  img: power,
                  title: "Social Impact through Technology",
                  des: ' We leverage the power of technology to make a positive impact on society, addressing pressing challenges and improving lives through our software solutions.'
            },
            {
                  id: 5,
                  img: power,
                  title: "Customer Satisfaction and Success",
                  des: 'We prioritize customer satisfaction by delivering high-quality, reliable, and scalable software solutions that help our clients achieve their business objectives.'
            },
      ]
      return (
            <div className=' mx-auto mission-bg'>
                  <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%] text-white">
                        <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Mission</span></h1>

                        <div className="grid md:grid-cols-2 grid-cols-1 mt-16">
                              <img loading="lazy" src={vct} alt="" className=" w-[300px] md:hidden block mx-auto" />

                              <div className="md:block hidden">
                                    <p>
                                          {des}
                                    </p>
                                    <ul className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-3 ">
                                          {
                                                missionData.map(mData => <li onClick={() => setDes(mData.des)} className="flex items-center w-full gap-2 duration-200 cursor-pointer hover:bg-[#22283db1] p-2 rounded" key={mData.id}>
                                                      <img loading="lazy" src={power} alt="" />
                                                      <p className='text-[#acacac]'>{mData.title}</p>
                                                </li>)
                                          }
                                    </ul>
                              </div>
                              <div className="md:flex block justify-end" >
                                    <img loading="lazy" src={vct} alt="" className="md:block hidden w-[300px]" />

                                    <div className="md:hidden block">
                                          <p className=' mt-14'>
                                                {des}
                                          </p>
                                          <ul className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-3 ">
                                                {
                                                      missionData.map(mData => <li className="flex items-center  gap-2" key={mData.id}>
                                                            <span className="border w-[55px] h-[55px] border-blue-600 rounded-md">
                                                                  <img loading="lazy" src={mData.img} alt="" className="w-[55px] h-[55px] " />
                                                            </span>
                                                            <p>{mData.title}</p>
                                                      </li>)
                                                }
                                          </ul>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default OurMission;
