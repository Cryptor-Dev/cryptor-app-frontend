import gsap from "gsap/all";
import React from "react";
import intro3d from "../assets/3d-intro.svg";
import dash from "../assets/dash.svg";

const Intro: React.FC = () => {
  return (
    <div className="px-4 lg:px-0 flex flex-col w-full" id="intro">
      <div className="relative">
        <img
          src={intro3d}
          alt=""
          className="absolute h-72 2xl:h-auto left-full bottom-0 2xl:top-0 -ml-64 z-0"
        />
        <h1 className="text-white max-w-4xl text-5xl mt-20 sm:mt-32">
          Investment, utility and innovation <br />
          Made a token for the next generation
        </h1>
        <p className="text-white text-sm mt-6">
          Cryptor is the first and only all in one platform to track the newest
          token and useful tools for better trades{" "}
        </p>
        <div className="max-w-max space-x-4 mt-6">
          <button
            className="text-white w-32 bg-transparent border rounded-xl py-3 text-sm font-light shadow-2xl white-paper-button"
            onMouseEnter={() => {
              gsap.to(".white-paper-button", {
                translateY: "0.25rem",
                backgroundColor: "#22C55E",
                duration: 0.2,
                borderWidth: 0,
              });
            }}
            onMouseLeave={() => {
              gsap.to(".white-paper-button", {
                translateY: 0,
                backgroundColor: "transparent",
                duration: 0.2,
                borderWidth: 1,
              });
            }}
          >
            White Paper
          </button>
          <button
            className="text-white w-32 bg-transparent border py-3 rounded-xl text-sm font-light shadow-2xl cryptor-swap-button"
            onMouseEnter={() => {
              gsap.to(".cryptor-swap-button", {
                translateY: "0.25rem",
                backgroundColor: "#22C55E",
                duration: 0.2,
                borderWidth: 0,
              });
            }}
            onMouseLeave={() => {
              gsap.to(".cryptor-swap-button", {
                translateY: 0,
                backgroundColor: "transparent",
                duration: 0.2,
                borderWidth: 1,
              });
            }}
          >
            Cryptor Swap
          </button>
        </div>
      </div>
      <div className="flex flex-col text-center space-y-6 text-white">
        <img
          src={dash}
          className="w-auto sm:h-96 shadow-3xl mt-16 mx-auto"
          alt=""
        />
        <p className="font-light text-lg max-w-lg mx-auto">
          We launch soon our All in one dapp. Tokenholders get get nearly access
          to all features without any monthly subscription fee and can enjoy a
          lot of outstanding benefits.
        </p>
        <button className="bg-transparent border w-40 mx-auto py-3 rounded-xl font-light text-sm transition transform hover:border-transparent hover:border-0 duration-200 ease-in-out hover:bg-green-500">
          Get Early access
        </button>
      </div>
    </div>
  );
};

export default Intro;
