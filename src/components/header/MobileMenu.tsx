import React from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuToggleOff } from "../../store/actions";
gsap.registerPlugin(ScrollToPlugin);

interface menuLink {
  name: string;
  link: string;
  class: string;
}

type props = {
  menuLink: menuLink[];
};

const MobileMenu: React.FC<props> = ({ menuLink }) => {
  useEffect(() => {
    gsap.from(".animate-menu", {
      opacity: 0,
      right: "-100%",
      duration: 0.5,
      autoAlpha: 0,
    });
  }, []);

  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(menuToggleOff());
  };

  return (
    <div className="animate-menu flex flex-col h-screen w-screen  fixed bg-emerald-900 z-50 invisible text-white">
      <div className="flex flex-col pl-12 sm:pl-0 mr-auto sm:mx-auto my-auto space-y-8 text-3xl font-extralight sm:text-center">
        {menuLink.map((items, i) => (
          <span
            className={"cursor-pointer link-" + (i + 1)}
            key={items.name}
            onClick={() => {
              gsap.to(window, {
                scrollTo: items.link,
                duration: 1,
                onStart: toggleHandler,
              });
            }}
          >
            {items.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
