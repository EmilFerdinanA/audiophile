import { Fragment } from "react";
import { BringingMobile } from "@/Pages/Home/Bringing/Mobile/BringingMobile";
import { BringingDesktop } from "@/Pages/Home/Bringing/Desktop/BringingDesktop";

export const Bringing = () => {
  const isMobile = window.innerWidth <= 1024;
  return (
    <Fragment>{isMobile ? <BringingMobile /> : <BringingDesktop />}</Fragment>
  );
};
