import { Fragment } from "react";

import { Catalogue } from "./Catalogue/Index";
import { Category } from "@/components/Category/Index";
import { Hero } from "./Hero/Index";
import { Bringing } from "@/components/Bringing/Index";

export const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Category />
      <Catalogue />
      <Bringing />
    </Fragment>
  );
};
