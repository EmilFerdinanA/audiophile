import { Fragment } from "react";
import { Footer } from "@/components/Footer/Index";
import { Bringing } from "@/Pages/Home/Bringing/Index";
import { Catalogue } from "./Catalogue/Index";
import { Category } from "@/components/Category/Index";

export const Home = () => {
  return (
    <Fragment>
      <Category />
      <Catalogue />
      <Bringing />
      <Footer />
    </Fragment>
  );
};
