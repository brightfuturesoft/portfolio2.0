import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assctes/logo.png';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { HiBars3BottomLeft, HiBars3BottomRight } from 'react-icons/hi2';
import { MdTurnLeft } from 'react-icons/md';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";


const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const {user, userLogOut} = useContext(AuthContext)
 const [optOpen, setOptOpen] = useState(false);
 const logOut=()=>{
    userLogOut()
    .then((result) => {
        // Sign-out successful.
        const user = result.user;
        console.log(user);
      }).catch((error) => {
        // An error happened.
        console.log(error);
      });
 }
 console.log(user);
  return (
     <nav className="fixed w-full z-10 ">
      <div className="py-2  mx-auto glass md:py-4 md:px-[4%] w-full px-[4%]">
        <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-between">
          <Link to="/"><img src={logo} alt="" className='w-[135px]' /></Link>
          <ul className=" items-center hidden space-x-8 lg:flex ">
            <li  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/"
                    
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Home
                    </NavLink>
            </li>
              <li  className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    About us
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/all_project"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Project
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/service"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Service
                    </NavLink>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <a href="#tech"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Technology
                    </a>
            </li>
              <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : ""
                    }
                    >
                    Blog
                    </NavLink>
            </li>
           
            <li>
              <Link to="/joinUs"
                className="inline-flex bg-[#418CD2] items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Join us
              </Link>
            </li>
           
             {
              user ? <li className="border border-[#1fb8fa] w-[40px] h-[40px] flex items-center justify-center rounded-full cursor-pointer bg-[#0091ff21]">
              <div className="dropdown dropdown-end cursor-pointer">
                <label tabIndex={0} className="text-[#0093fc] font-bold text-xl capitalize">
                   {user?.displayName.slice(0,1)}
                </label>
                 
                <ul tabIndex={0} className="menu dropdown-content px-2 py-3 shadow rounded-box w-52 mt-4 bg-[#23263d] border border-[#115fd4]">
                  <div align="center">
                      <div className="text-3xl w-[70px] h-[70px] mx-auto rounded-full capitalize border border-[blue] flex items-center justify-center text-white font-bold">{user?.displayName.slice(0,1)}</div>
                      <p className="text-center font-bold text-[#ebeaea] mt-2">{user?.displayName}</p>
                      <small className="text-center text-gray-300">{user?.email}</small>
                  </div>
                  <li className="mt-4">
                      <button onClick={logOut} className="bg-[#26325c] text-white text-center ">Logout</button>
                  </li>
                </ul>
              </div>
            </li> : ""
             }
          </ul>
          <div className="lg:hidden">
             {/* onClick={() => setIsMenuOpen(!isMenuOpen)} */}
             <label  className="bg-[#19192d48] w-[50px] h-[40px] rounded-lg swap swap-rotate">
                <input onClick={() => setIsMenuOpen(!isMenuOpen)}  className='opacity-[0] ' type="checkbox" />
                   <HiBars3BottomRight className='text-4xl' />
                </label>
          </div>
        </div>
      </div>
        {isMenuOpen && (
              <div className="fxt duration-200 w-full h-[100vh] overflow-hidden bg-[#00000084]">
                  <div className={`${isMenuOpen ? 'opacity-[100%]' : 'opacity-[0]'} bg-[#161f2a]  duration-200 h-full w-auto`}>
                        <ul className="p-2">
                          <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-300 h-[40px] flex items-center rounded overflow-hidden px-2 racking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left bottom-0 flex items-center rounded px-3 h-full w-full bg-[#1796f034]" : ""
                                  }
                                  >
                                  Home
                                  </NavLink>
                          </li>
                            <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/about"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  About us
                                  </NavLink>
                          </li>
                            <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/all_project"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Project
                                  </NavLink>
                          </li>
                            <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/service"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Service
                                  </NavLink>
                          </li>
                            <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/technology"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Technology
                                  </NavLink>
                          </li>
                            <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/review"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Review
                                  </NavLink>
                          </li>
                           
                            <li onClick={()=> setIsMenuOpen(!isMenuOpen)} className="font-medium mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
                              <NavLink
                                  to="/blog"
                                  className={({ isActive, isPending }) =>
                                      isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1795F0]" : ""
                                  }
                                  >
                                  Blog
                                  </NavLink>
                          </li>
                           {
                            user ?   <li onClick={()=> setOptOpen(!optOpen)} className={` mt-3 ${optOpen ? 'h-[auto]' : 'h-[42px]'} overflow-hidden`}>
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-3">
                                         <div className="w-[40px] h-[40px] flex items-center justify-center capitalize rounded-lg border border-[#004cff] bg-[#0000ff23]">  
                                          <p className='text-xl text-white'>
                                               {user?.displayName.slice(0,1)}
                                          </p>
                                     </div>
                                     <h5 className="capitalize text-white">{user?.displayName}</h5>
                                    </div>
                                    {
                                      optOpen ?  <FaAngleUp className="text-xl" /> : <FaAngleDown className="text-xl" />
                                    }
                                    
                                   
                                </div>
                                <div className=" mt-3 p-2 rounded-lg">
                                    <button className='bg-[#0d3a73] w-full p-2 rounded-lg text-white' onClick={logOut}>Log out</button>
                                </div>
                            </li> : ""
                           }
                          <li className="mt-6">
                            <Link to="/joinUs"
                              className="inline-flex bg-[#418CD2] items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Join us
                            </Link>
                          </li>
                          
                        </ul>
                  </div>
              </div>
            )}
    </nav>
  );
};

export default Header;