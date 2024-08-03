import React, { useState } from 'react';
import Link_Button from '../../shared/Link_Button';
import DeleteModal from '../../../Hook/DeleteModal';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { base_url } from '../../../layout/Title';
import { Link, useLocation, useParams } from 'react-router-dom';


const Apply_List = () => {
    const location = useLocation();
    // const queryParams = queryString.parse(location.search);
    // const { job_id } = queryParams;

    console.log(location.search);


    const { data: job_data = [], refetch, isLoading } = useQuery({
        queryKey: ["job_apply"],
        queryFn: async () => {
            const res = await fetch(
                `${base_url}/job-post/get-job-apply${location.search}`,
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

    console.log(job_data);



    const [deleteId, setDeletId] = useState("");
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const delete_meeting = (id) => {
        setDeletePopUp(true);
        setDeletId(id);
    };

    if (isDelete) {
        fetch(`${base_url}/job-post/delete-job?job_post_id=${deleteId}`, {
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


    const stripHtmlTags = (html) => {
        // Create a new DOM parser
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const unwantedTags = ['style', 'title'];
        unwantedTags.forEach(tag => {
            const elements = doc.getElementsByTagName(tag);
            while (elements.length) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        });

        // Get plain text from the document body
        return doc.body.textContent || '';
    };

    // Example usage in JSX
    // const descriptionText = ;
    // const truncatedText = descriptionText.split(' ').slice(0, 10).join(' ');


    return (
        <div>
            <div class="py-12  sm:py-16 lg:py-20">
                <div class="px-4  sm:px-6 lg:px-8">
                    <Link_Button name={'Back Job Post'} url={'/dashboard/job-management'} />
                    <div class=" ">
                        <div class="overflow-hidden rounded-xl">
                            <div class="py-6">
                                <div class="sm:flex sm:items-start sm:justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-gray-100">Job Application Management</p>
                                        <p class="mt-1 text-sm font-medium text-gray-500">Here is all apply information</p>
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
                            {/* job_position,
                            job_type,
                            workplace,
                            vacancy,
                            description */}


                            <div class="flow-root mt-8">
                                <div class="-my-5 divide-y divide-gray-200">
                                    {job_data?.map((job) => (
                                        <div key={job._id} class="py-5">
                                            <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                                <div class="flex items-center flex-1 min-w-0">
                                                    <p class="text-sm font-bold text-gray-100 truncate ">{job?.full_name}</p>


                                                </div>
                                                <div class="flex-1 min-w-0 ml-4 ">
                                                    <p className="text-sm font-bold text-gray-100 truncate">{job?.email_address}</p>
                                                    <p class="mt-1 text-sm font-medium text-gray-500 truncate">{job?.phone_number}</p>
                                                </div>
                                                <div class="flex-1 min-w-0 ml-4 ">
                                                    <p class="text-sm font-bold text-gray-100 truncate ">{job?.salary_expectation}</p>
                                                    <p className="mt-1 text-sm font-medium text-gray-500 truncate">Apply: {job.experience_in_years}</p>
                                                </div>

                                                <div class="flex items-center justify-between mt-4 sm:space-x-6 pl-14 sm:pl-0 sm:justify-end sm:mt-0">
                                                    <a
                                                        href={job.resume}
                                                        title="Resume"
                                                        className="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-gray-500"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Resume
                                                    </a>
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
                                                                onClick={() => delete_meeting(job._id)}
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
        </div>
    );
};


export default Apply_List;