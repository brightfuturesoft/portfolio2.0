import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../../layout/Title';

const ProjectDetails = () => {
    const [project, setProject] = useState()
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://portfolio-backed.vercel.app/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#1b2030] text-[#8a8a8a] px-2 pt-6 pb-[80px]">

            <div className='px-1 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className="md:grid grid-cols-2 md:mt-20 mt-8">
                    <div className="">
                        <div className="p-2 bg-[#2f4056a1] rounded-xl">
                            <img loading="lazy" src={`${project?.image_url}`} alt="" className="rounded-xl " />
                        </div>
                    </div>
                    <div className="md:px-4 ">
                        <h1 className='font-bold text-[#5571ee] md:text-4xl text-2xl mt-2'>{project?.product_name}</h1>

                        <p className="text-gray-300 text-[18px] mt-4">
                            {project?.description}
                        </p>
                        <p className='mt-3 text-white text-2xl font-semibold'>Features  :</p>
                        <ul className=" text-white gap-2 ">
                            {
                                project?.features?.map((i) =>
                                    <li className="flex items-start text-gray-300">
                                        <span className="mr-1">
                                            <svg
                                                className="w-5 h-5 mt-px text-purple-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                            >
                                                <polygon
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    fill="none"
                                                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                            </svg>
                                        </span>
                                        {[i]}.
                                    </li>


                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;