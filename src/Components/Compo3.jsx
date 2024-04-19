import React from "react";
import figure2 from "../images/figure2.png";
import figure3 from "../images/figure3.png";
import figure4 from "../images/figure4.png";

const Compo3 = () => {
  return (
    <>
      <div
        style={{ fontFamily: "Lato" }}
        className="flex flex-row justify-center item-center gap-10 mt-28 px-16 "
      >
        <div className="flex flex-col justify-center items-center">
          <img src={figure2} alt="" />
          <div className="flex flex-col justify-center items-center gap-6 h-64">
            <h1 className="text-2xl">Get a Link you can share</h1>
            <p className=" text-center">
              Click <span className="text-purple-500">Create Meatings</span> and
              send your colleagues the link to join
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={figure3} alt="" className="ml-10" />
          <div className="flex flex-col justify-center items-center gap-6 h-64">
            <h1 className="text-2xl">Take control of your meetings</h1>
            <p className=" text-center">
              Click <span className="text-purple-500">Calendar icon </span> to
              view your schedule meetings and manage upcoming ones.
            </p>
          </div>
        </div>
        <div className="pt-10">
          <img src={figure4} alt="" className="h-76" />
          <div className="flex flex-col justify-center items-center gap-6 h-56">
            <h1 className="text-2xl">Secure Meating guranteed</h1>
            <p className=" text-center">
              No one can Join the meeting unless{" "}
              <span className="text-purple-500">you send them link.</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compo3;
