import React, { useState } from "react";
import cryptorBg from "../../assets/cryptor-bg.svg";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Carousel from "../common/Carousel";
import { ImgProvider } from "./imgProvider";
import "./Roadmap.css";
const RoadMap: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  type SLIDES_DATA = Array<{ id: number; heading: String; subHeading: String }>;
  const slides: SLIDES_DATA = [
    {
      id: 0,
      heading: "01. March 2021",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur wfwf adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 1,

      heading: "01. March 2021",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur wfwf adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 2,

      heading: "01. March 2021",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur wfwf adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 3,
      heading: "01. March 2021",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur wfwf adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
    {
      id: 4,
      heading: "01. March 2021",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur wfwf adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  const handleSlideNumber = (id: number): void => {
    setActiveSlide(id);
  };

  const match = useMediaQuery("(min-width: 600px)");
  return (
    <div
      className="w-full text-white text-center pt-20 sm:mt-28 space-y-5 my-10"
      id="roadmap"
    >
      {console.log("match", match)}
      <p className="text-sm font-light"></p>
      <h1 className="text-2xl font-bold">ROADMAP</h1>

      <div
        className="roadmap-bg bg-roadmap-bg bg-center bg-contain"
        style={
          match
            ? {
                backgroundImage: `url(${cryptorBg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }
            : { backgroundImage: "none" }
        }
      >
        <div className="w-full p-6">
          {match ? <ImgProvider id={activeSlide} /> : null}
        </div>
        <Carousel
          handleSlideNumber={handleSlideNumber}
          activeSlide={activeSlide}
          slides={slides}
        />
      </div>
    </div>
  );
};

export default RoadMap;
