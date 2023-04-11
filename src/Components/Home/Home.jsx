import React, { useEffect, useState } from 'react';
import JobLists from '../JobLists/JobLists';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    const jobApply = () =>{
        console.log('applied')
    }

    const detailsHandler = (id)=>{
        // console.log(id,'clicked handle')
    }
    // const featuredJobs = useLoaderData()
    const [jobs,setJobs] = useState([])
    const [featuredJobs,setFeaturedJobs] = useState([])
    const [seeAll,setSeeAll] = useState(false)
    
    useEffect(()=>{
        fetch('jobCategoryLists.json')
        .then(res=>res.json())
        .then(data=> setJobs(data))
    },[])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> setFeaturedJobs(data))
    },[])

    // seeAll handler
    const seeAllHandler = () =>{
        setSeeAll(!seeAll)
    }
    // details handler
    
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
                    <div className='w-full md:w-3/6 ml-12'>
                    <img src="https://www.pngmart.com/files/15/Smiling-Business-Man-Standing-PNG-Clipart.png" alt="P3-OLGJ1-copy-1" border="0" />
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
                    jobs?.map(data => <JobLists data={data} key={data.id}></JobLists>)
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
                        seeAll ? featuredJobs?.map(data=><FeaturedJobs detailsHandler={detailsHandler} data={data} key={data.id}></FeaturedJobs>) : featuredJobs?.slice(0,4).map(data=><FeaturedJobs detailsHandler={detailsHandler} data={data} key={data.id}></FeaturedJobs>)
                    }
                </div>
                {/* see all */}
                <div className='flex flex-col items-center'>
                    {
                        seeAll ? <button onClick={seeAllHandler} className=' mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>See Less Jobs</button> : <button onClick={seeAllHandler} className=' mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>See All Jobs</button>
                    }
                
                    
                {/* <button onClick={()=>seeAll()} className=' mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>See All Jobs</button> */}
                </div>
                
            </section>
        </div>
    );
};

export default Home;
