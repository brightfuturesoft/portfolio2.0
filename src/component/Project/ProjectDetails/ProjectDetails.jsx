import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title, { base_url } from '../../../layout/Title';
import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import hadi from '../../../Assctes/teamMember/mohotasimhadi.jpeg';
import maruf from '../../../Assctes/teamMember/shishir.jpeg'

const ProjectDetails = () => {
      const [project, setProject] = useState()
      const [schedule, setSchedule] = useState(false)
      const { id } = useParams()
      useEffect(() => {
            fetch(`${base_url}/project/get-project-by-id?project_id=${id}`)
                  .then(res => res.json())
                  .then(data => setProject(data.data))
      }, []);

      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);

      console.log(project);



      const isWhite = project?.description.includes('black');

      return (
            <div className="bg-[#1b2030] text-[#8a8a8a] px-2  py-[100px]">
                  <section className="px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                        <div className="">
                              <div className="">
                                    <div className="max-w-4xl">
                                          <h1 className="text-4xl font-bold text-gray-100 sm:text-5xl">
                                                {project?.project_name}
                                          </h1>
                                          <p className="mt-6 text-base font-medium text-gray-300">Publish Date: {project?.date}</p>
                                    </div>

                                    <div className="mt-8">
                                          <div className="p-2 bg-[#2f4056a1] rounded-xl">
                                                <img loading="lazy" src={`${project?.image_url} `} alt={`${project?.project_name} -- Project`} className="rounded-xl" />
                                          </div>
                                    </div>

                                    <div className="mt-12 sm:mt-16 lg:grid lg:grid-cols-12 lg:gap-x-16 xl:gap-x-24">
                                          <aside className="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-24">
                                                <div className="overflow-hidden bg-[#ffffff3d] border border-gray-200 border-opacity-30 rounded">
                                                      <div className="px-4 py-5 sm:p-6">
                                                            <h4 className="text-xs font-bold tracking-widest text-gray-200 uppercase">
                                                                  We use Technology here
                                                            </h4>

                                                            <ul className="mt-8 space-y-5">
                                                                  {project?.technologies.map((technology) => (
                                                                        <li className="flex items-center space-x-3">
                                                                              <div className="inline-flex items-center justify-center flex-shrink-0 w-5  ">
                                                                                    <img src={technology?.imageUrl} alt="" />
                                                                              </div>
                                                                              <span className="flex text-base font-bold text-gray-300 ">
                                                                                    {technology?.name}
                                                                              </span>
                                                                        </li>
                                                                  ))}

                                                            </ul>
                                                      </div>
                                                </div>
                                          </aside>
                                          <article className="mt-12 prose lg:mt-0  custom-article lg:prose-lg lg:col-span-8 prose-blockquote:lg:text-xl prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:border-none prose-blockquote:text-lg prose-blockquote:leading-8 prose-blockquote:p-0 prose-blockquote:lg:p-0 prose-blockquote:font-medium prose-blockquote:text-gray-900" dangerouslySetInnerHTML={{
                                                __html: project?.description || '',
                                          }} >

                                          </article>
                                    </div>
                              </div>
                        </div>

                        <div className='px-4 mt-6  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8  bg-gray-300 rounded-md'>
                              <div className="   text-center ">
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

                                                <h3 className="mt-6 text-2xl font-semibold text-gray-900">Contact with us?</h3>
                                                <p className="mt-2 text-base font-normal text-gray-600">
                                                      Do you have any interest to contact us? We are here to help you.
                                                </p>
                                                <div className="mt-6">
                                                      <button
                                                            onClick={() => setSchedule(true)}
                                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                                            role="button"
                                                      >
                                                            Schedule a call
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        {schedule && <CallSchedule setModalOpen={setSchedule} isModalOpen={schedule} />}
                  </section>
            </div>
      );
};

export default ProjectDetails;


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
