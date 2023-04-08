import { useEffect } from 'react';
import ui from '../../../Assctes/vectors/ui.gif';
import web from '../../../Assctes/vectors/web.gif';
import app from '../../../Assctes/vectors/app.gif';
import Title from '../../../layout/Title';
import ServiceCart from '../../ServiceCart/ServiceCart';
const Service = () => {
    const serviceInfo = [
        {   id:0,
            name : "UI/UX Design",
            pic : ui,
            description : "We offer UI/UX design services for software, websites, and dashboards. Our designs are created using Figma, ensuring high-quality and user-friendly interfaces. Let us help you enhance your user experience and create a visually appealing product.",

        },
        {   id:1,
            name : "Web Development",
            pic : web,
            description : "We offer comprehensive web development services tailored to your needs, from simple static pages to complex dynamic websites. Our experienced team uses the latest technologies and tools to deliver high-quality results on time and within budget. Contact us today to bring your online presence to life.",

        },
        {   id:2,
            name : "App Development",
            pic : app,
            description : "We develop legal software for you! Our app development services cover all your needs, ensuring a seamless experience for your users. From ideation to launch, we've got you covered. Our team is experienced in creating high-quality apps that are tailored to your specific needs. Get started today and let us help bring your ideas to life!",

        },
    ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
        <div className='service-bg py-16'>
            <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-5 md:w-[80%] w-[95%]">
            <Title title="service"/>
                <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Services We  <span className="shadow-tx">Provide</span></h1>
                <div className="grid md:grid-cols-3 gap-8 mt-16 p-3 mx-auto">
                    {
                        serviceInfo.map(data => <ServiceCart key={data.id} data={data}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;