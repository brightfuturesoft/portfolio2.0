import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const [project, setProject] = useState()
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:8000/allProject/${id}`)
        .then(res=> res.json())
        .then(data => setProject(data))
    },[]);
    
    return (
        <div className="bg-[#1b2030] text-[#8a8a8a] px-2 pt-6 pb-[80px]">
            <div className='px-1 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className="md:grid grid-cols-2 md:mt-20 mt-8">
                    <div className="">
                        <div className="p-2 bg-[#2f4056a1] rounded-xl">
                            <img src={`${project?.picLg}`} alt="" className="rounded-xl " />
                        </div>
                    </div>
                    <div className="md:px-4 ">
                         <h1 className='font-bold text-[#5571ee] md:text-4xl text-2xl mt-2'>{project?.name}</h1>
                         <p className='mt-3 text-white'>Technology  :</p>
                         <ul className="flex text-white gap-2 flex-wrap">
                            {
                                project?.technology?.map(tch => <li className='bg-[#00bfff7e] px-2 py-1 rounded-md text-sm'>
                                    {tch.name}
                                </li>)
                            }
                         </ul>
                         <p className="text-gray-300 mt-4">
                            {project?.description}
                         </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;