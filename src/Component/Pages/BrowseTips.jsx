import React, { useEffect, useState } from "react";
import BrowseTipCard from "./BrowseTipCard";

const BrowseTips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetch("https://gardening-community-server-kappa.vercel.app/submit-tip")
      .then((res) => res.json())
      .then((data) => {
        const publicTips = data.filter((tip) => tip.availability === "Public");
        setTips(publicTips);
      });
  }, []);

  return (
    <div className="overflow-x-auto my-10 max-w-6xl mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name, Email</th>
            <th>Plant Type</th>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tips.map((tip, index) => (
            <BrowseTipCard key={index} tip={tip} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrowseTips;
