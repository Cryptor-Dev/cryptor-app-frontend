import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "../../hooks/useMediaQuery";

interface IProps {
  handleSlideNumber: (id: number) => void;
  activeSlide: number;
  slides: Array<{ id: number; heading: String; subHeading: String }>;
}

const Carousel = (props: IProps) => {
  const match = useMediaQuery("(min-width: 600px)");

  const settings = {
    className: "center",
    centerMode: match ? true : false,
    infinite: true,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: match ? 3 : 1,
    speed: 2000,
    autoplay: true,
    cssEase: "linear",
    beforeChange: (next: number) => props.handleSlideNumber(-1),
    afterChange: (current: number) => props.handleSlideNumber(current),
  };

  return (
    <div>
      <p
        className={
          props.activeSlide !== -1
            ? "text-green-500 text-center text-2xl font-bold"
            : "text-gray-300 text-center text-2xl font-bold"
        }
      >
        __
      </p>
      <Slider {...settings}>
        {props.slides.map((data, i) => {
          return (
            <div className="p-5">
              <h3
                className="text-center text-2xl my-5"
                style={
                  props.activeSlide === data.id
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
                  props.activeSlide === data.id
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
