import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Logo from '../../../Assctes/Logo_white.png';

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
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;
        const data = { email, password }



        if (terms) {

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
                        navigate('/dashboard/home')
                    }
                    else {
                        alert(data.message)
                    }


                })
        }
        else {
            Swal.fire(' Please select trams and condition  ', '', 'info')
        }


    }



    return (
        // <div className="form-bg py-20">

        //     <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-center py-10">
        //         {/* <div className="flex items-center md:w-auto w-full md:h-auto h-full  mt-16">
        //             <form onSubmit={handleSignIn} className='md:h-[400px] w-full  mx-auto' >
        //                 <h2 className="text-5xl font-[400]">SignIn Account</h2>
        //                 <span className="">create account? <Link className="text-blue-500 mt-4" to="/sign_up">sign up</Link></span>
        //                 <br /> <br />
        //                  <p className="text-red-500 text-center">{error}</p>
        //                   <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-2" placeholder='enter your email' /><br />

        //                     <input required className="bg-[#22243eb6] border-0 rounded-xl py-3 w-full mt-6" type="password" name="password" placeholder='enter your password' />
        //                     <input required type="submit" value="Sign in" className="mt-6 bg-[#2e71af] cursor-pointer text-black font-bold w-full rounded-lg py-3 p-2" />
        //             </form>
        //         </div> */}

        //         <div className="w-full mt-10 max-w-xl xl:px-8 xl:w-5/12">
        //             <div className="bg-transparent rounded shadow-2xl shadow-white p-7 sm:p-10">
        //                 <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
        //                     Sign in as a Employee
        //                 </h3>
        //                 <form onSubmit={handleSignIn}>

        //                     <div className="mb-1 sm:mb-2">
        //                         <label
        //                             htmlFor="email"
        //                             className="inline-block mb-1 font-medium"
        //                         >
        //                             E-mail
        //                         </label>
        //                         <input
        //                             placeholder="john.doe@example.org"
        //                             required
        //                             type="email"
        //                             className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 text-black rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
        //                             name="hello"
        //                         />
        //                     </div>
        //                     <div className="mb-1 sm:mb-2">
        //                         <label
        //                             htmlFor="Password"
        //                             className="inline-block mb-1 font-medium"
        //                         >
        //                             Password
        //                         </label>
        //                         <input
        //                             placeholder="Password"
        //                             required
        //                             type="password"
        //                             className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 text-black rounded shadow-sm appearance-none focus:border-purple-400 focus:outline-none focus:shadow-outline"
        //                             id="email"
        //                             name="password"
        //                         />
        //                     </div>
        //                     <div className="mt-4 mb-2 sm:mb-4">

        //                         <button type='submit'
        //                             className="group relative inline-block overflow-hidden border border-indigo-600 w-full px-8 py-3 focus:outline-none focus:ring"

        //                         >
        //                             <span className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500" />
        //                             <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
        //                                 {loading ? "Loading .." : "Log In"}
        //                             </span>
        //                         </button>

        //                     </div>


        //                     {error ? <p className="text-xs text-red-600 sm:text-sm">
        //                         {error}
        //                     </p> : <p className="text-xs text-gray-600 sm:text-sm">
        //                         We respect your privacy. Unsubscribe at any time.
        //                     </p>}
        //                 </form>
        //             </div>
        //         </div>
        //     </div>

        // </div>

        <section>
            <div className="min-h-full lg:flex lg:justify-between bg-gray-900  pt-20">
                <div className="flex flex-col justify-center flex-1 px-4 py-12 bg-gray-900 text-white sm:px-6 lg:px-20 xl:px-24">
                    <div className="flex-1 max-w-sm mx-auto lg:max-w-md">

                        <h1 className="mt-10 text-3xl font-bold text-center  lg:mt-20 xl:mt-32 sm:text-4xl xl:text-5xl font-pj lg:text-left">
                            Welcome back to Bright Future Soft
                        </h1>
                        <form onSubmit={handleSignIn} className="mt-10">
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="" className="sr-only">
                                        {" "}
                                        Email{" "}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            name="email"
                                            required
                                            id=""
                                            placeholder="Email"
                                            className="
                                  block
                                  w-full
                                  py-4
                                  pl-12
                                  pr-4
                                  overflow-hidden
                                  text-base
                                  font-normal
                                  
                                  placeholder-gray-600
                                  transition-all
                                  duration-200
                                  border border-gray-300
                                  caret-gray-900
                                  rounded-xl
                                  text-black
                                  font-mono
                                  bg-gray-50
                                  focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                  font-pj
                              "
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className="sr-only">
                                        {" "}
                                        Password{" "}
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                                />
                                            </svg>
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            id=""
                                            required
                                            placeholder="Password (min. 6 characters)"
                                            className="
                                  block
                                  w-full
                                  py-4
                                   text-black
                                  font-mono
                                  pl-12
                                  pr-4
                                  overflow-hidden
                                  text-base
                                  font-normal
                                  
                                  placeholder-gray-600
                                  transition-all
                                  duration-200
                                  border border-gray-300
                                  caret-gray-900
                                  rounded-xl
                                  bg-gray-50
                                  focus:outline-none focus:bg-white focus:border-gray-900 focus:ring-gray-900
                                  font-pj
                              "
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <div className="relative flex items-center">
                                    <div className="flex items-center h-5">
                                        <input
                                            type="checkbox"
                                            name="terms"
                                            id="terms"
                                            className="w-5 h-5  border-gray-300 rounded focus:ring-gray-900"
                                        />
                                    </div>
                                    <div className="ml-3 text-base">
                                        <label
                                            htmlFor="terms"
                                            className="font-normal  font-pj"
                                        >
                                            {" "}
                                            Accept Trams and Condition
                                        </label>
                                    </div>
                                </div>
                                <Link
                                    to={'/forget-password'}
                                    title=""
                                    className="text-base font-medium text-gray-500 rounded hover: font-pj hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    {" "}
                                    Forgot Password?{" "}
                                </Link>
                            </div>
                            <div className="relative mt-8">
                                <div className="absolute -inset-2">
                                    <div
                                        className="w-full h-full mx-auto opacity-30 blur-lg filter"
                                        style={{
                                            background:
                                                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"
                                        }}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="relative flex items-center justify-center w-full px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <p className="mt-10 text-base font-normal text-center  lg:mt-20 xl:mt-32 font-pj lg:text-left">
                            Don’t have an account?{" "}
                            <a
                                href="#"
                                title=""
                                className="font-bold rounded focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:underline"
                            >
                                Contact With Admin
                            </a>
                        </p>
                    </div>
                </div>
                <div className="relative grid flex-1 w-full px-4 py-12 overflow-hidden bg-gray-900 lg:max-w-2xl lg:px-20 xl:px-24 sm:px-6 place-items-center">
                    <div className="absolute inset-0">
                        <img
                            className="object-cover object-top w-full h-full scale-150 -rotate-90 opacity-10"
                            src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png"
                            alt=""
                        />
                    </div>
                    <div className="relative max-w-sm mx-auto">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-xl">
                            <svg
                                className="w-auto h-5 text-white"
                                viewBox="0 0 33 23"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z" />
                                <path d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z" />
                            </svg>
                        </div>
                        <blockquote className="mt-14">
                            <p className="text-2xl font-medium leading-relaxed text-white lg:text-3xl font-pj">
                                “Please enter your credentials to access your tasks, notices, and other important updates. If you encounter any issues, contact support for assistance.”
                            </p>
                        </blockquote>
                        <div className="flex items-center mt-12">
                            <img
                                className="flex-shrink-0 object-cover rounded-full w-14 h-14"
                                src={Logo}
                                alt=""
                            />
                            <div className="ml-4">
                                <p className="text-xl font-bold text-white font-pj">
                                    Bright Future Soft
                                </p>
                                <p className="mt-px text-lg font-normal text-gray-400 font-pj">
                                    Software Company
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default SignIn;