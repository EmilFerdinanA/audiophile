import audiophile from "@/assets/audiophile.svg";
import facebook from "@/assets/icon-facebook.svg";
import twitter from "@/assets/icon-twitter.svg";
import instagram from "@/assets/icon-instagram.svg";

export const FooterDesktop = () => {
  return (
    <section className="bg-septenary flex flex-col px-40 pb-12">
      <div className="bg-primary w-24 h-1 mb-16" />

      <div className="flex justify-between mb-9">
        <img src={audiophile} alt="Logo" />

        <ul className="text-senary font-bold flex items-center gap-9">
          <li className="cursor-pointer hover:text-primary">HOME</li>
          <li className="cursor-pointer hover:text-primary">HEADPHONES</li>
          <li className="cursor-pointer hover:text-primary">SPEAKERS</li>
          <li className="cursor-pointer hover:text-primary">EARPHONES</li>
        </ul>
      </div>

      <div className="flex justify-between mb-14">
        <div className="text-senary font-medium opacity-50 w-2/5">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>

        <ul className="flex gap-4 items-end">
          <li className="cursor-pointer">
            <img src={facebook} alt="facebook" />
          </li>
          <li className="cursor-pointer">
            <img src={twitter} alt="twitter" />
          </li>
          <li className="cursor-pointer">
            <img src={instagram} alt="instagram" />
          </li>
        </ul>
      </div>

      <div className="text-senary font-bold opacity-50">
        Copyright 2023. All Rights Reserved
      </div>
    </section>
  );
};
