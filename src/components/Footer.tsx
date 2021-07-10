import React from "react";
import logo from "../assets/cryptor-logo.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row pb-12 px-4 lg:px-0">
      <div className="text-white text-xs md:w-1/2">
        <img src={logo} alt="" />
        <p className="mt-3">Investment, utility and innovation</p>
        <div className="flex flex-row space-x-4 mt-3">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
          <img src={mail} alt="" />
        </div>
        <p className="mt-12">© 2021 Cryptor. All rights reserved.</p>
      </div>
      <div className="mt-auto text-white md:w-1/2 hidden md:block">
        <h3 className="mb-8">Quick Navigation</h3>
        <div className="grid grid-cols-2 gap-y-3 text-xs">
          <p>Home</p>
          <p>Roadmap</p>
          <p>What we do</p>
          <p>Tokenomics</p>
          <p> Our Team</p>
          <p>White paper</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
