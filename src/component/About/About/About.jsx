import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
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
import nezaul from '../../../Assctes/teamMember/nezamul.jpeg'
import minhaz from '../../../Assctes/teamMember/minhaz.jpg'
import Foysal from '../../../Assctes/teamMember/Foysal.png';
import un from '../../../Assctes/teamMember/unknown.svg'
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
import { Faq } from './Faq';
import { OurProjects } from '../Projects';

import shuchi from '../../../Assctes/teamMember/Suchi Roy.jpg'
const About = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const teamMembers = [
    {
      "id": 0,
      "img": mahadi,
      "name": "Mahadi Hassan",
      "email": "info@thebrightfuture.co",
      "post": "CEO and founder",
      "linkedIn": "https://www.linkedin.com/in/codewithmahadihasan/",
      "gender": "male"
    },

    {
      "id": 2,
      "img": maruf,
      "name": "Maruf Ali Khan",
      "email": "maruf@thebrightfuture.co",
      "post": "Managing Director",
      "linkedIn": "https://www.linkedin.com/in/maruf-ali-khan-742b1a1a4/",
      "gender": "male"
    },

    {
      "id": 3,
      "img": Foysal,
      "name": "Foysal Ahmed",
      "email": "foysal@thebrightfuture.co",
      "post": "Project Manager",
      "linkedIn": "https://www.linkedin.com/in/regita-redhe-30b357271/",
      "gender": "female"
    },
    {
      "id": 3,
      "img": acccountManager,
      "name": "Regita Redhe",
      "email": "redhe@thebrightfuture.co",
      "post": "Account Manager",
      "linkedIn": "https://www.linkedin.com/in/regita-redhe-30b357271/",
      "gender": "female"
    },
    {
      "id": 4,
      "img": oshim,
      "name": "Ashim Rudra Paul",
      "email": "ashim@thebrightfuture.co",
      "post": "Software Engineer",
      "linkedIn": "https://www.linkedin.com/in/codewithashim/",
      "gender": "male"
    },

    ,
    {
      "id": 9,
      "img": abdurRab,
      "name": "MD. ABDUR RAB",
      "email": "abdur@thebrightfuture.co",
      "post": "Product Designer",
      "linkedIn": "https://www.linkedin.com/in/md-abdur-rab-90b110185/",
      "gender": "male"
    }
    ,
    {
      "id": 10,
      "img": nezaul,
      "name": "Nazmul Hoque",
      "email": "nazmul@thebrightfuture.co",
      "post": "Product Developer",
      "linkedIn": "https://www.linkedin.com/in/nazmul-sujon/",
      "gender": "male"
    }
    ,
    {
      "id": 10,
      "img": un,
      "name": "Farhan Ahmed",
      "email": "farhan@thebrightfuture.co",
      "post": "Product Developer",
      "linkedIn": "https://www.linkedin.com/in/nazmul-sujon/",
      "gender": "male"
    }
    ,

    {
      "id": 12,
      "img": shuchi,
      "name": "Suchi Roy",
      "email": "suchi@thebrightfuture.co",
      "post": "Product Designer",
      "linkedIn": "https://www.linkedin.com/in/minhaz-khan-/",
      "gender": "Female"
    }, {
      "id": 5,
      "img": mamon,
      "name": "Md. Abdullah Al Mamun",
      "email": "mamun@thebrightfuture.co",
      "post": "Front End Developer",
      "linkedIn": "https://www.linkedin.com/in/mdmamunabdullah/",
      "gender": "male"

    },
    {
      "id": 6,
      "img": nahid,
      "name": "Nahid Ferdaos",
      "email": "nahid@thebrightfuture.co",
      "post": "Front End Developer",
      "linkedIn": "https://www.linkedin.com/in/nahid-ferdaos/",
      "gender": "male"
    },
    {
      "id": 7,
      "img": mushfiq,
      "name": "Musfiqur Rahman",
      "email": "mushfiq@thebrightfuture.co",
      "post": "Web Developer",
      "linkedIn": "https://www.linkedin.com/in/musfiqurofficial/",
      "gender": "male"
    }
    ,
    {
      "id": 8,
      "img": mamonKhan,
      "name": "Md Mamun Khan",
      "email": "info@thebrightfuture.co",
      "post": "Marketing Manager",
      "linkedIn": "https://www.linkedin.com/in/md-mamun-khan/",
      "gender": "male"
    },
    {
      "id": 8,
      "img": minhaz,
      "name": "Minhaz Khan",
      "email": "minhaz@thebrightfuture.co",
      "post": "Web Developer",
      "linkedIn": "https://www.linkedin.com/in/md-mamun-khan/",
      "gender": "male"
    },

  ]
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className='py-4 bg-[#020A1C] p-2 about-bg'>
      <Title title="About us" />
      <div className="head px-2 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[85%] w-[98%] mx-auto rounded-lg ">
        <div className="md:grid grid-cols-2 md:pt-0 pt-16  mt-2">
          <div className="flex items-center">
            <div className="">
              <h1 className='text-xl text-[#3f98fd] font-[400] md:text-left text-center'>Software Company </h1>
              <h1 className="md:text-5xl text-[35px] text-white font-[700] md:text-left text-center">The <span className="text-[orange]">Bright Future</span></h1>
              <div className="md:hidden flex  justify-end overflow-hidden mt-[-50px]">
                <Lottie className="" animationData={homeVc} loop={true} />
              </div>
              <p className="text-gray-300 md:mt-6 mt-[-50px]">
                At Bright Future, we are a leading software company based in Bangladesh, founded in January 2023. We are passionate about harnessing the power of technology to drive positive change and empower individuals and businesses. With our innovative solutions and dedication to excellence, we strive to make a lasting impact in the software industry.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="md:flex hidden  justify-end overflow-hidden ">
              <Lottie className="" animationData={homeVc} loop={true} />
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
                  <div className="cart-box  p-2 bg-[#1d1e37bc] border-2 border-[#0059ff] rounded-xl h-[340px]">
                    <div style={{ backgroundImage: `url("${tData.img}")`, backgroundSize: "cover" }} className="cart-header rounded-[20px]   w-[200px] h-[200px] mx-auto mt-[-40px] i-box">
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
                                icon={<img  loading="lazy"src={b} className='rounded-full' />}
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
      <Faq></Faq>
      <OurProjects></OurProjects>
      <Testimonials />
      <Contact />
    </div>
  );
};

export default About;