import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getShoppingCart } from '../fakeDb';

const AppliedJobs = () => {
    const [getData,setGetData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setGetData(data))
    },[])
    const location = useLocation()
    const data = location.state?.data;
    const storedData = JSON.parse(localStorage.getItem('shopping-cart'))
    console.log(storedData)
    console.log(getData)
    // const filteredData = getData.filter(f => f.id === )
    return (
        <div className='mx-auto w-3/4 py-12'>
            <div className=''>
            {
                storedData.map(d =><div className='space-y-8 border-gray-500 rounded border'>
                    {/* left */}
                    <div>
                        <img src="" alt="" />
                    </div>
                    {d.jobDescription}
                    
                    </div>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;