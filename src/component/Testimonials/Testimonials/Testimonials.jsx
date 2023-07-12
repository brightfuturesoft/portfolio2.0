import React, { useRef, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import oshim from '../../../Assctes/teamMember/ashim.jpeg';
import mamon from '../../../Assctes/teamMember/abdullah.jpg';
import nahid from '../../../Assctes/teamMember/nahid.jpeg';
import obidol from '../../../Assctes/teamMember/Obaidul.png'
import mushfiq from '../../../Assctes/teamMember/musfiq.jpg'
import mamonKhan from '../../../Assctes/teamMember/Mamun_Khan.png'
import n from '../../../Assctes/teamMember/n.jpg'
import abdurRab from '../../../Assctes/teamMember/Abdur_rab_1.jpg'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { MdFormatQuote } from "react-icons/md";

const Testimonials = () => {
     const [swiperRef, setSwiperRef] = useState(null);
      
const teamMembers = [
  {
  id: 0,
   img: 'https://media.licdn.com/dms/image/D4E0BAQFv3agJCyO96A/company-logo_200_200/0/1685864947796?e=1697068800&v=beta&t=hAGt7wP4ldQ5vIt58OKiFFyZw2hqOQkLp_YnYcP0NtE',
   name: "Mosiur Rahman",
    companyName: "ESoftRain",
   comments:'"We have 2 projects competed through Bright Future and we are very happy to work with them. I hope to work with them in the future."',
    
   title: "CEO and founder",
    
  },
  {
  id: 1,
   img: 'https://www.fcwin4.live/static/media/logo.a5bdbf76ac070f8e5d90.png',
   name: "FcWin4",
    companyName: "FCWIN4",
   comments:'We made our product from them. Thanks to them for giving us very good output as per our requirement.',
    
   title: "BUZZMAKER",

  },
  {
  id: 2,
   img: 'https://media.licdn.com/dms/image/C560BAQFyfhBrzxAyZg/company-logo_200_200/0/1675933497965?e=1697068800&v=beta&t=T81_KvcodKmmlCl5V4VOGGUu3a0A2IHO9qpvWy4ypeo',
   name: "FcWin4",
    companyName: "AI Carrier Expert",
   comments:'We designed and developed our website from Bright Future. We are very happy to work through them.',
    
   title: "BUZZMAKER",
   
  },
  {
  id: 2,
   img: 'https://media.licdn.com/dms/image/C510BAQEtgY58kvTO0A/company-logo_200_200/0/1558514432075?e=1697068800&v=beta&t=eMAgq1lT80AG8GVzVvqAco_OUT2NIfEozWaYk_n1gec',
   name: "CGL Consulting Co",
    companyName: "CGL Consulting Co",
   comments:'We made our product from them. Thanks to them for giving us very good output as per our requirement.',
    
   title: "CGL Consulting Co",
   
  },

  
]

    return (
        <div className='testimonial-bg'>
           <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                       <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">TESTI<span className="shadow-tx">MONIALS</span></h1>
                       <p className="text-center mt-8 text-[gray]">We do people love Bright Future?</p>

                            <Swiper className="cursor-grab"
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
                      slidesPerView: 1,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                spaceBetween={50}
                onSlideChange={() => {}}
                onSwiper={(swiper) => {}}>
                
                 {
                    teamMembers.map(testimonialData =>  
                    <SwiperSlide key={testimonialData.id} className="">
                        <div className=" py-[100px] px-2">
                            <div className="testimonial-cart p-4 bg-[#121e34] rounded-md relative overflow-hidden">
                                <div className="bg-[#1795F0] w-[150px] rounded-full h-[150px] flex justify-end items-end p-8 text-white absolute left-[-70px] top-[-70px] qut">
                                    <MdFormatQuote className="text-4xl"/>    
                                </div>  
                                <div className="d-l bg-[#80808048] w-[5px] h-[60px] p-0 absolute -z-0 right-0 top-[70px]">
                                     <div className="h-full relative">
                                        <span className="bg-white text-white absolute top-0 left-0 right-0">.</span>
                                        <span className="bg-[#1795F0] r-shadow text-[#1795F0] absolute bottom-0 h-[40px] left-0 sp-ln-1 right-0">.</span>
                                     </div>
                                </div>
                               
                                <div className="d-l bg-[#80808048] w-[5px] h-[60px] p-0 absolute -z-0 left-0 bottom-[70px]">
                                     <div className="h-full relative">
                                        <span className="bg-white text-white absolute top-0 left-0 right-0">.</span>
                                        <span className="bg-[#1795F0] l-shadow text-[#1795F0] absolute bottom-0 h-[40px] sp-ln-2 left-0 right-0">.</span>
                                     </div>
                                </div>

                                <h2 className="text-white text-xl mt-12">{testimonialData.companyName}</h2>
                                <p className="text-sm text-center mt-2 text-gray-400">
                                    {testimonialData?.comments}
                                   
                                    <img  loading="lazy"src={testimonialData.img} alt="" className="ts-img" />
                                    
                                   
                                </p>
                            </div>
                        </div>
                </SwiperSlide>)
                 }

            </Swiper>
           </div>
        </div>
    );
};

export default Testimonials;