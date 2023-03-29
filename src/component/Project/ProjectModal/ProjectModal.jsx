import React from 'react';

const ProjectModal = ({prj}) => {
    const {id, name, description, liveLike} = prj;
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" data-modal="lg" />
                <div className="modal " data-modal="lg" >
                <div className="modal-box w-[980px]" data-modal="lg" >
                    <h3 className="font-bold text-lg ">{name}</h3>
                    <p className="py-4">{description}</p>
                    <div className="modal-action">
                    <label htmlFor={id} className="btn">Yay!</label>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ProjectModal;