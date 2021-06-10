import React from 'react';
import Intro from '../components/Intro';
import Header from '../components/header/Header';
import MeetOurTeam from '../components/MeetOurTeam';
import RoadMap from '../components/RoadMap';
import Tokenomics from '../components/Tokenomics';
import WhatWeDo from '../components/WhatWeDo';

const Landing: React.FC = () => {
    return (
        <div className = "lg:w-4/5 2xl:w-3/5 w-full h-full mx-3 sm:mx-auto">
            <Header/>
            <Intro/>
            <WhatWeDo />
            <MeetOurTeam />
            <RoadMap />
            <Tokenomics />
        </div>
    );
}

export default Landing;