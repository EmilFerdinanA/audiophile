import { Fragment } from "react";
import { ProductDesktop } from "./Desktop/Product";
import { ProductMobile } from "./Mobile/Product";

export const Product = () => {
  const isMobile = window.innerWidth <= 1280;
  return (
    <Fragment>{isMobile ? <ProductMobile /> : <ProductDesktop />}</Fragment>
  );
};
