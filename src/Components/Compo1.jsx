import React from "react";
import Logo1 from "../images/Logo1.png";
import Logo2 from "../images/Logo2.png";
import "../styles/Compo1.css";

const Compo1 = () => {
  return (
    <>
      <div className="Navbar">
        <h1
          style={{ fontFamily: "Audiowide" }}
          className="ml-20 mt-7 text-2xl text-purple-500"
        >
          Reachify
        </h1>
        <div className="nav1 w-96 mr-10 mt-6">
          <h3 className="font-bold text-gray-700 mr-4">
            Explore Reachify Website
          </h3>
          <img src={Logo1} alt="" />
          <img src={Logo2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Compo1;
