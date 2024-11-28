import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OfferCart = ({ offerData }) => {
      const { name, id, pic, description } = offerData;

      return (
            <div className="cart bg-[#020a1c89] border m-shadow border-blue-600 border-opacity-25 rounded-2xl rounded-tl-xl p-3 ">
                  <div className="cart-header">
                        <img loading="lazy" src={pic} alt="" className="rounded-xl m-auto bg-[#151b2989] h-[150px] w-full" />
                  </div>
                  <div className="cart-body mt-3">
                        <h2 className="font-semibold text-lg text-[white]">{name}</h2>
                        <small className="mt-3 text-[#8b8b8b]">
                              {
                                    description
                              }

                              <br />

                              <Link to={`/why-us/${id}`} className="text-blue-300"> Learn more </Link>
                        </small>
                  </div>
            </div>
      );
};

export default OfferCart;
