import React, { useEffect, useState } from 'react';
import ExploreGardenersCard from './ExploreGardenersCard';

const ExploreGardeners = () => {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        fetch('https://gardening-community-server-kappa.vercel.app/profile')
        .then(res => res.json())
        .then(data => setProfiles(data))
    }, []);

    return (
        <div>
              <h2 className='text-3xl font-bold text-center mt-16'>Gardener's Profile</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-11/12 mx-auto gap-6 mt-8 mb-16'>
          
           {
            profiles.map(profile => <ExploreGardenersCard profile={profile}></ExploreGardenersCard>)
           }
        </div>
        </div>
    );
};

export default ExploreGardeners;