import audiophile from "@/assets/audiophile.svg";
import facebook from "@/assets/icon-facebook.svg";
import twitter from "@/assets/icon-twitter.svg";
import instagram from "@/assets/icon-instagram.svg";

export const Footer = () => {
  return (
    <section className="bg-septenary flex flex-col justify-center items-center gap-12 px-6 pb-9">
      <div className="bg-primary w-24 h-1" />

      <img src={audiophile} alt="Logo" />

      <ul className="text-senary font-bold flex flex-col items-center gap-4">
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>

      <div className="text-senary font-medium opacity-50 text-center">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </div>

      <div className="text-senary font-bold opacity-50 text-center">
        Copyright 2023. All Rights Reserved
      </div>

      <ul className="flex gap-5">
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
    </section>
  );
};
