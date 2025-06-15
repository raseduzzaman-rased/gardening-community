import React, { useEffect, useState } from 'react';
import TipsCard from './TipsCard';

const GardeningTips = () => {
     const [tips, setTips] = useState([]);
    

  useEffect(() => {
    fetch("http://localhost:3000/gardening-tips")
      .then(res => res.json())
      .then(data => {
        setTips(data);
      });
  }, []);

    return (
       <div className='max-w-11/12 mx-auto mt-52'>
          <h2 className="text-4xl text-center mt-20 md:mt-52 lg:mt-52 mb-10 font-bold font-[nato-serif]">
        Top Trending Tips
      </h2>
        
             <div className=' gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             
            {
                tips.map(singleTips => <TipsCard key={singleTips._id} singleTips={singleTips}></TipsCard>)
           
           }
             
        </div>
        
       </div>
    );
};

export default GardeningTips;