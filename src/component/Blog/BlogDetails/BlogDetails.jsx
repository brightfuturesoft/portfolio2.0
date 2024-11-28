import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { base_url } from '../../../layout/Title';
import { Helmet } from 'react-helmet';
import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import hadi from '../../../Assctes/teamMember/mohotasimhadi.jpeg';
import maruf from '../../../Assctes/teamMember/shishir.jpeg'

const BlogDetails = () => {
      const [blogList, setBlogList] = useState([])
      const [schedule, setSchedule] = useState(false)
      useEffect(() => {
            fetch(`${base_url}/blog/get-blog`)
                  .then(res => res.json())
                  .then(data => setBlogList(data.data))

      }, [])
      const blog_data = useLoaderData()

      const blogInfo = blog_data?.data



      const removeInlineStyles = (html) => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const elements = doc.getElementsByTagName('*');
            const unwantedStyles = [
                  'background-color',
            ];

            for (let i = 0; i < elements.length; i++) {
                  const element = elements[i];
                  const style = element.getAttribute('style') || '';

                  // Remove unwanted styles
                  unwantedStyles.forEach((unwantedStyle) => {
                        if (style.includes(unwantedStyle)) {
                              element.style.removeProperty(unwantedStyle);
                        }
                  });

                  // Check if the color is black or not set
                  const color = element.style.color;
                  if (color === 'rgb(0, 0, 0)' || !color) {
                        element.style.color = '#FBF8EF';
                  }
            }

            return doc.body.innerHTML;
      };

      return (

            <section class="py-12 bg-gray-900 sm:py-16 lg:py-28">
                  <Helmet>
                        <title>{blogInfo?.title} | Bright Future Soft</title>
                        <meta name="description" content={blogInfo?.meta_description} />

                        {/* Open Graph (OG) tags for Facebook and other platforms */}
                        <meta property="og:title" content={blogInfo?.title} />
                        <meta property="og:description" content={blogInfo?.meta_description} />
                        <meta property="og:image" content={blogInfo?.img} />
                        <meta property="og:url" content={window.location.href} />
                        <meta property="og:type" content="article" />

                        {/* Twitter Card tags */}
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content={blogInfo?.title} />
                        <meta name="twitter:description" content={blogInfo?.meta_description} />
                        <meta name="twitter:image" content={blogInfo?.img} />
                  </Helmet>


                  <div class="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8">
                        <h1 class="text-4xl font-bold text-gray-100 sm:text-5xl">{blogInfo?.title}</h1>
                        <div class=" mx-auto">
                              <div class="max-w-2xl">

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
                                          <div class="overflow-hidden border-opacity-30 rounded-md border border-gray-200">
                                                <div class="px-4 py-5 sm:p-6">
                                                      <h4 class="text-xs font-bold tracking-widest text-gray-300 uppercase">More Blogs</h4>

                                                      <ul class="mt-8 space-y-5">
                                                            {
                                                                  blogList.filter((blog) => blog._id !== blogInfo._id)?.map((blog) => (
                                                                        <li>
                                                                              <Link to={`/blog/${blog.url}`} title="" class="flex text-base font-bold text-gray-400 hover:underline"> {blog?.title} </Link>
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

                                          <p className='text-white ' dangerouslySetInnerHTML={{
                                                __html: removeInlineStyles(blogInfo.message),
                                          }}></p>

                                    </article>
                              </div>
                        </div>
                  </div>
                  <div className='px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                        <div className=" px-4 mx-auto  mt-10  text-center bg-gray-300 rounded-md">
                              <div className=" py-12 ">
                                    <div className=" mx-auto">
                                          <div className="relative z-0 flex items-center justify-center -space-x-2 ">
                                                <img
                                                      className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                                                      src={hadi}
                                                      alt=""
                                                />
                                                <img
                                                      className="relative z-30 inline-block w-16 h-16 rounded-full ring-4 ring-gray-100"
                                                      src={mahadi}
                                                      alt=""
                                                />
                                                <img
                                                      className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                                                      src={maruf}
                                                      alt=""
                                                />
                                          </div>

                                          <h3 className="mt-6 text-2xl font-semibold text-gray-900">Still have questions?</h3>
                                          <p className="mt-2 text-base font-normal text-gray-600">
                                                Can't find the answer you're looking for? Please chat with our friendly team.
                                          </p>
                                          <div className="mt-6">
                                                <button
                                                      onClick={() => setSchedule(true)}
                                                      className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                                      role="button"
                                                >
                                                      Start free for consultancy
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {schedule && <CallSchedule setModalOpen={setSchedule} isModalOpen={schedule} />}
            </section>

      );
};

export default BlogDetails;


const CallSchedule = ({ isModalOpen, setModalOpen }) => {
      if (!isModalOpen) return null; // Modal won't render if it's closed

      return (
            <div className="fixed inset-0 z-50 flex items-center h-screen pt-20 justify-center bg-black bg-opacity-70">
                  <div className="relative mx-6 w-full max-w-4xl  p-4 bg-white rounded-lg shadow-lg">

                        {/* Calendly iframe with modifications */}
                        <iframe
                              src="https://calendly.com/brightfuturesoft-bd"
                              title="Calendly Schedule"
                              className="w-full h-[80vh]  rounded-lg    "
                        // allow="camera; microphone"
                        />

                        {/* Close button */}
                        <button
                              onClick={() => setModalOpen(false)}
                              className="absolute top-3 bg-[#2463eb] hover:bg-[#315bb6]  size-10 rounded-full right-3 flex justify-center items-center text-gray-100 hover:text-gray-300"
                        >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                  </div>
            </div>
      );
};
