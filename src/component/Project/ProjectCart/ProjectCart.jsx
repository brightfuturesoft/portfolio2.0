import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = ({allProjectData, stickyTopSpace}) => {
    const {projectData, setProjectData} = useState();
    const {id, name, pic,description, liveLink, technology } = allProjectData;
  
    return (
            
        <div className={`sticky mt-[40px] border border-[#007bff] rounded-xl mx-auto md:w-[90%] w-[98%] duration-200 stc-cart bg-[#0b0b16]`}
			style={{ top: stickyTopSpace }}>
                <div className='p-3'>
                    <div className="bg-[#141425] rounded-xl md:grid grid-cols-3">
                        <div className="p-3">
                            <div className="h-[200px] rounded-xl" style={{backgroundImage : `url("${pic}")`, backgroundSize : "cover"}}></div>
                        </div>
                        <div className="p-2 col-span-2">
                            <h1 className="font-bold text-xl text-[#00a2ff]">{name}</h1>
                            <span className="mt-2 flex items-center gap-2 text-white">
							<small>Technology used :</small>
							<ul className="flex flex-wrap gap-2">
								{
									technology.map(techData => <li className={`text-[13px] text-white bg-[#064476] px-2 rounded-xl`} key={techData.id}>{techData.name}</li>)
								}
							</ul>
						</span>
                        <p className="mt-5 text-sm pb-20">{description}</p>
                        </div>
                        	<Link to={`/all_project/${id}`} className="absolute bg-[#0066ff] right-[20px] bottom-[20px] text-white px-3 py-2 rounded-md duration-200 hover:bg-[#007bff]">Details</Link>
                    </div>
                </div>
        </div>
    );
};

export default ProjectCart;