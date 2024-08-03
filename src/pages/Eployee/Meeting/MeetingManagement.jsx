import React, { useContext, useState } from 'react';
import Link_Button from '../../shared/Link_Button';
import { useQuery } from '@tanstack/react-query';
import { base_url } from '../../../layout/Title';
import DeleteModal from '../../../Hook/DeleteModal';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../context/UseContext/UseContext';


// const meting_data = [
//     {
//         "_id": "1",
//         "title": "Project Kickoff",
//         "date": "2024-08-01",
//         "time": "10:00",
//         "duration": "60", // in minutes
//         "status": "pending",
//         "participants": [
//             {
//                 "name": "Mahadi Hasan",
//                 "email": "mahadihasan.bfs@gmail.com"
//             },
//             {
//                 "name": "John Doe",
//                 "email": "john.doe@example.com"
//             }
//         ],
//         "location": "Zoom",
//         "agenda": "Discuss project scope and milestones",
//         "notes": "Prepare initial project plan"
//     },
//     {
//         "_id": "2",
//         "title": "Design Review",
//         "date": "2024-08-03",
//         "time": "14:00",
//         "duration": "90",
//         "status": "end",
//         "participants": [
//             {
//                 "name": "Mahadi Hasan",
//                 "email": "mahadihasan.bfs@gmail.com"
//             },
//             {
//                 "name": "Jane Smith",
//                 "email": "jane.smith@example.com"
//             },
//             {
//                 "name": "Alice Johnson",
//                 "email": "alice.johnson@example.com"
//             }
//         ],
//         "location": "Google Meet",
//         "agenda": "Review design prototypes",
//         "notes": "Collect feedback and finalize design"
//     },
//     {
//         "_id": "3",
//         "title": "Sprint Planning",
//         "date": "2024-08-05",
//         "time": "09:00",
//         "status": "process",
//         "duration": "120",
//         "participants": [
//             {
//                 "name": "Mahadi Hasan",
//                 "email": "mahadihasan.bfs@gmail.com"
//             },
//             {
//                 "name": "Bob Brown",
//                 "email": "bob.brown@example.com"
//             },
//             {
//                 "name": "Charlie Davis",
//                 "email": "charlie.davis@example.com"
//             }
//         ],
//         "location": "Microsoft Teams",
//         "agenda": "Plan tasks for the next sprint",
//         "notes": "Assign tasks and set deadlines"
//     }
// ]

