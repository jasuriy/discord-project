import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import "./MainLayOut.css";
const MainLayOut = () => {
  return (
    <div className="main-layout w-100">
      <div className="left-layout">
        <SideBar />
      </div>
      <div className="right-layout w-100">
        <Navbar />
      </div>
    </div>
  );
};

export default MainLayOut;
