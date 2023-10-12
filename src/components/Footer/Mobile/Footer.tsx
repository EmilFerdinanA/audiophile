import audiophile from "@/assets/audiophile.svg";
import facebook from "@/assets/icon-facebook.svg";
import twitter from "@/assets/icon-twitter.svg";
import instagram from "@/assets/icon-instagram.svg";

export const FooterMobile = () => {
  return (
    <section className="bg-septenary flex flex-col justify-center items-center gap-12 px-6 pb-9 sm:px-10 sm:items-start">
      <div className="bg-primary w-24 h-1" />

      <img src={audiophile} alt="Logo" />

      <ul className="text-senary font-bold flex flex-col items-center gap-4 sm:flex-row sm:gap-9">
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>

      <div className="text-senary font-medium opacity-50 text-center sm:text-justify">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </div>

      <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-between sm:w-full">
        <div className="text-senary font-bold opacity-50 text-center">
          Copyright 2023. All Rights Reserved
        </div>

        <ul className="flex gap-5 items-center">
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={twitter} alt="twitter" />
          </li>
          <li>
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>
    </section>
  );
};
