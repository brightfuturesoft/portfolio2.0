import React, { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UseContext/UseContext';
import JoditEditor from 'jodit-react';
import Swal from 'sweetalert2';
import Link_Button from '../../shared/Link_Button';
import { base_url } from '../../../layout/Title';

const AddNewIssue = () => {
    const [loading, setLoading] = useState(false);
    const [activeMdl, setActiveMdl] = useState(false);





    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

    const submit_issue = (e) => {
        e.preventDefault()
        const input = e.target
        const data = {
            author_name: input?.author_name?.value,
            subject: e.target?.subject?.value,
            body: e.target?.body?.value,
            status: 'pending',
            issue_date: new Date().getTime()
        }




        fetch(`${base_url}/issue/add-issue`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message, ' ', 'success')
                    navigate('/dashboard/issue-submit');

                }
                else {
                    Swal.fire(data.message, '', 'info')
                }
            })


    }

    return (
        <div className='form-bg'>

            <div className="w-full py-12">
                <div className=" mb-4  mx-8">
                    {/* <Link
                        to={'/dashboard/issue-submit'}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white  rounded-md shadow-sm  focus:outline-none focus:ring-offset-2 hover:bg-red-300 "
                    >
                        <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Back Issue List
                    </Link> */}
                    <Link_Button name={'Back Issue List'} url={'/dashboard/issue-submit'} />
                </div>


                <form onSubmit={submit_issue} className="text-[#f0f0f0] md:w-[90%] px-4 mx-8 max-w-7xl sm:px-6 lg:px-8 mb-4 rounded-xl bg-inherit border p-20 capitalize">
                    <h3 className="text-4xl text-center">Issue Submission Form</h3>
                    <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-4">
                        <label className="sr-only" htmlFor="title">
                            Title
                        </label>
                        <input required name="author_name" id='author_name' type="text" className="w-full rounded-lg outline-none border-none bg-[#00000034]" defaultValue={user?.name} placeholder="What is your name?" />
                    </div>

                    <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">

                        <input required type="text" id='subject' name="subject" className="w-full rounded-lg outline-none border-none  bg-[#00000034]" placeholder="What is your problem?" />
                    </div>
                    <div className="relative bg-[#0b0a2238] text-black font-mono border border-[#1795F0] rounded-lg mt-8">
                        {/* <textarea name="body" type="text" className="w-full h-[110px] rounded-lg outline-none border-none  " placeholder="Please describe your problem here" /> */}
                        <JoditEditor name='body' className='rounded  h-[510px] t jodit-editor' />
                    </div>

                    <button type="submit" className="mt-8 bg-[#1A2644] hover:bg-blue-500 text-white w-full p-3 rounded-lg" disabled={loading}>{!loading ? "Submit" : <div align="center" className=' justify-center'>
                        <div className="flex justify-center">
                            <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-[#1e3d8d] border-4"></div>
                            <div className="ml-2"> Processing... </div>
                        </div>
                    </div>}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddNewIssue;