import React from 'react';
import OfferCart from '../OfferCart/OfferCart';
import dv1 from '../../../Assctes/vectors/dv1.svg'
import dv2 from '../../../Assctes/vectors/dv2.svg'
import dv3 from '../../../Assctes/vectors/dv3.svg'
import dv4 from '../../../Assctes/vectors/dv4.svg'
const Offer = () => {
      const offerData = [
            {
                  id: 'latest-product-design',
                  name: "Latest Product Design",
                  pic: dv1,
                  description: "We craft innovative designs to captivate clients and attract customers."
            },
            {
                  id: 'smart-tech-team',
                  name: "Smart Tech Team",
                  pic: dv2,
                  description: "We’re more than website developers – a creative team ensuring you stay ahead in today’s market."
            },
            {
                  id: 'quality-tested',
                  name: "Quality Tested",
                  pic: dv3,
                  description: "Each service is tested and reviewed to ensure quality, delivering every project on time without compromise."
            },
            {
                  id: 'device-friendly-coding',
                  name: "Device Friendly Coding",
                  pic: dv4,
                  description: "Our web developers stay updated with the latest coding trends, delivering top-notch solutions for your website."
            },
      ]
      return (
            <div className="w-full bg-[#020A1C]">
                  <div className="work-bg ">
                        <div className='md:w-[85%] w-[98%] pt-8 pb-12 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                              <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Why Choose <span className="shadow-tx">Bright Future Soft</span></h1>
                              <p className="text-center mt-8 text-blue-500">
                                    We provide comprehensive solutions for web and mobile applications, encompassing the entire development stack.
                                    <br />From crafting distinctive branding identities to delivering top-notch UI/UX design, our services are tailored to meet your needs at every step of the process.
                              </p>

                              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14 mt-16">
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
