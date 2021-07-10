import React from "react";
import anas from "../assets/team-anas.svg";
import patric from "../assets/team-patric.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";

const MeetOurTeam: React.FC = () => {
  return (
    <div
      className="flex flex-col relative w-full text-white text-center pt-20 sm:pt-28 space-y-5"
      id="team"
    >
      <h1 className="text-2xl">Meet our team</h1>
      <div className="flex flex-col md:flex-row space-y-16 md:space-y-0">
        <div className="md:w-1/2">
          <div className="relative max-w-max mx-auto">
            <div className="absolute z-30 h-40 w-full text-center bottom-0 -mb-16 bg-gradient-to-b from-transparent to-black filter blur-md shadow-2xl -mb-8"></div>
            <div className="flex flex-col absolute z-40 bottom-0 right-0 -mb-16 ml-16">
              <p className="text-green-500 ">Patric J. L</p>
              <p className="text-sm">CEO</p>
              <p className="text-sm">Visionaire and businessman. </p>
              <p className="text-sm">
                Passionated musician with an motivation to change the world
              </p>
              <div className="flex space-x-4 mx-auto">
                <a href="https://www.facebook.com/anas.afzal.129/">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://github.com/anas-afzal">
                  <img src={twitter} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/muhammadanasafzal/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://www.google.com/">
                  <img src={mail} alt="" />
                </a>
              </div>
            </div>
            <img src={patric} className="h-64" alt="" />
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative max-w-max mx-auto">
            <div className="absolute z-30 h-20 w-full text-center bottom-0 right-0 bg-gradient-to-b from-transparent to-black filter blur-sm shadow-2xl -mr-12 -mb-8"></div>
            <div className="flex flex-col absolute z-40 bottom-0 right-0 -mr-12 -mb-8">
              <p className="text-green-500">Muhammad Anas Afzal</p>
              <p className="text-sm">CEO</p>
              <div className="flex flex-row space-x-4 mx-auto">
                <a href="https://www.facebook.com/anas.afzal.129/">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://github.com/anas-afzal">
                  <img src={twitter} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/muhammadanasafzal/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://www.google.com/">
                  <img src={mail} alt="" />
                </a>
              </div>
            </div>
            <img src={anas} className="h-64" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeam;
