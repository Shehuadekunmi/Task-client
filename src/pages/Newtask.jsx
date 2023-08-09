

import React, { useState } from "react";
import HeaderTwo from "../components/Header2";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Newtask = () => {
  const redirect = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, description, tag });
    try {
      const res = await fetch("https://task-server-kunmi.onrender.com/api/tasks",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, tag }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success("Task was created");
        redirect("/");
      } else {
        toast.error("Error creating Task , TryAgain");
      }
      // console.log(title, tags, description);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <HeaderTwo />
      <div className="container mt-1">
        <div>
          <h3>New Task</h3>

          <div>
            <form onSubmit={handleSubmit}>
              <ToastContainer />
              <div>
                <label className="title">
                  <legend className="Task-header">Task Title:</legend>
                </label>
                <fieldset>
                  <input
                    type="text"
                    className="title-input ps-2"
                    placeholder="E.g Project Defense, Assignment ..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </fieldset>
              </div>

              <div>
                <label className="title">
                  <legend className="Task-header ">Description:</legend>
                </label>
                <fieldset>
                  <textarea
                    className="area ps-2"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </fieldset>
              </div>

              <div>
                <label>
                  <legend className="Task-header">Tags:</legend>
                </label>
                <fieldset>
                  <input
                    type="text"
                    className="title-input ps-2"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                  />
                </fieldset>
              </div>

              <div>
                <button className="form-done mt-5">Done</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newtask;