const MeetingManagement = () => {

    const { user } = useContext(AuthContext);

    const { data: meting_data = [], refetch, isLoading } = useQuery({
        queryKey: ["meting_data"],
        queryFn: async () => {
            const res = await fetch(
                `${base_url}/meeting/get-meetings`,
                {
                    headers: {
                        'content-type': 'application/json',
                        'author': 'bright_future_soft'
                    },
                    method: 'GET',
                }
            );
            const data = await res.json();
            return data.data;
        },
    });

    const status_update = (status, id) => {

        fetch(`${base_url}/meeting/edit-meeting?meeting_id=${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            body: JSON.stringify({ status: status, })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message, ' ', 'success')
                    refetch()


                }
                else {
                    Swal.fire(data.message, '', 'info')
                }
            })
    }




    const [deleteId, setDeletId] = useState("");
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const delete_meeting = (id) => {
        setDeletePopUp(true);
        setDeletId(id);
    };

    if (isDelete) {
        fetch(`${base_url}/meeting/delete-meeting?meeting_id=${deleteId}`, {
            headers: {
                'content-type': 'application/json',
                'author': 'bright_future_soft'
            },
            method: 'DELETE'
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire(data.message, ' ', 'success')
                    refetch()
                    setIsDelete(false);
                    setDeletId("");
                }
                else {
                    Swal.fire(data.message, '', 'info')
                }
            })

    }


    return (
        <div>
            <div class="py-12  sm:py-16 lg:py-20">
                <div class="px-4  sm:px-6 lg:px-8">

                    <Link_Button name={'Add New Meeting'} url={'/dashboard/meeting_management/new'} />
                    <div class=" ">
                        <div class="overflow-hidden rounded-xl">
                            <div class="py-6">
                                <div class="sm:flex sm:items-start sm:justify-between">
                                    <div>
                                        <p class="text-lg font-bold text-gray-100">Meeting Management</p>
                                        <p class="mt-1 text-sm font-medium text-gray-500">Here is all meeting information</p>
                                    </div>


                                </div>
                            </div>

                            <div className="h-0 w-0">
                                {" "}
                                <DeleteModal
                                    setOpenModal={setDeletePopUp}
                                    OpenModal={deletePopUp}
                                    setIsDelete={setIsDelete}
                                />
                            </div>

                            <div class="divide-y divide-gray-200overflow-x-scroll  scrollbar-auto">
                                {
                                    meting_data?.map((meting) => {
                                        const dateTime = new Date(meting?.date);
                                        const formattedDate = dateTime.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        });
                                        const formattedTime = dateTime.toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        });



                                        return (
                                            <div key={meting._id} class="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">

                                                <div class="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                                                    <p class="text-sm font-bold text-gray-100">{meting?.title}</p>
                                                    <p class="mt-1 text-sm font-medium text-gray-500">{meting?.agenda}</p>
                                                </div>

                                                <div class="col-span-2 capitalize px-4 lg:py-4 sm:px-6 lg:col-span-1">
                                                    <span class={`text-xs font-medium text-green-900  rounded-full inline-flex items-center px-2.5 py-1  ${meting?.status === 'pending' && 'bg-yellow-100' || meting?.status === 'process' && 'bg-green-100' || meting?.status === 'end' && 'bg-red-100'}`}>
                                                        <svg class={`-ml-1 mr-1.5 h-2.5 w-2.5 ${meting?.status === 'pending' && 'text-yellow-300' || meting?.status === 'end' && 'text-red-500' || meting?.status === 'process' && 'text-green-500'} `} fill="currentColor" viewBox="0 0 8 8">
                                                            <circle cx="4" cy="4" r="3" />
                                                        </svg>
                                                        {meting?.status}
                                                    </span>
                                                </div>

                                                <div class="px-4 lg:py-4 sm:px-6">
                                                    <p class="text-sm font-bold text-gray-100 flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class=''><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></svg>
                                                        {meting?.duration}
                                                    </p>
                                                    <p class="mt-1 text-sm font-medium text-gray-300 flex items-start gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /></svg>
                                                        {`${formattedDate} at ${formattedTime}`}
                                                    </p>
                                                </div>

                                                <div class="px-4 lg:py-4 sm:px-6">
                                                    <div class="flex items-center">
                                                        {meting?.selectedUsers
                                                            ?.map((participant, index) => (
                                                                <img
                                                                    key={index}
                                                                    title={participant?.name
                                                                    }
                                                                    className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
                                                                    src={participant.image}
                                                                    alt={`Participant ${index + 1}`}
                                                                />
                                                            ))}
                                                    </div>
                                                </div>

                                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') ? <div className=''>
                                                    <div className="flex gap-3 items-center  ">
                                                        { <a
                                                            href={meting?.link}
                                                            target='_blank'
                                                            type="button"
                                                            className="inline-flex whitespace-nowrap items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                                        >
                                                            Go Meeting
                                                        </a>}
                                                        <button
                                                            onClick={() => status_update('process', meting._id)}
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-green-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 hover:bg-green-500"
                                                        >
                                                            Process
                                                        </button>
                                                        <button
                                                            onClick={() => status_update('end', meting._id)}
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
                                                        >
                                                            End
                                                        </button>
                                                        <button
                                                            onClick={() => delete_meeting(meting._id)}
                                                            type="button"
                                                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-700"
                                                        >
                                                            Delete
                                                        </button>


                                                    </div>

                                                </div> :
                                                    <div className=''>
                                                        {meting?.selectedUsers?.filter((meting_user) => meting_user?.email == user?.email).length ? <div className="flex gap-3  ">
                                                            <a
                                                                href={meting?.link}
                                                                target='_blank'
                                                                type="button"
                                                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                                                            >
                                                                Go Meeting
                                                            </a>
                                                        </div> : ''}
                                                    </div>}
                                            </div>
                                        )
                                    })
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MeetingManagement;