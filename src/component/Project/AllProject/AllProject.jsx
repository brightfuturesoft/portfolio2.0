import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProjectCart from '../ProjectCart/ProjectCart';

const AllProject = () => {
    const data = useLoaderData();
    const stickyTopSpace = 50;

    return (
        <div className="md:py-14  all-project-bg">
              <div className="px-1 pt-1 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                    <div className="p-banner px-4 py-[110px]" align="center">
                        <h1 className='text-4xl font-bold'>Our Projects</h1>
                        <p className='text-sm'>Do you have an any project idea ?</p>
                        <br /><br />
                        <Link className='bg-[blue] px-8 py-3 text-white rounded'>Contact</Link>
                    </div>
                    <div className="flex justify-between mt-8 border-b border-[#ffffff2f] pb-3">
                        <h4 className="font-bold text-lg text-blue-500">All Projects</h4>
                        <ul className="flex gap-8 items-center">
                            <li>
                                <button className='duration-200 hover:text-blue-500'>website</button>
                            </li>
                            <li>
                                <button className='duration-200 hover:text-blue-500'>app</button>
                            </li>
                            <li>
                                <button className='duration-200 hover:text-blue-500'>ui design</button>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        {
                            data.map((allProjectData, index) => <ProjectCart key={allProjectData.id}  stickyTopSpace={stickyTopSpace * (index + 1)}  allProjectData={allProjectData} />)
                        }
                    </div>
              </div>
        </div>
    );
};

export default AllProject;