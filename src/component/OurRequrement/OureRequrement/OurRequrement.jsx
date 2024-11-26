import React, { useState } from 'react';
import vc1 from '../../../Assctes/vectors/1.png'
import vc2 from '../../../Assctes/vectors/2.png'
import vc3 from '../../../Assctes/vectors/3.png'
import vc4 from '../../../Assctes/vectors/4.png'
import vc5 from '../../../Assctes/vectors/5.png'
import vc6 from '../../../Assctes/vectors/6.png'
import vc7 from '../../../Assctes/vectors/7.png'
const OurRequrement = () => {

      const [rData, setRData] = useState({
            id: 0,
            pic: vc1,
            name: "Requirement",
            title: "Requirements",
            description: "Gather and document project requirements."
      })

      const reqData = [
            {
                  id: 0,
                  pic: vc1,
                  name: "Requirement",
                  title: "Requirements",
                  description: "Gather and document project requirements."
            },
            {
                  id: 2,
                  pic: vc2,
                  name: "Analysis",
                  title: "Requirements",
                  description: "Gather and document project requirements."
            },
            {
                  id: 3,
                  pic: vc3,
                  name: "Design",
                  description: "The requirement specifications from first phase are studied in this phase and the system design is prepared. This system design helps in specifying hardware and system requirements and helps in defining the overall system architecture."
            },
            {
                  id: 4,
                  pic: vc4,
                  name: "Coding",
                  description: "With inputs from the system design, the system is first developed in small programs called units, which are integrated in the next phase. Each unit is developed and tested for its functionality, which is referred to as Unit Testing"
            },
            {
                  id: 5,
                  pic: vc5,
                  name: "Testing",
                  description: "Test the system components and integrate them into a working system."
            },
            {
                  id: 6,
                  pic: vc6,
                  name: "Deployment",
                  description: "Deploy the system to the production environment."
            },
            {
                  id: 7,
                  pic: vc7,
                  name: "Maintenance",
                  description: "Provide ongoing maintenance and support for the system."
            },
      ];

      const handleReqData = (data) => {
            setRData(data);
      }

      return (
            <div className="text-white common-bg py-[6px]">
                  <div className="requirement-box  bg-right-top ">
                        <div className="md:w-[85%] w-[98%]  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                              <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center">How We Develop <span className="shadow-tx">Software</span></h1>

                              <div className="lg:grid grid-cols-2 mt-8 ">
                                    <div className="h-full flex items-center md:mt-0 mt-16">
                                          <div className='w-full'>
                                                <h2 className="font-bold md:text-6xl text-4xl md:text-left text-center">{rData.name}</h2>
                                                <p className="mt-5 text-xl md:text-left text-center text-gray-400">
                                                      {
                                                            rData.description
                                                      }
                                                </p>
                                          </div>
                                    </div>
                                    <div className="grid md:grid-cols-3 grid-cols-2 md:px-12">
                                          {
                                                reqData.map(data =>

                                                      <div onClick={() => handleReqData(data)} key={data.id} align="center" className="mt-10 ">
                                                            <div className="w-[100px] h-[100px] rounded-xl bg-[#1e2a31a3] duration-200  common-hover-shadow cursor-pointer flex items-center justify-center">
                                                                  <img loading="lazy" src={data.pic} alt="" className="vc-img" />
                                                            </div>
                                                            <p className='mt-3'>{data.name}</p>
                                                      </div>)
                                          }
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default OurRequrement;
