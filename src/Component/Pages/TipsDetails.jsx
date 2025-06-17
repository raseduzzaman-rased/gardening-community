import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TipDetails = () => {
  const { id } = useParams();
  const [tip, setTip] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/submit-tip/${id}`)
      .then((res) => res.json())
      .then((data) => setTip(data));
  }, [id]);

  if (!tip) {
    return <p className="text-center mt-10"><span className="loading loading-dots loading-xl"></span></p>;
  }

  return (
    <div className="max-w-xl mx-auto my-20 bg-white p-6 rounded shadow mt-10">
      <h2 className="text-2xl font-bold mb-4">{tip.title}</h2>
      <img src={tip.photo} alt={tip.title} className="mb-4 w-full rounded" />
      <p>
        <strong>Plant Type:</strong> {tip.plantType}
      </p>
      <p>
        <strong>Category:</strong> {tip.category}
      </p>
      <p>
        <strong>Difficulty:</strong> {tip.difficulty}
      </p>
      <p>
        <strong>Availability:</strong> {tip.availability}
      </p>
      <p>
        <strong>Description:</strong> {tip.description}
      </p>
      <p>
        <strong>Posted By:</strong> {tip.name} ({tip.email})
      </p>
    </div>
  );
};

export default TipDetails;
