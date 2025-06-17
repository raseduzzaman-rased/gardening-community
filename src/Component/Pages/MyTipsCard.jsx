import React from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyTipsCard = ({ tip, tips, setTips }) => {
  const navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-tips/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("after delete", data);
            if (data.deletedCount) {
              const remainingUsers = tips.filter(
                (singleTip) => singleTip._id !== id
              );
              setTips(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
          onClick={(e) => handleDelete(e, tip._id)}
          className="btn btn-ghost btn-xs bg-[#73B21A] text-white hover:bg-[#008236]"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyTipsCard;
