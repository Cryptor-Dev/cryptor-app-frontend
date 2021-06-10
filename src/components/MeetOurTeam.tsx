import React from 'react';

const MeetOurTeam : React.FC = () => {
    return (
        <div className = "flex flex-col relative w-full text-white text-center pt-28 space-y-5">
            <h1 className = "text-2xl">Meet our team</h1>
            <p className = "text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>
                 do eiusmod tempor incididunt ut labore et dolore magna </p>
            <div className = "h-96">
                <div className = "relative">
                    <img src = "./assets/team-overlay.svg" alt = "" className = "absolute h-52 w-52 sm:h-96 sm:w-96 sm:left-32" />
                    <img src = "./assets/team-overlay.svg" alt = "" className = "absolute h-52 w-48 sm:h-96 sm:w-96 inset-y-0 sm:right-0" />
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;