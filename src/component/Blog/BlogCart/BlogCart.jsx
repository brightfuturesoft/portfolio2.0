import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BlogCart = ({bData}) => {
    const {id, name, pic, details} = bData;
    return (
        <div>
            <div className="">
                          <img  loading="lazy"src={pic} />

                          <h1 className="mt-5 font-semibold text-lg text-[#5081f3]">{name}</h1>
                          <p className="text-sm mt-2 text-white">{details?.slice(0, 300)}</p>
                          <br />
                          <Link to={`/blog/${id}`} className="border border-blue-500 px-3 py-2 text-blue-500 rounded duration-200 hover:bg-[#3244e75c] hover:text-blue-600">  Read more </Link>
                      </div>
        </div>
    );
};

export default BlogCart;