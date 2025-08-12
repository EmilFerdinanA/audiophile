/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Header = () => {
  return (
    <div className="sticky bg-[#191919] flex justify-center h-24 top-0 w-full z-50 px-6 md:px-10 lg:px-40">
      <div className="containers !justify-between w-full border-b-1 border-white max-w-[1440px]">
        <img
          className="md:absolute lg:hidden"
          src="/assets/icon-hamburger.svg"
          alt="hamburger"
        />

        <Link href="/" className="relative md:left-14 lg:left-0 cursor-pointer">
          <img src="/assets/logo.svg" alt="logo" />
        </Link>

        <ul className={"hidden lg:flex gap-8 subtitle text-white font-bold"}>
          {MENUS.map((menu, index) => (
            <li key={index} className="hover:text-primary cursor-pointer">
              <Link
                href={menu === "HOME" ? "/" : `/category/${menu.toLowerCase()}`}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>

        <img src="/assets/icon-cart.svg" alt="logo" />
      </div>
    </div>
  );
};
