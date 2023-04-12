import React from 'react';
import { HiOutlineCodeBracket, HiOutlineCurrencyBangladeshi, HiOutlineWrenchScrewdriver, HiPhone } from 'react-icons/hi2';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import tailwind from '../../../Assctes/icon/Group 27.png'
import bootstrap from '../../../Assctes/icon/Group 14.png'
import metarial from '../../../Assctes/icon/Group 22.png'
import typescript from '../../../Assctes/icon/Group 23.png'
import react from '../../../Assctes/icon/Group 24.png'
import redux from '../../../Assctes/icon/Group 25.png'
import js from '../../../Assctes/icon/Group 26.png'
import nodejs from '../../../Assctes/icon/Group 113.png'
import ex from '../../../Assctes/icon/Group 114.png'
import db from '../../../Assctes/icon/db.png'
import mmm from '../../../Assctes/icon/mmm.png'
import sql from '../../../Assctes/icon/sql.png'
// import native from '../../../Assctes/icon/native.png'
import flutter from '../../../Assctes/icon/flutter.png'
import ssl from '../../../Assctes/icon/ssl.png'
import strip from '../../../Assctes/icon/stripe.png'
import firebase from '../../../Assctes/icon/firebase.png'
import figma from '../../../Assctes/icon/figma.png'
import xd from '../../../Assctes/icon/xd.png'
import ps from '../../../Assctes/icon/ps.png'
import illstator from '../../../Assctes/icon/illastator.png'
import id from '../../../Assctes/icon/id.png'
import aftereffect from '../../../Assctes/icon/aftereffect.png'
import flut from '../../../Assctes/icon/flutter.png'
import native from '../../../Assctes/icon/reactNative.png';

const Technology = () => {
    const tecData =[
       {
         front : [
            { 
               id : 0,
               name : "tailwind", img : tailwind
            },
            { 
               id : 1,
               name : "bootstrap", img : bootstrap
            },
            { 
               id : 2,
               name : "metarial", img : metarial
            },
            { 
               id : 3,
               name : "typescript", img : typescript
            },
            { 
               id : 4,
               name : "react", img : react
            },
            { 
               id : 5,
               name : "redux", img : redux
            },
            { 
               id : 6,
               name : "java script", img : js
            },
        ],
        backend : [
            {
                id : 0,
                name : "node js", img : nodejs
            },
            {
                id : 1,
                name : "express js", img : ex
            },
            {
                id : 2,
                name : "mongo DB", img : db
            },
            {
                id : 3,
                name : "asd", img : mmm
            },
            {
                id : 4,
                name : "asd", img : sql
            },
            {
                id : 5,
                name : "asd", img : redux
            },
            {
                id :6,
                name : "asd", img : js
            },
        ],
          tools : [
            { 
               id : 0,
               name : "asd", img : firebase
            },
            { 
               id : 1,
               name : "asd", img : figma
            },
            { 
               id : 2,
               name : "asd", img : xd
            },
            { 
               id : 3,
               name : "asd", img : ps
            },
            { 
               id : 4,
               name : "asd", img : illstator
            },
            { 
               id : 5,
               name : "asd", img : id
            },
            { 
               id : 6,
               name : "asd", img : aftereffect
            },
        ],
          app : [
            { 
               id : 0,
               name : "asd", img : native
            },
            { 
               id : 1,
               name : "asd", img : flut
            },
           
        ],
          payment : [
            { 
               id : 0,
               name : "asd", img : ssl
            },
            { 
               id : 1,
               name : "asd", img : strip
            },
       
        ],
       }
    ]

    return (
        <div>
           <div className="tech-bg px-2 py-4 text-capitalize" id='tech'>
             <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our Technology <span className="shadow-tx">and Tools</span></h1>
             <br /><br />
            <VerticalTimeline className='text-white'>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: '7px solid  #ff000000', }}

                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<HiOutlineCodeBracket />}
                        >
                        <div className="sp-box border border-[#2a4892]  relative p-3">
                            <div className="absolute top-[-28px] bg-[#2a4892] sp pl-2 pr-14  py-1 left-[-2px]">
                                <h1 className='md:text-md text-sm'>Front end development</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].front.map(tData => <img key={tData.id} title={tData.name} className="shd"  src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                       
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work bg-"
                            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            icon={<HiOutlineCodeBracket />}
                        >
                              <div className="sp-box relative p-3 border border-[#2a4892]">
                            <div className="absolute top-[-28px] bg-[#2a4892] sp2 pl-14 pr-2  py-1 right-[-2px]">
                                <h1 className='md:text-md text-sm'>Back end development</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].backend.map(tData => <img key={tData.id} className="" src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                      
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: '7px solid  #ff000000', }}

                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<HiOutlineWrenchScrewdriver />}
                        >
                        <div className="sp-box relative p-3 border border-[#2a4892]">
                            <div className="absolute top-[-28px] bg-[#2a4892] sp pl-2 pr-14  py-1 left-[-2px]">
                                <h1 className='md:text-md text-sm'>Tools</h1>
                            </div>
                             <figure className='grid  mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].tools.map(tData => <img key={tData.id} className="" src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                       
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work bg-"
                            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            icon={<HiOutlineCodeBracket />}
                        >
                              <div className="sp-box relative p-3 border border-[#2a4892]">
                            <div className="absolute top-[-28px] bg-[#2a4892] sp2 pl-14 pr-2  py-1 right-[-2px]">
                                <h1 className='md:text-md text-sm'> App Development</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].app.map(tData => <img key={tData.id} className="" src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                    
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work "
                            iconStyle={{ background: '#2196F3', color: 'white' }}
                            icon={<HiOutlineCurrencyBangladeshi />}
                        >
                              <div className="sp-box relative p-3 border border-[#2a4892]">
                            <div className="absolute top-[-28px] bg-[#2a4892] sp pr-14 pl-2  py-1 left-[-2px]">
                                <h1 className='md:text-md text-sm'>Payment Method</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].payment.map(tData => <img key={tData.id} className="" src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                
                </VerticalTimeline>
           </div>
        </div>
    );
};

export default Technology;