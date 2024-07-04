import React from 'react';
import Swal from 'sweetalert2';

const Add_Meting = () => {

    const meeting = (e) => {
        e.preventDefault();
        const form = e.target;
        const perspective = form.perspective.value;
        const date = form.date.value;
        const link = form.link.value;
        const data = { perspective, date, link };
        fetch('http://localhost:5010/api/v1/meeting/add-meeting', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire('Meeting Schedule Publish Successfully', ' ', 'success')
                    form.reset()
                }
            })
    }


    return (
        <div>
            <div className='py-20 flex justify-center px-1 text-black  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%] mt-5'>
                <form onSubmit={meeting} className='w-10/12'>
                    <h1 className='text-2xl font-bold text-center text-white py-8'>Upload New Meeting Schedule</h1>
                    <input className='w-full my-2 rounded' name='date' placeholder='Select date and time' type="datetime-local" />
                    <input className='w-full my-2 rounded' name='perspective' placeholder='Job type' type="text" />
                    <input className='w-full my-2 rounded' name='link' placeholder='Link' type="text" />
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
        </div>
    );
};

export default Add_Meting;