import React from 'react';
import { Link } from 'react-router-dom';
import { HiGlobeAmericas } from "react-icons/hi2";
import ProjectModal from '../ProjectModal/ProjectModal';

const Project = () => {
    const project =[
        {
            id : 0,
            picLg : "https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png",
            pic : "https://www.thebrightfuture.co/projectAssets/emaJhon.png",
            liveLink : "https://www.thebrightfuture.co/",
            name : "Ema-Jhon (Shopping Platform)",
            description : "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
            technology : [
                {
                    name : "HTML",
                },
                {
                    name : "CSS",
                },
                {
                    name : "JAVASCRIPT",
                },
                {
                    name : "TAILWIND CSS",
                },
            ]
        },
        {
            id : 1,
            picLg : "https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png",
            pic : "https://www.thebrightfuture.co/projectAssets/emaJhon.png",
            liveLink : "https://www.thebrightfuture.co/",
            name : "nnnnnnnn",
            description : "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
            technology : [
                {
                    name : "HTML",
                },
                {
                    name : "CSS",
                },
                {
                    name : "JAVASCRIPT",
                },
                {
                    name : "TAILWIND CSS",
                },
            ]
        },
        {
            id : 2,
            picLg : "https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png",
            pic : "https://www.thebrightfuture.co/projectAssets/emaJhon.png",
            liveLink : "https://www.thebrightfuture.co/",
            name : "Ema-Jhon (Shopping Platform)",
            description : "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
            technology : [
                {
                    name : "HTML",
                },
                {
                    name : "CSS",
                },
                {
                    name : "JAVASCRIPT",
                },
                {
                    name : "TAILWIND CSS",
                },
            ]
        },
        {
            id : 3,
            picLg : "https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png",
            pic : "https://www.thebrightfuture.co/projectAssets/emaJhon.png",
            liveLink : "https://www.thebrightfuture.co/",
            name : "Ema-Jhon (Shopping Platform)",
            description : "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
            technology : [
                {
                    name : "HTML",
                },
                {
                    name : "CSS",
                },
                {
                    name : "JAVASCRIPT",
                },
                {
                    name : "TAILWIND CSS",
                },
            ]
        },
    ]
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Projects</span></h1>

            <div className="grid md:grid-cols-4 gap-4 mt-20">
                {
                    project.map(prj =>  <div key={prj.id} className="cart-project border border-blue-600 box p-3 rounded-lg">
                            <div className="bg-[#202b428d] p-cart rounded-lg">
                                <div className="cart-header relative overflow-hidden">
                                    <div className="absolute hvr-p bg-[#080809bc] w-full h-full rounded-t-lg flex items-center justify-center">
                                        <Link to={prj.liveLink} className="flex items-center gap-2 text-[#50c2ff] hover:text-[white] border-2 duration-200 border-[#00a6ff] px-4 py-2 rounded-lg bg-[#00a6ff26] hover:bg-[#4f8bf9ef]" ><HiGlobeAmericas className='text-xl'/> View</Link>
                                    </div>
                                    <img src="https://teamhood.com/wp-content/uploads/2021/02/project-management.jpg" alt="" className="rounded-lg rounded-b-sm" />
                                </div>
                                <div className="cart-body p-2">
                                    <h2 className="font-semibold text-md mt-1">{prj.name}</h2>
                                   
                                         <button className='bg-[#022e60] w-full rounded-lg  mt-4 duration-200 hover:bg-[#034086]'>
                                             <label htmlFor={prj.id} className="bg-[#ff000000] hover:bg-[#ff000000] btn w-full p-0 hover:border-none text-white">Details</label>
                                         </button>
                                    <ProjectModal prj={prj} />
                                </div>
                            </div>
                        </div>)
                }
            </div>
           <div className="flex items-center justify-center">
                 <Link to="/project" className='mx-auto border border-[#005eff] px-5 py-2 duration-200 hover:text-[#64beff] hover:bg-[#005eff4b] mt-14 rounded-lg text-[#2b79ff] md:shadow shadow-blue-700'>See more</Link>
           </div>
        </div>
    );
};

export default Project;