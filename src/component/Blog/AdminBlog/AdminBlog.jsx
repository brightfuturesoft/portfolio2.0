import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCart from '../BlogCart/BlogCart';
import AdminBlogCart from './AdminBlogCart';

const AdminBlog = () => {
       const blog = useLoaderData();
       const [show, setShow] = useState(false);
       const blogSubmitHandler =(e)=>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const attachment = form.attachment.value;
            const description = form.description.value;

            console.log(
                {
                    name : name,
                    attachment : attachment,
                    description : description
                }
            );
       }
    return (
             <div className="p-2 bg-[#1b1b22]">
             <div className={`${show ? 'block' : 'hidden'} content px-1 pt-2 pb- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-2 md:w-[100%] w-[95%] rounded `}>
                    <form onSubmit={blogSubmitHandler} className='w-[800px] mx-auto bg-[#0c0c27ae] px-4 rounded-md pb-8 pt-4'>
                         <h1 className="text-center text-white text-2xl">Create a new blog</h1>
                         <div className="md:flex items-center gap-2">
                                 <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8 w-full">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[47px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">name</label>
                                <input type="text" name='name' className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="enter blog name" />
                              </div>

                               <div className="relative bg-[#0b0a2238] w-full border border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[87px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">attachment</label>
                                <input type="file" name='attachment' className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="enter blog name" />
                          </div>
                         </div>
                         <div className="relative bg-[#0b0a2238] w-full border border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[87px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">description</label>
                                <textarea name='description' className="w-full rounded-lg outline-none h-[160px] border-none bg-[#00000034]" placeholder="enter blog description" />
                          </div>
                          <input type="submit" value="submit" className='bg-[#4141e4] px-4 py-2 mt-8 text-white rounded-lg cursor-pointer'/>
                    </form>
             </div>
             <div className="content px-1 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-2 md:w-[100%] w-[95%]">
                <h1 className="text-white flex justify-between font-semibold text-2xl border-b pb-2 border-[#80808093]">All Blogs 
                   <button onClick={()=> setShow(!show)} className="text-sm font-[400] bg-[#5a5af19c] duration-200 hover:bg-[#5a5af1ce] px-8 py-2 rounded">{show ? "Cancle" : "Add"}</button>
                </h1>
                <br />
                <div className="grid grid-cols-3 gap-12">
                    {
                        blog?.map(bData => <AdminBlogCart key={bData.id} bData={bData} />)
                    }               
                </div>
             </div>
        </div>
    );
};

export default AdminBlog;