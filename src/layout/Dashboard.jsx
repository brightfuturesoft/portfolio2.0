
import { useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UseContext/UseContext';
import logo from '../Assctes/logo.png';

const Dashboard = () => {

    const { user, setUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const log_out = () => {
        setUser(null)
        localStorage.removeItem('data')
        navigate('/sign_in')
    }



    return (
        <div className="flex flex-1 ">
            <div className="hidden md:flex md:w-72 md:flex-col h-screen overflow-y-hidden">
                <div className="flex flex-col flex-grow pt-5 bg-gray-900 ">
                    <Link to={'/'} className="flex items-center flex-shrink-0 px-4">
                        <img
                            className="w-60 "
                            src={logo}
                            alt=""
                        />
                    </Link>

                    <div className="px-4 mt-6">
                        <hr className="border-gray-700" />
                    </div>
                    <div className="f px-3 mt-6  ">
                        <div className="space-y-4 max-h-[80%] min-h-[40%] overflow-y-scroll scrollbar-auto px-2">
                            <nav className="flex-1 space-y-2 ">
                                <NavLink
                                    to={'/dashboard/home'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Dashboard </span>
                                </NavLink>
                                <NavLink
                                    to={'/dashboard/issue-submit'}

                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Issue Submit </span>
                                </NavLink>
                                <NavLink
                                    to={'/dashboard/notice'}
                                    // onClick={logOut}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Notice </span>
                                </NavLink>


                                <NavLink
                                    to={'/dashboard/your-task'}
                                    // onClick={logOut}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Your Task </span>

                                </NavLink>


                                <NavLink
                                    to={'/dashboard/meeting_management'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Meeting  </span>

                                </NavLink>
                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') && <NavLink
                                    to={'/dashboard/blog-management'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Blog Management  </span>

                                </NavLink>}
                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') && <NavLink
                                    to={'/dashboard/job-management'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Job Post </span>

                                </NavLink>}
                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') && <NavLink
                                    to={'/dashboard/project-management'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Project Management  </span>

                                </NavLink>}
                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') && <NavLink
                                    to={'/dashboard/employee-management'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Employee Management  </span>

                                </NavLink>}
                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') && <NavLink
                                    to={'testimonial-management'}
                                    // onClick={logOut}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white' : "flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Testimonial Management  </span>

                                </NavLink>
                                }
                                <NavLink
                                    to={'/dashboard/account'}
                                    className={({ isActive, isPending }) => isActive ? 'bg-indigo-600 text-white flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3' : " flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 opacity-75"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>
                                    <span className="text-sm font-medium"> Account </span>
                                </NavLink>

                            </nav>
                            <hr className="border-gray-700 my-4" />

                            <nav className="flex-1 space-y-2 px-2">
                                <button
                                    onClick={log_out}
                                    className={" flex items-center w-full rounded gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-100 border border-gray-500  hover:bg-indigo-600 hover:text-white"}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5 opacity-75"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                                    <span className="text-sm font-medium"> Log out </span>
                                </button>
                            </nav>

                        </div>

                        {user && <div className="absolute bottom-0 w-[260px]  z-50 bg-gray-900">
                            <div className=' bg-gray-700 rounded px-2 ml-1 mb-2'>
                                <button
                                    type="button"
                                    className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg hover:bg-gray-700"
                                >
                                    <img
                                        className="flex-shrink-0 object-cover w-10 h-10 mr-3 border  rounded-full"
                                        src={user?.image}
                                        alt=""
                                    />
                                    <div className='text-start'>
                                        {user?.name}
                                        <br />
                                        {user?.designation}
                                    </div>


                                </button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <main>
                    <div className="h-screen overflow-y-auto">
                        <div >

                            <Outlet />
                        </div>
                    </div>
                </main>
            </div>
        </div >


    );
};

export default Dashboard;