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
            jb applied{data.jobDescription}
            <div className='space-y-8'>
            {
                storedData.map(d =><p>{d.jobDescription}</p>)
            }
            </div>
        </div>
    );
};

export default AppliedJobs;