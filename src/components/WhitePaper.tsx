import React from "react";
import whitePaper from "../assets/whitepaper.png";

const WhitePaper: React.FC = () => {
    return (
        <div className=" flex flex-col sm:flex-row mt-20">
            <div className="sm:w-1/2 w-auto">
                <img src={whitePaper} alt="" />
            </div>
            <div className="sm:w-1/2 w-full my-auto">
                <h2 className="text-3xl font-bold">THE REAL</h2>
                <h1 className="text-4xl font-bold text-green-400">STARTUP</h1>
                <p className="my-12 text-base opacity-50">
                    A young and motivated Team working 24/7 to make crypto great again.
                    Download out whitepaper to get more information about the company CRYPTOR
                </p>
                <button className="border-b pb-2">Whitepaper</button>
            </div>
        </div>
    );
};

export default WhitePaper;