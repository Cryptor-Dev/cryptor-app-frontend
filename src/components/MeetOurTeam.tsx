import React from "react";
import linkedin from "../assets/team/linkedin.svg";
import twitter from "../assets/team/twitter.svg";
import instagram from "../assets/team/instagram.svg";
import mail from "../assets/team/mail.svg";

const MeetOurTeam: React.FC = () => {
  const team = [1, 2].map((data) => {
    return (
      <div className="md:w-1/2 mx-10" key={data}>
        <div className="relative">
          <div className="text-white">
            <h5
              className="text-right text-2xl pr-5"
              style={{ color: "#1CD465" }}
            >
              PATRIC J.L
            </h5>
            <p className="text-right pr-5 text-sm">CEO</p>
            <div>
              <div style={{ backgroundColor: "#05040E", padding: "5px 0px" }}>
                <p className="text-center text-xs p-0">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna{" "}
                </p>
                <div className="pb-2 flex justify-center">
                  <span className="inline-block p-3">
                    <img src={instagram} style={{ width: "10px" }} alt=""/>
                  </span>
                  <span className="inline-block p-3">
                    <img src={twitter} style={{ width: "10px" }} alt=""/>
                  </span>
                  <span className="inline-block p-3">
                    <img src={linkedin} style={{ width: "10px" }} alt=""/>
                  </span>
                  <span className="inline-block p-3">
                    <img src={mail} style={{ width: "10px" }} alt=""/>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div
      className="w-full text-white text-center pt-20 sm:mt-28 space-y-5 my-10"
      id="team"
    >
      {" "}
      <h1 className="text-2xl font-bold">MEET OUR TEAM</h1>
      <div className="flex flex-col md:flex-row space-y-16 md:space-y-0">
        {team}
      </div>
    </div>
  );
};

export default MeetOurTeam;
