import React, { useEffect, useState } from 'react';
import ExploreGardenersCard from './ExploreGardenersCard';

const ExploreGardeners = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/profile')
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-11/12 mx-auto gap-6 my-20'>
           {
            profiles.map(profile => <ExploreGardenersCard profile={profile}></ExploreGardenersCard>)
           }
        </div>
    );
};

export default ExploreGardeners;