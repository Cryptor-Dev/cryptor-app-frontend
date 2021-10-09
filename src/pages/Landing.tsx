import React from "react";
import Intro from "../components/Intro";
import Header from "../components/header/Header";
import MeetOurTeam from "../components/MeetOurTeam";
import RoadMap from "../components/RoadMap/RoadMap";
import Tokenomics from "../components/Tokenomics";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import cryptorBg from "../assets/cryptor-bg.png";

const Landing: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={cryptorBg}
        alt=""
        className="absolute h-full object-cover object-center w-full"
      />
      <div className="lg:w-4/5 2xl:w-lg w-full h-full sm:mx-auto relative">
        <Header />
        <Intro />
        <WhatWeDo />
        <MeetOurTeam />
        <RoadMap />
        <Tokenomics />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
