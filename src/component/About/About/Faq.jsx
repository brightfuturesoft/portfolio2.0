import { useState } from "react";
import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import hadi from '../../../Assctes/teamMember/mohotasimhadi.jpeg';
import maruf from '../../../Assctes/teamMember/shishir.jpeg'

const Item = ({ title, children }) => {
      const [isOpen, setIsOpen] = useState(false);


      return (
            <div className="border rounded shadow-sm">
                  <button
                        type="button"
                        aria-label="Open item"
                        title="Open item"
                        className="flex items-center justify-between w-full p-4 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                  >
                        <p className="text-lg font-medium">{title}</p>
                        <div className="flex ml-3 items-center justify-center w-8 h-8 p-2 border rounded-full">
                              <svg
                                    viewBox="0 0 24 24"
                                    className={`w-3 text-gray-300 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                                          }`}
                              >
                                    <polyline
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeMiterlimit="10"
                                          points="2,7 12,17 22,7"
                                          strokeLinejoin="round"
                                    />
                              </svg>
                        </div>
                  </button>
                  {isOpen && (
                        <div className="p-4 pt-0">
                              <p className="text-gray-400">{children}</p>
                        </div>
                  )}
            </div>
      );
};

export const Faq = () => {
      const [active, setActive] = useState(1);
      const [schedule, setSchedule] = useState(false)

      const toggle = (id) => {
            setActive(active === id ? null : id);
      };

      return (
            <div className="px-4 text-white py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                  <div className="max-w-4xl sm:mx-auto lg:max-w-5xl">
                        <div className="flex flex-col mb-16 sm:text-center">
                              <a href="/" className="mb-6 sm:mx-auto">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                          <svg
                                                className="w-10 h-10 text-purple-400"
                                                stroke="currentColor"
                                                viewBox="0 0 52 52"
                                          >
                                                <polygon
                                                      strokeWidth="3"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      fill="none"
                                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                                />
                                          </svg>
                                    </div>
                              </a>
                              <div className="max-w-4xl md:mx-auto sm:text-center lg:max-w-7xl">
                                    <h2 className="max-w-4xl mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                          <span className="relative inline-block">
                                                <svg
                                                      viewBox="0 0 52 24"
                                                      fill="currentColor"
                                                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                                >
                                                      <defs>
                                                            <pattern
                                                                  id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                                                  x="0"
                                                                  y="0"
                                                                  width=".135"
                                                                  height=".30"
                                                            >
                                                                  <circle cx="1" cy="1" r=".7" />
                                                            </pattern>
                                                      </defs>
                                                      <rect
                                                            fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                                            width="52"
                                                            height="24"
                                                      />
                                                </svg>
                                                <span className="relative text-white">Frequently Asked Questions</span>
                                          </span>{' '}

                                    </h2>

                              </div>
                        </div>
                        <div className="space-y-4 max-w-7xl">
                              <Item title="What services does Bright Future Soft provide?">
                                    Bright Future Soft offers a range of software solutions, including web application development, mobile app development, UI/UX design, and software consultancy. We specialize in creating innovative, user-friendly, and scalable solutions tailored to meet our clients' specific needs.
                              </Item>
                              <Item title="How can I get started with Bright Future Soft for my project?">
                                    Getting started with Bright Future Soft is simple. You can reach out to us via our website contact form, email us at hello@thebrightfuture.co, or give us a call at +880179225520. Our team will be happy to discuss your project requirements and guide you through the next steps.
                              </Item>
                              <Item title="How long does it typically take to complete a software project?">
                                    The project timeline can vary depending on the scope and complexity of the project. After discussing your specific requirements, we will provide you with an estimated timeline during the initial consultation. We prioritize timely delivery without compromising on quality.
                              </Item>
                              <Item title="Can Bright Future Soft help with ongoing maintenance and support after the project is completed?">
                                    Absolutely. We offer post-development support and maintenance services to ensure the smooth operation of your software solution. We can provide updates, security patches, bug fixes, and technical assistance as needed to keep your application up-to-date and functioning optimally.
                              </Item>
                              <Item title=" How does Bright Future Soft ensure the security and confidentiality of my project?">
                                    At Bright Future Soft, we take security and confidentiality seriously. We adhere to industry best practices to safeguard your project information. We can sign non-disclosure agreements (NDAs) to protect your intellectual property and ensure that sensitive data is handled with the utmost care and security.
                              </Item>
                        </div>
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

      );
};



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
