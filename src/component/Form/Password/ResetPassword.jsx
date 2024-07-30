import React, { useEffect, useState } from 'react';
import { base_url } from '../../../layout/Title';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const [error, setError] = useState()
    const navigate = useNavigate()
    const location = useLocation();
    const [token, setToken] = useState('')

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const token = params.get('token');

        if (token) {
            setToken(token)
        } else {
            setError('Token is not found')
        }
    }, [location]);

    const reset_your_pass = (e) => {
        e.preventDefault()
        const new_pass = e.target.password.value
        const con_pass = e.target.com_pass.value
        console.log(new_pass, con_pass);
        if (new_pass === con_pass)
            fetch(`${base_url}/auth/reset-password?token=${token}`, {
                method: 'POST',
                body: JSON.stringify({ password: new_pass }),
                headers: {
                    'Content-Type': 'application/json',
                    'author': 'bright_future_soft'
                },

            }).then((res) => res.json())
                .then((data) => {



                    if (data.success) {

                        Swal.fire(data.message, '', 'success')
                        navigate('/sign_in')
                    }
                    else {
                        Swal.fire(data.message, '', 'info')
                        setError(data.message)
                    }


                })
        else {
            // alert('Password is not match')
            setError('Password is not match')
        }

    }

    return (
        <div>
            <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="max-w-2xl mx-auto text-center">
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Reset Password</h2>
                        {/* <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p> */}
                    </div>

                    <div class="relative max-w-md mx-auto mt-8 md:mt-16">
                        <div class="overflow-hidden bg-white rounded-md shadow-md">
                            <div class="px-4 py-6 sm:px-8 sm:py-7">
                                <form onChange={() => setError('')} onSubmit={reset_your_pass}>
                                    <div class="space-y-5">
                                        <div>
                                            <label for="" class="text-base font-medium text-gray-900">New Password </label>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="password"
                                                    name="password"
                                                    id=""
                                                    placeholder="Enter your new password."
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div class="flex items-center justify-between">
                                                <label for="" class="text-base font-medium text-gray-900">Conform Your Password </label>


                                            </div>
                                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                                                        />
                                                    </svg>
                                                </div>

                                                <input
                                                    type="password"
                                                    name="com_pass"
                                                    id=""
                                                    placeholder="Enter your conform password"
                                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                                />
                                            </div>
                                        </div>

                                        {error?.length ? <p class="text-base font-medium text-red-500">{error}</p> : ''}

                                        <div>
                                            <button type="submit" class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                                Log in
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

export default ResetPassword;