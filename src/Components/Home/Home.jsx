import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobLists from '../JobLists/JobLists';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const [jobs,setJobs] = useState([])
    const [featuredJobs,setFeaturedJobs] = useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-Sakib360360/main/public/jobCategoryLists.json?token=GHSAT0AAAAAAB4VAMDO5CCOOSA7UGY5RHYGZBT5FAQ')
        .then(res=>res.json())
        .then(data=> setJobs(data))
    },[])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-Sakib360360/main/public/data.json?token=GHSAT0AAAAAAB4VAMDOYOTKOIZF6BUKRRXEZBT5KIQ')
        .then(res=>res.json())
        .then(data=> setFeaturedJobs(data))
    },[])
    console.log(featuredJobs)
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
                <div className='space-y-4 mb-8'>
                    <h1 className='text-3xl text-center font-semibold'>Job Category List</h1>
                    <p className='text-center mx-auto w-3/6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                {/* job lists */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-20 w-3/4 mx-auto'>
                {
                    jobs.map(data => <JobLists data={data} key={data.id}></JobLists>)
                }
                </div>
            </section>

            {/* Featured Jobs */}
            <section className='mt-24'>
            <div className='space-y-4 mb-8'>
                    <h1 className='text-3xl text-center font-semibold'>Featured Jobs</h1>
                    <p className='text-center mx-auto w-3/6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                {/* data */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4 mx-auto mt-24'>
                    {
                        featuredJobs.map(data=><FeaturedJobs data={data} key={data.id}></FeaturedJobs>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;