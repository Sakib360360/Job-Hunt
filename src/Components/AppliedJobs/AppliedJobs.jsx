import React from 'react';
import { useLocation } from 'react-router-dom';
import { getShoppingCart } from '../fakeDb';

const AppliedJobs = () => {
    
    const location = useLocation()
    const data = location.state?.data;
    const storedData = getShoppingCart()
    const storedDataArray = Object.keys(storedData)
    console.log(storedDataArray)
    console.log(data)
    return (
        <div className='mx-auto w-3/4 py-12'>
            jb applied{data.jobDescription}
        </div>
    );
};

export default AppliedJobs;