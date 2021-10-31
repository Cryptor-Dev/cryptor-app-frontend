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
          className="absolute h-72 2xl:h-auto left-full bottom-0 2xl:top-0 -ml-64 z-0 md:block  xs:hidden "
        />
        <h1 className="text-white md:text-5xl xs:text-2xl mt-20 sm:mt-32 max-w-3xl uppercase font-bold">
          Investment, utility and innovation Made a token for the next
          generation
        </h1>
        <p className="text-white text-base mt-6  max-w-xl">
          Cryptor is the first and only all in one platform to track the newest
          token and useful tools for better trades{" "}
        </p>
        <div className="max-w-max space-x-4 mt-6">
          <a
            className="cursor-pointer border-b-2 text-white py-3 font-light shadow-2xl white-paper-button white-paper"
            href="sd"
            onMouseEnter={() => {
              gsap.to(".white-paper", {
                color: "#22C55E",
                duration: 0.2,
                borderColor: "#22C55E",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".white-paper", {
                color: "#ffffff",
                duration: 0.2,
                borderColor: "#ffffff",
              });
            }}
          >
            {" "}
            White paper
          </a>
          <a
            style={{ marginLeft: "30px" }}
            href="sd"
            className="cursor-pointer border-b-2 text-white py-3 font-light shadow-2xl white-paper-button cryptor-swap-button"
            onMouseEnter={() => {
              gsap.to(".cryptor-swap-button", {
                color: "#22C55E",
                duration: 0.2,
                borderColor: "#22C55E",
              });
            }}
            onMouseLeave={() => {
              gsap.to(".cryptor-swap-button", {
                color: "#ffffff",
                duration: 0.2,
                borderColor: "#ffffff",
              });
            }}
          >
            {" "}
            Cryptor Swap
          </a>
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
