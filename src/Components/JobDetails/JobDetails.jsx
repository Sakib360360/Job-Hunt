import React from 'react';
import { useLoaderData } from 'react-router-dom';

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
                    <h1>Job Description:{data.jobDescription}</h1>
                    <h1>Job Responsibility:{}</h1>
                    <h1>Edicational Requirements: <br />{data.educationalRequirements}</h1>
                    <h1>Experiences: <br />{data.experiences}</h1>
                </div>
                <div className='bg-[#7e8ffe18] p-8 space-y-2'>
                    <h1>Job Details</h1>
                    <hr />
                    <h1>Salary:{data.salary}</h1>
                    <h1>Job Title:{data.title}</h1>
                    <h1>Contact Information</h1>
                    <hr />
                    <h1>Phone:{data.phone}</h1>
                    <h1>Email:{data.email}</h1>
                    <h1>Address:{data.address}</h1>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;