import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignIn = () => {

    const location = useLocation();
    const { user, setUser } = useContext(AuthContext);
    let from = location.state?.from?.pathname || "/";
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();



    const handleSignIn = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = form.hello.value;
        const password = form.password.value;
        const data = { email, password }
        fetch('http://localhost:5010/api/v1/auth/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'author': 'bright_future_soft'
            },

            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {

                if (data.user) {

                    Swal.fire(data.message, '', 'success')
                    localStorage.setItem('data', JSON.stringify(data.user));
                    setUser(data.user)
                    navigate(from)
                }
                else {
                    alert(data.message)
                }


            })
    }



    return (
        <div className="form-bg py-20">

            <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-center py-10">
                {/* <div className="flex items-center md:w-auto w-full md:h-auto h-full  mt-16">
                    <form onSubmit={handleSignIn} className='md:h-[400px] w-full  mx-auto' >
                        <h2 className="text-5xl font-[400]">SignIn Account</h2>
                        <span className="">create account? <Link className="text-blue-500 mt-4" to="/sign_up">sign up</Link></span>
                        <br /> <br />
                         <p className="text-red-500 text-center">{error}</p>
                          <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-2" placeholder='enter your email' /><br />

                            <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-6" type="password" name="password" placeholder='enter your password' />
                            <input required type="submit" value="Sign in" className="mt-6 bg-[#2e71af] cursor-pointer text-black font-bold w-full rounded-lg py-3 p-2" />
                    </form>
                </div> */}

                <div className="w-full mt-10 max-w-xl xl:px-8 xl:w-5/12">
                    <div className="bg-transparent rounded shadow-2xl shadow-white p-7 sm:p-10">
                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                            Sign in as a Employee
                        </h3>
                        <form onSubmit={handleSignIn}>

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
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 text-black rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    name="hello"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="Password"
                                    className="inline-block mb-1 font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    placeholder="Password"
                                    required
                                    type="password"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 text-black rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="password"
                                />
                            </div>
                            <div className="mt-4 mb-2 sm:mb-4">

                                <button type='submit'
                                    className="group relative inline-block overflow-hidden border border-indigo-600 w-full px-8 py-3 focus:outline-none focus:ring"

                                >
                                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500" />
                                    <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                                        {loading ? "Loading .." : "Log In"}
                                    </span>
                                </button>

                            </div>


                            {error ? <p className="text-xs text-red-600 sm:text-sm">
                                {error}
                            </p> : <p className="text-xs text-gray-600 sm:text-sm">
                                We respect your privacy. Unsubscribe at any time.
                            </p>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignIn;