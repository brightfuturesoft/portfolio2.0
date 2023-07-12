import React from 'react';
import { Link } from 'react-router-dom';
import EditModal from './EditModal/EditModal';

const AdminBlogCart = ({bData}) => {
        const {id, name, pic, details} = bData;

    return (
        <div>
            <div className="">
                          <img  loading="lazy"src={pic} />

                          <h1 className="mt-5 font-semibold text-lg text-[#5081f3]">{name}</h1>
                          <p className="text-sm mt-2 text-white">{details?.slice(0, 300)}</p>
                          <br />
                         <div className="flex gap-2">
                            <label htmlFor={id} className="border border-blue-500 px-3 py-2 text-blue-500 rounded duration-200 hover:bg-[#3244e75c] hover:text-blue-600">Edit</label>
                          <button className="bg-[#9E274B] px-3 py-2 text-white rounded duration-200 hover:bg-[#ff5367ae] hover:text-white">  Delete </button>
                         </div>
                      </div>
                    <EditModal id={id} bData={bData}/>
        </div>
    );
};

export default AdminBlogCart;