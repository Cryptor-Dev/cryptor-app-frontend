import React from 'react';
import moon from '../assets/moon-and-weave.png';

const RoadMap : React.FC = () => {
    return (
        <div className = "flex flex-col w-full text-white text-center pt-20 sm:pt-28 space-y-5" id = "roadmap">
            <h1 className = "text-2xl">Roadmap</h1>
            <p className = "text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>
             do eiusmod tempor incididunt ut labore et dolore magna </p>
            <img src={moon} className = "" alt="" />
        </div>
    );
};

export default RoadMap;