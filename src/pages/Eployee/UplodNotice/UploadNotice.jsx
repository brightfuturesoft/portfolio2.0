import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const UploadNotice = () => {
    const jobForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const job_position = form.job_position.value
        const job_type = form.job_type.value
        const workplace = form.workplace.value
        const link = form.link.value
        const jobData = {
            job_position,
            job_type,
            workplace,
            link
        }

        fetch(`http://localhost:5000/job_post`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(jobData),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire('Job Post Publish Successfully', ' ', 'success')
            })

    }
    return (
        <div>
            <div className='py-20 flex justify-center px-1  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%] mt-5'>
                <form onSubmit={jobForm} className='w-10/12'>
                    <h1 className='text-2xl font-bold text-center py-8'>Upload Notice</h1>
                    <input className='w-full my-2' name='job_position' placeholder='Notice Title' type="text" />
                    <input className='w-full my-2' name='job_type' placeholder='Notice Describtion' type="text" />
                    <input className='w-full my-2' name='workplace' placeholder='Workplace type' type="text" />
                    <input className='w-full my-2' name='link' placeholder='Link' type="text" />
                    <button
                        type='submit'
                        className="group flex items-center justify-center gap-4 w-full border border-indigo-600 bg-indigo-600 px-10 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"

                    >
                        <span
                            className="font-medium text-white transition-colors text-center group-hover:text-indigo-600 group-active:text-indigo-500"
                        >
                            Upload
                        </span>


                    </button>
                </form>
            </div>
        </div>
    );
};

export default UploadNotice;