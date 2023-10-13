import { Fragment } from "react";
import { Footer } from "@/components/Footer/Index";
import { Bringing } from "@/Pages/Home/Bringing/Index";
import { Catalogue } from "./Catalogue/Index";
import { Category } from "@/components/Category/Index";
import { Hero } from "./Hero/Index";

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Category />
      <Catalogue />
      <Bringing />
      <Footer />
    </Fragment>
  );
};
