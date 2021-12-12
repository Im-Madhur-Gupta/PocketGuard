import React from "react";
import { Link, useNavigate } from "react-router-dom";
import signupimg from "../../images/signup.png";
import "./Login.css";

const saveData = (event) => {
  sessionStorage.setItem("email", event.target.email.value);
};

const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    saveData(event);
    const req = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch("http://localhost:8000/login/", {
      mode: "no-cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => {
        console.log(res);
        props.setIsLoggedIn(true);
        // window.location.href="/";
        navigate("/");
      })
      .catch((err) => {
        throw err;
      });
    console.log("Logged In");
  };
  return (
    <div className="signup-container">
      <div className="signup-img">
        <p className="floatingpara">
          Sign Up to enjoy all of our functionalities.
        </p>
        <img src={signupimg} alt="" />
      </div>
      <div className="signup-wrapper">
        <form className="signin" onSubmit={handleSubmit}>
          <span className="signin-title">Sign In</span>
          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="text"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="password"
              name="password"
              placeholder="Password"
            ></input>
          </div>
          <div className="signin-btn-wrapper">
            <button className="signin-btn">Login</button>
          </div>
          <div className="signin-link">
            <span>
              Don't have an account? <Link to="/signup"> Register here</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
