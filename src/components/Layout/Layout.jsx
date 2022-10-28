import React from "react";
import Navbar from "../Navbar/Navbar";
import Main from "../Main/Main";
import "./Layout.scss";
import List from "../Main/Lists/List";
const Layout = () => {
  return (
    <div className="main">
      <div className="container">
        <Navbar />
      </div>
      <div className="main-container">
        <div className="container">
          <Main />
          <div className="table-data">
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
