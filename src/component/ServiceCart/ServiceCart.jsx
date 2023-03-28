import React, { useState } from "react";

const ServiceCart = ({data}) => {
    const [readMore, setReadMore] = useState(true);
    const {pic, name, description} = data;
    return (
        <div>
            <div>
                    <div className="cart bg-[#0525b70a] p-2 rounded-xl border border-[#0084ff]">
                        <div className="cart-contain bg-[#11223caf] text-white p-3 rounded-xl">
                              <div className="cart-header">
                           <img src={pic} alt="" className="rounded-xl" />
                      </div>
                      <div className="cart-body">
                        <img src="" alt="" className="" />
                        <h2 className="font-[500] mt-3 text-xl">{name}</h2>
                        <small className="mt-2 text-[#d4d4d4]">
                         {readMore ? description.slice(0, 125) : description}
                         <button className="text-[#2dbcff] font-semibold" onClick={()=> setReadMore(!readMore)}>{readMore ? <>...Read more</> : <>...Show less</>}</button>
                        </small>
                        <button className="mt-3 bg-[#1c40bf] w-full p-2 rounded-lg shadow-md duration-200 text-white  hover:bg-[#3454C4]">Get Started with us</button>
                      </div>
                        </div>
                  </div>
                    </div>
        </div>
    );
};

export default ServiceCart;