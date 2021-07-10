import React from "react";
import raptor from "../assets/raptor.png";

const WhatWeDo: React.FC = () => {
  return (
    <div className="px-4 lg:px-0 flex w-full pt-28" id="whatwedo">
      <div className="text-white w-1/2 space-y-5">
        <h1 className="text-2xl">What we do</h1>
        <h2 className="text-lg">Track new gems</h2>
        <p className="text-sm font-light">
          Find and trade new tokens befor any other exchange know about it
        </p>
        <h2 className="text-lg">Notification trade</h2>
        <p className="text-sm font-light">
          Buy or sell automatically whenever it pumps or dumps with our trading
          bot
        </p>
        <h2 className="text-lg">Due diligence</h2>
        <p className="text-sm font-light">
          Get all necessary informations at on place and stay safe
        </p>
        <h2 className="text-lg">No emotion system</h2>
        <p className="text-sm font-light">
          Get your tokens locked in your wallet and avoid panic attack actions
        </p>
        <h2 className="text-lg">Own payment gateway</h2>
        <p className="text-sm font-light">
          Our new payment gateway system will get attraction because of our
          early adopters beneficial programm
        </p>
        <h2 className="text-lg">Cryptor governance</h2>
        <p className="text-sm font-light">
          Every holder counts. We are one community, one company and listen to
          every voice
        </p>
      </div>
      <div className="w-1/2">
        <img src={raptor} alt="" className="h-80" />
      </div>
    </div>
  );
};

export default WhatWeDo;
