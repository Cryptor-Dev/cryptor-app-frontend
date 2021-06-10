import React from 'react';

const RoadMap : React.FC = () => {
    return (
        <div className = "flex flex-col w-full text-white text-center mt-28 space-y-5">
            <h1 className = "text-2xl">Roadmap</h1>
            <p className = "text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>
             do eiusmod tempor incididunt ut labore et dolore magna </p>
            <img src="./assets/roadmap.svg" className = "" alt="" />
        </div>
    );
};

export default RoadMap;