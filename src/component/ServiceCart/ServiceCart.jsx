import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServiceCart = ({ data }) => {
      const [readMore, setReadMore] = useState(true);
      const { pic, name, description } = data;
      return (
            <Link to={`/service/${data?.id}`}>
                  <div>
                        <div className="cart bg-[#0525b70a] p-2 rounded-xl border border-[#0084ff]">
                              <div className="cart-contain bg-[#11223caf] text-white p-3 rounded-xl">
                                    <div className="cart-header">
                                          <img loading="lazy" src={pic} alt="" className="rounded-xl md:h-[300px] h-[260px] w-full object-cover" />

                                          {/* <Lottie className="rounded-xl md:h-[300px] h-[260px] w-full" animationData={pic} loop={true} /> */}

                                    </div>
                                    <div className="cart-body">
                                          <img loading="lazy" src="" alt="" className="" />
                                          <h2 className="font-[500] mt-3 text-xl">{name}</h2>
                                          <small className="mt-2 text-[#d4d4d4]">
                                                {readMore ? description?.slice(0, 125) : description}
                                          </small>
                                          <button className="mt-3 bg-[#1c40bf] w-full p-2 rounded-lg shadow-md duration-200 text-white  hover:bg-[#3454C4]" onClick={() => setReadMore(!readMore)}>{readMore ? "Read more" : "Show less"}</button>
                                          {/* <button className="mt-3 bg-[#1c40bf] w-full p-2 rounded-lg shadow-md duration-200 text-white  hover:bg-[#3454C4]">Get Started with us</button> */}
                                    </div>
                              </div>
                        </div>
                  </div>
            </Link>
      );
};

export default ServiceCart;
