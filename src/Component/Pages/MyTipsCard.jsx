import React from "react";
import { Link, useNavigate } from "react-router";

const MyTipsCard = ({ tip }) => {
  const navigate = useNavigate();

  return (
    <tr>
      <th></th>
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
      <td>{tip.availability}</td>
      <td>{tip.category}</td>
      <th>
        <Link
          to={`/update-tip-details/${tip._id}`}
          className="mr-4 btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]"
        >
          Edit
        </Link>

        <button
          onClick={() => handleTipDetails(tip._id)}
          className="btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyTipsCard;
