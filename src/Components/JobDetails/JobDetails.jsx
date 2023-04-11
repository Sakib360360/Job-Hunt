import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {/* bannar */}
            <div className='bg-[#7e8ffe18] relative'>
                <h1 className='text-center text-3xl font-bold py-28'>Job Details</h1>
                <img className='absolute bottom-0 left-0' src="https://i.ibb.co/28zqbPc/Vector.png" alt="Vector" border="0" />
                <img className='absolute -top-24 right-0' src="https://i.ibb.co/jV022Jb/Vector-1.png" alt="Vector-1" border="0" />
            </div>

            {/* details */}
            <div className='flex w-3/4 mx-auto my-24'>
                <div className='w-3/5 pr-8'>
                    <h1><span className='font-semibold'>Job Description:</span> {data.jobDescription}</h1>
                    {/* <h1><span className='font-semibold'>Job Description:</span>Job Responsibility:{}</h1> */}
                    <h1><span className='font-semibold'>Edicational Requirements: <br /></span>{data.educationalRequirements}</h1>
                    <h1><span className='font-semibold'>Experiences: </span><br />{data.experiences}</h1>
                </div>
                <div>
                    <div className='bg-[#7e8ffe18] p-8 space-y-2'>
                        <h1 className='font-bold'>Job Details</h1>
                        <hr />
                        <h1>Salary:{data.salary}</h1>
                        <h1>Job Title:{data.title}</h1>
                        <h1 className='font-bold'>Contact Information</h1>
                        <hr />
                        <h1>Phone:{data.phone}</h1>
                        <h1>Email:{data.email}</h1>
                        <h1>Address:{data.address}</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to='/applied-job'><button className='mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-8 py-2 text-white rounded'>Apply to the job</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default JobDetails;