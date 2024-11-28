import React, { useState } from 'react';
import power from '../../../Assctes/icon/power.png';
import vct from "../../../Assctes/vectors/vector(vission).png"

const OurVission = () => {
      const [descridtion, setDescribtion] = useState('Your trusted companion for digital leadership by empowering people to achieve more with less')






      const missionData = [
            {
                  id: 0,
                  img: power,
                  title: "Transforming Industries through Technology",
                  des: 'We envision leveraging technology to drive transformative changes across industries, revolutionizing how businesses operate and creating new opportunities for growth.'
            },
            {
                  id: 1,
                  img: power,
                  title: "Empowering Businesses and Individuals",
                  des: 'Our vision is to empower businesses and individuals by providing them with intuitive and powerful software solutions that enhance productivity, efficiency, and success.'
            },
            {
                  id: 2,
                  img: power,
                  title: "Global Leadership in Software Innovation",
                  des: 'We aspire to be recognized as a global leader in software innovation, known for our exceptional products, cutting-edge technologies, and forward-thinking approaches.'
            },
            {
                  id: 3,
                  img: power,
                  title: "Inspiring Digital Transformation",
                  des: 'We aim to inspire and guide organizations through their digital transformation journey, helping them embrace digital solutions and unlock their full potential in the digital era.'
            },
            {
                  id: 4,
                  img: power,
                  title: "Building a Sustainable Future",
                  des: 'We are committed to building a sustainable future by developing eco-friendly software solutions and promoting environmentally responsible practices within our organization and the broader community.'
            },
            {
                  id: 5,
                  img: power,
                  title: "Enriching Lives through Technology",
                  des: ' Our vision is to enrich the lives of people worldwide by creating technology solutions that simplify everyday tasks, enhance experiences, and connect communities.'
            },
      ];
      return (
            <div className=' mx-auto vission-bg'>
                  <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                        <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Vission</span></h1>

                        <div className="grid md:grid-cols-2 grid-cols-1 mt-16">
                              <img loading="lazy" src={vct} alt="" className=" w-[300px] md:hidden block mx-auto" />

                              <div className="md:block hidden">
                                    <p className='text-[white]'>
                                          {descridtion}
                                    </p>
                                    <ul className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-3">
                                          {missionData.map(mData => (
                                                <li
                                                      onClick={() => setDescribtion(mData.des)}
                                                      className="flex items-center gap-2 duration-200 cursor-pointer hover:bg-[#22283db1] p-2 rounded"
                                                      key={mData.id}
                                                >
                                                      <img src={power} className="" alt="" />
                                                      <p className="text-gray-500">{mData.title}</p>
                                                </li>
                                          ))}
                                    </ul>

                              </div>
                              <div className="md:flex block justify-end" >
                                    <img loading="lazy" src={vct} alt="" className="md:block hidden w-[300px]" />

                                    <div className="md:hidden block">
                                          <p className=' mt-14'>
                                                {descridtion}
                                          </p>
                                          <ul className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-3 ">
                                                {
                                                      missionData.map(mData => <li onClick={() => setDescribtion(mData.des)} className="flex items-center  gap-2" key={mData.id}>
                                                            <span className="border border-blue-600 rounded-md">
                                                                  <img loading="lazy" src={mData.img} alt="" className="w-[35px]" />
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

export default OurVission;
