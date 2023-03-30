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
   img: mahadi,
   name: "Mahadi Hassan",
   companyName: "Mahadi Hassan",
    
   title: "CEO and founder",
    "linkedIn": "https://www.linkedin.com/in/codewithmahadihasan/"
  },
  {
  id: 1,
   img: oshim,
   name: "Latisha Hutchinson",
   companyName: "Mahadi Hassan",
    
   title: "BUZZMAKER",
    "linkedIn": "latishahutchinson@buzzmaker.com"
  },
  {
  id: 2,
   img: mamon,
   name: "Antoinette Peck",
   companyName: "Mahadi Hassan",
    
   title: "ONTAGENE",
    "linkedIn": "antoinettepeck@ontagene.com"
  },
  {
  id: 3,
   img: nahid,
   name: "Randi Norris",
   companyName: "Mahadi Hassan",
    
   title: "SNORUS",
    "linkedIn": "randinorris@snorus.com"
  },
  {
  id: 4,
   img: obidol,
   name: "Candy White",
   companyName: "Mahadi Hassan",
    
   title: "ATGEN",
    "linkedIn": "candywhite@atgen.com"
  },
  {
  id: 5,
   img: mushfiq,
   name: "Blanchard Bruce",
   companyName: "Mahadi Hassan",
    
   title: "ZINCA",
    "linkedIn": "blanchardbruce@zinca.com"
  },
  {
  id: 6,
   img:mamonKhan,
   name: "Franco Tran",
   companyName: "Mahadi Hassan",
    
   title: "INTERLOO",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum commodi impedit dolores voluptates. Natus id, impedit velit repudiandae fugiat eos facere nemo expedita dolorum voluptate, voluptatum, provident deserunt distinctio"
  }
  ,
  {
  id: 7,
   img: n,
   name: "Franco Tran",
   companyName: "Mahadi Hassan",
    
   title: "Junior MERN stack Developer",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum commodi impedit dolores voluptates. Natus id, impedit velit repudiandae fugiat eos facere nemo expedita dolorum voluptate, voluptatum, provident deserunt distinctio"
  }
  ,
  {
  id: 8,
   img:abdurRab,
   name: "Franco Tran",
   companyName: "Mahadi Hassan",
    
   title: "INTERLOO",
    description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum commodi impedit dolores voluptates. Natus id, impedit velit repudiandae fugiat eos facere nemo expedita dolorum voluptate, voluptatum, provident deserunt distinctio",
  }
]

    return (
        <div className='testimonial-bg'>
           <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                       <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">TESTI<span className="shadow-tx">MONIALS</span></h1>
                       <p className="text-center mt-8">We do people love Bright Future?</p>

                            <Swiper className="cursor-grab"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                
                 {
                    teamMembers.map(testimonialData =>  
                    <SwiperSlide key={testimonialData.id} className="">
                        <div className=" py-[100px] px-2">
                            <div className="testimonial-cart p-4 bg-[#121e34] rounded-md relative overflow-hidden">
                                <div className="bg-[#1795F0] w-[150px] rounded-full h-[150px] flex justify-end items-end p-8 text-white absolute left-[-70px] top-[-70px]">
                                    <MdFormatQuote className="text-4xl"/>    
                                </div>  
                                <div className="d-l bg-[#80808048] w-[5px] h-[60px] p-0 absolute -z-0 right-0 top-[70px]">
                                     <div className="h-full relative">
                                        <span className="bg-white text-white absolute top-0 left-0 right-0">.</span>
                                        <span className="bg-[#1795F0] r-shadow text-[#1795F0] absolute bottom-0 h-[40px] left-0 right-0">.</span>
                                     </div>
                                </div>
                               
                                <div className="d-l bg-[#80808048] w-[5px] h-[60px] p-0 absolute -z-0 left-0 bottom-[70px]">
                                     <div className="h-full relative">
                                        <span className="bg-white text-white absolute top-0 left-0 right-0">.</span>
                                        <span className="bg-[#1795F0] l-shadow text-[#1795F0] absolute bottom-0 h-[40px] left-0 right-0">.</span>
                                     </div>
                                </div>

                                <h2 className="text-white text-xl mt-12">{testimonialData.companyName}</h2>
                                <p className="text-sm text-center mt-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil harum commodi impedit dolores voluptates. Natus id, impedit velit repudiandae fugiat eos facere nemo expedita dolorum voluptate, voluptatum, provident deserunt distinctio.
                                   
                                    <img src={testimonialData.img} alt="" className="ts-img" />
                                    <h3 className="text-center text-lg text-[#2b72ff] mt-3">{testimonialData.name}</h3>
                                    <p className="text-center text-sm">{testimonialData.title}</p>
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