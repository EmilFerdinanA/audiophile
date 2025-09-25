"use client";
import { MenuProvider } from "@/Context/MenuContext";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <MenuProvider>
      <Navbar />
      <Menu />
    </MenuProvider>
  );
};
