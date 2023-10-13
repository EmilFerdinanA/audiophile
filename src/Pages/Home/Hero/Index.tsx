import { Fragment } from "react";
import { HeroDesktop } from "./Desktop/Hero";
import { HeroMobile } from "./Mobile/Hero";

export const Hero = () => {
  const isMobile = window.innerWidth <= 1280;
  return <Fragment>{isMobile ? <HeroMobile /> : <HeroDesktop />}</Fragment>;
};
