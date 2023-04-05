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
import { AiFillLinkedin } from "react-icons/ai";

const Team = () => {
      const [swiperRef, setSwiperRef] = useState(null);
     const teamMembers = [
  {
    "id": 0,
    "img": mahadi,
    "name": "Mahadi Hassan",
    "gender": "male",
    "post": "CEO and founder",
    "linkedIn": "https://www.linkedin.com/in/codewithmahadihasan/",
    "gender": "male"
  },
  {
    "id": 1,
    "img": oshim,
    "name": "Latisha Hutchinson",
    "gender": "male",
    "post": "BUZZMAKER",
    "linkedIn": "latishahutchinson@buzzmaker.com",
    "gender": "male"
  },
  {
    "id": 2,
    "img": mamon,
    "name": "Antoinette Peck",
    "gender": "male",
    "post": "ONTAGENE",
    "linkedIn": "antoinettepeck@ontagene.com",
    "gender": "male"
  },
  {
    "id": 3,
    "img": nahid,
    "name": "Randi Norris",
    "gender": "male",
    "post": "SNORUS",
    "linkedIn": "randinorris@snorus.com",
    "gender": "male"
  },
  {
    "id": 4,
    "img": obidol,
    "name": "Candy White",
    "gender": "male",
    "post": "ATGEN",
    "linkedIn": "candywhite@atgen.com",
    "gender": "male"

  },
  {
    "id": 5,
    "img": mushfiq,
    "name": "Blanchard Bruce",
    "gender": "male",
    "post": "ZINCA",
    "linkedIn": "blanchardbruce@zinca.com",
    "gender": "male"
  },
  {
    "id": 6,
    "img":mamonKhan,
    "name": "Franco Tran",
    "gender": "male",
    "post": "INTERLOO",
    "linkedIn": "francotran@interloo.com",
    "gender": "male"
  }
  ,
  {
    "id": 7,
    "img": n,
    "name": "Franco Tran",
    "gender": "male",
    "post": "Junior MERN stack Developer",
    "linkedIn": "francotran@interloo.com",
    "gender": "male"
  }
  ,
  {
    "id": 8,
    "img":abdurRab,
    "name": "Franco Tran",
    "gender": "male",
    "post": "INTERLOO",
    "linkedIn": "francotran@interloo.com",
    "gender": "male"
  }
]    
    return (
        <div className=" team-bg">
            <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
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
                            <div className="cart-box  p-2 bg-[#1d1e37bc] border-2 border-[#0059ff] rounded-xl">
                                    <div style={{backgroundImage : `url("${tData.img}")`, backgroundSize : "cover"}} className="cart-header rounded-[20px]   w-[200px] h-[200px] mx-auto mt-[-40px] i-box">
                                    </div>
                                    <div className="body pb-4">
                                        <h2 className="text-white font-semibold mt-2">{tData.name}</h2>
                                        <p className="text-sm">{tData.post}</p>
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