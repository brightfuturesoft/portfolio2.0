import React from 'react';
import BlogCart from './BlogCart/BlogCart';

const Blog = () => {
    const blog =[
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
        <div className="p-2 bg-[#1b1b22]">
             <div className="blog-bg py-5 h-[400px] rounded ">
                   <div className="px-1 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 md:w-[80%] w-[95%] ">
                         <div className="text-center mt-8">
                              <h2 className="text-6xl font-semibold text-[#00ccff]">
                               Welcome to our blog
                              </h2>
                              <p className='mt-8'>
                                Discover the latest technological innovations and trends: your <br /> ultimate guide to the digital world.
                              </p>
                         </div>
                   </div>
             </div>
             <div className="content px-1 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-2 md:w-[100%] w-[95%]">
                <h1 className="text-white font-semibold text-2xl border-b pb-2 border-[#80808093]">Blogs</h1>
                <br />
                <div className="grid grid-cols-3 gap-12">
                    {
                        blog?.map(bData => <BlogCart key={bData.id} bData={bData} />)
                    }               
                </div>
             </div>
        </div>
    );
};

export default Blog;