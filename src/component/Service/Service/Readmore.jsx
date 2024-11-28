import { useState } from "react";
import { useLocation } from "react-router-dom";

import mahadi from '../../../Assctes/teamMember/mahadi.jpg';
import hadi from '../../../Assctes/teamMember/mohotasimhadi.jpeg';
import maruf from '../../../Assctes/teamMember/shishir.jpeg'

const Read_more_service = () => {
      const location = useLocation();
      const [schedule, setSchedule] = useState(false)


      const serviceInfo = [
            {
                  "id": 0,
                  "name": "UI/UX Design",
                  "url": "ui-ux-design",
                  "description": "We offer UI/UX design services for software, websites, and dashboards. Our designs are created using Figma, ensuring high-quality and user-friendly interfaces.",
                  "features": [
                        {
                              "title": "High-Quality Visuals",
                              "description": "Our designs focus on delivering high-quality visuals that enhance the user experience and engagement, ensuring a professional look and feel across platforms."
                        },
                        {
                              "title": "User-Centered Design",
                              "description": "We prioritize user needs and behavior, ensuring that each design is optimized for a seamless experience. We gather user feedback and insights to iterate and improve the designs."
                        },
                        {
                              "title": "Responsive Layouts",
                              "description": "Our designs are responsive, ensuring that they work seamlessly across a wide range of devices, from desktops to mobile phones and tablets."
                        },
                        {
                              "title": "Prototyping & Testing",
                              "description": "We create interactive prototypes to simulate the final product, enabling us to test user flows and gather valuable feedback before the final design is implemented."
                        }
                  ],
                  "questions": [
                        {
                              "question": "How do you ensure the designs are user-friendly?",
                              "answer": "We conduct user research and usability testing, gathering feedback from actual users to make sure the designs meet their needs."
                        },
                        {
                              "question": "What tools do you use for UI/UX design?",
                              "answer": "We primarily use Figma for design, along with Adobe XD and Sketch for specific use cases."
                        },
                        {
                              "question": "Can you redesign an existing website or app?",
                              "answer": "Yes, we can help redesign your existing platform to enhance the user experience and interface while integrating the latest design trends."
                        }
                  ]
            },
            {
                  "id": 1,
                  "name": "Web Development",
                  "url": "web-development",
                  "description": "We offer comprehensive web development services tailored to your needs, from simple static pages to complex dynamic websites.",
                  "features": [
                        {
                              "title": "Custom Web Development",
                              "description": "We develop custom web solutions tailored to your specific needs, ensuring that your website or web app serves its intended purpose effectively."
                        },
                        {
                              "title": "Responsive Web Design",
                              "description": "Our websites are built to adapt seamlessly across devices, from desktops to mobile phones, ensuring an optimal user experience on any screen."
                        },
                        {
                              "title": "SEO Optimization",
                              "description": "We integrate SEO best practices into the web development process to ensure your website ranks well on search engines and attracts organic traffic."
                        },
                        {
                              "title": "E-commerce Integration",
                              "description": "We build secure and robust e-commerce platforms with payment gateway integration, inventory management, and user-friendly product displays to support your online business."
                        }
                  ],
                  "questions": [
                        {
                              "question": "How do you ensure the website will be SEO-friendly?",
                              "answer": "We implement on-page SEO strategies such as optimized meta tags, clean URLs, mobile responsiveness, and fast loading times to boost your website's visibility."
                        },
                        {
                              "question": "Can you build a custom content management system (CMS)?",
                              "answer": "Yes, we can develop a custom CMS that allows you to easily manage and update your website content."
                        },
                        {
                              "question": "Do you provide ongoing support after development?",
                              "answer": "Yes, we offer maintenance and support services to ensure your website remains up-to-date and functions smoothly."
                        }
                  ]
            },
            {
                  "id": 2,
                  "name": "App Development",
                  "url": "app-development",
                  "description": "We develop legal software for you! Our app development services cover all your needs, ensuring a seamless experience for your users.",
                  "features": [
                        {
                              "title": "Cross-Platform Compatibility",
                              "description": "Our apps are built to work seamlessly across iOS and Android platforms, offering a consistent user experience."
                        },
                        {
                              "title": "High Performance",
                              "description": "We focus on developing high-performance apps that offer smooth user experiences even with complex features or high traffic."
                        },
                        {
                              "title": "Secure & Scalable",
                              "description": "Our apps are designed with security in mind, ensuring that user data is protected. We also build scalable apps to accommodate future growth."
                        },
                        {
                              "title": "Custom Features",
                              "description": "We tailor the app's features to meet your specific business needs, from user authentication to real-time messaging or location-based services."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What platforms do you develop apps for?",
                              "answer": "We develop apps for both iOS and Android platforms, using cross-platform technologies for efficiency."
                        },
                        {
                              "question": "Can you integrate third-party services into the app?",
                              "answer": "Yes, we can integrate third-party services like payment gateways, social media APIs, and more."
                        },
                        {
                              "question": "Do you offer post-launch support for the app?",
                              "answer": "Yes, we provide maintenance and support services to ensure the app runs smoothly after launch."
                        }
                  ]
            },
            {
                  "id": 3,
                  "name": "Custom Software Development",
                  "url": "custom-software-development",
                  "description": "We provide tailored software solutions to meet your specific business needs. Our custom software development services ensure you get exactly what you need.",
                  "features": [
                        {
                              "title": "Tailored Solutions",
                              "description": "We work closely with you to develop custom software that fits your unique business requirements, ensuring the solution is aligned with your goals."
                        },
                        {
                              "title": "Scalable Software",
                              "description": "We design and develop software solutions that can scale as your business grows, ensuring long-term viability."
                        },
                        {
                              "title": "Security and Performance",
                              "description": "We focus on building secure and high-performance software, ensuring your applications are protected and function optimally under all conditions."
                        },
                        {
                              "title": "Agile Development Process",
                              "description": "Our development process follows agile methodologies, ensuring flexibility and iterative progress as we build the solution together."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What industries do you specialize in for custom software?",
                              "answer": "We specialize in a wide range of industries, including finance, healthcare, e-commerce, and education, tailoring our solutions to each sector's specific needs."
                        },
                        {
                              "question": "What is the typical timeline for custom software development?",
                              "answer": "The timeline depends on the complexity of the project, but we work efficiently and keep you informed throughout the process."
                        },
                        {
                              "question": "Do you offer support after the software is developed?",
                              "answer": "Yes, we offer post-launch support and maintenance services to ensure your software continues to operate smoothly."
                        }
                  ]
            },
            {
                  "id": 5,
                  "name": "IT Consulting",
                  "url": "it-consulting",
                  "description": "Our strategic IT consulting services help you optimize your technology infrastructure and processes. We provide expert advice to ensure your IT strategy aligns with your business goals.",
                  "features": [
                        {
                              "title": "Strategic IT Planning",
                              "description": "We work with you to develop a strategic IT plan that aligns with your business objectives, helping you maximize your technology investments."
                        },
                        {
                              "title": "Infrastructure Optimization",
                              "description": "Our consultants optimize your IT infrastructure, ensuring your systems are efficient, secure, and ready for growth."
                        },
                        {
                              "title": "Cloud Solutions",
                              "description": "We provide cloud consulting services to help you take advantage of cloud technologies for greater scalability and flexibility."
                        },
                        {
                              "title": "Cybersecurity Strategies",
                              "description": "We help you develop strong cybersecurity strategies to protect your data, systems, and intellectual property."
                        }
                  ],
                  "questions": [
                        {
                              "question": "How do you help businesses align IT with their goals?",
                              "answer": "We analyze your current IT infrastructure and business objectives, then create a customized plan that helps integrate technology solutions that drive business growth."
                        },
                        {
                              "question": "What are the benefits of cloud computing for my business?",
                              "answer": "Cloud computing offers cost savings, scalability, and flexibility, enabling your business to access resources on-demand and optimize operations."
                        },
                        {
                              "question": "How do you ensure data security during IT consulting?",
                              "answer": "We implement robust security practices, including encryption, firewalls, and regular audits, to protect your sensitive data throughout the consulting process."
                        }
                  ]
            },
            {
                  "id": 7,
                  "name": "Data Analytics",
                  "url": "data-analytics",
                  "description": "Our data analytics and business intelligence services provide actionable insights to support your decision-making processes. We help you harness the power of your data.",
                  "features": [
                        {
                              "title": "Data Collection and Integration",
                              "description": "We help you collect and integrate data from various sources to ensure you have a complete and accurate picture of your business."
                        },
                        {
                              "title": "Advanced Analytics",
                              "description": "Our team uses advanced data analysis techniques to uncover hidden trends, patterns, and insights that can drive strategic decision-making."
                        },
                        {
                              "title": "Reporting and Dashboards",
                              "description": "We create interactive reports and dashboards that allow you to visualize your data in a way that’s easy to understand and act upon."
                        },
                        {
                              "title": "Predictive Analytics",
                              "description": "Our predictive analytics capabilities help you forecast future trends and behaviors, giving you a competitive edge in your industry."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What types of data do you analyze?",
                              "answer": "We analyze all types of structured and unstructured data, including sales data, customer data, web analytics, and operational data."
                        },
                        {
                              "question": "How do you help businesses make decisions using data?",
                              "answer": "We provide actionable insights through data visualization, advanced analytics, and custom reports to help you make informed, data-driven decisions."
                        },
                        {
                              "question": "Can you integrate data analytics with my existing systems?",
                              "answer": "Yes, we can integrate our data analytics solutions with your existing systems, ensuring seamless data flow and analysis."
                        }
                  ]
            },
            {
                  "id": 8,
                  "name": "DevOps and CI/CD",
                  "url": "devops-ci-cd",
                  "description": "We implement and manage DevOps practices to streamline your development and deployment processes. Our continuous integration and continuous deployment (CI/CD) services ensure fast and reliable software delivery.",
                  "features": [
                        {
                              "title": "Continuous Integration",
                              "description": "We automate the integration of code changes to enable faster development cycles and ensure the consistency of the codebase."
                        },
                        {
                              "title": "Automated Testing",
                              "description": "Our automated testing frameworks help catch bugs early in the development process, improving the quality and reliability of your software."
                        },
                        {
                              "title": "Continuous Deployment",
                              "description": "We enable continuous deployment to ensure that your software is always up-to-date and ready for production, reducing manual intervention."
                        },
                        {
                              "title": "Monitoring and Feedback",
                              "description": "We implement monitoring tools to track the performance of your applications and provide real-time feedback for continuous improvement."
                        }
                  ],
                  "questions": [
                        {
                              "question": "How do DevOps practices benefit software development?",
                              "answer": "DevOps practices enhance collaboration between development and operations teams, automate workflows, and reduce deployment risks, leading to faster and more reliable software delivery."
                        },
                        {
                              "question": "What is CI/CD?",
                              "answer": "CI/CD stands for Continuous Integration and Continuous Deployment. It involves automating the integration and deployment of code changes to accelerate development cycles."
                        },
                        {
                              "question": "Can you help us implement DevOps in our organization?",
                              "answer": "Yes, we can help you implement DevOps practices tailored to your organization's needs, ensuring a smooth transition and enhanced software delivery."
                        }
                  ]
            },
            {
                  "id": 9,
                  "name": "Support And Maintenance",
                  "url": "support-maintenance",
                  "description": "We provide ongoing technical support and maintenance for your software and systems. Our team ensures your technology operates smoothly and efficiently.",
                  "features": [
                        {
                              "title": "24/7 Support",
                              "description": "Our dedicated support team is available around the clock to resolve any issues and provide assistance when needed."
                        },
                        {
                              "title": "System Monitoring",
                              "description": "We offer proactive system monitoring to identify and address potential issues before they impact your business."
                        },
                        {
                              "title": "Bug Fixes and Updates",
                              "description": "We handle bug fixes and regular software updates to keep your systems up-to-date and secure."
                        },
                        {
                              "title": "Performance Optimization",
                              "description": "We optimize your software and infrastructure to ensure peak performance and reduce downtime."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What types of support do you offer?",
                              "answer": "We offer technical support, bug fixes, software updates, and system monitoring to ensure your software runs smoothly."
                        },
                        {
                              "question": "How do you handle urgent support requests?",
                              "answer": "We have a dedicated support team that prioritizes urgent issues and works to resolve them as quickly as possible."
                        },
                        {
                              "question": "Can you help with maintaining legacy systems?",
                              "answer": "Yes, we can provide maintenance and support for legacy systems, ensuring they continue to function properly and integrate with modern technologies."
                        }
                  ]
            },
            {
                  "id": 10,
                  "name": "E-commerce Solutions",
                  "url": "e-commerce-solutions",
                  "description": "We develop and manage e-commerce platforms and solutions tailored to your online business needs. Our services cover everything from product listings to payment processing.",
                  "features": [
                        {
                              "title": "Custom E-commerce Platforms",
                              "description": "We build fully customizable e-commerce platforms tailored to your business needs, offering flexibility and scalability."
                        },
                        {
                              "title": "Payment Gateway Integration",
                              "description": "We integrate secure and reliable payment gateways to facilitate smooth transactions for your customers."
                        },
                        {
                              "title": "Inventory and Order Management",
                              "description": "Our solutions include features for efficient inventory and order management, ensuring smooth operations for your e-commerce business."
                        },
                        {
                              "title": "Mobile Optimization",
                              "description": "We optimize e-commerce platforms for mobile devices, ensuring that your customers have a seamless shopping experience on any device."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What e-commerce platforms do you specialize in?",
                              "answer": "We specialize in building e-commerce solutions on popular platforms such as Shopify, WooCommerce, and custom-built platforms."
                        },
                        {
                              "question": "Can you integrate third-party services into the e-commerce platform?",
                              "answer": "Yes, we can integrate third-party services such as payment gateways, shipping providers, and inventory management tools into your e-commerce platform."
                        },
                        {
                              "question": "Do you provide marketing solutions for e-commerce?",
                              "answer": "Yes, we offer digital marketing services such as SEO, PPC advertising, and email marketing to help promote your e-commerce business."
                        }
                  ]
            },
            {
                  "id": 11,
                  "url": 'erp-systems',
                  "name": "ERP Systems",
                  "description": "Enterprise Resource Planning solutions for managing business operations, streamlining processes, and improving efficiency.",
                  "features": [
                        {
                              "title": "Inventory Management",
                              "description": "Efficiently track and manage inventory levels, orders, and suppliers, reducing stockouts and overstocking."
                        },
                        {
                              "title": "Finance and Accounting",
                              "description": "Automate financial operations including billing, invoicing, and accounting to ensure accurate and timely financial records."
                        },
                        {
                              "title": "Human Resource Management",
                              "description": "Manage employee records, payroll, performance evaluations, and recruitment processes all in one system."
                        },
                        {
                              "title": "Supply Chain Management",
                              "description": "Streamline the flow of goods, services, and information across the entire supply chain to enhance operational efficiency."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What is ERP?",
                              "answer": "ERP (Enterprise Resource Planning) is software that integrates various functions of a business into one unified system, helping to manage core business processes."
                        },
                        {
                              "question": "Why do companies need an ERP system?",
                              "answer": "ERP systems allow businesses to automate processes, reduce errors, improve productivity, and ensure data consistency across departments."
                        },
                        {
                              "question": "How can ERP improve business efficiency?",
                              "answer": "ERP improves efficiency by automating routine tasks, streamlining workflows, and providing real-time data for better decision-making."
                        }
                  ]
            },
            {
                  "id": 12,
                  "url": 'legacy-system-modernization',
                  "name": "Legacy System Modernization",
                  "description": "Upgrade and modernize outdated systems to enhance performance, security, and integration with new technologies.",
                  "features": [
                        {
                              "title": "System Integration",
                              "description": "Integrate legacy systems with modern software and technologies to enable seamless data flow across platforms."
                        },
                        {
                              "title": "Data Migration",
                              "description": "Migrate data from old systems to new platforms without losing data integrity or functionality."
                        },
                        {
                              "title": "Cloud Migration",
                              "description": "Move legacy systems to the cloud for enhanced scalability, accessibility, and cost-effectiveness."
                        },
                        {
                              "title": "Security Enhancements",
                              "description": "Update legacy systems with the latest security protocols and features to protect against cyber threats."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What is Legacy System Modernization?",
                              "answer": "Legacy System Modernization refers to the process of updating and upgrading outdated software and systems to meet current technology standards."
                        },
                        {
                              "question": "Why is it important to modernize legacy systems?",
                              "answer": "Modernizing legacy systems helps businesses improve efficiency, reduce operational costs, enhance security, and integrate with modern technologies."
                        },
                        {
                              "question": "How does cloud migration benefit legacy systems?",
                              "answer": "Cloud migration improves scalability, lowers infrastructure costs, and provides greater flexibility for modern applications and technologies."
                        }
                  ]
            },
            {
                  "id": 13,
                  "url": 'crm-solutions',
                  "name": "CRM Solutions",
                  "description": "Customer Relationship Management solutions to optimize sales, marketing, and customer service efforts, creating long-term customer relationships.",
                  "features": [
                        {
                              "title": "Customer Data Management",
                              "description": "Centralize all customer data into one system for easy access and efficient management of customer relationships."
                        },
                        {
                              "title": "Sales Automation",
                              "description": "Automate key sales processes like lead tracking, pipeline management, and follow-ups to close deals faster."
                        },
                        {
                              "title": "Marketing Automation",
                              "description": "Automate marketing campaigns, email newsletters, and customer outreach to improve engagement and conversion rates."
                        },
                        {
                              "title": "Customer Service Management",
                              "description": "Enhance customer service by tracking support tickets, managing cases, and providing fast resolutions to customer issues."
                        }
                  ],
                  "questions": [
                        {
                              "question": "What is CRM?",
                              "answer": "CRM (Customer Relationship Management) is a strategy and software used by businesses to manage and analyze customer interactions and data throughout the customer lifecycle."
                        },
                        {
                              "question": "What are the benefits of using a CRM system?",
                              "answer": "A CRM system helps businesses improve customer relationships, streamline sales processes, enhance marketing efforts, and boost customer satisfaction."
                        },
                        {
                              "question": "How can CRM improve sales?",
                              "answer": "CRM systems help improve sales by tracking leads, managing customer data, and automating follow-ups, ensuring that no opportunity is missed."
                        }
                  ]
            }
      ]






      const id = location.pathname.split('/')[2];
      const selectedOffer = serviceInfo.find(offer => offer.url === id);

      console.log(selectedOffer, 'selectedOffer', id);


      const [openQuestionId, setOpenQuestionId] = useState(0);

      const handleToggle = (questionId) => {
            // Toggle the open question id, close if the same question is clicked
            setOpenQuestionId(openQuestionId === questionId ? null : questionId);
      };


      if (!selectedOffer) {
            return <p className="text-white bg-gray-900 text-5xl text-center pt-80 py-60">Service not found</p>;
      }

      return (
            <div>
                  <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
                        <div class="max-w-5xl px-4 mx-auto sm:px-6  mt-4 lg:px-8">
                              <div class="max-w-2xl mx-auto text-center">
                                    <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">{selectedOffer?.name}</h2>
                                    <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">{selectedOffer?.description}</p>
                              </div>

                              <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                                    {selectedOffer.features.map(feature => <div class="flex items-start">
                                          <div class="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                                                <span class="text-lg font-semibold text-white">?</span>
                                          </div>
                                          <div class="ml-4">
                                                <p class="text-xl font-semibold text-white">{feature.title}</p>
                                                <p class="mt-4 text-base text-gray-400">{feature?.description}</p>
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

export default Read_more_service;


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
