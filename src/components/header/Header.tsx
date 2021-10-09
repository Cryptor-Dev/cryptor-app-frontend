import React from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../store";
import MobileMenu from "./MobileMenu";
import { menuToggleOn } from "../../store/actions";
import logo from "../../assets/cryptor-logo.svg";
gsap.registerPlugin(ScrollToPlugin);
const Header: React.FC = () => {
  const menutoggle = useSelector((state: rootState) => state.menuToggle.toggle);
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(menuToggleOn());
  };

  const menuLink = [
    { name: "Home", link: "#intro", class: ".link-1" },
    { name: "What we do", link: "#whatwedo", class: ".link-2" },
    { name: "Our Team", link: "#team", class: ".link-3" },
    { name: "Roadmap", link: "#roadmap", class: ".link-4" },
    { name: "Tokenomics", link: "#tokenomics", class: ".link-5" },
    { name: "White paper", link: "", class: ".link-6" },
  ];

  return (
    <header className="">
      {menutoggle && <MobileMenu menuLink={menuLink} />}
      <div className="pr-4 pl-4 lg:pr-0 lg:pl-0 flex w-full h-32">
        <img src={logo} className="w-16 h-20 my-auto" alt="" />
        <div className="hidden lg:flex ml-auto my-auto text-sm font-light">
          {menuLink.map((items, i) => (
            <span
              key={items.name}
              className={
                "text-white ml-8 cursor-pointer transition transform hover:-translate-y-1 link-" +
                (i + 1)
              }
              onClick={() => {
                gsap.to(window, { duration: 1, scrollTo: items.link });
              }}
            >
              {items.name}
            </span>
          ))}
        </div>
        <button
          className="lg:hidden ml-auto my-auto space-y-3"
          onClick={toggleHandler}
        >
          <span className="bg-white h-0.5 w-8 block ml-4"></span>
          <span className="bg-white h-0.5 w-12 block"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
