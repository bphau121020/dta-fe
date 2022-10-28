import React, { useState } from "react";
import "./Navbar.scss";
import Avatar from "@mui/material/Avatar";
const Navbar = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <nav className="container">
      <div className="navbar">
        <div className="navbar__left">
          <h1 className="navbar__left__title">Have A Nice Day!</h1>
          <p>Hello everyone, Welcome</p>
        </div>
        <div className="navbar__timeshow">
          <h1>{ctime}</h1>
        </div>
        <div className="navbar__right">
          <Avatar alt="User" src="../../assets/images/ava.jpg" />
          <span>User Dta</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
