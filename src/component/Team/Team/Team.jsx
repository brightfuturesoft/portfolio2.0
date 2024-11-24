import React, { useRef, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import hadi from '../../../Assctes/teamMember/mohotasimhadi.jpeg';
import acccountManager from '../../../Assctes/teamMember/accountManager.jpeg';
import sarwar from '../../../Assctes/teamMember/Sarwar.png';
import nahid from '../../../Assctes/teamMember/nahid.jpeg';
import shishir from '../../../Assctes/teamMember/shishir.jpeg'
import riky from '../../../Assctes/teamMember/riky.png'
import mursed from '../../../Assctes/teamMember/mursed.jpg'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";

const Team = () => {

      const teamMembers = [
            {
                  "id": 0,
                  "img": mahadi,
                  "name": "Mahadi Hasan",
                  "email": "ceo@brightfuturesoft.com",
                  "post": "CEO and founder",
                  "linkedIn": "https://www.linkedin.com/in/codewithmahadihasan/",
                  "gender": "male"
            },

            {
                  "id": 2,
                  "img": shishir,
                  "name": "Md Ibrahim Kholil",
                  "email": "manager@brightfuturesoft.com",
                  "post": "Project Manager",
                  "linkedIn": "https://www.linkedin.com/in/shishirkholil/",
                  "gender": "male"
            },
            {
                  "id": 3,
                  "img": hadi,
                  "name": "Mohotasim Hadi Rafi",
                  "email": "hadi@brightfuturesoft.com",
                  "post": "Advisor",
                  "linkedIn": "https://www.linkedin.com/in/mohtasimhadi/",
                  "gender": "male"
            },


            {
                  "id": 3,
                  "img": acccountManager,
                  "name": "Regita Redhe",
                  "email": "accounts@brightfuturesoft.com",
                  "post": "Account Manager",
                  "linkedIn": "https://www.linkedin.com/in/regita-redhe-30b357271/",
                  "gender": "female"
            },
            {
                  "id": 6,
                  "img": nahid,
                  "name": "Nahid Ferdaos",
                  "email": "nahid@brightfuturesoft.com",
                  "post": "Software Developer",
                  "linkedIn": "https://www.linkedin.com/in/nahid-ferdaos/",
                  "gender": "male"
            },
            {
                  "id": 6,
                  "img": sarwar,
                  "name": "Sarwar Hossain",
                  "email": "sarwar@brightfuturesoft.com",
                  "post": "Software Developer",
                  "linkedIn": "https://www.linkedin.com/in/sarwar-asik/",
                  "gender": "male"
            },
            {
                  "id": 6,
                  "img": mursed,
                  "name": "MH. Murshed",
                  "email": "mursed@brightfuturesoft.com",
                  "post": "Software Developer",
                  "linkedIn": "https://www.linkedin.com/in/murshed1806/",
                  "gender": "male"
            },
            {
                  "id": 6,
                  "img": riky,
                  "name": "Uyemong Marma",
                  "email": "riky@brightfuturesoft.com",
                  "post": "UI/UX Designer",
                  // "linkedIn": "https://www.linkedin.com/in/sarwar-asik/",
                  "gender": "male"
            }

            // {
            //   "id": 4,
            //   "img": oshim,
            //   "name": "Ashim Rudra Paul",
            //   "email": "ashim@brightfuturesoft.com",
            //   "post": "Software Engineer",
            //   "linkedIn": "https://www.linkedin.com/in/codewithashim/",
            //   "gender": "male"
            // },

            ,
            // {
            //   "id": 9,
            //   "img": abdurRab,
            //   "name": "MD. ABDUR RAB",
            //   "email": "abdur@brightfuturesoft.com",
            //   "post": "Product Designer",
            //   "linkedIn": "https://www.linkedin.com/in/md-abdur-rab-90b110185/",
            //   "gender": "male"
            // }
            // ,
            // {
            //   "id": 10,
            //   "img": nezaul,
            //   "name": "Nazmul Hoque",
            //   "email": "nazmul@brightfuturesoft.com",
            //   "post": "Product Developer",
            //   "linkedIn": "https://www.linkedin.com/in/nazmul-sujon/",
            //   "gender": "male"
            // }
            // ,
            // {
            //   "id": 10,
            //   "img": un,
            //   "name": "Farhan Ahmed",
            //   "email": "farhan@brightfuturesoft.com",
            //   "post": "Product Developer",
            //   "linkedIn": "https://www.linkedin.com/in/nazmul-sujon/",
            //   "gender": "male"
            // }
            // ,

            // {
            //   "id": 12,
            //   "img": shuchi,
            //   "name": "Suchi Roy",
            //   "email": "suchi@brightfuturesoft.com",
            //   "post": "Product Designer",
            //   "linkedIn": "https://www.linkedin.com/in/minhaz-khan-/",
            //   "gender": "Female"
            // }, {
            //   "id": 5,
            //   "img": mamon,
            //   "name": "Md. Abdullah Al Mamun",
            //   "email": "mamun@brightfuturesoft.com",
            //   "post": "Front End Developer",
            //   "linkedIn": "https://www.linkedin.com/in/mdmamunabdullah/",
            //   "gender": "male"

            // },

            // {
            //   "id": 7,
            //   "img": mushfiq,
            //   "name": "Musfiqur Rahman",
            //   "email": "mushfiq@brightfuturesoft.com",
            //   "post": "Web Developer",
            //   "linkedIn": "https://www.linkedin.com/in/musfiqurofficial/",
            //   "gender": "male"
            // }
            ,
            // {
            //   "id": 8,
            //   "img": mamonKhan,
            //   "name": "Md Mamun Khan",
            //   "email": "info@brightfuturesoft.com",
            //   "post": "Marketing Manager",
            //   "linkedIn": "https://www.linkedin.com/in/md-mamun-khan/",
            //   "gender": "male"
            // },
            // {
            //   "id": 8,
            //   "img": minhaz,
            //   "name": "Minhaz Khan",
            //   "email": "minhaz@brightfuturesoft.com",
            //   "post": "Web Developer",
            //   "linkedIn": "https://www.linkedin.com/in/md-mamun-khan/",
            //   "gender": "male"
            // },

      ]
      return (
            <div className=" team-bg">
                  <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Team</span></h1>

                        <Swiper
                              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                              pagination={{ clickable: true }}

                              breakpoints={{
                                    320: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                    },
                                    360: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                    },
                                    480: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                    },
                                    640: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                    },
                                    768: {
                                          slidesPerView: 2,
                                          spaceBetween: 40,
                                    },
                                    1024: {
                                          slidesPerView: 4,
                                          spaceBetween: 50,
                                    },
                              }}
                              spaceBetween={50}
                              slidesPerView={4}
                              onSlideChange={() => { }}
                              onSwiper={(swiper) => { }}>

                              {
                                    teamMembers.map(tData =>
                                          <SwiperSlide key={tData.id} className="cursor-grab">
                                                <div className=" py-[100px] px-2">
                                                      <div className="cart-box  p-2 bg-[#1d1e37bc] border-2 border-[#0059ff] rounded-xl h-[320px]">
                                                            <div style={{ backgroundImage: `url("${tData?.img}")`, backgroundSize: "cover" }} className="cart-header rounded-[20px]   w-[200px] h-[200px] mx-auto mt-[-40px] i-box">
                                                            </div>
                                                            <div className="body pb-4">
                                                                  <h2 className="text-white font-semibold mt-2">{tData?.name}</h2>
                                                                  <p className="text-[14px] text-[#1becff]">{tData.post}</p>
                                                                  <small className="text-sm text-gray-400">{tData?.email}</small>
                                                                  <Link to={tData.linkedIn}>
                                                                        <AiFillLinkedin className="text-4xl mt-4 m-auto text-[#1e6dff]" />
                                                                  </Link>
                                                            </div>
                                                      </div>
                                                </div>
                                          </SwiperSlide>)
                              }

                        </Swiper>
                  </div>


            </div>
      );
};

export default Team;
