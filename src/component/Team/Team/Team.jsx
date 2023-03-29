import React, { useRef, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";

const Team = () => {
      const [swiperRef, setSwiperRef] = useState(null);
    
    return (
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
             <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y,]}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                
                <SwiperSlide className="">
                    <div className=" py-[100px] px-2">
                       <div className="cart-box p-2 bg-[#080c4b86] border-2 border-[#0059ff] rounded-xl">
                              <div style={{backgroundImage : "url('https://www.thebrightfuture.co/assets/mahadi.jpg')", backgroundSize : "cover"}} className="cart-header rounded-[20px]   w-[190px] h-[190px] mx-auto mt-[-40px] i-box">
                            </div>
                            <div className="body pb-4">
                                <h2 className="text-white font-semibold mt-3">name akdslalk;ds</h2>
                                <p className="">title</p>
                                <Link to="">
                                <AiFillLinkedin className="text-4xl mt-4 m-auto text-[#1e6dff]" />
                                </Link>
                            </div>
                       </div>
                    </div>
                </SwiperSlide>

            </Swiper>
    
        </div>
    );
};

export default Team;