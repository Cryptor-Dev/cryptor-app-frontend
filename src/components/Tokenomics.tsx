import React from "react";
import tokenomicsIcon from "../assets/tokenomics-icon.svg";
import tokenAllocation from "../assets/token-allocation.svg";
import lineEffect from "../assets/line-effect-token.svg";
import Quotes from "./Quotes";
import WhitePaper from "./WhitePaper";

const Tokenomics: React.FC = () => {
  return (
    <div className="flex flex-col text-white pt-20 px-4 lg:px-0" id="tokenomics">
      <p className="text-sm opacity-50">Token Name</p>
      <h3 className="text-xl">CRYPTOR</h3>
      <div className="flex mt-12">
        <div className="flex w-1/2">
          <div className="space-y-3 my-auto flex flex-col w-3/4">
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Token Symbol</p>
              <p className="text-sm ml-auto opacity-50">Cryptor</p>
            </div>
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Total Decimals</p>
              <p className="text-sm ml-auto opacity-50">11</p>
            </div>
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Soft Cap</p>
              <p className="text-sm ml-auto opacity-50">400</p>
            </div>
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Hard Cap</p>
              <p className="text-sm ml-auto opacity-50">800</p>
            </div>
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Min. Purchased</p>
              <p className="text-sm ml-auto opacity-50">00.1</p>
            </div>
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Max. Purchased</p>
              <p className="text-sm ml-auto opacity-50">600</p>
            </div>
            <div className="flex">
              <p className="text-sm w-1/2 opacity-50">Total Supply</p>
              <p className="text-sm ml-auto opacity-50">124435353535</p>
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <img src={tokenomicsIcon} className="h-80 w-80 mx-auto" alt="" />
        </div>
      </div>
      <div className="flex bg-black lg:w-1/2 py-12 shadow-2xl">
        <div className="w-1/2 my-auto flex">
          <img src={tokenAllocation} alt="" className="w-2/3 mx-auto"/>
        </div>
        <div className="my-auto">
          <p className="my-2"><span className="bg-green-500 rounded-full w-2 h-2 inline-block mr-3"></span>Lorem Ipsum Dolo Sit</p>
          <p className="my-2"><span className="bg-green-900 rounded-full w-2 h-2 inline-block mr-3"></span>Lorem Ipsum Dolo Sit</p>
          <p className="my-2"><span className="bg-green-200 rounded-full w-2 h-2 inline-block mr-3"></span>Lorem Ipsum Dolo Sit</p>
          <p className="my-2"><span className="bg-green-300 rounded-full w-2 h-2 inline-block mr-3"></span>Lorem Ipsum Dolo Sit</p>
          <p className="my-2"><span className="bg-green-800 rounded-full w-2 h-2 inline-block mr-3"></span>Lorem Ipsum Dolo Sit</p>
        </div>
      </div>
      <Quotes />
      <WhitePaper />
      <div className="flex flex-col md:flex-row relative text-center my-24 md:my-36 space-y-6 md:space-y-0">
        <img
          src={lineEffect}
          alt=""
          className="absolute z-0 w-screen hidden md:block"
        />
        <div className="mx-auto my-auto">
          <h1 className="text-2xl md:text-3xl">20K+</h1>
          <p className="text-xs">Holders</p>
        </div>
        <div className="mx-auto my-auto">
          <h1 className="text-2xl md:text-3xl">$3.1M USD</h1>
          <p className="text-xs">Liquidity Generated</p>
        </div>
        <div className="mx-auto my-auto">
          <h1 className="text-2xl md:text-3xl">$35M USD</h1>
          <p className="text-xs">Market Cap</p>
        </div>
        <div className="mx-auto my-auto">
          <h1 className="text-2xl md:text-3xl">342T</h1>
          <p className="text-xs">Token Burned</p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
