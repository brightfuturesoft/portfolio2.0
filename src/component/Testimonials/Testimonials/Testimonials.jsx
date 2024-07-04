import React, { useRef, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import doob from '../../../Assctes/Company/doob.png';
import hikmah from '../../../Assctes/Company/hikmahlogo.png';
import sea from '../../../Assctes/Company/sealogo.png';
import ai from '../../../Assctes/Company/aiexpertcareer_logo.jpeg';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { MdFormatQuote } from "react-icons/md";

const Testimonials = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  // const testimonials = [
  //   {
  //     id: 0,
  //     img: doob,
  //     name: "Doob",
  //     companyName: "Doob",
  //     comments: 'We designed and developed our website from Bright Future Soft Soft. We are very happy to work through them.',

  //     title: "CEO and founder",

  //   },
  //   {
  //     id: 1,
  //     img: hikmah,
  //     name: "Hikmah Holdings LTD.",
  //     companyName: "Hikmah Holdings LTD.",
  //     comments: 'We made our product from them. Thanks to them for giving us very good output as per our requirement.',

  //     title: "BUZZMAKER",

  //   },
  //   {
  //     id: 2,
  //     img: sea,
  //     name: "Sea Property LTD.",
  //     companyName: "Sea Property LTD.",
  //     comments: 'We designed and developed our website from Bright Future Soft. We are very happy to work through them.',

  //     title: "BUZZMAKER",

  //   },
  //   {
  //     id: 2,
  //     img: ai,
  //     name: "AI Carrier Expert",
  //     companyName: "AI Carrier Expert",
  //     comments: 'We made our product from them. Thanks to them for giving us very good output as per our requirement.',

  //     title: "CGL Consulting Co",

  //   },


  // ]
  const testimonials = [
    {
      id: 0,
      img: doob,
      name: "Doob",
      companyName: "Doob",
      comments: 'Bright Future Soft Soft expertly designed and developed our website. Their professionalism, attention to detail, and commitment to quality were outstanding. We are extremely satisfied with the final product and enjoyed the seamless collaboration throughout the project.',
      title: "CEO and Founder",
    },
    {
      id: 1,
      img: hikmah,
      name: "Hikmah Holdings LTD.",
      companyName: "Hikmah Holdings LTD.",
      comments: 'The team at Bright Future Soft Soft designed and developed our product with excellence. Their dedication to meeting our needs and delivering high-quality work exceeded our expectations. We are very pleased with the results and highly recommend their services.',
      title: "BUZZMAKER",
    },
    {
      id: 2,
      img: sea,
      name: "Sea Property LTD.",
      companyName: "Sea Property LTD.",
      comments: 'We are delighted with the website design and development provided by Bright Future Soft Soft. Their team was professional, responsive, and delivered exactly what we envisioned. The project was completed on time and within budget, and we are very happy with the outcome.',
      title: "BUZZMAKER",
    },
    {
      id: 3, // Corrected duplicate id
      img: ai,
      name: "AI Carrier Expert",
      companyName: "AI Carrier Expert",
      comments: 'Bright Future Soft Soft provided exceptional design services for our project. Their ability to understand our requirements and deliver a high-quality product was impressive. We appreciate their hard work and are extremely satisfied with the final result.',
      title: "CGL Consulting Co",
    },
  ];



  return (
    <div className='testimonial-bg'>
      <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
        <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">TESTI<span className="shadow-tx">MONIALS</span></h1>
        <p className="text-center mt-8 text-[gray]">We do people love Bright Future Soft?</p>

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
          onSlideChange={() => { }}
          onSwiper={(swiper) => { }}>

          {
            testimonials.map(testimonialData =>
              <SwiperSlide key={testimonialData.id} className="">
                <div className=" py-[100px] px-2">
                  <div className="testimonial-cart p-4 bg-[#121e34] rounded-md relative overflow-hidden">
                    <div className="bg-[#1795F0] w-[150px] rounded-full h-[150px] flex justify-end items-end p-8 text-white absolute left-[-70px] top-[-70px] qut">
                      <MdFormatQuote className="text-4xl" />
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

                    <h2 className="text-white font-semibold text-xl mt-12">{testimonialData.companyName}</h2>
                    <p className="text-sm text-center mt-2 text-gray-400">
                      {testimonialData?.comments}

                      <img loading="lazy" src={testimonialData.img} alt="" className="ts-img" />


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