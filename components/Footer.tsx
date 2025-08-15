/* eslint-disable @next/next/no-img-element */
const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Footer = () => {
  return (
    <div className="mt-40 containers !items-start bg-[#191919] text-white pb-9">
      <div className="containers md:!items-start gap-12 flex-col max-w-[1440px] base-p w-full">
        <div className="h-1 w-28 bg-[#D87D4A] md:mb-2" />

        <div className="containers md:!items-start flex-col gap-12 md:gap-8">
          <img src="/assets/logo.svg" alt="logo" />

          <ul className="containers flex-col md:flex-row font-bold gap-4">
            {MENUS.map((menu, index) => (
              <li key={index} className="hover:text-primary cursor-pointer">
                {menu}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center md:text-left opacity-50 px-5 md:p-0 md:-mt-3">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>

        <div className="containers flex-col md:flex-row md:!justify-between gap-12 md:mt-8 w-full">
          <p className="font-bold opacity-50">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="containers cursor-pointer gap-4">
            <img src="/assets/icon-facebook.svg" alt="facebook" />
            <img src="/assets/icon-twitter.svg" alt="twitter" />
            <img src="/assets/icon-instagram.svg" alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};
