import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Footer = () => {
  return (
    <div className="containers !items-start bg-[#191919] text-white pb-9 md:pb-12">
      <div className="containers md:!items-start gap-12 flex-col max-w-[1440px] base-p w-full">
        <div className="h-1 w-28 bg-[#D87D4A] md:mb-2 lg:mb-6" />

        <div className="containers lg:flex-row lg:!justify-between md:!items-start flex-col gap-12 md:gap-8 w-full">
          <img src="/assets/logo.svg" alt="logo" />

          <ul className="containers flex-col md:flex-row font-bold gap-4 md:gap-9">
            {MENUS.map((menu, index) => {
              const href = menu === "HOME" ? "/" : `/${menu.toLowerCase()}`;
              return (
                <li key={index}>
                  <Link
                    href={href}
                    className="hover:text-[#D87D4A] cursor-pointer"
                  >
                    {menu}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-center md:text-left opacity-50 px-5 md:p-0 md:-mt-4 lg:-mt-3 lg:w-3/5 lg:pr-20">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>

        <div className="containers flex-col md:flex-row md:!justify-between gap-12 md:mt-8 lg:mt-2 w-full">
          <p className="font-bold opacity-50">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="relative containers cursor-pointer gap-4 lg:-top-24">
            <img src="/assets/icon-facebook.svg" alt="facebook" />
            <img src="/assets/icon-twitter.svg" alt="twitter" />
            <img src="/assets/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
