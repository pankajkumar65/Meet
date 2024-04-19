import React from "react";
import figure1 from "../images/figure1.png";
const Compo2 = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-32">
        <div className="flex flex-col w-1/2 h-auto justify-center items-start gap-8">
          <h1
            style={{ fontFamily: "Titillium Web" }}
            className="text-5xl font-bold w-96 leading-normal"
          >
            Creating Meating in 2 clicks
          </h1>

          <p style={{ fontFamily: "Lato" }} className="w-96">
            Reachify helps you focus on what's important. Running great meetings
            Powerful, yet simple to use, Spend less time planning. More time
            creating.
          </p>
          <div className="flex text-xs flex-row gap-6 text-white">
            <button className="w-36 border h-10 rounded-full bg-purple-500 ml-[-7px] hover:bg-purple-400">
              CREATE MEATING
            </button>

            <div className="w-96 border rounded-full text-end h-10 flex justify-between items-center">
              <input
                className="ml-7 h-8 w-64 rounded-full outline-none"
                type="text"
                placeholder="Enter meeting link"
                required
              />
              <button className=" mr-1 w-16 border h-8 rounded-full bg-purple-500 hover:bg-purple-400 ">
                JOIN
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={figure1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Compo2;
