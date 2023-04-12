import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import acccountManager from '../../../Assctes/teamMember/accountManager.jpeg';
import seyam from '../../../Assctes/teamMember/seyam.jpg';
import oshim from '../../../Assctes/teamMember/ashim.jpeg';
import mamon from '../../../Assctes/teamMember/abdullah.jpg';
import nahid from '../../../Assctes/teamMember/nahid.jpeg';
import maruf from '../../../Assctes/teamMember/maruf.jpeg'
import mushfiq from '../../../Assctes/teamMember/musfiq.jpg'
import mamonKhan from '../../../Assctes/teamMember/Mamun_Khan.png'
import n from '../../../Assctes/teamMember/n.jpg'
import abdurRab from '../../../Assctes/teamMember/Abdur_rab_1.jpg'
import { HiOutlineMicrophone } from 'react-icons/hi2';
import Service from '../../Service/Service/Service';
import Testimonials from '../../Testimonials/Testimonials/Testimonials';
import Contact from '../../Contact/Contact/Contact';
import Title from '../../../layout/Title';
import Team from '../../Team/Team/Team';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import homeVc from '../../../Assctes/vectors/App Development.json';
const About = () => {
   const [swiperRef, setSwiperRef] = useState(null);
      const teamMembers = [
  {
    "id": 0,
    "img": mahadi,
    "name": "Mahadi Hassan",
    "post": "CEO and founder",
    "linkedIn": "https://www.linkedin.com/in/codewithmahadihasan/",
    "gender": "male"
  },
  {
    "id": 1,
    "img": seyam,
    "name": "Saidur Rahman Siam",
    "post": "Project manager & android developer",
    "linkedIn": "https://www.linkedin.com/in/saidur-rahman-siam-11822286/",
    "gender": "male"
  },
  {
    "id": 2,
    "img": maruf,
    "name": "Maruf Ali Khan",
    "email" : "marufalikhan18@gmail.com",
    "post": "Project manager",
    "linkedIn": "https://www.linkedin.com/in/maruf-ali-khan-742b1a1a4/",
    "gender": "male"
  },
  {
    "id": 3,
    "img": acccountManager,
    "name": "Regita Redhe",
    "email" : "",
    "post": "Account manager",
    "linkedIn": "https://www.linkedin.com/in/regita-redhe-30b357271/",
    "gender": "female"
  },
  {
    "id": 4,
    "img": oshim,
    "name": "Ashim Rudra Paul",
    "email" : "",
    "post": "MERN STACK DEVELOPER",
    "linkedIn": "https://www.linkedin.com/in/codewithashim/",
    "gender": "male"
  },
  {
    "id": 5,
    "img": mamon,
    "name": "Md. Abdullah Al Mamun",
    "email" : "abdullahalmamun.cs@gmail.com",
    "post": "Front End Developer",
    "linkedIn": "https://www.linkedin.com/in/mdmamunabdullah/",
    "gender": "male"

  },
  {
    "id": 6,
    "img": nahid,
    "name": "Nahid Ferdaos",
    "email" : "mdnahid360s@gmail.com",
    "post": "Front End Developer",
    "linkedIn": "https://www.linkedin.com/in/nahid-ferdaos/",
    "gender": "male"
  },
  {
    "id": 7,
    "img":mushfiq,
    "name": "Musfiqur Rahman",
    "email" : "",
    "post": "Marn stack developer",
    "linkedIn": "https://www.linkedin.com/in/musfiqurofficial/",
    "gender": "male"
  }
  ,
  {
    "id": 8,
    "img": mamonKhan,
    "name": "Md Mamun Khan",
    "email" : "",
    "post": "Marketing",
    "linkedIn": "https://www.linkedin.com/in/md-mamun-khan/",
    "gender": "male"
  }
  ,
  {
    "id": 9,
    "img":abdurRab,
    "name": "MD. ABDUR RAB",
    "email" : "",
    "post": "UI/UX Designer",
    "linkedIn": "https://www.linkedin.com/in/md-abdur-rab-90b110185/",
    "gender": "male"
  }
]    
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
        <div className='py-4 bg-[#020A1C] p-2 about-bg'>
          <Title title="About"/>
            <div className="head px-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[85%] w-[98%] mx-auto rounded-lg ">
                <div className="md:grid grid-cols-2 md:pt-0 pt-16  mt-2">
                     <div className="flex items-center">
                          <div className="">
                              <h1 className='text-xl text-[#3f98fd] font-[400] md:text-left text-center'>The best employer to </h1>
                            <h1 className="md:text-5xl text-[35px] text-white font-[700] md:text-left text-center">the best <span className="text-[orange]">developers</span></h1>
                              <div className="md:hidden flex  justify-end overflow-hidden mt-[-50px]">
                                <Lottie className="" animationData={homeVc} loop={true}/>
                             </div>
                            <p className="text-gray-300 md:mt-6 mt-[-50px]">
                               Bright Future is a software company. Where we create attractive web and mobile applications for our clients. And we deliver clients' orders on time.
                            </p>
                          </div>
                     </div>
                     <div className="flex justify-end">
                         <div className="md:flex hidden  justify-end overflow-hidden ">
                            <Lottie className="" animationData={homeVc} loop={true}/>
                      </div>
                     </div>
                </div>
                <br />
            </div>
                <div className="mt-[10px]  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[85%] w-[98%] mx-auto rounded-lg">
                     <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Team</span></h1>
                    <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
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
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}>
                
                 {
                    teamMembers.map(tData =>  
                    <SwiperSlide key={tData.id} className="cursor-grab">
                        <div className=" py-[100px] px-2">
                            <div className="cart-box  p-2 bg-[#1d1e37bc] border-2 border-[#0059ff] rounded-xl h-[340px]">
                                    <div style={{backgroundImage : `url("${tData.img}")`, backgroundSize : "cover"}} className="cart-header rounded-[20px]   w-[200px] h-[200px] mx-auto mt-[-40px] i-box">
                                    </div>
                                    <div className="body pb-4">
                                        <h2 className="text-white font-semibold mt-2">{tData.name}</h2>
                                        <p className="text-sm">{tData.post}</p>
                                        <small>{tData?.email}</small>
                                        <Link to={tData.linkedIn}>
                                        <AiFillLinkedin className="text-4xl mt-4 m-auto text-[#1e6dff]" />
                                        </Link>
                                    </div>
                            </div>
                        </div>
                </SwiperSlide>)
                 }

            </Swiper>
                    {/* <VerticalTimeline>
                      {
                        teamMembers?.map(tData => 
                            <VerticalTimelineElement
                                
                                key={tData.id}
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img src={b} className='rounded-full' />}
                            >
                                <div className="md:flex gap-2 bg-[#232d3b] p-2 rounded">
                                    <div style={{backgroundImage : `url("${tData?.img}")`, backgroundSize : "cover"}} className="md:w-[100px] w-full md:h-[100px] h-[200px] rounded-lg"></div>
                                    <div className="text-white md:mt-0 mt-2">
                                        <h2>{tData.name}</h2>
                                        <p>{tData.gender=="male" ? "He" : "She"} is {tData.post} in Bright Future</p>
                                    </div>
                                </div>
                            </VerticalTimelineElement>                            
                        )
                    }
                    </VerticalTimeline> */}
                    
                </div>
                  
            <br />
            {/* content */}
             <Service />
                  <Testimonials />
                  <Contact />
        </div>
    );
};

export default About;