import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router';
import GardenerProfile from './GardenerProfile';
import Gallary from './Gallary';
import VisionMission from './VisionMission';
import GardeningTips from './GardeningTips';


const Home = () => {
    const  gardeners  = useLoaderData(); 
    console.log(gardeners);

    return (
        <div>
            <Banner></Banner>
           <div>
            <h2 className='text-4xl font-bold font-[nato-serif] text-center mt-52'>Featured Gardeners</h2>
            <div className='max-w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
             {
               gardeners.map(gardener => <GardenerProfile key={gardener._id} gardener={gardener}></GardenerProfile>)
            }
           </div>
           </div>
            <GardeningTips></GardeningTips>
            <VisionMission></VisionMission>
            <Gallary></Gallary>

        </div>
    );
};

export default Home;