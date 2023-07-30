import React from 'react';
import OfferCart from '../OfferCart/OfferCart';
import dv1 from '../../../Assctes/vectors/dv1.svg'
import dv2 from '../../../Assctes/vectors/dv2.svg'
import dv3 from '../../../Assctes/vectors/dv3.svg'
import dv4 from '../../../Assctes/vectors/dv4.svg'
const Offer = () => {
    const offerData = [
        {
            id: 0,
            name: "Latest Product Design",
            pic: dv1,
            description: "We are always inventing new designs for our clients. Our team of designers is constantly coming up with innovative and creative work that we know will attract potential customers."
        },
        {
            id: 1,
            name: "Smart Tech Team",
            pic: dv2,
            description: "We are far more than just a website developer – we’re a conglomerate of creative minds working together to make sure you don’t fall behind in today’s demanding market."
        },
        {
            id: 2,
            name: "Quality Tested",
            pic: dv3,
            description: "Here , each of the services is tested and reviewed for quality assurance. We ensure that each project is delivered on time without compromising on quality."
        },
        {
            id: 3,
            name: "Device Friendly Coding",
            pic: dv4,
            description: "Our web developers are updated with the latest trends in coding and can give you the most ideal solutions for your website by providing top-notch work."
        },
    ]
    return (
        <div className="w-full bg-[#020A1C]">
            <div className="work-bg ">
                <div className='md:w-[85%] w-[98%] pt-8 pb-12 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                    <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Why Choose <span className="shadow-tx">Bright Future</span></h1>
                    <p className="text-center mt-8 text-blue-500">
                        We provide comprehensive solutions for web and mobile applications, encompassing the entire development stack.
                        <br />From crafting distinctive branding identities to delivering top-notch UI/UX design, our services are tailored to meet your needs at every step of the process.
                    </p>

                    <div className="grid md:grid-cols-4 grid-cols-1 gap-14 mt-16">
                        {
                            offerData.map(offerData => <OfferCart key={offerData.id} offerData={offerData} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;