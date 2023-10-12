import { Fragment } from "react";
import { BringingMobile } from "@/components/Bringing/Mobile/BringingMobile";
import { BringingDesktop } from "@/components/Bringing/Desktop/BringingDesktop";

export const Bringing = () => {
  const isMobile = window.innerWidth <= 1024;
  return (
    <Fragment>{isMobile ? <BringingMobile /> : <BringingDesktop />}</Fragment>
  );
};
