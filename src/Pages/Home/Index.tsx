import { Fragment } from "react";
import { Footer } from "@/components/Footer/Index";
import { Bringing } from "@/Pages/Home/Bringing/Index";
import { Catalogue } from "./Catalogue/Index";

export const Home = () => {
  return (
    <Fragment>
      <Catalogue />
      <Bringing />
      <Footer />
    </Fragment>
  );
};
