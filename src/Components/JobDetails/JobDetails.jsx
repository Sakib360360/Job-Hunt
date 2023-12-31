import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { addToDb } from '../fakeDb';

const JobDetails = () => {

    const data = useLoaderData()
    console.log(data)
    const localStorageHandler = () => {
        addToDb(data)
    }
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
                <div className='w-3/5 pr-8 space-y-4'>
                    <h1><span className='font-semibold'>Job Description:</span> {data.jobDescription}</h1>
                    <h1><span className='font-semibold'>Job Responsibility:
                    <ul className='font-normal list-disc ml-8'>
                    {
                        data.jobResponsibilities.map(d =><li>{d}</li>)
                    }
                    </ul>
                    </span>Job Responsibility:{}</h1>
                    <h1><span className='font-semibold'>Edicational Requirements: <br /></span>{data.educationalRequirements}</h1>
                    <h1><span className='font-semibold'>Experiences: </span><br />{data.experiences}</h1>
                </div>
                <div>
                    <div className='bg-[#7e8ffe18] p-8 space-y-2'>
                        <h1 className='font-bold'>Job Details</h1>
                        <hr />
                        <h1 className='flex'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </span> Salary:{data.salary}</h1>
                        <h1 className='flex'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                        </svg>
                        </span> Job Title:{data.title}</h1>
                        <h1 className='font-bold'>Contact Information</h1>
                        <hr />
                        <h1 className='flex'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        </span> Phone:{data.phone}</h1>
                        <h1 className='flex'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        </span> Email:{data.email}</h1>
                        <h1 className='flex'><span className='mr-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        </span> Address:{data.address}</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to='/applied-job' state={{ data: data }}><button onClick={localStorageHandler} className='mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-8 py-2 text-white rounded'>Apply to the job</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;