import JoditEditor from 'jodit-react';
import React from 'react';
import Swal from 'sweetalert2';
import { base_url } from '../../../layout/Title';

const JobPost = () => {

    const jobForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const job_position = form.job_position.value
        const job_type = form.job_type.value
        const workplace = form.workplace.value
        const vacancy = form.vacancy.value
        const description = form.description.value
        const last_date = form.last_date.value
        const jobData = {
            job_position,
            job_type,
            workplace,
            vacancy,
            description,
            dateline: last_date

        }

        fetch(`${base_url}/job-post/add-job`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            body: JSON.stringify(jobData),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire('Job Post Publish Successfully', ' ', 'success')
                form.reset()

            })

    }

    return (
        <div className='py-20 flex justify-center px-1 text-black  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%] mt-5'>
            <form onSubmit={jobForm} className='w-10/12'>
                <h1 className='text-2xl font-bold text-center text-white py-8'>Upload Job Post</h1>
                <input className='w-full my-2 rounded' name='job_position' placeholder='Job Position' type="text" />
                <input className='w-full my-2 rounded' name='job_type' placeholder='Job type' type="text" />
                <input className='w-full my-2 rounded' name='workplace' placeholder='Workplace type' type="text" />
                <input className='w-full my-2 rounded' name='vacancy' placeholder='Vacancy' type="text" />
                <input className='w-full my-2 rounded' name='last_date' placeholder='last_date' type="date" />
                <JoditEditor name='description' className='rounded  jodit-editor' />
                <br />
                <br />
                <button
                    type='submit'
                    className="group flex items-center justify-center gap-4 w-full border border-indigo-600 bg-indigo-600 px-10 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring"

                >
                    <span
                        className="font-medium text-white transition-colors text-center group-hover:text-indigo-600 group-active:text-indigo-500"
                    >
                        Apply
                    </span>


                </button>
            </form>
        </div>
    );
};

export default JobPost;