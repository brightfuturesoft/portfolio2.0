import { useContext, useState } from "react";
import { AuthContext } from "../../../context/UseContext/UseContext";
import { Link } from "react-router-dom";
import Link_Button from "../../shared/Link_Button";
import { base_url } from "../../../layout/Title";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Confirmation from "../../../Hook/DeleteModal";
import useConfirmationModal from "../../../Hook/useConfirmationModal";
import DeleteModal from "../../../Hook/DeleteModal";
import ViewIssue from "./ViewIssue";

// const issue_data = [{
//     author_name: 'Mahadi Hasan',
//     issue_number: 1,
//     subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid!',
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cumque recusandae voluptas natus numquam rem ex ratione explicabo quaerat? Sequi saepe non eveniet quaerat ipsa consectetur quod, porro hic ipsum voluptate exercitationem vero libero voluptatibus iure tenetur! Officia obcaecati, praesentium animi reprehenderit ad, ut cum a, suscipit facere non corrupti!",
//     issue_date: '10/08/2024',
//     status: 'approved'
// },
// {
//     author_name: 'Nahid Hasan',
//     issue_number: 2,
//     subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid!',
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cumque recusandae voluptas natus numquam rem ex ratione explicabo quaerat? Sequi saepe non eveniet quaerat ipsa consectetur quod, porro hic ipsum voluptate exercitationem vero libero voluptatibus iure tenetur! Officia obcaecati, praesentium animi reprehenderit ad, ut cum a, suscipit facere non corrupti!",
//     issue_date: '10/08/2024',
//     status: 'pending'
// },
// {
//     author_name: 'Mahadi Hasan',
//     issue_number: 3,
//     subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid!',
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cumque recusandae voluptas natus numquam rem ex ratione explicabo quaerat? Sequi saepe non eveniet quaerat ipsa consectetur quod, porro hic ipsum voluptate exercitationem vero libero voluptatibus iure tenetur! Officia obcaecati, praesentium animi reprehenderit ad, ut cum a, suscipit facere non corrupti!",
//     issue_date: '10/08/2024',
//     status: 'approved'
// },
// {
//     author_name: 'Mahadi Hasan',
//     issue_number: 4,
//     subject: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, aliquid!',
//     body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est cumque recusandae voluptas natus numquam rem ex ratione explicabo quaerat? Sequi saepe non eveniet quaerat ipsa consectetur quod, porro hic ipsum voluptate exercitationem vero libero voluptatibus iure tenetur! Officia obcaecati, praesentium animi reprehenderit ad, ut cum a, suscipit facere non corrupti!",
//     issue_date: '10/08/2024',
//     status: 'rejected'
// }]


