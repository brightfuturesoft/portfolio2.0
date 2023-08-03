import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProjectCart from '../ProjectCart/ProjectCart';
import Title from '../../../layout/Title';

const AllProject = () => {
    const datas = useLoaderData();
   
    // const stickyTopSpace = 50;
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);


    // useEffect(() => {
    // const filteredObjects = data.filter((obj) =>
    //     obj.projectType.toLowerCase().includes(searchValue.toLowerCase())
    // );
    // setSearchResults(filteredObjects);
    // }, [searchValue, data]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="md:py-14 all-project-bg ">
            <Title title="Projects" />
            <div className="px-1 pt-1 pb-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%] mt-5">
                <div className="p-banner px-4 py-[110px]" align="center">
                    <h1 className='text-4xl font-bold'>Our Projects</h1>
                    <p className='text-sm'>Do you have an any project idea ?</p>
                    <br /><br />

                    <div className='w-48'>
                        <Link
                            className="group flex items-center justify-center gap-4  border border-indigo-600 bg-indigo-600 px-10 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"
                            to='/contract'
                        >
                            <span
                                className="font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500"
                            >
                                Contract Us
                            </span>


                        </Link>
                    </div>
                </div>
                <div className="flex justify-between mt-8 border-b border-[#ffffff2f] pb-3">
                    <h4 className="font-bold text-lg text-blue-500">All Projects</h4>
                    <ul className="flex gap-8 items-center">
                        <li>
                            <button onClick={() => setSearchValue("website")} className='duration-200 hover:text-blue-500'>website</button>
                        </li>
                        <li>
                            <button onClick={() => setSearchValue("app")} className='duration-200 hover:text-blue-500'>app</button>
                        </li>
                        <li>
                            <button onClick={() => setSearchValue("uiDesign")} className='duration-200 hover:text-blue-500'>ui design</button>
                        </li>
                    </ul>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-10 mt-10'>

                    {datas.map(data =>
                        <Link to={`/project/${data?._id}`}
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage:
                                    `url(${data?.image_url})`
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-20 text-xl font-semibold text-white capitalize">
                                    {data?.product_name}
                                </h2>
                                <div className="mt-2  tracking-wider  ">
                                    {data?.description?.slice(0, 100)}...{' '} <Link className="text-white" to={`/project/${data?._id}`}> More</Link>
                                </div>
                            </div>
                        </Link>


                    )
                    }

                </div>
            </div>
        </div>
    );
};

export default AllProject;


