import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BlogCart from '../BlogCart/BlogCart';
import AdminBlogCart from './AdminBlogCart';
import Title from '../../../layout/Title';

const AdminBlog = () => {
   const blog = useLoaderData();
   const [show, setShow] = useState(false);
   const [loading, setLoading] = useState(false);
   if (blog === null) {
      setLoading(true);
   }
   const blogSubmitHandler = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const attachment = form.attachment.value;
      const description = form.description.value;
      setShow(!show)
   }
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div className="p-2 bg-[#1b1b22]">
         <Title title="Blog Modify" />
         <div className={`${show ? 'block' : 'hidden'} content px-1 pt-2 pb- mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-2 md:w-[100%] w-[99%] rounded `}>

         </div>
         <div className="content px-1 md:py-2 py-[1px] md:mt-20 mt-[60px] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-2 md:w-[100%] w-[95%]">
            <h1 className="text-white flex justify-between font-semibold text-2xl border-b pb-2 border-[#80808093]">All Blogs
               <Link to={'/admin-blog-from'} className="text-sm font-[400] bg-[#5a5af19c] duration-200 hover:bg-[#5a5af1ce] px-8 py-2 rounded">Add Blog</Link>
            </h1>
            <br />
            <div className="grid md:grid-cols-3 gap-12">
               {

                  loading === null ? <div className='text-4xl font-bold text-white'>Loading</div> :
                     blog?.map(bData => <AdminBlogCart key={bData.id} bData={bData} />)
               }
            </div>
         </div>
      </div>
   );
};

export default AdminBlog;