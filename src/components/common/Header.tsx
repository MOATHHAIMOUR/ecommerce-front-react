import UserGraySVG from "@assets/svg/user/user-gray.svg?react";
import UserBlueSVG from "@assets/svg/user/user-blue.svg?react";
import HeartGraySVG from "@assets/svg/heart/heart-gray.svg?react";
import HeartBlueSVG from "@assets/svg/heart/heart-blue.svg?react";
import TrackGraySVG from "@assets/svg/track/track-gray.svg?react";
import TrackBlueSVG from "@assets/svg/track/track-blue.svg?react";
import ServicesGraySVG from "@assets/svg/services/services-gray.svg?react";
import ServicesBlueSVG from "@assets/svg/services/services-blue.svg?react";
import LanguageGraySVG from "@assets/svg/Language/Language-gray.svg?react";
import LanguageBlueSVG from "@assets/svg/Language/Language-blue.svg?react";

import { Component, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-[40px]">
      <header className="flex flex-col gap-5">
        {/* Start nav links */}
        <nav className={`flex justify-between`}>
          <ul className="flex justify-start">
            <CustomLink
              title="Login/Register Now"
              svg={<UserGraySVG />}
              hoverSvg={<UserBlueSVG />}
              isSvgFirst={true}
            />
            <CustomLink
              title="Wishlist"
              svg={<HeartGraySVG />}
              hoverSvg={<HeartBlueSVG />}
              isSvgFirst={true}
            />
            <CustomLink
              title="Track order"
              svg={<TrackGraySVG />}
              hoverSvg={<TrackBlueSVG />}
              isSvgFirst={true}
            />
            <CustomLink
              title="our services"
              svg={<ServicesGraySVG />}
              hoverSvg={<ServicesBlueSVG />}
              isSvgFirst={true}
            />
          </ul>
          <ul className="flex justify-start gap-12">
            <CustomLink
              title="Language"
              svg={<LanguageGraySVG />}
              hoverSvg={<LanguageBlueSVG />}
              isSvgFirst={false}
            />
          </ul>
        </nav>
        {/* End nav Links */}
      </header>
      <div className="absolute left-0 right-0 h-[0.5px] w-screen bg-[#42526E]"></div>
    </div>
  );
}

type customLink = {
  title: string;
  svg: React.ReactNode;
  hoverSvg: React.ReactNode;
  isSvgFirst: boolean;
};

function CustomLink({ title, svg, hoverSvg, isSvgFirst }: customLink) {
  const [isHover, setHover] = useState(false);

  return (
    <li
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <NavLink
        to="/auth"
        className="flex h-[40px] items-center gap-2 border-r border-solid px-5"
      >
        {isSvgFirst ? (
          <>
            <span>{isHover ? hoverSvg : svg}</span>
            <p className="text-[15px] font-bold text-[#42526E]">{title}</p>
          </>
        ) : (
          <>
            <p className="text-[15px] font-bold text-[#42526E]">{title}</p>
            <span>{isHover ? hoverSvg : svg}</span>
          </>
        )}
      </NavLink>
    </li>
  );
}
