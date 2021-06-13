import React from 'react';

const Tokenomics : React.FC = () => {
    return (
        <div className = "flex flex-col text-white pt-20 sm:pt-28 space-y-16" id = "tokenomics">
            <div className = "mx-auto text-center">
                <h1 className = "text-2xl">Tokenomics</h1>
                <p className = "text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>
                do eiusmod tempor incididunt ut labore et dolore magna
                </p>
            </div>
            <div className = "grid grid-cols-2 sm:grid-cols-3 place-content-center gap-y-6">
                <img src="./assets/tokenomics-icon.svg" className = "h-80 w-80" alt="" />
                <div className = "space-y-3 mx-auto my-auto">
                    <h1 className = "text-sm">Token Sale</h1>
                    <p className = "text-xs">Token Name: Cryptor</p>
                    <p className = "text-xs">Ticker Symbol:  ~Lorem!~</p>
                    <p className = "text-xs">Total Supply: 1254525566654415</p>
                    <p className = "text-xs">Decimals: 11</p>
                    <p className = "text-xs">BSC Contract: dfsdfdsfdsfsfdsfdsf</p>
                    <p className = "text-xs">Minimum Purchased:  00.1</p>
                    <p className = "text-xs">Minimum Purchased: 6.00</p>
                    <p className = "text-xs">Soft Cap: 400</p>
                    <p className = "text-xs">Hard Cap: 800</p>
                </div>
                <div className = "hidden sm:block"></div>
                <div className = "hidden sm:block"></div>
                <img src="./assets/fund.svg" alt="" className = "h-60 w-60 mx-auto"/>
                <div className = "my-auto mx-auto space-y-3">
                    <h1 className = "text-sm">Token Allocation</h1>
                    <p className = "text-xs">Lorem ipsum dolor sit amet,</p>
                    <p className = "text-xs">tempor incididunt ut labore </p>
                    <p className = "text-xs">veniam, quis nostrud exercitation</p>
                    <p className = "text-xs">ullamco laboris nisi ut aliquip</p>
                    
                </div>
                <div className = "hidden sm:block"></div>
                <img src="./assets/fund.svg" alt="" className = "h-60 w-60 mx-auto"/>
                <div className = "my-auto mx-auto space-y-3">
                    <h1 className = "text-sm">Fund Allocation</h1>
                    <p className = "text-xs">Lorem ipsum dolor sit amet,</p>
                    <p className = "text-xs">tempor incididunt ut labore </p>
                    <p className = "text-xs">veniam, quis nostrud exercitation</p>
                    <p className = "text-xs">ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
            <div className = "flex flex-row md:mx-auto md:space-x-28">
                <div>
                    <h1 className = "text-2xl md:text-3xl">20K+</h1>
                    <p className = "text-xs">Holders</p>
                </div>
                <div>
                    <h1 className = "text-2xl md:text-3xl">$3.1M USD</h1>
                    <p className = "text-xs">Liquidity Generated</p>
                </div>
                <div>
                    <h1 className = "text-2xl md:text-3xl">$35M USD</h1>
                    <p className = "text-xs">Market Cap</p>
                </div>
                <div>
                    <h1 className = "text-2xl md:text-3xl">342T</h1>
                    <p className = "text-xs">Token Burned</p>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;