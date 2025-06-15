import React from 'react';
import visionMision from '..//../assets/visionmission.png'
import { Link } from 'react-router';


const VisionMission = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
          <h2 className="text-4xl text-center mt-20 md:mt-52 lg:mt-52 mb-6 font-bold font-[nato-serif]">
        Our Vision & Mission
      </h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-around">
               <div className='md:w-1/2 lg:w-1/2'>
                <h2 className='text-2xl font-bold font-[nato-serif] mt-8 md:mt-0'>🌱 Our Vision</h2>
            <p className='text-justify mt-3'>Our vision is to cultivate a connected and empowered community of gardening lovers who believe in the beauty of growing. We imagine a world where everyone—regardless of space, skill, or background—can enjoy the healing power of plants, build sustainable gardens, and contribute to a greener planet.</p>
            <br />
            <br />
            <h2 className='text-2xl font-bold font-[nato-serif]'> 🎯 Our Mission</h2>
            <p className='text-justify mt-3'>Our mission is to provide an inclusive digital platform where gardeners can share ideas, ask plant-related questions, find local gardening experts, and participate in inspiring events. Through education, collaboration, and community engagement, we aim to make gardening accessible, joyful, and impactful for all.</p>
            </div>
            <img className='h-[400px] w-[400px] -mt-8' src={visionMision} alt="" />
        </div>
           <Link to='/vision-mission-details'> <button className='text-white font-bold btn bg-[#73B21A]  lg:ml-10 mt-6 hover:bg-[#008236]'>Learn More</button></Link>
        </div>
    );
};

export default VisionMission;