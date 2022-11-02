import React from "react";
import { Route, Routes  } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboad";

const IRoutes = () => {
  
  return (
    <Routes >
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login />} />
    </Routes >
  );
};

export default IRoutes;