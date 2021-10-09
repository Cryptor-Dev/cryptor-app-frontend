import React from "react";
import govern from "../../assets/feature/cryptor-govern.svg";
import diligence from "../../assets/feature/due-diligence.svg";
import emotion from "../../assets/feature/emtion-system.svg";
import noti from "../../assets/feature/noti-trade.svg";
import payment from "../../assets/feature/payment-sys.svg";
import track from "../../assets/feature/track-gem.svg";

const WhatWeDo: React.FC = () => {
  type Features = Array<{ icon: string; heading: String; subHeading: String }>;
  const features: Features = [
    {
      icon: diligence,
      heading: "DUE DILIGENCE",
      subHeading: "Get all necessary informationsat on place and stay safe",
    },
    {
      icon: noti,
      heading: "NOTIFICATION TRADE",
      subHeading:
        "Buy or sell automatically whenever it pumps ordumps with our trading bot",
    },
    {
      icon: track,
      heading: "TRACK NEW GEMS",
      subHeading:
        "Find and trade new tokens before any other exchange knowabout it",
    },
    {
      icon: emotion,
      heading: "NO EMOTION SYSTEM",
      subHeading:
        "Get your tokens locked in yourwallet and avoid panic attackactions",
    },
    {
      icon: payment,
      heading: "PAYMENT GATEWAY",
      subHeading:
        "Our new payment gateway system will get attractionbecause of our early adoptersbeneficial programm",
    },
    {
      icon: govern,
      heading: "CRYPTOR GOVERNANCE",
      subHeading:
        "Every holder counts. We are onecommunity, one company andlisten to every voice",
    },
  ];
  const featureCard = features.map((data) => {
    return (
      <div className="my-5">
        <div className="w-24 mx-auto">
          <img className="w-full block" src={data.icon} />
        </div>
        <h2 className="text-center text-white text-lg"> {data.heading}</h2>
        <p className="text-center text-gray-300 text-sm max-w-xs">{data.subHeading}</p>
      </div>
    );
  });
  return (
    <div className="px-4 lg:px-0 w-full pt-28" id="whatwedo">
      <h1 className="text-center text-gray-300 text-2xl">WHAT WE DO</h1>
      <p className="text-center text-gray-300 max-w-lg mx-auto text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <div className="grid grid-cols-3 gap-4 ms:grid-cols-2 mx-10">{featureCard}</div>
    </div>
  );
};

export default WhatWeDo;