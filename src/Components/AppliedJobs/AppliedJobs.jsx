import React from 'react';
import { useLocation } from 'react-router-dom';

const AppliedJobs = () => {
    const location = useLocation()
    const data = location.state?.data;
    
    console.log(data)
    return (
        <div>
            jb applied{data.jobDescription}
        </div>
    );
};

export default AppliedJobs;