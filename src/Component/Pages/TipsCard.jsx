import React from "react";

const TipsCard = ({ singleTips }) => {
  const { title, description, author, image, date } = singleTips;

  return (
    <div className="h-full">
      <div className="bg-base-100 rounded-xl shadow-sm h-full flex flex-col">
        <figure>
          <img
            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75 rounded-t-xl w-full h-60 object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title">{title}</h2>
          <p className="text-justify text-sm flex-grow">{description}</p>
          <div className="card-actions mt-6 justify-between items-center">
            <div className="badge badge-outline hover:bg-green-700 hover:text-white">
              Author : {author}
            </div>
            <div className="badge badge-outline hover:bg-green-700 hover:text-white">
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsCard;
