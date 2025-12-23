import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const { username, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg,
      {
        position: "bottom-left",
      })
  };
  const handleError = (msg) => {
    toast.error(msg,
      {
        position: "bottom-left",
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://zerodhaclone-qij1.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("http://localhost:3002");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log("Login Error", err);
    }
    setInputValue({
      ...inputValue,
      username: "",
      password: "",
    });
    
  };
  return (
    <div className="container my-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="w-75">
        <h2 style={{ textAlign: "center" }}>Login Account</h2>
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
            don't have an account? <Link to={"/singup"}>SingUp</Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
