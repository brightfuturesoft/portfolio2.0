import React from 'react';
import logo from '../../../Assctes/logo.png'
import { Link } from 'react-router-dom';
import { BsFacebook, BsLinkedin, BsTwitter, BsWhatsapp } from 'react-icons/bs';
const Footer = () => {
    return (
        <div className="bg-orange-400 w-full footer-bg">
            <div className="px-1 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8 md:w-[80%] w-[95%]">
                 <div className="grid md:grid-cols-3  gap-2">
                      <div className="">
                          <img src={logo} alt="" className="w-[120px] md:mx-0 mx-auto" />
                          <p className="mt-4 text-sm md:text-left text-center text-[gray]">
                            Sed ut perspiciatis unde omnis iste natus error
                            sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam.
                          </p>
                      </div>
                      <div className="col-span-2">
                           <div className="grid md:grid-cols-3 grid-cols-2 gap-2 cols-3">
                                 <div className="">
                                    <h2 className="text-white font-semibold md:text-left text-center md:mt-0 mt-4">Social media</h2>
                                     <ul className="mt-3">
                                         <li>
                                            <Link to="https://www.facebook.com/thebrightfuture.co" className="text-blue-500 flex items-center md:justify-start justify-center gap-2">
                                                <BsFacebook className='text-xl'/> Facebook
                                            </Link>
                                         </li>
                                         <li className='mt-3'>
                                            <Link to="https://www.linkedin.com/company/thebrightfuture-co/mycompany/verification/" className="text-blue-500 flex items-center md:justify-start justify-center gap-2">
                                                <BsLinkedin className='text-xl'/> Linked In
                                            </Link>
                                         </li>
                                         <li className='mt-3'>
                                            <Link to="https://twitter.com/thebrihgtfuture" className="text-blue-400 flex items-center md:justify-start justify-center gap-2">
                                                <BsTwitter className='text-xl'/> Twitter
                                            </Link>
                                         </li>
                                         <li className='mt-3'>
                                            <Link to="https://api.whatsapp.com/send?phone=8801792205520&text=Hello!%20Thank%20you%20for%20contacting%20our%20software%20company%27s%20WhatsApp%20account.%20We%20are%20delighted%20to%20help%20you%20with%20your%20web%20development%2C%20mobile%20app%20creation%2C%20and%20UI%2FUX%20design%20needs.%20Our%20team%20of%20skilled%20professionals%20is%20committed%20to%20delivering%20high-quality%20services%20that%20exceed%20your%20expectations.%0A%0AWhether%20you%27re%20looking%20to%20revamp%20an%20existing%20website%20or%20develop%20a%20brand%20new%20mobile%20app%2C%20we%20have%20the%20expertise%20to%20bring%20your%20ideas%20to%20life.%20Our%20UI%2FUX%20design%20experts%20will%20ensure%20that%20your%20digital%20products%20are%20user-friendly%2C%20visually%20appealing%2C%20and%20meet%20your%20business%20needs.%0A%0AWe%20take%20pride%20in%20our%20ability%20to%20deliver%20exceptional%20results%20on%20time%20and%20within%20budget.%20So%2C%20if%20you%27re%20ready%20to%20take%20your%20digital%20presence%20to%20the%20next%20level%2C%20let%27s%20chat!%20Our%20team%20is%20ready%20to%20assist%20you%20with%20all%20your%20software%20needs." className="text-green-400 flex items-center md:justify-start justify-center gap-2">
                                                <BsWhatsapp className='text-xl'/> Whatsapp
                                            </Link>
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="">
                                    <h2 className="text-white font-semibold md:text-left text-center md:mt-0 mt-4">Cherry</h2>
                                     <ul className="">
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500 ">Web</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">eCommerce</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Business</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Entertainment</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Portfolio</Link> 
                                         </li>
                                     </ul>
                                 </div>
                                 <div className="md:block hidden">
                                       <h2 className="text-white font-semibold md:text-left text-center md:mt-0 mt-4">Apples</h2>
                                     <ul className="">
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Media</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Brochure</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Nonprofit</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Educational</Link> 
                                         </li>
                                         <li className='mt-3 md:text-left text-center'>
                                              <Link to='' className="text-[#00bfff]  hover:border-b-2 hover:border-blue-500">Project</Link> 
                                         </li>
                                     </ul>
                                 </div>
                                  
                           </div>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default Footer;