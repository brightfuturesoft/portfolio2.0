import React from 'react';
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

const JoinUs = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.first_name.value;
        const lName = form.last_name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const linkedIn = form.linkedIn.value;
        const file = form.resume.value;
        const message = form.message.value;
        const possition = form.possition.value;

        const user = {
            name: fName + ' ' + lName,
            email: email,
            phone: phone,
            address: address,
            linkedIn: linkedIn,
            resume: file,
            possition: possition,
            message: message

        }


        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank You So Much',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className="bg-[#121c25] md:p-8 p-2">
            <div className=" mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:w-[80%] w-[95%] md:grid grid-cols-2 bg-[#192330] mt-20">
                <div className="text-white join-bg flex items-center justify-center py-12">
                    <div className="" align="center">
                        <h1 className='font-bold md:text-4xl text-2xl flex gap-2'>Join <span className="text-[orange]">The Bright Future</span></h1>
                        <p>build up your skill</p>
                        <ul className="mt-3 flex items-center gap-6 justify-center relative after:absolute after:top-[20px] after:left-0  after:bottom-[0px] after:md:w-[100px] after:w-[40px] after:h-[1px] after:bg-gray-400   
                           
                           before:absolute before:top-[20px] before:right-0  before:bottom-[0px] before:md:w-[100px] before:w-[40px] before:h-[1px] before:bg-gray-400
                           ">
                            <li className="mt-3">
                                <Link to="https://www.facebook.com/thebrightfuture.co/" className="text-blue-500 flex items-center md:justify-start justify-center gap-2">
                                    <BsFacebook className='text-xl' />
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link to="https://www.linkedin.com/company/thebrightfuture-co/mycompany/verification/" className="text-blue-500 flex items-center md:justify-start justify-center gap-2">
                                    <BsLinkedin className='text-xl' />
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link to="" className="text-blue-400 flex items-center md:justify-start justify-center gap-2">
                                    <BsTwitter className='text-xl' />
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link to="" className="text-green-400 flex items-center md:justify-start justify-center gap-2">
                                    <BsWhatsapp className='text-xl' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-white px-3 md:pt-8 md:pb-8 pt-3 pb-[80px]">
                    <form onSubmit={submitHandler} className='capitalize' action="">
                        <div className="md:flex items-center gap-3">
                            <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8 w-full">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[78px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">first name</label>
                                <input required type="text" name="first_name" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                            <div className="relative bg-[#0b0a2238] border w-full border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[78px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">last name</label>
                                <input required type="text" name="last_name" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                        </div>
                        <div className="md:flex items-center gap-3">
                            <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8 w-full">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[48px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">email</label>
                                <input required type="email" name="email" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                            <div className="relative bg-[#0b0a2238] border w-full border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[102px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">phone number</label>
                                <input required type="tel" name="phone" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                        </div>
                        <div className="md:flex items-center gap-3">
                            <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8 w-full">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[59px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">address</label>
                                <input required type="text" name="address" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                            <div className="relative bg-[#0b0a2238] border w-full border-[#1795F0] rounded-lg mt-8">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[62px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">linkedIn</label>
                                <input required type="text" name="linkedIn" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                        </div>
                        <div className="md:flex items-center gap-3">
                            <div className="relative bg-[#0b0a2238] border border-[#1795F0] rounded-lg mt-8 w-full">
                                <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[59px] h-[3px] left-[14px] top-[-2px]">.</div>
                                <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">Resume Link</label>
                                <input required type="url" name="resume" className="w-full rounded-lg outline-none border-none bg-[#00000034]" />
                            </div>
                            <div>

                                <select
                                    required
                                    name="possition"
                                    id="HeadlineAct"
                                    className="relative bg-[#0b0a2238] border  w-full border-[#1795F0] rounded-lg mt-8"
                                >
                                    <option className='text-black' value="">Please select</option>
                                    <option className='text-black' value="Ui/UX">UI/UX Designer</option>
                                    <option className='text-black' value="Frontend Developer">Frontend Developer</option>
                                    <option className='text-black' value="Fullstack Developer">Fullstack Developer</option>

                                </select>
                            </div>
                        </div>
                        <div className="relative bg-[#0b0a2238] border w-full border-[#1795F0] rounded-lg mt-8 p-0">
                            <div className="text-[#ff000000] absolute bg-[#0e0b2cf8] w-[90px] h-[3px] left-[14px] top-[-2px]">.</div>
                            <label htmlFor="" className="absolute text-sm top-[-14px] left-[15px]  px-1">Cover Letter</label>
                            <textarea required type="text" name="message" className="w-full rounded-lg outline-none md:h-[160px] h-[140px] border-none bg-[#00000034]" />
                        </div>

                        <button type="submit" className="bg-[#3e8ca9] px-8 py-3 mt-4 float-right rounded-lg"  >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;