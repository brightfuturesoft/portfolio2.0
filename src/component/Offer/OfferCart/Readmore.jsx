import { useState } from "react";
import { useLocation } from "react-router-dom";

import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import hadi from '../../../Assctes/teamMember/mohotasimhadi.jpeg';
import maruf from '../../../Assctes/teamMember/shishir.jpeg'

const Read_more = () => {
      const location = useLocation();
      const [schedule, setSchedule] = useState(false)


      const offerData = [
            {
                  id: 'latest-product-design',
                  name: "Latest Product Design",
                  description: "We craft innovative designs to captivate clients and attract customers.",
                  features: [
                        {
                              title: "Custom-Tailored Design Solutions",
                              description: "We create unique, personalized designs that reflect your brand's identity, ensuring a lasting impression on your audience."
                        },
                        {
                              title: "User-Centric Design Philosophy",
                              description: "Our designs focus on enhancing user experience, making them intuitive, engaging, and highly functional."
                        },
                        {
                              title: "Integration of Latest Design Trends",
                              description: "We stay ahead by incorporating cutting-edge design trends, ensuring your brand remains relevant and competitive."
                        },
                        {
                              title: "Quick and Efficient Turnaround",
                              description: "Our team delivers exceptional designs within your specified timelines, maintaining top-notch quality."
                        }
                  ],
                  questions: [
                        {
                              question: "What makes your product designs unique?",
                              answer: "Our designs are custom-tailored to reflect your brand identity, ensuring they stand out and resonate with your audience."
                        },
                        {
                              question: "How do you ensure designs meet client needs?",
                              answer: "We adopt a client-centric approach, working closely with you to create designs that align with your goals and vision."
                        },
                        {
                              question: "Do you follow the latest design trends?",
                              answer: "Yes, we stay updated with the newest design trends and integrate them to keep your brand competitive."
                        },
                        {
                              question: "How long does it take to complete a design project?",
                              answer: "We ensure quick turnaround times without compromising on quality, meeting your deadlines effectively."
                        }
                  ]
            },
            {
                  id: 'smart-tech-team',
                  name: "Smart Tech Team",
                  description: "We’re more than website developers – a creative team ensuring you stay ahead in today’s market.",
                  features: [
                        {
                              title: "Highly Skilled Development Experts",
                              description: "Our team consists of experienced professionals with expertise in modern technologies and frameworks."
                        },
                        {
                              title: "Collaborative and Agile Development",
                              description: "We work hand-in-hand with our clients, adopting an agile approach to deliver solutions that align with your goals."
                        },
                        {
                              title: "Innovative and Creative Solutions",
                              description: "We think outside the box to solve complex challenges with cutting-edge technologies and innovative ideas."
                        },
                        {
                              title: "Comprehensive Support and Maintenance",
                              description: "Our team provides ongoing support to ensure your systems operate seamlessly and efficiently over time."
                        }
                  ],
                  questions: [
                        {
                              question: "What expertise does your tech team bring?",
                              answer: "Our team consists of highly skilled professionals proficient in modern technologies and innovative problem-solving."
                        },
                        {
                              question: "How do you collaborate with clients?",
                              answer: "We use a collaborative approach, maintaining transparent communication and involving clients at every stage."
                        },
                        {
                              question: "Can your team handle complex challenges?",
                              answer: "Absolutely. We specialize in innovative solutions for complex business challenges, ensuring optimal results."
                        },
                        {
                              question: "What kind of support do you provide post-project?",
                              answer: "We offer comprehensive support and maintenance to ensure your systems run smoothly over time."
                        }
                  ]
            },
            {
                  id: 'quality-tested',
                  name: "Quality Tested",
                  description: "Each service is tested and reviewed to ensure quality, delivering every project on time without compromise.",
                  features: [
                        {
                              title: "Extensive Quality Assurance Processes",
                              description: "We implement rigorous testing protocols to ensure every service and product meets the highest quality standards."
                        },
                        {
                              title: "On-Time Project Delivery Commitment",
                              description: "We prioritize timely delivery while maintaining exceptional quality in every aspect of our work."
                        },
                        {
                              title: "Client-Centered Quality Benchmarks",
                              description: "Our quality metrics are designed to meet and exceed client expectations, ensuring total satisfaction."
                        },
                        {
                              title: "Continuous Improvement and Optimization",
                              description: "We embrace feedback and constantly enhance our processes to deliver better outcomes in the future."
                        }
                  ],
                  questions: [
                        {
                              question: "What quality assurance measures do you follow?",
                              answer: "We conduct rigorous testing and reviews to ensure all services meet the highest quality standards."
                        },
                        {
                              question: "How do you balance quality and deadlines?",
                              answer: "Our team follows structured workflows to deliver projects on time without compromising quality."
                        },
                        {
                              question: "Do you offer feedback integration during testing?",
                              answer: "Yes, we incorporate client feedback during testing to refine and optimize the final deliverables."
                        },
                        {
                              question: "How do you ensure consistent quality improvement?",
                              answer: "We regularly analyze processes and embrace innovative techniques to enhance service quality."
                        }
                  ]
            },
            {
                  id: 'device-friendly-coding',
                  name: "Device Friendly Coding",
                  description: "Our web developers stay updated with the latest coding trends, delivering top-notch solutions for your website.",
                  features: [
                        {
                              title: "Responsive and Adaptive Coding Practices",
                              description: "We ensure your website performs flawlessly on all devices, from desktops to smartphones."
                        },
                        {
                              title: "Adherence to Modern Coding Standards",
                              description: "Our developers utilize the latest coding methodologies to create robust and scalable solutions."
                        },
                        {
                              title: "SEO-Optimized and Accessible Code",
                              description: "We write clean, optimized code to improve search engine rankings and enhance accessibility for all users."
                        },
                        {
                              title: "Focus on Speed and Performance",
                              description: "Our code is designed for high-speed performance, ensuring a seamless and efficient user experience."
                        }
                  ],
                  questions: [
                        {
                              question: "How do you ensure device-friendly coding?",
                              answer: "We use responsive and adaptive coding practices to ensure websites perform flawlessly across all devices."
                        },
                        {
                              question: "Do you follow modern coding standards?",
                              answer: "Yes, our developers adhere to the latest coding methodologies for robust and scalable solutions."
                        },
                        {
                              question: "Is your code SEO-friendly?",
                              answer: "Absolutely. We write clean, optimized code to improve search engine rankings and user accessibility."
                        },
                        {
                              question: "How do you maintain high-performance coding?",
                              answer: "Our code is designed for speed and efficiency to ensure fast load times and seamless user experience."
                        }
                  ]
            }
      ];




      const id = location.pathname.split('/')[2];
      const selectedOffer = offerData.find(offer => offer.id === id);


      const [openQuestionId, setOpenQuestionId] = useState(0);

      const handleToggle = (questionId) => {
            // Toggle the open question id, close if the same question is clicked
            setOpenQuestionId(openQuestionId === questionId ? null : questionId);
      };


      return (
            <div>
                  <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
                        <div class="max-w-5xl px-4 mx-auto sm:px-6  mt-4 lg:px-8">
                              <div class="max-w-2xl mx-auto text-center">
                                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{selectedOffer.name}</h2>
                                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">{selectedOffer.description}</p>
                              </div>

                              <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                                    {selectedOffer.features.map(feature => <div class="flex items-start">
                                          <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                                <span class="text-lg font-semibold text-white">?</span>
                                          </div>
                                          <div class="ml-4">
                                                <p class="text-xl font-semibold text-white">{feature.title}</p>
                                                <p class="mt-4 text-base text-gray-400">{feature.description}</p>
                                          </div>
                                    </div>
                                    )}

                              </div>


                              <h2 class="text-3xl text-center my-12 font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

                              <div className=" ">
                                    {selectedOffer.questions.map((question, idx) => (
                                          <div
                                                key={idx}
                                                className="transition-all mb-4 duration-200 border border-opacity-25 rounded border-gray-200 shadow-lg cursor-pointer"
                                          >
                                                <button
                                                      type="button"
                                                      className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                                                      onClick={() => handleToggle(idx)}
                                                >
                                                      <span className="flex text-lg font-semibold text-white">
                                                            {question.question}
                                                      </span>
                                                      <svg
                                                            className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openQuestionId === idx ? 'rotate-180' : ''
                                                                  }`}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                      >
                                                            <path
                                                                  strokeLinecap="round"
                                                                  strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M19 9l-7 7-7-7"
                                                            />
                                                      </svg>
                                                </button>

                                                {/* Conditionally render the answer based on the open state */}
                                                {openQuestionId === idx && (
                                                      <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                                                            <p>{question.answer}</p>
                                                      </div>
                                                )}
                                          </div>
                                    ))}
                              </div>


                              <div className="max-w-5xl mx-auto mt-8 overflow-hidden text-center bg-gray-300 sm:mt-12 rounded-xl">
                                    <div className="px-6 py-12 sm:p-12">
                                          <div className="max-w-sm mx-auto">
                                                <div className="relative z-0 flex items-center justify-center -space-x-2 ">
                                                      <img
                                                            className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                                                            src={hadi}
                                                            alt=""
                                                      />
                                                      <img
                                                            className="relative z-30 inline-block w-16 h-16 rounded-full ring-4 ring-gray-100"
                                                            src={mahadi}
                                                            alt=""
                                                      />
                                                      <img
                                                            className="relative z-10 inline-block rounded-full w-14 h-14 ring-4 ring-gray-100"
                                                            src={maruf}
                                                            alt=""
                                                      />
                                                </div>

                                                <h3 className="mt-6 text-2xl font-semibold text-gray-900">Still have questions?</h3>
                                                <p className="mt-2 text-base font-normal text-gray-600">
                                                      Can't find the answer you're looking for? Please chat with our friendly team.
                                                </p>
                                                <div className="mt-6">
                                                      <button
                                                            onClick={() => setSchedule(true)}
                                                            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                                                            role="button"
                                                      >
                                                            Start free for consultancy
                                                      </button>
                                                </div>
                                          </div>
                                    </div>
                              </div>

                              {schedule && <CallSchedule setModalOpen={setSchedule} isModalOpen={schedule} />}
                        </div>
                  </section>

            </div>
      );
};

export default Read_more;


const CallSchedule = ({ isModalOpen, setModalOpen }) => {
      if (!isModalOpen) return null; // Modal won't render if it's closed

      return (
            <div className="fixed inset-0 z-50 flex items-center h-screen pt-20 justify-center bg-black bg-opacity-70">
                  <div className="relative mx-6 w-full max-w-4xl  p-4 bg-white rounded-lg shadow-lg">

                        {/* Calendly iframe with modifications */}
                        <iframe
                              src="https://calendly.com/brightfuturesoft-bd"
                              title="Calendly Schedule"
                              className="w-full h-[80vh]  rounded-lg    "
                        // allow="camera; microphone"
                        />

                        {/* Close button */}
                        <button
                              onClick={() => setModalOpen(false)}
                              className="absolute top-3 bg-[#2463eb] hover:bg-[#315bb6]  size-10 rounded-full right-3 flex justify-center items-center text-gray-100 hover:text-gray-300"
                        >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                  </div>
            </div>
      );
};
