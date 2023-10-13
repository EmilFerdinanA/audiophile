import { Fragment } from "react";
import { NavbarMobile } from "./Mobile/NavbarMobile";
import { NavbarDesktop } from "./Desktop/NavbarDesktop";

export const Navbar = () => {
  const isMobile = window.innerWidth <= 1280;
  return <Fragment>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</Fragment>;
};
