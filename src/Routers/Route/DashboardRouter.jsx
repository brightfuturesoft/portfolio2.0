import AdminBlogForm from "../../component/Blog/AdminBlogForm";
import ProjectList from "../../component/Project/AdminProject/ProjectList";
import { base_url } from "../../layout/Title";
import TaskReport from "../../pages/Dashboard/Dashboard/Chart";
import BlogManagement from "../../pages/Eployee/Blog_Management/BlogManagement";
import Issue from "../../pages/Eployee/Issue/AddNewIssue";
import IssueList from "../../pages/Eployee/Issue/IsueList";
import Apply_List from "../../pages/Eployee/JobPost/ApplyList";
import JobManagement from "../../pages/Eployee/JobPost/JobManagement";
import JobPost from "../../pages/Eployee/JobPost/JobPost";
import Add_Meting from "../../pages/Eployee/Meeting/Add_Metting";
import MeetingManagement from "../../pages/Eployee/Meeting/MeetingManagement";
import Notice from "../../pages/Eployee/Notice/Notice";
import Notice_list from "../../pages/Eployee/Notice/Notice_list";
import Notice_View from "../../pages/Eployee/Notice/Notice_View";
import AddProject from "../../pages/Eployee/Project/AddProject";
import ProjectManagement from "../../pages/Eployee/Project/ProjectManagement";
import Task from "../../pages/Eployee/Task/Task";
// import UploadNotice from "../../pages/Eployee/UplodNotice/UploadNotice";


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
        path: "project-management",
        element: <ProjectManagement />
    },
    {
        path: "project-management/new",
        element: <AddProject />
    },
    {
        path: "your-task",
        element: <Task />
    },
    {
        path: "job-management",
        element: <JobManagement />
    },
    {
        path: "job-management/new",
        element: <JobPost />
    },
    {
        path: "job-management/apply_list",
        element: <Apply_List />
    },

]

