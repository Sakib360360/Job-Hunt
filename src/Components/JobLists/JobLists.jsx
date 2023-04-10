import React from 'react';

const JobLists = (props) => {
    const {imageUrl,title,available} = props.data
    return (
        <div className='bg-[#7e8ffe18] rounded'>
            <img className='p-6' src={imageUrl} alt="" />
            <h1 className='ml-4 font-semibold'>{title}</h1>
            <p className='ml-4 text-xs pb-6 mt-2'> {available}+ jobs available</p>
        </div>
    );
};

export default JobLists;