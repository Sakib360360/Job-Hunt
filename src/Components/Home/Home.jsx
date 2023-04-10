import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='bg-[#7e8ffe18]'>
                <div className='w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between'>
                    {/* left side */}
                    <div className='w-full md:w-3/6 space-y-4'>
                        <h1 className='text-5xl font-bold' >Pursue your dream job with just <span className='text-[#7E90FE]'>Clicking</span> </h1>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>Get Started</button>
                    </div>
                    {/* right side */}
                    <div className='w-full md:w-3/6'>
                        <img src="./../../../src/new assests/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>
            </div>

            {/* job category lists */}
            <section className='mt-24'>
                <div className='space-y-4'>
                    <h1 className='text-3xl text-center font-semibold'>Job Category List</h1>
                    <p className='text-center mx-auto w-3/6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
            </section>
        </div>
    );
};

export default Home;