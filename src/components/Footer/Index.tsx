import { Fragment } from "react";
import { FooterMobile } from "@/components/Footer/Mobile/Footer";
import { FooterDesktop } from "@/components/Footer/Desktop/Footer";

export const Footer = () => {
  const isMobile = window.innerWidth <= 1280;
  return <Fragment>{isMobile ? <FooterMobile /> : <FooterDesktop />}</Fragment>;
};
