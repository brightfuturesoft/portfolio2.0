import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../../component/About/About/About';
import Abot from '../../component/About/About/About';
import Contact from '../../component/Contact/Contact/Contact';
import HeadSection from '../../component/HeadSection/HeadSection/HeadSection';
import JoinUs from '../../component/JoinUs/JoinUs/JoinUs';
import NotFound from '../../component/NotFound/NotFound';
import Review from '../../component/Review/Review/Review';
import Service from '../../component/Service/Service/Service';
import Technology from '../../component/Technology/Techonology/Technology';
import Home from '../../pages/Home/Home';
import Main from '../../pages/Main/Main';
import Project from '../../component/Project/Project/Project';
import Card from '../../component/Project/Cards/Cards';
import AllProject from '../../component/Project/AllProject/AllProject';
import ProjectDetails from '../../component/Project/ProjectDetails/ProjectDetails';
import Blog from '../../component/Blog/Blog';
import BlogDetails from '../../component/Blog/BlogDetails/BlogDetails';
import Testimonials from '../../component/Testimonials/Testimonials/Testimonials';
import AdminBlog from '../../component/Blog/AdminBlog/AdminBlog';
import SignIn from '../../component/Form/SignIn/SignIn';
import SignUp from '../../component/Form/SignUp/SignUp';
import PrivetRoute from '../PrivetRoute';
import ServicePage from '../../component/Service/Service/ServicePage';
import Job from '../../component/Jobs/Job';
import MainContract from '../../component/Contact/Contact/MainContract';
import AdminBlogForm from '../../component/Blog/AdminBlogForm';
import AdminRoute from '../AdminRoute';
import Issue from '../../pages/Eployee/Issue/AddNewIssue';
import JobPost from '../../pages/Eployee/JobPost/JobPost';
import UplodNotice from '../../pages/Eployee/UplodNotice/UploadNotice';
import ProjectList from '../../component/Project/AdminProject/ProjectList';
import Add_Meting from '../../pages/Eployee/Meeting/Add_Metting';
import Dashboard from '../../layout/Dashboard';
import { dashboardRouter } from './DashboardRouter';
import ForgetPass from '../../component/Form/Password/ForgetPass';
import ResetPassword from '../../component/Form/Password/ResetPassword';
import { base_url } from '../../layout/Title';
import ViewDetails from '../../component/Jobs/ViewDitals';
import ScrollToTop from './Scroll_to_top';
import Read_more from '../../component/Offer/OfferCart/Readmore';
import Read_more_service from '../../component/Service/Service/Readmore';

export const route = createBrowserRouter([
      {
            path: '/',
            element: <Main></Main>,
            children: [
                  {
                        path: "/",
                        element: <>
                              <ScrollToTop />
                              <Home />
                        </>
                  },
                  {
                        path: "/about",
                        element: <>
                              <ScrollToTop />
                              <About />
                        </>
                  },
                  {
                        path: "/service",
                        element: <>
                              <ScrollToTop />
                              <ServicePage />
                        </>
                  },
                  {
                        path: "/service/:id",
                        element: <>
                              <ScrollToTop />
                              <Read_more_service />
                        </>
                  },
                  {
                        path: "/technology",
                        element: <>
                              <ScrollToTop />
                              <Technology />
                        </>
                  },
                  {
                        path: "/review",
                        element: <>
                              <ScrollToTop />
                              <Testimonials />
                        </>
                  },
                  {
                        path: "/join-with-us",
                        element: <>
                              <ScrollToTop />
                              <JoinUs />
                        </>
                  },
                  {
                        path: "/project",
                        element: <>
                              <ScrollToTop />
                              <Project />
                        </>
                  },
                  {
                        path: "/why-us/:id",
                        element: <>
                              <ScrollToTop />
                              <Read_more />
                        </>
                  },
                  {
                        path: "/project/:id",
                        element: <>
                              <ScrollToTop />
                              <ProjectDetails />
                        </>
                  },
                  {
                        path: "/careers",
                        element: <>
                              <ScrollToTop />
                              <Job />
                        </>
                  },
                  {
                        path: "/careers/:id",
                        element: <>
                              <ScrollToTop />
                              <ViewDetails />
                        </>
                  },
                  {
                        path: "/contract",
                        element: <>
                              <ScrollToTop />
                              <MainContract />
                        </>
                  },
                  {
                        path: "/blog",
                        element: <>
                              <ScrollToTop />
                              <Blog />
                        </>,
                        loader: async () => {
                              return fetch(`${base_url}/blog/get-blog`)
                        }
                  },
                  {
                        path: "/admin/blog",
                        element: <PrivetRoute>
                              <ScrollToTop />
                              <AdminBlog />
                        </PrivetRoute>,
                        loader: async () => {
                              return fetch('https://portfolio-backend-one-kappa.vercel.app/blog')
                        }
                  },

                  {
                        path: "/blog/:id",
                        element: <>
                              <ScrollToTop />
                              <BlogDetails />
                        </>,
                        loader: async ({ params }) => {
                              const id = params.id
                              return fetch(`${base_url}/blog/get-blog-by-id?blog_id=${id}`)
                        }
                  },
                  {
                        path: "/all_project",
                        element: <>
                              <ScrollToTop />
                              <AllProject />
                        </>,
                        loader: async () => {
                              return fetch(`${base_url}/project/get-project`)
                        }
                  },
                  {
                        path: "/all_project/:id",
                        element: <>
                              <ScrollToTop />
                              <AllProject />
                        </>,
                        loader: async (params) => {
                              return fetch(`${base_url}/project//get-project-by-id?project_id=${params}`)
                        }
                  },
                  // {
                  //       path: "https://portfolio-backed.vercel.app/projects:id",
                  //       element: <ProjectDetails />
                  // },

                  {
                        path: "/Cart",
                        element: <Card />
                  },
                  {
                        path: "/contact",
                        element: <Contact />
                  },
                  {
                        path: "/sign_in",
                        element: <SignIn />
                  },
                  {
                        path: "/sign_up",
                        element: <AdminRoute><SignUp /></AdminRoute>
                  },
                  {
                        path: 'forget-password',
                        element: <ForgetPass />
                  },
                  {
                        path: 'reset-password',
                        element: <ResetPassword />
                  }
                  ,



            ]
      },
      {
            path: '/dashboard',
            element: <Dashboard />,
            children: dashboardRouter
      },
      {
            path: '*',
            element: <NotFound />
      }
])
