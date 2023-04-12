import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getShoppingCart } from '../fakeDb';

const AppliedJobs = () => {
    const storedData = JSON.parse(localStorage.getItem('shopping-cart'))
    console.log(storedData)
    // const filteredData = getData.filter(f => f.id === )
    return (
        <div>
            <div className='w-full  '>
          <div className='bg-[#7e8ffe18] relative'>
                <h1 className='text-center text-3xl font-bold py-28'>Applied Jobs</h1>
                <img className='absolute bottom-0 left-0' src="https://i.ibb.co/28zqbPc/Vector.png" alt="Vector" border="0" />
                <img className='absolute -top-24 right-0' src="https://i.ibb.co/jV022Jb/Vector-1.png" alt="Vector-1" border="0" />
            </div>
          </div>
            <div className='mx-auto w-3/4 py-12'>
                <div className=''>
                    {
                        storedData?.map(d => <div className='flex flex-col md:flex-row p-8 my-8 justify-between space-y-8 border-gray-500 rounded border'>
                            {/* left */}
                            <div className='flex flex-col md:flex-row'>
                                <img className='bg-gray-400 w-[100px] h-[70px] mr-8 my-auto' src={d.imageUrl} alt="" />
                                <div>
                                    <h1 className='text-1xl font-semibold'>{d.title}</h1>
                                    <p className='text-sm text-gray-600 my-1'>{d.companyName}</p>
                                    <div className='flex my-2'>
                                        <h1 className='border border-indigo-500 px-4 py-1 rounded mr-4 text-[#7E90FE] font-semibold'>{d.jobType}</h1>
                                        <h1 className='border border-indigo-500 px-4 py-1 rounded text-[#7E90FE] font-semibold'>{d.type}</h1>
                                    </div>
                                    <div className='flex justify-between'>

                                        <p className='text-sm text-gray-500 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                            {d.location}</p>

                                        <p className='text-sm text-gray-500 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                            Salary:{d.salary}</p>
                                    </div>
                                </div>
                            </div>
                            {/* right side */}
                            <div>
                                <Link to={`../job-details/${d.id}`}><button className='mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>View Details</button></Link>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;