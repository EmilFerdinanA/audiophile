import { Fragment } from "react";
import { Footer } from "@/components/Footer/Index";
import { Bringing } from "@/Pages/Home/Bringing/Index";
import { Catalogue } from "./Catalogue/Index";
import { Category } from "@/components/Category/Index";
import { Hero } from "./Hero/Index";
import { Navbar } from "@/components/Navbar/Index";

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Category />
      <Catalogue />
      <Bringing />
      <Footer />
    </Fragment>
  );
};
