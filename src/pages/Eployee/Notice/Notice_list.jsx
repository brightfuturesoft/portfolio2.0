import { Link } from "react-router-dom";
import Link_Button from "../../shared/Link_Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/UseContext/UseContext";
import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../../layout/Title";
import DeleteModal from "../../../Hook/DeleteModal";
import Swal from "sweetalert2";


const Notice_list = () => {
    const { user } = useContext(AuthContext);
    const {
        data: notice_data = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["notice_data"],
        queryFn: async () => {
            const res = await fetch(
                `${base_url}/notice/get-notice`,
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

    const [deleteId, setDeletId] = useState("");
    const [deletePopUp, setDeletePopUp] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    const delete_issue = (id) => {
        setDeletePopUp(true);
        setDeletId(id);
    };

    if (isDelete) {
        fetch(`${base_url}/notice/delete-notice?notice_id=${deleteId}`, {
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

            <section className="py-12">

                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') ? <div className="px-4 mx-4 max-w-7xl mb-4 ">
                    <Link_Button url={'/dashboard/notice/new'} name={'Create New Notice'} />
                </div> : ''}
                <div className="h-0 w-0">
                    {" "}
                    <DeleteModal
                        setOpenModal={setDeletePopUp}
                        OpenModal={deletePopUp}
                        setIsDelete={setIsDelete}
                    />
                </div>
                <section class="">
                    <div class="">
                        <div class="px-4 mx-4 max-w-7xl mb-4 pt-8">
                            <div>
                                <p className="text-xl font-bold text-gray-50">Here is all Notice</p>
                                <p className="mt-1 text-sm font-medium text-gray-500">
                                    Every notice is very import so don't miss it
                                </p>
                            </div>


                            <div class="flow-root max-w-md mx-auto mt-12 border-t border-gray-200 sm:mt-16 lg:max-w-none">
                                <div class="-mb-10 divide-y divide-gray-200">
                                    {notice_data.map((notice) => (
                                        <div key={notice._id} class="grid grid-cols-1 py-10 gap-y-6 lg:grid-cols-8 lg:gap-x-32">
                                            <div class="lg:col-span-2">
                                                <p class="text-lg font-bold text-gray-100">{new Date(notice?.notice_date).toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                                            </div>

                                            <div class="lg:col-span-4">
                                                <p class="text-2xl font-bold text-gray-100">
                                                    <Link to={notice._id} title="" class="">{notice?.subject} </Link>
                                                </p>
                                            </div>

                                            <div class="lg:col-span-2 flex gap-2 items-center w-72">
                                                <Link to={notice._id} title="" class="inline-flex items-center text-xs font-bold tracking-widest text-gray-100 uppercase group">
                                                    Learn More
                                                    <svg class="w-4 h-4 ml-2 transition-all duration-200 transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </Link>

                                                {(user?.designation === 'Chief Executive Officer' || user?.designation === 'manager') && <button

                                                    onClick={() => delete_issue(notice._id)}
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-200 bg-gray-100 border border-gray-300 rounded-md shadow-sm hover:bg-red-400 focus:outline-none hover:text-white hover:border-red-400 focus:ring-2 focus:ring-offset-2  "
                                                >
                                                    Delete Issue
                                                </button>}
                                            </div>
                                        </div>))}


                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>
        </div >
    );
};

export default Notice_list;



