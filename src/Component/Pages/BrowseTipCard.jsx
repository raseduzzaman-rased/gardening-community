import React from "react";
import { useNavigate } from "react-router-dom";

const BrowseTipCard = ({ tip }) => {
  const navigate = useNavigate();
  const handleTipDetails = (id) => {
    navigate(`/tips-details/${id}`);
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={tip.photo} alt="User" />
            </div>
          </div>
          <div>
            <div className="font-bold">{tip.name}</div>
            <div className="text-sm opacity-50">{tip.email}</div>
          </div>
        </div>
      </td>
      <td>{tip.plantType}</td>
      <td>{tip.category}</td>
      <th>
        <button
          onClick={() => handleTipDetails(tip._id)} // সরাসরি id পাঠাও
          className="btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]"
        >
          details
        </button>
      </th>
    </tr>
  );
};

export default BrowseTipCard;
