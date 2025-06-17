import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "..//../assets/Gardening logo.png";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Typewriting from "../Pages/Typewriting";

const Navbar = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // signout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login");
        toast.success("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error("Something went wrong during logout");
      });
  };

  const items = (
    <>
      <li>
        <NavLink
          to="/home"
          className="hover:bg-[#73b21a] rounded hover:text-white"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/explore-gardeners"
          className="hover:bg-[#73b21a] rounded hover:text-white"
        >
          Explore Gardeners
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browse-tips"
          className="hover:bg-[#73b21a] rounded hover:text-white"
        >
          Browse Tips
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/share-garden-tip"
              className="hover:bg-[#73b21a] rounded hover:text-white"
            >
              Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-tips"
              className="hover:bg-[#73b21a] rounded hover:text-white"
            >
              My Tips
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-sm px-12 bg-[#f2f8ec]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-[nato-serif] font-bold text-lg menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {items}
          </ul>
        </div>
        <a href="/">
          <div className="flex items-center gap-2 text-xl font-bold font-[nato-serif]">
            <img className="w-12" src={logo} alt="" />
            <div className="">
              <p className="hidden md:block lg:block">
                {/* Gardening <span className="text-[#73B21A]">Community</span> */}
                <Typewriting></Typewriting>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 font-[nato-serif] font-bold text-lg">
          {items}
        </ul>
      </div>
      <div className="navbar-end gap-2 font-[nato-serif] font-bold text-lg">
        {user ? (
          <>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-10 mr-2 rounded-full ring-2 ring-offset-2">
                <img
                  title={user?.displayName || ""}
                  className=""
                  src={user.photoURL}
                />
              </div>
            </div>
            <Link
              onClick={handleLogout}
              to="/logout"
              className="btn bg-[#73B21A] text-white hover:bg-[#f2f8ec] hover:text-black"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-[#73B21A] text-white hover:bg-[#f2f8ec] hover:text-black"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="btn bg-[#73B21A] text-white hover:bg-[#f2f8ec] hover:text-black"
            >
              SignUp
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
