import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCart = ({allProjectData, stickyTopSpace}) => {
    const {projectData, setProjectData} = useState();
    const {id, name, pic,description, liveLink, technology } = allProjectData;
  
    return (
            // <div className="cart bg-[#181d2b] p-3 rounded">
            //     <div className="cart-header">
            //         <img src={pic} alt="" className="h-[220px] rounded-lg" />
            //     </div>
            //     <div className="">
            //         <h3 className='mt-3 text-xl text-[#00a6ff] font-bold'>{name}</h3>
            //         <div className="flex items-center gap-2 mt-4">
            //             <Link to={liveLink} className="px-3 py-2 bg-[#0066ff] rounded text-white">Preview</Link>
            //             <Link to="/projectDetails" className="px-3 py-2 bg-[#420874] rounded text-white">Details</Link>
            //         </div>
            //     </div>
            // </div>
        <div className={`sticky mt-[40px] border border-[#007bff] rounded-xl mx-auto md:w-[90%] w-[98%] duration-200 stc-cart bg-[#0b0b16]`}
			style={{ top: stickyTopSpace }}>
                <div className='p-3'>
                    <div className="bg-[#141425] rounded-xl md:grid grid-cols-3">
                        <div className="p-3">
                            <div className="h-[200px] rounded-xl" style={{backgroundImage : `url("${pic}")`}}></div>
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
                        	<Link to={liveLink} className="absolute bg-[#0066ff] right-[20px] bottom-[20px] text-white px-3 py-2 rounded-md duration-200 hover:bg-[#007bff]">Live view</Link>
                    </div>
                </div>
        </div>
    );
};

export default ProjectCart;