import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#7e8ffe18]'>
            <div className='flex justify-between w-3/4 mx-auto py-6 bg-transparent'>
            {/* logo */}
            <div>
                <Link to='home'><h1 className='text-3xl font-semibold animate-bounce'>JobHunt</h1></Link>
            </div>
            {/* menu items */}
            <div>
                <ul className='flex '>
                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='home'>Home</NavLink></li>
                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='statistics'>Statistics</NavLink></li>
                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='jobs'>Applied Jobs</NavLink></li>
                    <li className='px-2 font-semibold text-gray-600 hover:text-[#7E90FE]'><NavLink to='blogs'>Blog</NavLink></li>
                </ul>
            </div>
            {/* button */}
            <div>
                <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>Start Applying</button>
            </div>
        </div>
        </div>
    );
};

export default Header;