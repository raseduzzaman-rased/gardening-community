import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";

const ShareGardenTip = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: user?.displayName,
      email: user?.email,
      title: form.title.value,
      plantType: form.plantType.value,
      difficulty: form.difficulty.value,
      photo: form.photo.value,
      category: form.category.value,
      availability: form.availability.value,
      description: form.description.value,
    };

    console.log(formData);

    // sent data to server
    fetch("http://localhost:3000/submit-tip", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        if (data.insertedId) {
            toast.success("Data Added Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card my-20 bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h2 className="text-xl font-bold text-center my-4">
          Please Submit the Form
        </h2>

        <form onSubmit={handleFormSubmit} className="fieldset">
          <label className="label font-bold">Name</label>
          <input
            value={user?.displayName || ""}
            readOnly
            type="text"
            name="name"
            className="input"
            placeholder="John Abraham"
          />

          <label className="label font-bold">Email</label>
          <input
            value={user?.email || ""}
            readOnly
            type="email"
            name="email"
            className="input"
            placeholder="example@gmail.com"
          />

          <label className="label font-bold">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="How I grow tomatoes indoors"
          />

          <label className="label font-bold">Plant Type</label>
          <input
            type="text"
            name="plantType"
            className="input"
            placeholder="Write your plant type"
          />

          <label className="label font-bold">Difficulty Level</label>
          <select name="difficulty" defaultValue="Easy" className="select">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>

          <label className="label font-bold">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Write your photo url"
          />

          <label className="label font-bold">Category</label>
          <select name="category" defaultValue="Composting" className="select">
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
          </select>

          <label className="label font-bold">Availability</label>
          <select name="availability" defaultValue="Public" className="select">
            <option>Public</option>
            <option>Hidden</option>
          </select>

          <label className="label font-bold">Description</label>
          <textarea
            name="description"
            className="textarea h-24"
            placeholder="Comments"
          ></textarea>

          <button
            type="submit"
            className="btn btn-neutral mt-4 bg-[#73B21A] hover:bg-[#008236]"
          >
            Submit
          </button>
        </form>
          <ToastContainer />
      </div>
    </div>
  );
};

export default ShareGardenTip;
