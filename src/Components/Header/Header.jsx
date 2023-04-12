import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false)
    const menuHandler = () => {
        setOpen(!open)
        console.log(open)
    }
    return (
        <div className='bg-[#7e8ffe18]'>
            <div className='flex justify-between  w-3/4 mx-auto py-6 bg-transparent'>
                {/* logo */}
                <div>
                    <Link to='home'><h1 className='text-3xl font-bold  text-[#7E90FE] '>JobHunt</h1></Link>
                </div>
                {/* menu items */}
                <div>
                    <ul className='hidden md:inline-flex '>
                        <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='home' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink></li>
                        <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='statistics' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Statistics</NavLink></li>
                        <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='applied-job' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Applied Jobs</NavLink></li>
                        <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='blog' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Blog</NavLink></li>
                    </ul>
                </div>
                {/* hambarger menu responsive */}

                {/* conditional renderiing */}
                <div className='md:hidden relative'>
                    {
                        open ? <><button onClick={() => menuHandler()} className='inline-flex md:hidden cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                            <div className='absolute top-12 right-0 px-12 py-8 bg-[#7e8ffef3] rounded'>
                                <ul>
                                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='home' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink></li>
                                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='statistics' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Statistics</NavLink></li>
                                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='applied-job' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Applied Jobs</NavLink></li>
                                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='blog' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Blog</NavLink></li>
                                </ul>
                                {/* <button className='inline-flex  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>Start Applying</button> */}
                            </div>
                        </button></> : <><button onClick={() => menuHandler()} className='inline-flex md:hidden cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg></button></>
                    }
                </div>
                {/* button */}
                <div>
                    <button className='hidden md:inline-flex  bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;