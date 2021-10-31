import React from "react";
import govern from "../../assets/feature/cryptor-govern.svg";
import diligence from "../../assets/feature/due-diligence.svg";
import emotion from "../../assets/feature/emtion-system.svg";
import noti from "../../assets/feature/noti-trade.svg";
import payment from "../../assets/feature/payment-sys.svg";
import track from "../../assets/feature/track-gem.svg";

const WhatWeDo: React.FC = () => {
  type Features = Array<{
    id: number;
    icon: string;
    heading: String;
    subHeading: String;
  }>;
  const features: Features = [
    {
      id: 1,
      icon: diligence,
      heading: "DUE DILIGENCE",
      subHeading: "Get all necessary informationsat on place and stay safe",
    },
    {
      id: 2,
      icon: noti,
      heading: "NOTIFICATION TRADE",
      subHeading:
        "Buy or sell automatically whenever it pumps ordumps with our trading bot",
    },
    {
      id: 3,
      icon: track,
      heading: "TRACK NEW GEMS",
      subHeading:
        "Find and trade new tokens before any other exchange knowabout it",
    },
    {
      id: 4,
      icon: emotion,
      heading: "NO EMOTION SYSTEM",
      subHeading:
        "Get your tokens locked in yourwallet and avoid panic attackactions",
    },
    {
      id: 5,
      icon: payment,
      heading: "PAYMENT GATEWAY",
      subHeading:
        "Our new payment gateway system will get attractionbecause of our early adoptersbeneficial programm",
    },
    {
      id: 6,
      icon: govern,
      heading: "CRYPTOR GOVERNANCE",
      subHeading:
        "Every holder counts. We are onecommunity, one company andlisten to every voice",
    },
  ];
  const featureCard = features.map((data) => {
    return (
      <div className="my-5" key={data.id}>
        <div className="w-24 mx-auto">
          <img className="w-full block" src={data.icon} alt="feature" />
        </div>
        <h2 className="text-center text-white text-lg"> {data.heading}</h2>
        <p className="text-center text-gray-300 text-sm md:max-w-xs xs:max-w-none">
          {data.subHeading}
        </p>
      </div>
    );
  });
  return (
    <div className="px-4 lg:px-0 w-full pt-28" id="whatwedo">
      <h1 className="text-2xl font-bold text-white text-center">WHAT WE DO</h1>
      <p className="text-center text-gray-300 max-w-lg mx-auto text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 mx-10">
        {featureCard}
      </div>
    </div>
  );
};

export default WhatWeDo;
