import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';

const Project = () => {
    const [project, setProject] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/allProject')
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    const stickyTopSpace = 50;
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Projects</span></h1>

            <div className=" mt-20">
                {
                    project?.slice(0, 3).map((prj, index) => <Card key={prj.id} data={prj} stickyTopSpace={stickyTopSpace * (index + 1)}></Card>)
                    
                }
            </div>
           <div className="flex items-center justify-center">
                 <Link to="/all_project" className='mx-auto border border-[#005eff] px-5 py-2 duration-200 hover:text-[#64beff] hover:bg-[#005eff4b] mt-14 rounded-lg text-[#2b79ff] md:shadow shadow-blue-700'>See more</Link>
           </div>
        </div>
    );
};

export default Project;