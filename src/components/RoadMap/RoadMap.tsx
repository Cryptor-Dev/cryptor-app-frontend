import React from "react";
import cryptorBg from "../../assets/cryptor-bg.svg";
const RoadMap: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full text-white text-center pt-20 sm:mt-28 space-y-5"
      id="roadmap"
    >
      <h1 className="text-2xl">Roadmap</h1>
      <p className="text-sm font-light"></p>
      <div>
        <img
          src={cryptorBg}
          className=""
          alt=""
          style={{ width: "70%", display: "block", margin: "0 auto" }}
          
        />
      </div>
    </div>
  );
};

export default RoadMap;
