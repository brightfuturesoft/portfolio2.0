import React from 'react';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
      const blogList =[
        {
            id :0,
            pic : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name : "Analyzing Spotify Music UI/UX",
            details : "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
        }, {
            id :1,
            pic : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name : "Analyzing Spotify Music UI/UX2",
            details : "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
        },
        {
            id :2,
            pic : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name : "Analyzing Spotify Music UI/UX3",
            details : "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
        },
        {
            id :3,
            pic : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
            name : "Analyzing Spotify Music UI/UX4",
            details : "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward."
        }
    ]
    return (
        <div className="bg-[#151520]">
            <div className="px-1 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 md:w-[80%] w-[95%] grid grid-cols-3 gap-3 ">
                  <div className="col-span-2">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYnNpdGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" className="w-full" />

                    <h1 className="text-white mt-4 text-4xl ">
                        Analyzing Spotify Music UI/UX4
                    </h1>
                    <p className="mt-5 text-gray-300">
                        Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.
                        Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.
                    </p>
                  </div>
                  <div className="border-l px-2 border-[#8080805f]">
                    <h3 className="text-white pb-2 border-b border-[#d8d8d85e]">Another blogs</h3>
                         {
                            blogList?.map(blg => 
                                <Link to={`/blog/${blg.id}`} key={blg.id} className="flex items-center gap-2 mt-3 duration-200 hover:bg-[#3c3c4681] p-2">
                                      <img src={blg.pic} alt="" className="w-[110px]" />
                                      <div className="">
                                          <h4 className="text-white text-sm ">{blg.name}</h4>
                                          <small>{blg.details.slice(0, 47)}</small>
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