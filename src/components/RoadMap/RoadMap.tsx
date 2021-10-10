import React from "react";
import cryptorBg from "../../assets/cryptor-bg.svg";
import Carousel from "../common/Carousel";
const RoadMap: React.FC = () => {
  return (
    <div
      className="w-full text-white text-center pt-20 sm:mt-28 space-y-5"
      id="roadmap"
    >
      <h1 className="text-2xl">Roadmap</h1>
      <p className="text-sm font-light"></p>
      <div
        style={{
          backgroundImage: `url(${cryptorBg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <img
          src={cryptorBg}
          className=""
          alt=""
          style={{ width: "70%", display: "block", margin: "0 auto" }}
        /> */}
        <Carousel />
      </div>
    </div>
  );
};

export default RoadMap;
