import React from 'react';
import { base_url } from '../../../layout/Title';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {

    const navigate = useNavigate()

    const forget_email = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        console.log(email);
        fetch(`${base_url}/auth/forget-password`, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json',
                'author': 'bright_future_soft'
            },

        }).then((res) => res.json())
            .then((data) => {



                if (data.success) {

                    Swal.fire(data.message, '', 'success')
                    navigate('/')
                }
                else {
                    alert(data.message)
                }


            })


    }

    return (
        <div>
            <section class="py-10  sm:py-16 lg:py-40">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Reset Your Password?</h2>

                    </div>

                    <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div class="overflow-hidden bg-white rounded-md shadow-md">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">
                                <form onSubmit={forget_email}>
                                    <div class="space-y-5">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900"> Email address </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    id=""
                                                    placeholder="Enter email to get started"
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>



                                        <div>
                                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                Reset Code
                                            </button>
                                        </div>


                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ForgetPass;