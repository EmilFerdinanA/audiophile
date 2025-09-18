/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Header = () => {
  return (
    <div className="sticky bg-[#191919] flex justify-center h-24 top-0 z-50 border-b-1 border-white/20 md:border-none">
      {/* Container */}
      <div className="max-w-[1440px] base-p w-full">
        {/* Content */}
        <div className="containers !justify-between md:border-b-1 border-white/20 h-full">
          <img
            className="md:absolute lg:hidden"
            src="/assets/icon-hamburger.svg"
            alt="hamburger"
          />

          <Link
            href="/"
            className="relative md:left-14 lg:left-0 cursor-pointer"
          >
            <img src="/assets/logo.svg" alt="logo" />
          </Link>

          <ul className={"hidden lg:flex gap-8 text-white font-bold"}>
            {MENUS.map((menu, index) => (
              <li key={index} className="hover:text-[#D87D4A] cursor-pointer">
                <Link href={menu === "HOME" ? "/" : `${menu.toLowerCase()}`}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <img src="/assets/icon-cart.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};
