import demoVect from '../../../Assctes/backgrounds/5512626.jpg'
import ServiceCart from '../../ServiceCart/ServiceCart';
const Service = () => {
    const serviceInfo = [
        {   id:0,
            name : "UI/UX Design",
            pic : demoVect,
            description : "We offer UI/UX design services for software, websites, and dashboards. Our designs are created using Figma, ensuring high-quality and user-friendly interfaces. Let us help you enhance your user experience and create a visually appealing product.",

        },
        {   id:1,
            name : "Web Development",
            pic : demoVect,
            description : "We offer comprehensive web development services tailored to your needs, from simple static pages to complex dynamic websites. Our experienced team uses the latest technologies and tools to deliver high-quality results on time and within budget. Contact us today to bring your online presence to life.",

        },
        {   id:2,
            name : "Full Stack",
            pic : demoVect,
            description : "Our full-stack development service provides end-to-end solutions for your software needs. From planning to deployment, we handle it all with our team of experts. Whether it's a web or mobile app, we ensure smooth functionality and user experience. Leave the technicalities to us and focus on growing your business.",

        },
        {   id:3,
            name : "App Development",
            pic : demoVect,
            description : "We develop legal software for you! Our app development services cover all your needs, ensuring a seamless experience for your users. From ideation to launch, we've got you covered. Our team is experienced in creating high-quality apps that are tailored to your specific needs. Get started today and let us help bring your ideas to life!",

        },
    ];
    return (
        <div className='service-bg py-16'>
            <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center">Services We  <span className="shadow-tx">Provide</span></h1>
            <div className="grid md:grid-cols-4 gap-8 mt-16 md:w-[85%] w-[98%] p-3 mx-auto">
                {
                    serviceInfo.map(data => <ServiceCart key={data.id} data={data}/>)
                }
            </div>
        </div>
    );
};

export default Service;