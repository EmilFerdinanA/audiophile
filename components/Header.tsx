"use client";
import { Cart } from "./Cart";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Cart />
    </>
  );
};
