import { Bringing } from "@/components/Bringing/Index";
import { Category } from "@/components/Category/Index";
import { Fragment } from "react";
import { Hero } from "./Hero/Index";
import { Content } from "./Content/Index";

export const CategoryPage = () => {
  return (
    <Fragment>
      <Hero />
      <Content />
      <Category />
      <Bringing />
    </Fragment>
  );
};
