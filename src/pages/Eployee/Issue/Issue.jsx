import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";

const Issue = () => {
    const [loading, setLoading] = useState(false);
    const [activeMdl, setActiveMdl] = useState(false);

    const form = useRef();
    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();
        emailjs
            .sendForm(
                "employee_issue",
                "employee_issue",
                form.current,
                "k1X9xhaxBhNtWQbrr"
            )
            .then(
                (result) => {
                    setActiveMdl(true)
                    setLoading(false)

                  
                },
                (error) => {
                    setActiveMdl(false)
                    setLoading(false)
                   
                }
            );

        e.target.reset();
    };

    return (
        <div className='form-bg'>
            <div className="w-full py-40">
                <form ref={form} onSubmit={sendEmail} className="text-[#0095ff] md:w-[60%] rounded-xl mx-auto bg-inherit border p-20 capitalize">
                    <h3 className="text-4xl text-center">Issue Submission Form</h3>
                    <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-4">
                        <label className="sr-only" htmlFor="title">
                            Title
                        </label>
                        <input required name="from_name" id='from_name' type="text" className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="Enter your name" />
                    </div>

                    <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">

                        <input required type="text" id='reply_to' name="reply_to" className="w-full rounded-lg outline-none border-none bg-[#00000034]" placeholder="Subject" />
                    </div>
                    <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8">

                        <textarea name="message" type="text" className="w-full h-[110px] rounded-lg outline-none border-none bg-[#00000034] " placeholder="Enter your message" />
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

export default Issue;