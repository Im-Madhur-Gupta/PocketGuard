import React from "react";
import { Link } from "react-router-dom";
import signupimg from "../../images/signup.png";
import "./Signup.css";

const Signup = ({ setIsSignedUp, isSignedUp }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const req = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    fetch("http://localhost:8000/login", {
      mode: "no-cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => {
        setIsSignedUp(true);
        window.location.href = "/login";
      })
      .catch((error) => {
        throw error;
      });
    console.log("SignedUp");
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
          <span className="signin-title">Create an Account</span>
          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="text"
              name="firstname"
              placeholder="First Name"
            ></input>
          </div>
          <div className="signin-input-wrapper">
            <input
              className="signin-input"
              type="text"
              name="lastname"
              placeholder="Last Name"
            ></input>
          </div>
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
            <button className="signin-btn">Create an Account</button>
          </div>
          <div className="signin-link">
            <span>
              Already have an account? <Link to="/login">Sign In</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
