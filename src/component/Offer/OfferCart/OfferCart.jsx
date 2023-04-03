import React, { useState } from 'react';

const OfferCart = ({offerData}) => {
    const {name, id,pic, description} = offerData;
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="cart bg-[#020a1c89] border m-shadow border-blue-600 rounded-b-2xl rounded-tl-xl p-3 ">
            <div className="cart-header">
                <img src={pic} alt="" className="rounded-xl m-auto bg-[#151b2989]" />
            </div>
            <div className="cart-body mt-3">
                <h2 className="font-semibold text-lg text-[white]">{name}</h2>
                <small className="mt-3 text-[#8b8b8b]">
                    {
                        !readMore ? description.slice(0, 120) : description
                    }
                    <button onClick={()=> setReadMore(!readMore)} className="text-blue-500">{readMore? <>Show less</> : <>Read more</>}</button>
                </small>
            </div>
        </div>
    );
};

export default OfferCart;