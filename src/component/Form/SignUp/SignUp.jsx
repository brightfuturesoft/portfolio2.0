import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiAlertCircle } from "react-icons/fi";
import Swal from 'sweetalert2';
const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const Designation = form.designation.value;
        const Image = form.img_url.value;
        const data = {
            name,
            email,
            password,
            Designation,
            Image,
        }

        fetch('http://localhost:5000/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
            
                Swal.fire({

                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from)

            })

    


    }

   

    return (
        <div className="form-bg py-20">

            <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-center py-10">


                <div className="w-full mt-10 max-w-xl xl:px-8 xl:w-8/12">
                    <div className="bg-transparent rounded shadow-2xl shadow-white p-7 sm:p-10">
                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                            Sign up as a Employee
                        </h3>
                        <form onSubmit={handleSignUp}>
                            <div className="mb-1 sm:mb-2 ">
                                <label
                                    htmlFor="firstName"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Full Name
                                </label>
                                <input
                                    placeholder="Mahadi Hasan"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    id="full name"
                                    name="name"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="lastName"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Image URL
                                </label>
                                <input
                                    placeholder="Doe"
                                    required
                                    type="url"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    id="img_url"
                                    name="img_url"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="email"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Designation
                                </label>
                                <input
                                    placeholder="Developer"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    id="designation"
                                    name="designation"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="email"
                                    className="inline-block mb-1 font-medium"
                                >
                                    E-mail
                                </label>
                                <input
                                    placeholder="john.doe@example.org"
                                    required
                                    type="email"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="email"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    placeholder="*******"
                                    required
                                    type="password"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    id="password"
                                    name="password"
                                />
                            </div>
                            <div className="mt-4 mb-2 sm:mb-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                >
                                    Register
                                </button>
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;