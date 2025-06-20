import React from "react";
import { useLoaderData } from "react-router";
import LottieAnimation from "./LottieAnimation";
import { toast, ToastContainer } from "react-toastify";

const UpdateTipDetails = () => {
  const user = useLoaderData();

  const handleUpdateUser = (e) => {
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

    fetch(`https://gardening-community-server-kappa.vercel.app/update-tip-details/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          console.log("update done", data);
        }
        toast.success("Your Information Updated Successfully");
      });
  };

  return (
    <div className="my-20 grid grid-cols-1 md:grid-cols-2 max-w-11/12 mx-auto justify-center">
      <div>
        <LottieAnimation></LottieAnimation>
      </div>
      <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-xl font-bold text-center my-4">
            Please Submit the Form
          </h2>

          <form onSubmit={handleUpdateUser} className="fieldset">
            <label className="label font-bold">Name</label>
            <input
              value={user?.name || ""}
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
              defaultValue={user.title}
              name="title"
              className="input"
              placeholder="How I grow tomatoes indoors"
            />

            <label className="label font-bold">Plant Type</label>
            <input
              type="text"
              defaultValue={user.plantType}
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
              defaultValue={user.photo}
              name="photo"
              className="input"
              placeholder="Write your photo url"
            />

            <label className="label font-bold">Category</label>
            <select
              name="category"
              defaultValue="Composting"
              className="select"
            >
              <option>Composting</option>
              <option>Plant Care</option>
              <option>Vertical Gardening</option>
            </select>

            <label className="label font-bold">Availability</label>
            <select
              name="availability"
              defaultValue="Public"
              className="select"
            >
              <option>Public</option>
              <option>Hidden</option>
            </select>

            <label className="label font-bold">Description</label>
            <textarea
              name="description"
              defaultValue={user.description}
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
    </div>
  );
};

export default UpdateTipDetails;
