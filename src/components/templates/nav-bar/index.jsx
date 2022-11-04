import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import UserAvatar from '../../../assets/images/avatar.png';
import { AuthContext } from "../../../context/AuthContext";
import { logout as logoutFireBase } from "../../../firebase/service";
import { logout } from "../../../redux/user/userSlice";

const Navbar = () => {
  let time = new Date().toLocaleTimeString();
  const dispatch = useDispatch();
  const [ctime, setCtime] = useState(time);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    logoutFireBase();
    dispatch(logout());
  };
  const user = useContext(AuthContext).user;
  return (
    <nav className="container">
      <div className="navbar">
        <div >
          <h1 className="navbar__left__title">Have A Nice Day!</h1>
          <p>Hello {user.firstName}, Welcome</p>
        </div>
        <h1>{ctime}</h1>
        <div className="navbar__right">
          <div onClick={handleMenu} className="header__menu__item__icon">
            <Avatar alt="User" size="35" round="true" src={UserAvatar} />
          </div>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
