import { Fragment } from "react";
import { BringingMobile } from "./Mobile/BringingMobile";
import { BringingDesktop } from "./Desktop/BringingDesktop";

export const Bringing = () => {
  const isMobile = window.innerWidth <= 1280;
  return (
    <Fragment>{isMobile ? <BringingMobile /> : <BringingDesktop />}</Fragment>
  );
};
