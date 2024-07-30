import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { base_url } from '../../../layout/Title';

const BlogDetails = () => {
    const [blogList, setBlogList] = useState([])
    useEffect(() => {
        fetch(`${base_url}/blog/get-blog`)
            .then(res => res.json())
            .then(data => setBlogList(data.data))

    }, [])
    const blog_data = useLoaderData()

    const blogInfo = blog_data?.data




    return (
        // <div className="bg-[#151520]">
        //     <div className="px-1 md:py-20 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 md:w-[80%] w-[95%] grid md:grid-cols-3 gap-3 ">
        //         <div className="md:col-span-2">
        //             <img loading="lazy" src={blogInfo?.img} alt="" className="w-full" />

        //             <h1 className="text-white mt-4 md:text-4xl text-2xl">
        //                 {blogInfo?.title}
        //             </h1>
        //             <p className="mt-5 ">
        //                 {blogInfo?.message}
        //             </p>
        //         </div>
        //         <div classN
        //             ame="border-l px-2 border-[#8080805f]">
        //             <h3 className="text-white pb-2 border-b border-[#d8d8d85e]">Another blogs</h3>
        //             {
        //                 blogList?.map(blg =>
        //                     <Link to={`/blog/${blg._id}`} key={blg._id} className="flex items-center gap-2 mt-3 duration-200 hover:bg-[#3c3c4681] p-2 ">
        //                         <img loading="lazy" src={blg.img} alt="" className="md:w-[110px] w-[110px]" />
        //                         <div className="">
        //                             <h4 className="text-white text-sm ">{blg.title}</h4>
        //                             <small>{blg.message?.slice(0, 47)}</small>
        //                         </div>
        //                     </Link>
        //                 )
        //             }

        //         </div>
        //     </div>
        // </div>
        <section class="py-12 bg-white sm:py-16 lg:py-28">
            <div class="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
                <div class=" mx-auto">
                    <div class="max-w-2xl">
                        <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">{blogInfo?.title}</h1>
                        <p class="mt-6 text-base font-medium text-gray-500">
                            {new Date(blogInfo.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    </div>

                    <div class="mt-12 sm:mt-16 flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-24">
                        <aside class="lg:col-span-4 mt-20 md:mt-0 lg:order-last lg:self-start lg:sticky lg:top-28">
                            <div class="overflow-hidden bg-white border border-gray-200">
                                <div class="px-4 py-5 sm:p-6">
                                    <h4 class="text-xs font-bold tracking-widest text-gray-600 uppercase">More Blogs</h4>

                                    <ul class="mt-8 space-y-5">
                                        {
                                            blogList.filter((blog) => blog._id !== blogInfo._id)?.map((blog) => (
                                                <li>
                                                    <Link to={`/blog/${blog.url}`} title="" class="flex text-base font-bold text-gray-500 hover:underline"> {blog?.title} </Link>
                                                </li>
                                            ))
                                        }



                                    </ul>
                                </div>
                            </div>
                        </aside>

                        <article
                            class="mt-12 prose lg:mt-0 lg:prose-lg lg:col-span-8 prose-blockquote:lg:text-xl prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:border-none prose-blockquote:text-lg prose-blockquote:leading-8 prose-blockquote:p-0 prose-blockquote:lg:p-0 prose-blockquote:font-medium prose-blockquote:text-gray-900"
                        >
                            <img class="w-full rounded" src={blogInfo.img} alt="" />
                            <br />
                            <br />

                            <p dangerouslySetInnerHTML={{
                                __html: blogInfo.message,
                            }}></p>

                        </article>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default BlogDetails;