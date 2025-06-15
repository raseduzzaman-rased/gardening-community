import React from "react";
import gallary1 from "..//..//assets/gallary1.jpg";
import gallary2 from "..//..//assets/gallary2.jpg";
import gallary3 from "..//..//assets/gallary3.jpg";
import gallary4 from "..//..//assets/gallary4.jpg";
import gallary5 from "..//..//assets/gallary5.jpg";
import gallary6 from "..//..//assets/gallary6.jpg";
import gallary7 from "..//..//assets/gallary7.jpg";
import gallary8 from "..//..//assets/gallary8.jpg";
import gallary9 from "..//..//assets/gallary9.jpg";
import gallary10 from "..//..//assets/gallary10.jpg";

const Gallary = () => {
  return (
    <div className="max-w-11/12 mx-auto">
      <h2 className="text-4xl text-center mt-20 md:mt-52 lg:mt-52 mb-3 font-bold font-[nato-serif]">
        Our Gallary
      </h2>
      <p className="text-center  lg:w-4/6 mx-auto mb-4">
        Discover the beauty and creativity of our gardening community! From lush
        backyard jungles to cozy balcony pots, explore how plant lovers across
        the country grow, share, and inspire. See real moments of composting,
        hydroponics, flower beds, and local gardening events — all captured by
        our members.
        <br />
        <br />
        <span className="font-bold">
          {" "}
          Join the journey. Be inspired. Grow together.
        </span>
      </p>

      <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <img
              src={gallary10}
              alt=""
              className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 
             md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square object-cover 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
            />
            <img
              src={gallary1}
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary2}
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary3}
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary4}
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary8}
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary5}
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary6}
            />
            <img
              alt=""
              className="object-cover w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square 
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
              src={gallary7}
            />
            <img
              src={gallary9}
              alt=""
              className="object-cover w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square
             transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallary;
