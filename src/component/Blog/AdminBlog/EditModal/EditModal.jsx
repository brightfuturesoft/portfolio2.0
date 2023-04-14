import React from 'react';
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';

const EditModal = ({id, bData}) => {
       const blogSubmitHandler =(e)=>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const attachment = form.attachment.value;
            const description = form.description.value;
       }
    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" />
                        <div className="modal p-0">
                        <div className="modal-box  px-4 py-9">
                            <label htmlFor={id} className="btn p-0 w-[30px] h-[30px] overflow-hidden float-right"><AiOutlineClose className='text-[20px]' /></label>
                                 <form onSubmit={blogSubmitHandler} className='mt-6'>
                         <h1 className="text-center text-white text-2xl">Edit Blog</h1>
                         <div className="md:flex items-center gap-2">
                                 <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8 w-full">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[47px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">name</label>
                                <input defaultValue={bData.name} type="text" name='name' className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="enter blog name" />
                              </div>

                               <div className="relative bg-[#0b0a2238] w-full border border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[87px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">attachment</label>
                                <input  type="file" name='attachment' className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="enter blog name" />
                          </div>
                         </div>
                         <div className="relative bg-[#0b0a2238] w-full border border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[87px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">description</label>
                                <textarea defaultValue={bData.details}  name='description' className="w-full rounded-lg outline-none h-[160px] border-none bg-[#00000034]" placeholder="enter blog description" />
                          </div>
                          <input type="submit"  htmlFor={id} value="submit" className='bg-[#4141e4] px-4 py-2 mt-8 text-white rounded-lg cursor-pointer'/>
                    </form>
                           
                        </div>
                        </div>
        </div>
    );
};

export default EditModal;