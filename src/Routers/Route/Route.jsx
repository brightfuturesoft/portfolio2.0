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

export const route = createBrowserRouter([
    {
        path: '/',
        element : <Main></Main>,
        children : [
            {
               path : "/",
               element : <Home />
            },
            {
               path : "/about",
               element : <About />
            },
            {
               path : "/service",
               element : <Service />
            },
            {
               path : "/technology",
               element : <Technology />
            },
            {
               path : "/review",
               element : <Testimonials />
            },
            {
               path : "/joinUs",
               element : <JoinUs />
            },
            {
               path : "/project",
               element : <Project />
            },
            {
               path : "/project/:id",
               element : <ProjectDetails />
            },
            {
               path : "/blog",
               element : <Blog />,
               loader : async ()=>{
                  return fetch('https://portfolio-backend-one-kappa.vercel.app/blog')
               }
            },
            {
               path : "/admin/blog",
               element : <PrivetRoute><AdminBlog /></PrivetRoute>,
               loader : async ()=>{
                  return fetch('https://portfolio-backend-one-kappa.vercel.app/blog')
               }
            },
            {
               path : "/blog/:id",
               element : <BlogDetails />,
                loader : async ({params})=>{
                  const bId = params.id
                  return fetch(`https://portfolio-backend-one-kappa.vercel.app/blog/${bId}`)
               }
            },
            {
               path : "/all_project",
               element : <AllProject />,
               loader : async ()=>{
                  return fetch('https://portfolio-backend-one-kappa.vercel.app/allProject')
               }
            },
            {
               path : "https://portfolio-backend-one-kappa.vercel.app/allProject:id",
               element : <ProjectDetails />
            },
            {
               path : "/Cart",
               element : <Card />
            },
            {
               path : "/contact",
               element : <Contact />
            },
            {
               path : "/sign_in",
               element : <SignIn />
            },
            {
               path : "/sign_up",
               element : <SignUp />
            }
             
        ] 
    },
    {
        path : '*',
        element : <NotFound />
    }
])