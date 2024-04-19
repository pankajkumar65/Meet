import React from "react";
import call from "../images/call.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Compo5 = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-start h-auto mx-16 gap-5">
        <div className="w-1/2 flex flex-col items-start gap-16 ">
          <h1
            style={{ fontFamily: "Audiowide" }}
            className="text-2xl text-purple-500"
          >
            Reachify
          </h1>
          <p className="text-2xl w-full">
            Stay ahead of the curve! Get exclusive access to the latest features
            and releases by subscribing to our newsletter today!
          </p>
          <div className="w-[90%]">
            <h1 className="font-medium ml-0.5">Email*</h1>
            <h1 className="text-2xl ml-1">Enter your e-mail</h1>
            <div className="border-b border-gray-500 w-full h-2 mb-6"></div>
            <button className=" hover:bg-purple-400 border px-8 py-3 rounded-full bg-purple-500 text-white">
              SUBSCRIBE
            </button>
            <p style={{ fontFamily: "Lato" }} className="pt-5 font-medium">
              By subscribing you agree to our{" "}
              <span className="text-purple-500 underline cursor-pointer">
                privacy policy{" "}
              </span>
              and consent to receive updates from our company
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-[107px]">
          <ul className="flex flex-row gap-[55px] text-2xl font-semibold">
            <li> Useful links</li>
            <li>Get in touch</li>
            <li className="ml-20">Follow us</li>
          </ul>

          <div className="flex flex-row justify-center gap-10 ">
            <ul className="flex flex-col gap-5 w-36">
              <li className="cursor-pointer">Blogs</li>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Portfolio</li>
              <li className="cursor-pointer">Pricing policy</li>
              <li className="cursor-pointer">Reachify app</li>
              <li className="cursor-pointer">Discordify app</li>
              <li className="cursor-pointer">Reachify CRM</li>
            </ul>

            <ul className="flex flex-col gap-5 w-56 font-semibold ">
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} />
                <h1>info@reachify.marketing</h1>
              </li>
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faLocationDot} />
                <h1>6/14 business complex, muzzafarpur Bihar</h1>
              </li>
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faPhone} />
                <h1>+91 73669 43125</h1>
              </li>
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} />
                <h1>iPortfolio</h1>
              </li>
            </ul>

            <ul className="flex flex-col gap-5 font-bold text-2xl text-gray-800">
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} />
                <h1>Linkedin</h1>
              </li>
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faXTwitter} />
                <h1>Twitter</h1>
              </li>
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faInstagram} />
                <h1>instagram</h1>
              </li>
              <li className="flex flex-row items-center gap-2 cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} />
                <h1>facebook</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="border-b border-gray-500 w-[80%] h-2 mb-6"></div>
      </div>
      <div className="flex flex-col items-end justify-center mr-16 mb-2">
        <div
          style={{ fontFamily: "Lato" }}
          className="flex flex-row gap-56 items-center justify-center font-semibold text-gray-700"
        >
          <h1>
            <span className="text-white bg-gray-800 rounded-full py-1 px-2 mr-3 w-2 h-2">
              C
            </span>
            2024 Reachify. All rights reserved
          </h1>
          <ul className="flex items-center justify-end gap-4">
            <li className="cursor-pointer">Pricing policy</li>
            <li className="cursor-pointer">Cookie settings</li>
            <li className="cursor-pointer">Terms of service</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Compo5;
