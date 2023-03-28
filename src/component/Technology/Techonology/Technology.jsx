import React from 'react';
import { HiOutlineWrenchScrewdriver, HiPhone } from 'react-icons/hi2';
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

const Technology = () => {
    const tecData =[
       {
         tool : [
            { 
               id : 0,
               img : tailwind
            },
            { 
               id : 1,
               img : bootstrap
            },
            { 
               id : 2,
               img : metarial
            },
            { 
               id : 3,
               img : typescript
            },
            { 
               id : 4,
               img : react
            },
            { 
               id : 5,
               img : redux
            },
            { 
               id : 6,
               img : js
            },
        ],
        backend : [
            {
                id : 0,
                img : nodejs
            },
            {
                id : 1,
                img : ex
            },
            {
                id : 2,
                img : db
            },
            {
                id : 3,
                img : mmm
            },
            {
                id : 4,
                img : sql
            },
            {
                id : 5,
                img : redux
            },
            {
                id :6,
                img : js
            },
        ],
       }
    ]

    return (
        <div>
           <div className="tech-bg px-2 text-capitalize">
            <h3 className="text-center text-xl font-semibold text">our technology</h3>
            <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentArrowStyle={{ borderRight: '7px solid  #ff000000', }}

                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<HiOutlineWrenchScrewdriver />}
                        >
                        <div className="sp-box relative p-3">
                            <div className="absolute top-[-30px] bg-[#111a30] sp pl-2 pr-14  py-1 left-0">
                                <h1>Front end development</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].tool.map(tData => <img key={tData.id} className="" src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                       
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work bg-"
                            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            icon={<HiPhone />}
                        >
                              <div className="sp-box relative p-3">
                            <div className="absolute top-[-30px] bg-[#111a30] sp2 pl-14 pr-2  py-1 right-0">
                                <h1>Back end development</h1>
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
                            icon={<HiPhone />}
                        >
                        <div className="sp-box relative p-3">
                            <div className="absolute top-[-30px] bg-[#111a30] sp pl-2 pr-14  py-1 left-0">
                                <h1>Fron-end-development</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].tool.map(tData => <img key={tData.id} className="" src={tData.img} />)
                                  }
                             </figure>
                        </div>
                        </VerticalTimelineElement>
                       
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work bg-"
                            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                            icon={<HiPhone />}
                        >
                              <div className="sp-box relative p-3">
                            <div className="absolute top-[-30px] bg-[#111a30] sp2 pl-14 pr-2  py-1 right-0">
                                <h1>Fron-end-development</h1>
                            </div>
                             <figure className='grid mt-4 grid-cols-6 gap-4'>
                                  {
                                    tecData[0].tool.map(tData => <img key={tData.id} className="" src={tData.img} />)
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