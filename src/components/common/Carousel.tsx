import React, { useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
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
    {
      id: 5,
      heading: "01. March 2021",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur wfwf adipiscing elit, sed do eiusmod tempor incididunt ut",
    },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 2000,
    autoplay: true,
    cssEase: "linear",
    beforeChange: (next: number) => setActiveSlide(-1),
    afterChange: (current: number) => setActiveSlide(current),
  };

  return (
    <div>
      <div>
        <p
          className={
            activeSlide !== -1
              ? "text-green-500 text-center text-2xl font-bold"
              : "text-gray-300 text-center text-2xl font-bold"
          }
        >
          __
        </p>
      </div>
      <Slider {...settings}>
        {slides.map((data, i) => {
          return (
            <div className="p-5">
              <h3
                className="text-center text-2xl my-5"
                style={
                  activeSlide === data.id
                    ? { color: "#ffffff" }
                    : { color: "rgb(177, 177, 177)" }
                }
              >
                {" "}
                {data.heading}
              </h3>
              <p
                className="text-center text-sm"
                style={
                  activeSlide === data.id
                    ? { color: "rgb(211, 211, 211)" }
                    : { color: "rgb(156, 156, 156)" }
                }
              >
                {data.subHeading}
              </p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
