import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title, { base_url } from '../../../layout/Title';

const ProjectDetails = () => {
    const [project, setProject] = useState()
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
            </section>
        </div>
    );
};

export default ProjectDetails;


{/* <article
                                className='mt-12 prose lg:mt-0  custom-article lg:prose-lg lg:col-span-8'
                                dangerouslySetInnerHTML={{
                                    __html: project?.description || '',
                                }}
                            ></article>

                            <aside class="lg:col-span-4 lg:order-last lg:self-start lg:sticky lg:top-8">
                                <div class="overflow-hidden bg-white border border-gray-200">
                                    <div class="px-4 py-5 sm:p-6">
                                        <h4 class="text-xs font-bold tracking-widest text-gray-400 uppercase">On this page</h4>


                                       
                                    </div>
                                </div>
                            </aside> */}
