import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const saveData = (event) => {
  sessionStorage.setItem("email", event.target.email.value);
};

class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    saveData(event);
    const req = {
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
    }).then((res) => {
      this.props.setIsLoggedIn(true);
      window.location.href="/";
    });
    console.log("Logged In");
  };
  render() {
    return (
      <div className="signin-container">
        <div className="signin-wrapper">
          <form className="signin" onSubmit={this.handleSubmit}>
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
  }
}

export default Login;
