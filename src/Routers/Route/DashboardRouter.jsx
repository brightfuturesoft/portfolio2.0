import AdminBlogForm from "../../component/Blog/AdminBlogForm";
import ProjectList from "../../component/Project/AdminProject/ProjectList";
import { base_url } from "../../layout/Title";
import TaskReport from "../../pages/Dashboard/Dashboard/Chart";
import BlogManagement from "../../pages/Eployee/Blog_Management/BlogManagement";
import Issue from "../../pages/Eployee/Issue/AddNewIssue";
import IssueList from "../../pages/Eployee/Issue/IsueList";
import JobPost from "../../pages/Eployee/JobPost/JobPost";
import Add_Meting from "../../pages/Eployee/Meeting/Add_Metting";
import MeetingManagement from "../../pages/Eployee/Meeting/MeetingManagement";
import Notice from "../../pages/Eployee/Notice/Notice";
import Notice_list from "../../pages/Eployee/Notice/Notice_list";
import Notice_View from "../../pages/Eployee/Notice/Notice_View";
import Task from "../../pages/Eployee/Task/Task";
import UploadNotice from "../../pages/Eployee/UplodNotice/UploadNotice";


export const dashboardRouter = [
    {
        path: 'home',
        element: <TaskReport />
    },
    {
        path: "issue-submit",
        element: <IssueList />
    },
    {
        path: "issue-submit/new",
        element: <Issue />
    },

    {
        path: "notice",
        element: <Notice_list />
    },
    {
        path: "notice/new",
        element: <Notice />
    },
    {
        path: 'notice/:id',
        element: <Notice_View />,
        loader: async ({ params }) => {
            const id = params.id
            return fetch(`${base_url}/notice/get-notice-by-id?notice_id=${id}`)
        }
    },
    {
        path: "meeting_management",
        element: <MeetingManagement />
    },
    {
        path: "meeting_management/new",
        element: <Add_Meting />
    },
    {
        path: "project_list",
        element: <ProjectList />
    },
    {
        path: "blog-management",
        element: <BlogManagement />
    },
    {
        path: "blog-management/new",
        element: <AdminBlogForm />
    },
    {
        path: "your-task",
        element: <Task />
    },
    {
        path: "job_post",
        element: <JobPost />
    },

]

