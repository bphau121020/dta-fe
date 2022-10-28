import React from "react";
import { useNavigate } from "react-router-dom";

import background from "../assets/images/backgound.png";
import logo from "../assets/images/Logo.png";

import "./Login.scss";
import {
  emailValidator,
  passwordValidator,
} from "../components/regexValidator";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = React.useState({ email: "", password: "" });

  const [errorMessage, seterrorMessage] = React.useState("");
  const [successMessage, setsuccessMessage] = React.useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (localStorage.getItem("auth")) navigate("/");
  }, []);
  const formSubmitter = (e) => {
    e.preventDefault();
    setsuccessMessage("");
    if (!emailValidator(input.email))
      return seterrorMessage("Please enter valid email id");

    if (!passwordValidator(input.password))
      return seterrorMessage("Password should have minimum 8 character");
    if (input.email !== "admin@a.com" || input.password !== "Password@1")
      return seterrorMessage("Invalid email or password");
    navigate("/");
    localStorage.setItem("auth", true);
  };

  return (
    <div className="login">
      <div className="login__left">
        <form className="login__left__form" onSubmit={formSubmitter}>
          <img className="login__left__form--logo" src={logo} />
          <section className="login__left__form--content">
            <div className="form-title">
              <h1 className="title">Sign In</h1>
              <span className="sub">Sign in stay connected</span>
              {errorMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "red" }}>
                  {errorMessage}
                </div>
              )}
              {successMessage.length > 0 && (
                <div style={{ marginBottom: "10px", color: "green" }}>
                  {successMessage}
                </div>
              )}
            </div>
            <div className="form-input form-email">
              <div className="">Email</div>
              <input
                className=""
                type="text"
                name="email"
                placeholder="Type your username"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-input form-password">
              <div className="">Password</div>
              <input
                className=""
                type="Password"
                name="password"
                placeholder="Type your Password"
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-btn">
              <button className="btn-signin">Sign in</button>
            </div>
          </section>
        </form>
      </div>
      <div className="login__right">
        <img src={background} />
      </div>
    </div>
  );
};

export default Login;
