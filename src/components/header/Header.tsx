import React from 'react';

const Header : React.FC = () => {

    const menuLink = [
        {name: "Home", link: ""},
        {name: "What we do", link: ""},
        {name: "Our Team", link: ""},
        {name: "Roadmap", link: ""},
        {name: "Tokenomics", link: ""},
        {name: "White paper", link: ""}
    ]

    return (
        <div className = "flex w-full h-32">
            <img src="./assets/cryptor-logo.svg" className = "w-16 h-20 my-auto" alt="" />
            <div className = "ml-auto my-auto text-sm font-light">
                {
                    menuLink.map((items) => (
                        <a href = {items.link} key = {items.name} className = "text-white ml-8">{items.name}</a>
                    ))
                }
            </div>
        </div>
    );
};

export default Header;