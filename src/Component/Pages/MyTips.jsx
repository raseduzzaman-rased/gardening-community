import React, { useEffect, useState } from "react";
import MyTipsCard from "./MyTipsCard";


const MyTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/submit-tip")
      .then((res) => res.json())
      .then((data) => {
        setTips(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto my-10 max-w-11/12 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name, Email</th>
            <th>Plant Type</th>
            <th>Availability</th>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
 
         <tbody>
          {
          tips.map((tip, index) => (
            <MyTipsCard key={index} tips={tips} setTips={setTips} tip={tip} index={index} />
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default MyTips;
