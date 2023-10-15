import Audiophile from "@/assets/audiophile.svg";
import Cart from "@/assets/icon-cart.svg";
import { Link } from "react-router-dom";

export const NavbarDesktop = () => {
  return (
    <section className="bg-[#191919]">
      <div className="flex justify-between items-center py-9 mx-40 border-b border-white border-opacity-10">
        <div>
          <img src={Audiophile} alt="audiophile" />
        </div>
        <ul className="text-senary font-bold flex items-center gap-9">
          <li className="cursor-pointer hover:text-primary">HOME</li>
          <Link to="/category" className="cursor-pointer hover:text-primary">
            HEADPHONES
          </Link>
          <li className="cursor-pointer hover:text-primary">SPEAKERS</li>
          <li className="cursor-pointer hover:text-primary">EARPHONES</li>
        </ul>
        <div>
          <img src={Cart} alt="cart" />
        </div>
      </div>
    </section>
  );
};
