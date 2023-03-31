import React from 'react';

const ProjectCart = ({allProjectData, stickyTopSpace}) => {
    const {name, pic,description, liveLink } = allProjectData;
    
    return (
        <div className={`sticky mt-[40px] border border-[#007bff] rounded-xl mx-auto md:w-[90%] w-[98%] duration-200 stc-cart`}
			style={{ top: stickyTopSpace }}>
                <div className='border border-blue-500  p-3'>
                    <div className="bg-[#141425] grid grid-cols-2">
                        <div>
                            <div className="h-[200px]" style={{backgroundImage : `url("${pic}")`}}></div>
                        </div>
                        <div className="col-span-4">
                            <h1>{name}</h1>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProjectCart;