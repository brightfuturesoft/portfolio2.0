import React, { useState } from 'react';
import Link_Button from '../../shared/Link_Button';
import JoditEditor from 'jodit-react';
import { base_url } from '../../../layout/Title';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Notice = () => {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()



    const submit_issue = (e) => {
        e.preventDefault()
        const data = {
            subject: e.target?.subject?.value,
            body: e.target?.body?.value,
            notice_date: new Date().getTime()
        }




        fetch(`${base_url}/notice/add-notice`, {
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
                    navigate('/dashboard/notice');

                }
                else {
                    Swal.fire(data.message, '', 'info')
                }
            })

    }

    return (
        <div>
            <section className="py-12">

                <div className="px-4 mx-4 max-w-7xl mb-4 ">

                    <Link_Button url={'/dashboard/notice'} name={'Notice List'} />


                </div>
            </section>

            <form onSubmit={submit_issue} className="text-[#f0f0f0] md:w-[90%] px-4 mx-8 max-w-7xl sm:px-6 lg:px-8 mb-4 rounded-xl bg-inherit border p-20 capitalize">
                <h3 className="text-4xl text-center">Add New Notice</h3>

                <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">

                    <input required type="text" id='subject' name="subject" className="w-full rounded-lg outline-none border-none  bg-[#00000034]" placeholder="Provide Notice Headline" />
                </div>
                <div className="relative bg-[#0b0a2238] text-black font-mono border border-[#1795F0] rounded-lg mt-8">

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
    );
};

export default Notice;