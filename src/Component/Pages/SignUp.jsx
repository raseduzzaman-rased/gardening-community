import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router";

const provider = new GoogleAuthProvider();

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullname = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const photo = form.photo.value.trim();
    const password = form.password.value;
    const repassword = form.repassword.value;

    // Blank field check
    if (!fullname || !email || !photo || !phone || !password || !repassword) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Password match check
    if (password !== repassword) {
      toast.error("Passwords do not match!");
      return;
    }

    // Password strength check
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 8 characters and include uppercase, lowercase, and a number."
      );
      return;
    }

    // Clear previous error
    setErrorMessage("");

    // Create user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);

        // update user profile
        const profile = {
          displayName: fullname,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("User profile updated");
          })
          .catch((error) => {
            console.log(error);
          });

        toast.success(" Account created successfully!");
        navigate("/login");
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
        toast.error(`${error.message}`);
      });
  };

  // Signup with google popup

  const handleGoogleSignup = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Signed in Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(" Google signup failed: " + error.message);
      });
  };

  return (
    <div className="w-full max-w-md mx-auto my-20 p-4 rounded-md border border-[#73B21A] shadow-xl sm:p-8 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Register An Account
      </h2>
      <p className="text-sm text-center dark:text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 underline">
          {" "}
          Sign in here{" "}
        </Link>
      </p>

      <div className="my-6 space-y-4">
        <button
          onClick={handleGoogleSignup}
          aria-label="Login with Google"
          type="button"
          className="cursor-pointer flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>

      <form onSubmit={handleSignUp} className="space-y-8 mt-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="name"
              placeholder="John Andre"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm">
              Phone
            </label>
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="0123456789"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="photo" className="block text-sm">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="http://photourl.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="repassword" className="text-sm">
              Re-Password
            </label>
            <input
              type="password"
              name="repassword"
              id="repassword"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#73B21A] hover:bg-[#008236] hover:text-white w-full px-8 py-3 font-semibold rounded-md"
        >
          Sign up
        </button>
      </form>

      {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}

      <ToastContainer position="top-center" />
    </div>
  );
};

export default SignUp;
