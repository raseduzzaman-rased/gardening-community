import React from "react";

const ExploreGardenersCard = ({ profile }) => {
  console.log(profile);
  return (
    <div className="">
      <div className="card bg-base-100 w-full  shadow-sm">
        <figure>
          <img
            className="h-56 w-full object-cover"
            src={profile.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {profile.name}
            <div className="badge badge-secondary bg-[#73B21A] hover:bg-[#008236]">
              {profile.status}
            </div>
          </h2>
          <p>
            {" "}
            <span className="font-bold">Experience:</span> {profile.experiences}
          </p>
          <p>{profile.otherInfo}</p>
          <div className="card-actions justify-center mt-6">
            <div className="badge badge-outline  hover:bg-green-700 hover:text-white">
              Shared Tips: {profile.totalSharedTips}
            </div>
            <div className="badge badge-outline  hover:bg-green-700 hover:text-white">
              Age: {profile.age}
            </div>
            <div className="badge badge-outline  hover:bg-green-700 hover:text-white">
              Gender: {profile.gender}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGardenersCard;
