import { useEffect } from 'react';
import ui from '../../../Assctes/vectors/ui.gif';
import web from '../../../Assctes/vectors/web.gif';
import app from '../../../Assctes/vectors/app.gif';
import ServiceCart from '../../ServiceCart/ServiceCart';

const Service = () => {

      const serviceInfo = [
            {
                  id: 'ui-ux-design',
                  name: "UI/UX Design",
                  pic: ui,
                  description: "We offer UI/UX design services for software, websites, and dashboards. Our designs are created using Figma, ensuring high-quality and user-friendly interfaces. Let us help you enhance your user experience and create a visually appealing product. Our focus is on creating intuitive interfaces that prioritize ease of use, functionality, and an aesthetically pleasing design. With our expertise, your product will not only look great but also perform seamlessly.",
                  features: [
                        {
                              title: "Custom UI/UX Design",
                              description: "We craft unique, tailor-made UI/UX designs for your product, ensuring it stands out and meets the specific needs of your target audience. Our designs are both functional and aesthetically pleasing, offering a balance between creativity and usability."
                        },
                        {
                              title: "Responsive Design for All Devices",
                              description: "Our UI/UX designs are fully responsive, ensuring your product works flawlessly across all devices, whether it’s desktop, tablet, or mobile. We prioritize creating designs that adapt to various screen sizes without losing their integrity or performance."
                        },
                        {
                              title: "User-Centered Design Approach",
                              description: "We follow a user-centered design approach, meaning that every decision is made with the user’s needs in mind. Our process includes conducting research, gathering insights, and testing to ensure the design aligns with user expectations."
                        },
                        {
                              title: "Prototyping and Wireframing",
                              description: "Before moving to development, we create wireframes and prototypes to visualize the design and user flow. This allows us to gather feedback and make necessary adjustments, ensuring the final design meets all requirements and expectations."
                        }
                  ],
                  questions: [
                        {
                              question: "How long does it take to design a UI/UX for my project?",
                              answer: "The timeline for UI/UX design varies depending on the complexity of the project. Typically, it can take anywhere from a few weeks to a few months. We’ll provide a detailed timeline based on your specific needs after an initial consultation."
                        },
                        {
                              question: "Do you offer redesign services for existing websites?",
                              answer: "Yes, we specialize in redesigning websites to improve their user experience, design aesthetics, and overall functionality. We’ll work with you to update your site according to modern design trends and best practices."
                        },
                        {
                              question: "What tools do you use for designing?",
                              answer: "We primarily use Figma for creating UI/UX designs, but we are also proficient in other design tools like Adobe XD, Sketch, and InVision, depending on the project’s requirements."
                        }
                  ]
            },
            {
                  id: 'web-development',
                  name: "Web Development",
                  pic: web,
                  description: "We offer comprehensive web development services tailored to your needs, from simple static pages to complex dynamic websites. Our experienced team uses the latest technologies and tools to deliver high-quality results on time and within budget. Whether you're looking to build a personal blog, a corporate website, or an e-commerce platform, we have the expertise to bring your ideas to life and make them scalable for the future.",
                  features: [
                        {
                              title: "Custom Web Development",
                              description: "We create custom websites tailored to your specific requirements, ensuring that the website reflects your brand identity and serves your business goals. Our team uses the latest frameworks and technologies to ensure a unique and scalable solution."
                        },
                        {
                              title: "E-commerce Solutions",
                              description: "We provide e-commerce development services that help you build secure, scalable, and user-friendly online stores. From product catalog management to payment gateway integration, we ensure a seamless shopping experience for your customers."
                        },
                        {
                              title: "SEO Optimized Websites",
                              description: "Our web development services include implementing SEO best practices from the ground up. We ensure that your website is optimized for search engines, helping it rank higher and attract more organic traffic."
                        },
                        {
                              title: "Cross-browser Compatibility",
                              description: "We ensure that your website functions seamlessly across all major browsers (Chrome, Firefox, Safari, Edge, etc.), providing a consistent and reliable user experience regardless of the browser your visitors use."
                        }
                  ],
                  questions: [
                        {
                              question: "What technologies do you use for web development?",
                              answer: "We use a variety of technologies, including React, Angular, Node.js, Laravel, PHP, and Python, depending on the requirements of your project. We ensure that we select the most suitable stack to provide the best performance, scalability, and security."
                        },
                        {
                              question: "Can you integrate an e-commerce platform into my website?",
                              answer: "Yes, we can integrate e-commerce platforms such as Shopify, WooCommerce, or create a custom e-commerce solution based on your needs. We ensure that your online store is easy to use and optimized for both your business and your customers."
                        },
                        {
                              question: "How do you ensure the website is SEO-friendly?",
                              answer: "We incorporate SEO best practices into every phase of development, from clean coding and metadata implementation to optimizing page load times. We also provide guidance on creating high-quality content that drives organic traffic."
                        }
                  ]
            },
            {
                  id: 'app-development',
                  name: "App Development",
                  pic: app,
                  description: "We develop legal software for you! Our app development services cover all your needs, ensuring a seamless experience for your users. From ideation to launch, we've got you covered. Whether you need a mobile app, a web app, or a desktop application, our team has the expertise to create high-quality, user-friendly apps that are tailored to your specific needs. We work closely with you to ensure the final product meets your expectations and adds value to your business.",
                  features: [
                        {
                              title: "Cross-platform App Development",
                              description: "We specialize in creating apps that work across multiple platforms, such as iOS, Android, and web applications. Our cross-platform development approach ensures that you can reach a larger audience while keeping the development process cost-effective."
                        },
                        {
                              title: "App Maintenance and Support",
                              description: "We don’t just build apps; we also offer ongoing maintenance and support to ensure your app runs smoothly over time. We provide regular updates, bug fixes, and feature enhancements to keep your app performing at its best."
                        },
                        {
                              title: "User-friendly Interface",
                              description: "We focus on creating simple, intuitive interfaces that provide a seamless user experience. Our designs are tailored to ensure that your users can easily navigate and interact with the app, making it as user-friendly as possible."
                        },
                        {
                              title: "Integration with Third-party APIs",
                              description: "We integrate third-party APIs into your app to enhance its functionality. Whether it’s for payment gateways, social media sharing, or data syncing, we ensure smooth and secure integration with external services."
                        }
                  ],
                  questions: [
                        {
                              question: "What types of apps can you develop?",
                              answer: "We can develop mobile apps for iOS and Android, web apps, and desktop applications for both Windows and macOS. Our team is skilled in creating apps across multiple platforms to meet your specific requirements."
                        },
                        {
                              question: "Do you offer app maintenance after the launch?",
                              answer: "Yes, we offer post-launch maintenance and support. Our team ensures that your app stays updated, fixes any issues, and adds new features as needed to keep the app performing optimally."
                        },
                        {
                              question: "Can you help integrate third-party services into the app?",
                              answer: "Absolutely! We can integrate various third-party services like payment gateways, social media platforms, analytics tools, and more. We ensure that these integrations are secure and work seamlessly within the app."
                        }
                  ]
            }
      ];




      useEffect(() => {
            window.scrollTo(0, 0);
      }, []);
      return (
            <div className='service-bg '>
                  <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 md:w-[80%] w-[95%]">

                        <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Services We  <span className="shadow-tx">Provide</span></h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8 mt-16 p-3 mx-auto">
                              {
                                    serviceInfo.map(data => <ServiceCart key={data.id} data={data} />)
                              }
                        </div>
                  </div>

            </div>
      );
};

export default Service;
