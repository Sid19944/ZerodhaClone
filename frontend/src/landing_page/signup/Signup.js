import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Singup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-left",
    });
  };
  const handleError = (msg) => {
    toast.error(msg, {
      position: "bottom-left",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodhaclone-qij1.onrender.com/singup",
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        }
      );
      console.log("Signup response data", data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log("Signup error", err);
    }
    setInputValue({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-75">
        <h2 style={{ textAlign: "center" }}>Signup Account</h2>
        <div className=" mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter Your email"
            id="exampleInputEmail1"
            value={email}
            onChange={handleOnChange}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className=" mb-3">
          <label htmlFor="exampleInputUsername" className="form-label">
            Username
          </label>
          <input
            name="username"
            type="username"
            className="form-control"
            placeholder="Enter your username"
            id="exampleInputUsername"
            value={username}
            onChange={handleOnChange}
            required
          />
          <div id="usernameHelp" className="form-text">
            We'll never share your username with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="exampleInputPassword1"
            value={password}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3 d-flex justify-content-evenly">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          &nbsp; &nbsp;
          <span>
            Already have an account? <Link to={"/login"}>Login</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Singup;
