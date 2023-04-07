import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import vec from '../../../Assctes/vectors/vector(mission).png'
import vt from '../../../Assctes/vectors/vector(header).png'
import b from '../../../Assctes/backgrounds/b.png';
import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import oshim from '../../../Assctes/teamMember/ashim.jpeg';
import mamon from '../../../Assctes/teamMember/abdullah.jpg';
import nahid from '../../../Assctes/teamMember/nahid.jpeg';
import obidol from '../../../Assctes/teamMember/Obaidul.png'
import mushfiq from '../../../Assctes/teamMember/musfiq.jpg'
import mamonKhan from '../../../Assctes/teamMember/Mamun_Khan.png'
import n from '../../../Assctes/teamMember/n.jpg'
import abdurRab from '../../../Assctes/teamMember/Abdur_rab_1.jpg'
import { HiOutlineMicrophone } from 'react-icons/hi2';
import Service from '../../Service/Service/Service';
import Testimonials from '../../Testimonials/Testimonials/Testimonials';
import Contact from '../../Contact/Contact/Contact';
import Title from '../../../layout/Title';
const About = () => {
   const teamMembers = [
  {
    "id": 0,
    "img": mahadi,
    "name": "Mahadi Hassan",
    "gender": "male",
    "post": "CEO and founder",
    "linkedIn": "https://www.linkedin.com/in/codewithmahadihasan/",
    "gender": "male"
  },
  {
    "id": 1,
    "img": oshim,
    "name": "Latisha Hutchinson",
    "gender": "male",
    "post": "BUZZMAKER",
    "linkedIn": "latishahutchinson@buzzmaker.com",
    "gender": "male"
  },
  {
    "id": 2,
    "img": mamon,
    "name": "Antoinette Peck",
    "gender": "male",
    "post": "ONTAGENE",
    "linkedIn": "antoinettepeck@ontagene.com",
    "gender": "male"
  },
  {
    "id": 3,
    "img": nahid,
    "name": "Randi Norris",
    "gender": "male",
    "post": "SNORUS",
    "linkedIn": "randinorris@snorus.com",
    "gender": "male"
  },
  {
    "id": 4,
    "img": obidol,
    "name": "Candy White",
    "gender": "male",
    "post": "ATGEN",
    "linkedIn": "candywhite@atgen.com",
    "gender": "male"

  },
  {
    "id": 5,
    "img": mushfiq,
    "name": "Blanchard Bruce",
    "gender": "male",
    "post": "ZINCA",
    "linkedIn": "blanchardbruce@zinca.com",
    "gender": "male"
  },
  {
    "id": 6,
    "img":mamonKhan,
    "name": "Franco Tran",
    "gender": "male",
    "post": "INTERLOO",
    "linkedIn": "francotran@interloo.com",
    "gender": "male"
  }
  ,
  {
    "id": 7,
    "img": n,
    "name": "Franco Tran",
    "gender": "male",
    "post": "Junior MERN stack Developer",
    "linkedIn": "francotran@interloo.com",
    "gender": "male"
  }
  ,
  {
    "id": 8,
    "img":abdurRab,
    "name": "Franco Tran",
    "gender": "male",
    "post": "INTERLOO",
    "linkedIn": "francotran@interloo.com",
    "gender": "male"
  }
]      
    return (
        <div className='py-4 bg-[#020A1C] p-2 about-bg'>
          <Title title="About"/>
            <div className="head px-2 py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:w-[85%] w-[98%] mx-auto rounded-lg">
                <div className="md:grid grid-cols-2 h-[300px]">
                     <div className="flex items-center">
                          <div className="py-16">
                              <h1 className='text-xl text-[#3f98fd] font-[400] '>The best employer to </h1>
                            <h1 className="md:text-5xl text-[35px] text-white font-[700]">the best <span className="text-[orange]">developers</span></h1>
                             <img src={vt} alt="" className="md:w-[400px] block md:hidden w-[80%] md:m-0 m-auto" />
                            <p className="text-gray-300 mt-6">
                               Bright Future is a software company. Where we create attractive web and mobile applications for our clients. And we deliver clients' orders on time.
                            </p>
                          </div>
                     </div>
                     <div className="flex justify-end">
                          <img src={vt} alt="" className="md:w-[400px] md:block hidden w-[80%] md:m-0 m-auto" />
                     </div>
                </div>
                <br />
                <div className="mt-[200px]">
                  <h1 className="text-2xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our <span className="shadow-tx">Team</span></h1>
                    <br /><br /><br />
                    <VerticalTimeline>
                      {
                        teamMembers?.map(tData => 
                            <VerticalTimelineElement
                                
                                key={tData.id}
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<img src={b} className='rounded-full' />}
                            >
                                <div className="md:flex gap-2 bg-[#232d3b] p-2 rounded">
                                    <div style={{backgroundImage : `url("${tData?.img}")`, backgroundSize : "cover"}} className="md:w-[100px] w-full md:h-[100px] h-[200px] rounded-lg"></div>
                                    <div className="text-white md:mt-0 mt-2">
                                        <h2>{tData.name}</h2>
                                        <p>{tData.gender=="male" ? "He" : "She"} is {tData.post} in Bright Future</p>
                                    </div>
                                </div>
                            </VerticalTimelineElement>                            
                        )
                    }
                    </VerticalTimeline>
                    
                </div>
            </div>
                  
            <br />
            {/* content */}
             <Service />
                  <Testimonials />
                  <Contact />
        </div>
    );
};

export default About;