import { useContext } from "react";
import { AuthContext } from "../../../context/UseContext/UseContext";
import { Link } from "react-router-dom";


const TaskReport = () => {

    const { user } = useContext(AuthContext)


    return (
        // <div className="py-12 ">
        //     <div className="">
        //         <div >
        //             <h1 className="text-5xl text-center font-bold text-white mb-7">Shortcut</h1>
        //         </div>
        //         <div className=" px-4 sm:px-0">
        //             <div className=" inset-0 h-1/2" />
        //             <div className="flex justify-evenly ">
        //                 <Link className=" text-center border hover:bg-purple-600 cursor-pointer border-gray-500 rounded p-10 w-48 hover:text-white">
        //                     <div className="flex items-center justify-center text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
        //                         23
        //                     </div>
        //                     <p className="font-bold tracking-wide  ">
        //                         New Task
        //                     </p>
        //                 </Link>
        //                 {user?.designation !== 'Chief Executive Officer' ? <Link className=" text-center border hover:bg-purple-600 cursor-pointer border-gray-500 rounded p-10 w-48 hover:text-white">
        //                     <div className="flex items-center justify-center text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
        //                         23
        //                     </div>
        //                     <p className="font-bold tracking-wide  ">
        //                         Issues
        //                     </p>
        //                 </Link> : ''}
        //                 <Link className=" text-center border hover:bg-purple-600 cursor-pointer border-gray-500 rounded p-10 w-48 hover:text-white">
        //                     <div className="flex items-center justify-center text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
        //                         23
        //                     </div>
        //                     <p className="font-bold tracking-wide  ">
        //                         New Meeting
        //                     </p>
        //                 </Link>
        //                 <Link className=" text-center border hover:bg-purple-600 cursor-pointer border-gray-500 rounded p-10 w-48 hover:text-white">
        //                     <div className="flex items-center justify-center text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
        //                         2
        //                     </div>
        //                     <p className="font-bold tracking-wide  ">
        //                         Notice
        //                     </p>
        //                 </Link>

        //                 {user?.designation === 'Chief Executive Officer' && <Link to={'/dashboard/issue-submit'} className="text-center border hover:bg-purple-600 cursor-pointer border-gray-500 rounded p-10 w-48 hover:text-white">
        //                     <div className="flex items-center justify-center text-purple-600 font-semibold w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
        //                         7
        //                     </div>
        //                     <p className="font-bold tracking-wide  ">
        //                         New Issue
        //                     </p>
        //                 </Link>}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <section class="py-10  sm:py-16 lg:py-24">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="text-center">
                    <h4 class="text-4xl font-medium text-gray-100 font-sans">Numbers tell the hard works we’ve done in last 6 years</h4>
                </div>

                <div class="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12">
                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">6</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight ">New Task</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="M2 3h20" /><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /><path d="m7 21 5-5 5 5" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">37</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight ">New Meeting</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">3,274</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight ">Notice</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="m8 2 1.88 1.88" /><path d="M14.12 3.88 16 2" /><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" /><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" /><path d="M12 20v-9" /><path d="M6.53 9C4.6 8.8 3 7.1 3 5" /><path d="M6 13H2" /><path d="M3 21c0-2.1 1.7-3.9 3.8-4" /><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" /><path d="M22 13h-4" /><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">98</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight "> Employee Issues</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="m8 2 1.88 1.88" /><path d="M14.12 3.88 16 2" /><path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" /><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" /><path d="M12 20v-9" /><path d="M6.53 9C4.6 8.8 3 7.1 3 5" /><path d="M6 13H2" /><path d="M3 21c0-2.1 1.7-3.9 3.8-4" /><path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" /><path d="M22 13h-4" /><path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">98</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight "> Issues</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">98</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight ">Application Submission </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                {/* <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                    />
                                </svg> */}
                                <svg class="flex-shrink-0 w-12 h-12 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" ><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-900">98</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight ">Contact Request</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="overflow-hidden bg-white border border-gray-200 rounded-lg">
                        <div class="px-4 py-6">
                            <div class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="flex-shrink-0 w-12 h-12 text-fuchsia-600"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" /><circle cx="13" cy="12" r="2" /><path d="M18 19c-2.8 0-5-2.2-5-5v8" /><circle cx="20" cy="19" r="2" /></svg>
                                <div class="ml-4">
                                    <h4 class="text-4xl font-bold text-gray-700">98</h4>
                                    <p class="mt-1.5 text-2xl font-bold text-gray-900  leading-tight ">Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TaskReport;
