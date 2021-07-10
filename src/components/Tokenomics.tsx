import React from "react";
import tokenomicsIcon from "../assets/tokenomics-icon.svg";
import fund from "../assets/fund.svg";
import lineEffect from "../assets/line-effect-token.svg";

const Tokenomics: React.FC = () => {
  return (
    <div className="flex flex-col text-white pt-20 " id="tokenomics">
      <div className="mx-auto text-center">
        <h1 className="text-2xl">Tokenomics</h1>
        <p className="text-sm font-light"></p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 place-content-center gap-y-6 mt-16">
        <img src={tokenomicsIcon} className="h-80 w-80" alt="" />
        <div className="space-y-3 mx-auto my-auto">
          <h1 className="text-sm">Token Sale</h1>
          <p className="text-xs">Token Name: Cryptor</p>
          <p className="text-xs">Ticker Symbol: ~Lorem!~</p>
          <p className="text-xs">Total Supply: 1254525566654415</p>
          <p className="text-xs">Decimals: 11</p>
          <p className="text-xs">BSC Contract: dfsdfdsfdsfsfdsfdsf</p>
          <p className="text-xs">Minimum Purchased: 00.1</p>
          <p className="text-xs">Minimum Purchased: 6.00</p>
          <p className="text-xs">Soft Cap: 400</p>
          <p className="text-xs">Hard Cap: 800</p>
        </div>
        <div className="hidden sm:block"></div>
        <div className="hidden sm:block"></div>
        <img src={fund} alt="" className="h-60 w-60 mx-auto" />
        <div className="my-auto mx-auto space-y-3">
          <h1 className="text-sm">Token Allocation</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet,</p>
          <p className="text-xs">tempor incididunt ut labore </p>
          <p className="text-xs">veniam, quis nostrud exercitation</p>
          <p className="text-xs">ullamco laboris nisi ut aliquip</p>
        </div>
        <div className="hidden sm:block"></div>
        <img src={fund} alt="" className="h-60 w-60 mx-auto" />
        <div className="my-auto mx-auto space-y-3">
          <h1 className="text-sm">Fund Allocation</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet,</p>
          <p className="text-xs">tempor incididunt ut labore </p>
          <p className="text-xs">veniam, quis nostrud exercitation</p>
          <p className="text-xs">ullamco laboris nisi ut aliquip</p>
        </div>
      </div>
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
