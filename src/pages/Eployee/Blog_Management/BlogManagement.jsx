import React, { useState } from 'react';
import Link_Button from '../../shared/Link_Button';
import DeleteModal from '../../../Hook/DeleteModal';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { base_url } from '../../../layout/Title';
import { Link } from 'react-router-dom';

const BlogManagement = () => {

    const { data: blog_data = [], refetch, isLoading } = useQuery({
        queryKey: ["blog_data"],
        queryFn: async () => {
            const res = await fetch(
                `${base_url}/blog/get-blog`,
                {
                    headers: {
                        'content-type': 'application/json',
                        'author': 'bright_future_soft'
                    },
                    method: 'GET',
                }
            );
            const data = await res.json();
            return data.data;
        },
    });

    const [deleteId, setDeletId] = useState("");
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const delete_meeting = (id) => {
        setDeletePopUp(true);
        setDeletId(id);
    };

    if (isDelete) {
        fetch(`${base_url}/blog/delete-blog?blog_id=${deleteId}`, {
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message, ' ', 'success')
                    refetch()
                    setIsDelete(false);
                    setDeletId("");
                }
                else {
                    Swal.fire(data.message, '', 'info')
                }
            })

    }
    return (
        <div>
            <div class="py-12  sm:py-16 lg:py-20">
                <div class="px-4  sm:px-6 lg:px-8">
                    <Link_Button name={'Add New Blog'} url={'/dashboard/blog-management/new'} />
                    <div class=" ">
                        <div class="overflow-hidden rounded-xl">
                            <div class="py-6">
                                <div class="sm:flex sm:items-start sm:justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-gray-100">Meeting Management</p>
                                        <p class="mt-1 text-sm font-medium text-gray-500">Here is all meeting information</p>
                                    </div>


                                </div>
                            </div>

                            <div className="h-0 w-0">
                                {" "}
                                <DeleteModal
                                    setOpenModal={setDeletePopUp}
                                    OpenModal={deletePopUp}
                                    setIsDelete={setIsDelete}
                                />
                            </div>



                            <div class="flow-root mt-8">
                                <div class="-my-5 divide-y divide-gray-200">
                                    {blog_data?.map((blog) => (
                                        <div class="py-5">
                                            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                                <div class="flex items-center flex-1 min-w-0">
                                                    <img class="flex-shrink-0 object-cover w-10 h-10 rounded" src={blog.img} alt="" />
                                                    <div class="flex-1 min-w-0 ml-4">
                                                        <p class="text-sm font-bold text-gray-100 truncate ">{blog.title}</p>
                                                        <p class="mt-1 text-sm font-medium text-gray-500 truncate">{blog.meta_description.split(' ').slice(0, 10).join(' ')}</p>
                                                    </div>
                                                </div>

                                                <div class="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                                    <Link to={`/blog/${blog.url}`} target='_blank' title="" class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-500"> Learn More </Link>

                                                    <div className=''>
                                                        <div className="flex gap-3 items-center  ">

                                                            <a

                                                                target='_blank'
                                                                type="button"
                                                                className="inline-flex whitespace-nowrap items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                                            >
                                                                Edit
                                                            </a>

                                                            <button
                                                                onClick={() => delete_meeting(blog._id)}
                                                                type="button"
                                                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700"
                                                            >
                                                                Delete
                                                            </button>


                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    }
                                </div>
                            </div>



                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default BlogManagement;