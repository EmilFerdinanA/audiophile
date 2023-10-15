import { Footer } from "@/components/Footer/Index";
import { Navbar } from "@/components/Navbar/Index";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};
