import React from 'react';

const WhatWeDo : React.FC = () => {
    return (
        <div className = "px-4 lg:px-0 flex w-full pt-28" id = "whatwedo">
            <div className = "text-white w-1/2 space-y-5">
                <h1 className = "text-2xl">What we do</h1>
                <p className = "text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>
                 do eiusmod tempor incididunt ut labore et dolore magna </p>
            </div>
            <div className = "w-1/2">
                <img src="./assets/3d.svg" alt="" className = "h-80"/>
            </div>
        </div>
    );
};

export default WhatWeDo;