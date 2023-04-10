import React from 'react';

const FeaturedJobs = (props) => {
    const {imageUrl,title,companyName,jobType,type,location,salary} = props.data
    return (
        <div>
            <div className='border border-gray-500 rounded'>
                <img src={imageUrl} alt="" />
                <h1 className='text-1xl font-semibold'>{title}</h1>
                <p>{companyName}</p>
                <div>
                    <h1>{jobType}</h1>
                    <h1>{type}</h1>
                </div>
                <div>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-3 py-2 text-white rounded'>View Details</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;