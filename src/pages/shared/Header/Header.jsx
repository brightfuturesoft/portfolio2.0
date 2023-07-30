import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Assctes/logo.png';
import { AuthContext } from '../../../context/UseContext/UseContext';
import { HiBars3BottomLeft, HiBars3BottomRight, HiMinus } from 'react-icons/hi2';
import { RiMenu3Fill } from 'react-icons/ri';
import { GiCancel } from 'react-icons/gi';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userLogOut } = useContext(AuthContext)
  const [optOpen, setOptOpen] = useState(false);
  const logOut = () => {
    userLogOut()
      .then((result) => {
        // Sign-out successful.
        const user = result.user;
      }).catch((error) => {
        // An error happened.
      });
  }

  return (
    <nav className="fixed w-full z-50 top-0 left-0 right-0">
      <div className="py-2  mx-auto glass md:py-4 md:px-[4%] w-full px-[4%]">
        <div className="relative px-4  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 flex items-center justify-between">
          <Link to="/"><img loading="eager" src={logo} alt="" className='w-[135px]' /></Link>
          <ul className=" items-center hidden space-x-8 lg:flex ">
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
              <NavLink
                to="/"

                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
                }
              >
                About us
              </NavLink>
            </li>
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
              <NavLink
                to="/all_project"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
                }
              >
                Project
              </NavLink>
            </li>
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
              <NavLink
                to="/service"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
                }
              >
                Service
              </NavLink>
            </li>
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative">
              <NavLink
                to="/careers"
                className={({ isActive, isPending }) =>
                  isPending ? "hover:text-[#418CD2]" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
                }
              >
                Careers
              </NavLink>
            </li>

            {/* <li>
              <Link to="/joinUs"
                className="inline-flex bg-[#418CD2] items-center justify-center py-2 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Join us
              </Link>
            </li> */}
            <li>
              <a
                className="inline-flex items-center justify-center group relative  overflow-hidden border border-[#418CD2] px-8 py-2 focus:outline-none focus:ring"
                target='_blank'
                href="https://calendly.com/thebrightfuture/appointment"
              >
                <span
                  className="absolute inset-y-0 left-0 w-[2px] bg-[#418CD2] transition-all group-hover:w-full group-active:bg-[#418CD2]"
                ></span>

                <span
                  className="relative text-sm font-medium text-white transition-colors group-hover:text-white"
                >
                  Appointment
                </span>
              </a>
            </li>

            {
              user && user ? <li className="">
                <div className="dropdown dropdown-end cursor-pointer">
                  <label tabIndex={0} className="text-[#0093fc] font-bold text-xl capitalize">
                    {user?.displayName}
                  </label>

                  <ul tabIndex={0} className="menu dropdown-content px-2 py-3 shadow rounded-box w-52 mt-4 bg-[#23263d] border border-[#115fd4]">
                    <div align="center">
                      <p className="text-center text-[21px] font-bold text-[#ebeaea] mt-2">{user?.displayName}</p>
                      <small className="text-center text-gray-300">{user?.email}</small>
                    </div>
                    <li className="mt-4">
                      <button onClick={logOut} align="center" className="bg-[#26325c] text-white text-center flex justify-center">Logout</button>
                    </li>
                  </ul>
                </div>
              </li> : ""
            }
          </ul>
          <div className="lg:hidden">
            {/* onClick={() => setIsMenuOpen(!isMenuOpen)} */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
              {!isMenuOpen ? <RiMenu3Fill className='text-4xl border-[red]' />
                : <GiCancel className='text-4xl border-[red]' />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 's-open' : 's-close'} bg-[#14143f] text-start md:hidden block`}>
        <ul className="p-2 text-center">
          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center  mt-300 h-[40px] flex items-center rounded overflow-hidden px-2 racking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "absolute top-0 left bottom-0 flex items-center rounded px-3 h-full justify-center w-full bg-[#1796f034]" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex justify-center items-center px-3 h-full w-full bg-[#1796f034]" : ""
              }
            >
              About us
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/all_project"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex justify-center items-center px-3 h-full w-full bg-[#1796f034]" : ""
              }
            >
              Project
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/service"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex justify-center items-center px-3 h-full w-full bg-[#1796f034]" : ""
              }
            >
              Service
            </NavLink>
          </li>

          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/review"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "absolute top-0 left-0 bottom-0 flex justify-center items-center px-3 h-full w-full bg-[#1796f034]" : ""
              }
            >
              Review
            </NavLink>
          </li>


          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "" : isActive ? "absolute justify-center top-0 left-0 bottom-0 flex items-center px-3 h-full w-full bg-[#1796f034]" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(!isMenuOpen)} className="font-medium justify-center mt-3 h-[40px] flex items-center rounded overflow-hidden px-2 tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 relative ">
            <NavLink
              to="/careers"
              className={({ isActive, isPending }) =>
                isPending ? "hover:text-[#418CD2]" : isActive ? "text-[#00d5ff] after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[4px] after:w-[20px] after:mx-auto after:rounded-full  after:bg-[#00bfff]" : "hover:text-[#418CD2]"
              }
            >
              Careers
            </NavLink>
          </li>

          {
            user ? <li onClick={() => setOptOpen(!optOpen)} className={` mt-3 ${optOpen ? 'h-[auto]' : 'h-[42px]'} hidden overflow-hidden`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="">
                    <p className='text-xl text-blue-500'>
                      {user?.displayName}
                    </p>
                  </div>
                </div>
                {
                  optOpen ? <FaAngleUp className="text-xl" /> : <FaAngleDown className="text-xl" />
                }


              </div>
              <div className=" mt-3 p-2 rounded-lg">
                <button className='bg-[#0d3a73] w-full p-2 rounded-lg text-white' onClick={logOut}>Log out</button>
              </div>
            </li> : ""
          }

          <li className='mt-4'>
            <a
              className="inline-flex items-center justify-center group relative  overflow-hidden border border-[#418CD2] px-8 py-2 focus:outline-none focus:ring"
              target='_blank'
              href="https://calendly.com/thebrightfuture/appointment"
            >
              <span
                className="absolute inset-y-0 left-0 w-[2px] bg-[#418CD2] transition-all group-hover:w-full group-active:bg-[#418CD2]"
              ></span>

              <span
                className="relative text-sm font-medium text-white transition-colors group-hover:text-white"
              >
                Appointment
              </span>
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Header;