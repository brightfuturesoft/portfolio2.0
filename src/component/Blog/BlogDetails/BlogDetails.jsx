import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BlogDetails = () => {
    const [blogList, setBlogList] = useState([])
    useEffect(()=>{
        fetch('https://portfolio-backend-one-kappa.vercel.app/blog')
        .then(res => res.json())
        .then(data => setBlogList(data))
    },[])
    const blogInfo = useLoaderData()
    return (
        <div className="bg-[#151520]">
            <div className="px-1 md:py-20 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 md:w-[80%] w-[95%] grid md:grid-cols-3 gap-3 ">
                  <div className="md:col-span-2">
                    <img  loading="lazy"src={blogInfo?.pic} alt="" className="w-full" />

                    <h1 className="text-white mt-4 md:text-4xl text-2xl">
                       {blogInfo?.name}
                    </h1>
                    <p className="mt-5 text-gray-400">
                       {blogInfo?.details}
                    </p>
                  </div>
                  <div classN
                  ame="border-l px-2 border-[#8080805f]">
                    <h3 className="text-white pb-2 border-b border-[#d8d8d85e]">Another blogs</h3>
                         {
                            blogList?.map(blg => 
                                <Link to={`/blog/${blg.id}`} key={blg.id} className="flex items-center gap-2 mt-3 duration-200 hover:bg-[#3c3c4681] p-2 ">
                                      <img  loading="lazy"src={blg.pic} alt="" className="md:w-[110px] w-[110px]" />
                                      <div className="">
                                          <h4 className="text-white text-sm ">{blg.name}</h4>
                                          <small>{blg.details?.slice(0, 47)}</small>
                                      </div>
                                </Link>    
                            )
                         }

                  </div>  
            </div>
        </div>
    );
};

export default BlogDetails;