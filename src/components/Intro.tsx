import React from 'react';

const Intro : React.FC = () => {
    return (
        <div className = "flex flex-col w-full space-y-10">
            <h1 className = "text-white text-6xl mt-32">Invest in the future of the <br/> currency </h1>
            <p className = "text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br/>
             ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
             <div className = "max-w-max space-x-4">
                <button className = "text-green-500 w-32 bg-transparent border rounded-xl py-3 text-sm font-light">White Paper</button>
                <button className = "text-white w-32 bg-green-500 py-3 rounded-xl text-sm font-light">Crptor Swap</button>
            </div>
            <div className = "flex flex-col text-center space-y-6 text-white">
                <img src="./assets/laptop.svg" className = "w-72 sm:w-auto sm:h-96 shadow-3xl mt-28" alt="" />
                <h1 className = "text-2xl">Lorem ipsum dolor sit amet</h1>
                <p className = "font-light text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>
                 do eiusmod tempor incididunt ut labore et dolore magna </p>
                <button className = "bg-green-500 w-40 mx-auto py-3 rounded-xl font-light text-sm">Get Early access</button>
            </div>
        </div>
    );
} 

export default Intro;