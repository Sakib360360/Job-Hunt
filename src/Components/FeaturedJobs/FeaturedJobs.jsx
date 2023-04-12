import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = (props) => {

    const { imageUrl, title, companyName, id, jobType, type, location, salary } = props.data
    const { detailsHandler } = props
    return (
        <div>
            <div className='p-8 border border-gray-500 rounded'>
                <img className='py-4' src={imageUrl} alt="" />
                <h1 className='text-1xl font-semibold'>{title}</h1>
                <p className='text-sm text-gray-600 my-1'>{companyName}</p>
                <div className='flex my-2'>
                    <h1 className='border border-indigo-500 px-4 py-1 rounded mr-4 text-[#7E90FE] font-semibold'>{jobType}</h1>
                    <h1 className='border border-indigo-500 px-4 py-1 rounded text-[#7E90FE] font-semibold'>{type}</h1>
                </div>
                <div className=''>
                    <div className='flex justify-between'>

                        <p className='text-sm text-gray-500 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                            {location}</p>

                        <p className='text-sm text-gray-500 flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            Salary:{salary}</p>
                    </div>
                </div>
                <Link to={`../job-details/${id}`}><button onClick={() => detailsHandler(id)} className='mt-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJobs;