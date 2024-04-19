import React from "react";

const Compo4 = () => {
  return (
    <>
      <div className="flex justify-center items-center mb-24 mt-10">
        <div className="flex flex-row justify-center items-center w-[90%] h-56 bg-purple-500">
          <h1
            style={{ fontFamily: "Titillium Web" }}
            className="text-4xl text-white w-[70%] font-semibold leading-normal"
          >
            Want this easy to use meeting software for your organization?
            Contact our sales team now.
          </h1>
          <button
            style={{ fontFamily: "Lato" }}
            className="border border-black w-44 h-12 rounded-full bg-white font-bold hover:bg-slate-100"
          >
            CONTACT SALES
          </button>
        </div>
      </div>
      <div className="border-b border-gray-500 w-full h-2 mb-5"></div>
    </>
  );
};

export default Compo4;
