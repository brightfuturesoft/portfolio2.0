import React, { useState } from 'react';

const OfferCart = ({offerData}) => {
    const {name, pic, description} = offerData;
    const [readMore, setReadMore] = useState(false)
    return (
        <div className="cart bg-gray-500 rounded-b-2xl rounded-tl-xl p-3 common-hover-shadow">
            <div className="cart-header">

            </div>
            <div className="cart-body ">
                <h2 className="font-semibold text-xl">{name}</h2>
                <p className="mt-3">
                    {
                        !readMore ? description.slice(0, 120) : description
                    }
                    <button onClick={()=> setReadMore(!readMore)} className="text-blue-500">{readMore? <>Show less</> : <>Read more</>}</button>
                </p>
            </div>
        </div>
    );
};

export default OfferCart;