const IssueList = () => {
    const { user } = useContext(AuthContext)

    const [viewissue, setViewissue] = useState(false)


    const {
        data: issue_data = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["issue_data"],
        queryFn: async () => {
            const res = await fetch(
                `${base_url}/issue/get-issue?author_name=${user.name}`,
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

        fetch(`${base_url}/issue/update-issue?issue_id=${id}`, {
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

    const delete_issue = (id) => {
        setDeletePopUp(true);
        setDeletId(id);
    };

    if (isDelete) {
        fetch(`${base_url}/issue/delete-issue?issue_id=${deleteId}`, {
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





    const view_issue = (issue) => {
        setViewissue(issue)
    }





    return (
        <div>


            <div>
                <div className="py-12  ">
                    <div className="px-4 mx-4 max-w-7xl mb-4 ">


                        <Link_Button name={'Create New Issue'} url={'/dashboard/issue-submit/new'} />
                    </div>



                    <div className="h-0 w-0">
                        {" "}
                        <DeleteModal
                            setOpenModal={setDeletePopUp}
                            OpenModal={deletePopUp}
                            setIsDelete={setIsDelete}
                        />
                    </div>



                    <div className=" px-4 mx-4 max-w-7xl mb-4">
                        <div className="my-4   ">
                            <div>
                                <p className="text-xl font-bold text-gray-50">Issues Submition</p>
                                <p className="mt-1 text-sm font-medium text-gray-500">
                                    If you have any issue please create a new issue
                                </p>
                            </div>


                        </div>

                        <div className="">
                            <div className=" -my-2 overflow-x-auto ">
                                <div className="inline-block min-w-full py-2 align-middle ">
                                    <table className="min-w-full overflow-x-auto ">

                                        <thead className="table-header-group ">
                                            <tr className=" border border-gray-400 border-opacity-40 border-r-2 py-4">
                                                <th className="py-3.5 px-4 text-left text-xs font-medium text-gray-50 uppercase whitespace-nowrap tracking-widest">Issue Number</th>

                                                <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium whitespace-nowrap text-gray-50">Employee Name</th>

                                                <th className="py-3.5 px-4 text-left hidden xl:table-cell text-xs uppercase tracking-widest whitespace-nowrap font-medium text-gray-50">Subject</th>

                                                <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium whitespace-nowrap text-gray-50">Publish Date</th>

                                                <th className="py-3.5 px-4 text-left text-xs uppercase tracking-widest font-medium whitespace-nowrap text-gray-50">Status</th>

                                                <th className="py-3.5 px-4 text-center text-xs uppercase tracking-widest font-medium whitespace-nowrap text-gray-50">Action</th>


                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                issue_data.map((issue) => (
                                                    <tr key={issue.issue_number} className="border border-gray-400 border-opacity-40">


                                                        <td className=" px-4 py-4 text-sm font-medium text-gray-50 table-cell whitespace-nowrap">
                                                            <div className="flex items-center">

                                                                # {issue.issue_number}
                                                            </div>
                                                        </td>

                                                        <td className=" px-4 py-4 text-sm font-medium text-gray-50 table-cell whitespace-nowrap">
                                                            <div className="flex items-center gap-1">

                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
                                                                {issue.author_name}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-50 align-top lg:align-middle lg:text-left whitespace-nowrap"> <div title={issue.subject} className="flex items-center ">

                                                            {issue.subject.split(' ').slice(0, 5).join(" ")}
                                                        </div></td>

                                                        <td className=" px-4 py-4 text-sm font-medium text-gray-50 table-cell whitespace-nowrap">
                                                            <div className="flex items-center ">
                                                                <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>

                                                                {new Date(issue.issue_date).toLocaleDateString(undefined, { day: 'numeric', month: 'long' })}
                                                            </div>
                                                        </td>


                                                        <td className="px-4 py-4 text-sm font-medium text-right text-gray-50 align-top lg:align-middle lg:text-left whitespace-nowrap capitalize">{issue.status === 'pending' && <span span class="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1" >
                                                            <svg class="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 8 8">
                                                                <circle cx="4" cy="4" r="3" />
                                                            </svg>
                                                            Pending
                                                        </span> || issue.status === 'approved' && <span span class="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1" >
                                                            <svg class="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                                                <circle cx="4" cy="4" r="3" />
                                                            </svg>
                                                            Approved
                                                        </span> || issue.status === 'rejected' && <span span class="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1" >
                                                            <svg class="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                                                                <circle cx="4" cy="4" r="3" />
                                                            </svg>
                                                            Rejected
                                                        </span>}
                                                        </td>

                                                        <td className=" px-4 py-4  whitespace-nowrap flex  justify-start">
                                                            {issue.status !== 'approved' ? <div>
                                                                {user?.name === issue?.author_name ?
                                                                    <div className="flex items-center justify-start space-x-4">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => view_issue(issue)}
                                                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        >
                                                                            View Issue
                                                                        </button>
                                                                        {/* <button
                                                                            type="button"
                                                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        >
                                                                            Edit Issue
                                                                        </button> */}

                                                                        <button
                                                                            onClick={() => delete_issue(issue._id)}
                                                                            type="button"
                                                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        >
                                                                            <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                            </svg>
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                    :
                                                                    <div className="flex items-center justify-start  space-x-4  mx-auto">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => view_issue(issue)}
                                                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                        >
                                                                            View Issue
                                                                        </button>
                                                                        {issue.status !== 'rejected' ? <div className="flex items-center justify-start  space-x-4  mx-auto">
                                                                            <button
                                                                                onClick={() => status_update('approved', issue._id)}
                                                                                type="button"
                                                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none hover:text-white hover:border-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                            >
                                                                                Accept Issue
                                                                            </button>

                                                                            <button
                                                                                type="button"
                                                                                onClick={() => status_update('rejected', issue._id)}
                                                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-white  rounded-md shadow-sm  focus:outline-none focus:ring-offset-2 hover:bg-red-300 "
                                                                            >
                                                                                <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                                </svg>
                                                                                Rejected
                                                                            </button>
                                                                        </div> :
                                                                            <button

                                                                                onClick={() => delete_issue(issue._id)}
                                                                                type="button"
                                                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-red-400 focus:outline-none hover:text-white hover:border-red-400 focus:ring-2 focus:ring-offset-2  "
                                                                            >
                                                                                Delete Issue
                                                                            </button>
                                                                        }
                                                                    </div>
                                                                }
                                                            </div>

                                                                :
                                                                <div className="flex items-center justify-start ">
                                                                    <button

                                                                        onClick={() => delete_issue(issue._id)}
                                                                        type="button"
                                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-red-400 focus:outline-none hover:text-white hover:border-red-400 focus:ring-2 focus:ring-offset-2  "
                                                                    >
                                                                        Delete Issue
                                                                    </button>
                                                                </div>}

                                                            {
                                                                viewissue._id == issue._id && <div className="h-0 w-0">
                                                                    <ViewIssue setViewissue={setViewissue} viewissue={viewissue} issueDetails={issue} />
                                                                </div>
                                                            }

                                                        </td>
                                                    </tr>
                                                ))
                                            }



                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default IssueList;