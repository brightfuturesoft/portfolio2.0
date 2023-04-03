import React from 'react';
import power from '../../../Assctes/icon/power.png';
import vct from "../../../Assctes/vectors/vector(vission).png"

const OurVission = () => {
      const missionData=[
            {
                id : 0,
                img : power,
                title : "A slice of heaven"
            },
            {
                id : 1,
                img : power,
                title : "Disrupt inspire"
            },
            {
                id : 2,
                img : power,
                title : "Preliminary thinking"
            },
            {
                id : 3,
                img : power,
                title : "flipboard curmudgeon"
            },
            {
                id : 4,
                img : power,
                title : "storage shed"
            },
            {
                id : 5,
                img : power,
                title : "satoshi nakamoto"
            },
    ];
    return (
           <div className=' mx-auto vission-bg'>
            <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[80%] w-[95%]">
                    <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Vission</span></h1>
        
                    <div className="grid md:grid-cols-2 grid-cols-1 mt-16">
                            <img src={vct} alt="" className=" w-[300px] md:hidden block mx-auto" />

                            <div className="md:block hidden">
                                <p className='text-[white]'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                                </p>
                                <ul className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-3 ">
                                        {
                                            missionData.map(mData => <li className="flex items-center  gap-2 duration-200 cursor-pointer hover:bg-[#22283db1] p-2 rounded" key={mData.id}>
                                                <span className="border border-blue-600 rounded-md">
                                                    <img src={mData.img} alt="" className="w-[50px]" />
                                                </span>
                                                <p className='text-gray-500'>{mData.title}</p>
                                            </li>)
                                        }
                                </ul>
                            </div>
                            <div className="md:flex block justify-end" >
                                    <img src={vct} alt="" className="md:block hidden w-[300px]" />

                                     <div className="md:hidden block">
                                <p className=' mt-14'>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
                                </p>
                                <ul className="grid md:grid-cols-2 grid-cols-1 mt-5 gap-3 ">
                                        {
                                            missionData.map(mData => <li className="flex items-center  gap-2" key={mData.id}>
                                                <span className="border border-blue-600 rounded-md">
                                                    <img src={mData.img} alt="" className="w-[35px]" />
                                                </span>
                                                <p>{mData.title}</p>
                                            </li>)
                                        }
                                </ul>
                            </div>
                            </div>
                    </div>
            </div>
        </div>
    );
};

export default OurVission;