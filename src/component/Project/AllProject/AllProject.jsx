import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ProjectCart from '../ProjectCart/ProjectCart';
import Title from '../../../layout/Title';
import moduleName from '../../../Assctes/logo.png';
import MetaTitle from '../../../layout/Title';

const AllProject = () => {
    const datas = useLoaderData();
    const project = datas.data
    console.log(project);

    // const stickyTopSpace = 50;
    const [searchValue, setSearchValue] = useState("all");
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        if (searchValue === "all") {
            // Show all projects if searchValue is "all"
            setSearchResults(project);
        } else {
            const filteredObjects = project.filter((obj) =>
                obj.projectType.toLowerCase().includes(searchValue.toLowerCase())
            );
            setSearchResults(filteredObjects);
        }
    }, [searchValue, project]);


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stripHtmlTags = (html) => {
        // Create a new DOM parser
        const doc = new DOMParser().parseFromString(html, 'text/html');

        // Remove unwanted elements (style, title, etc.)
        const unwantedTags = ['style', 'title'];
        unwantedTags.forEach(tag => {
            const elements = doc.getElementsByTagName(tag);
            while (elements.length) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        });

        // Get plain text from the document body
        return doc.body.textContent || '';
    };

    return (
        <div className="md:py-14 all-project-bg ">
            <MetaTitle
                title="Projects"
                description="Explore our diverse range of projects at Bright Future Soft. From innovative web and app development to impactful UI/UX design, see how we bring ideas to life."
                keywords="projects, web development, app development, UI/UX design, software solutions, portfolio, Bright Future Soft"
                author="Bright Future Soft"
                ogTitle="Our Projects"
                ogDescription="Discover the projects we've worked on at Bright Future Soft. Our portfolio showcases our expertise in web and app development, UI/UX design, and more."
                ogImage={moduleName}
                ogUrl="https://www.brightfuturesoft.com/all_project"
            />
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
                    <ul className="flex gap-8 items-center px-4">
                        <li>
                            <button onClick={() => setSearchValue("all")} className={`duration-200 capitalize hover:text-blue-500 ${searchValue == 'all' && 'text-blue-500'}`}>All</button>
                        </li>
                        <li>
                            <button onClick={() => setSearchValue("website")} className={`duration-200 capitalize hover:text-blue-500 ${searchValue == 'website' && 'text-blue-500'}`}>website</button>
                        </li>
                        <li>
                            <button onClick={() => setSearchValue("app")} className={`duration-200 capitalize hover:text-blue-500 ${searchValue == 'app' && 'text-blue-500'}`}>app</button>
                        </li>
                        <li>
                            <button onClick={() => setSearchValue("uiDesign")} className={`duration-200 capitalize hover:text-blue-500 ${searchValue == 'uiDesign' && 'text-blue-500'}`}>UI/UX design</button>
                        </li>
                    </ul>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-10 mt-10'>

                    {searchResults?.map(data =>
                        <Link to={`/project/${data?.url}`}
                            className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{
                                backgroundImage:
                                    `url(${data?.image_url})`
                            }}
                        >
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-20 text-xl font-semibold text-white capitalize">
                                    {data?.project_name}
                                </h2>
                                <div className="mt-2  tracking-wider  ">
                                    {stripHtmlTags(data?.description)?.slice(0, 100)}...{' '}<Link className="text-white" to={`/project/${data?._id}`}> More</Link>
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


