import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card';

const Project = () => {

    const stickyTopSpace = 50;
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
                    id : 0,
                    name : "HTML",
                },
                {
                    id : 1,
                    name : "CSS",
                },
                {
                    id : 2,
                    name : "JAVASCRIPT",
                },
                {
                    id : 3,
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
                    id : 0,
                    name : "HTML",
                },
                {
                    id : 1,
                    name : "CSS",
                },
                {
                    id : 2,
                    name : "JAVASCRIPT",
                },
                {
                    id : 3,
                    name : "TAILWIND CSS",
                },
            ]
        },
        {
            id : 2,
            picLg : "https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png",
            pic : "https://www.thebrightfuture.co/projectAssets/emaJhon.png",
            liveLink : "https://www.thebrightfuture.co/",
            name : "nnnnnnnn",
            description : "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
            technology : [
                {
                    id : 0,
                    name : "HTML",
                },
                {
                    id : 1,
                    name : "CSS",
                },
                {
                    id : 2,
                    name : "JAVASCRIPT",
                },
                {
                    id : 3,
                    name : "TAILWIND CSS",
                },
            ]
        },
        {
            id : 3,
            picLg : "https://raw.githubusercontent.com/Bright-Futute/MamunAssets/main/MokeupImage/ema-jhon.png",
            pic : "https://www.thebrightfuture.co/projectAssets/emaJhon.png",
            liveLink : "https://www.thebrightfuture.co/",
            name : "nnnnnnnn",
            description : "Here a user can come and order the product. But for that he must have a register and login user. Whatever the user buys will be stored in his local storage. Pagination is used here. Through which product sorting can be done user",
            technology : [
                {
                    id : 0,
                    name : "HTML",
                },
                {
                    id : 1,
                    name : "CSS",
                },
                {
                    id : 2,
                    name : "JAVASCRIPT",
                },
                {
                    id : 3,
                    name : "TAILWIND CSS",
                },
            ]
        },
     
    ]
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Projects</span></h1>

            <div className=" mt-20">
                {
                    project.map((prj, index) => <Card key={prj.id} data={prj} stickyTopSpace={stickyTopSpace * (index + 1)}></Card>)
                    
                }
            </div>
           <div className="flex items-center justify-center">
                 <Link to="/all_project" className='mx-auto border border-[#005eff] px-5 py-2 duration-200 hover:text-[#64beff] hover:bg-[#005eff4b] mt-14 rounded-lg text-[#2b79ff] md:shadow shadow-blue-700'>See more</Link>
           </div>
        </div>
    );
};

export default Project;