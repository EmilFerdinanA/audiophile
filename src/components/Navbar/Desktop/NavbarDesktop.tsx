import { Link, useLocation } from "react-router-dom";

import Audiophile from "@/assets/audiophile.svg";
import Cart from "@/assets/icon-cart.svg";

export const NavbarDesktop = () => {
  const location = useLocation();
  return (
    <section className="bg-[#191919] sticky top-0 z-10">
      <div className="flex justify-between items-center py-9 mx-40 border-b border-white border-opacity-10">
        <Link to={location.pathname !== "/" ? "/" : ""}>
          <img src={Audiophile} alt="audiophile" />
        </Link>
        <ul className="text-senary font-bold flex items-center gap-9">
          <Link
            to={location.pathname !== "/" ? "/" : ""}
            className="cursor-pointer hover:text-primary"
          >
            HOME
          </Link>
          <Link to="/headphones" className="cursor-pointer hover:text-primary">
            HEADPHONES
          </Link>
          <Link to="/speakers" className="cursor-pointer hover:text-primary">
            SPEAKERS
          </Link>
          <Link to="/earphones" className="cursor-pointer hover:text-primary">
            EARPHONES
          </Link>
        </ul>
        <div>
          <img src={Cart} alt="cart" />
        </div>
      </div>
    </section>
  );
};
