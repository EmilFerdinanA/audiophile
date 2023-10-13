import { Fragment } from "react";
import { CatalogueMobile } from "@/Pages/Home/Catalogue/Mobile/Index";
import { CatalogueDesktop } from "@/Pages/Home/Catalogue/Desktop/index";

export const Catalogue = () => {
  const isMobile = window.innerWidth <= 1280;
  return (
    <Fragment>{isMobile ? <CatalogueMobile /> : <CatalogueDesktop />}</Fragment>
  );
};
