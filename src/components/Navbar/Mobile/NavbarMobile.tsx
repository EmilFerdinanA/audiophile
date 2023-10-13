import Hamburger from "@/assets/icon-hamburger.svg";
import Audiophile from "@/assets/audiophile.svg";
import Cart from "@/assets/icon-cart.svg";

export const NavbarMobile = () => {
  return (
    <section className="bg-[#1a1a1a] flex justify-between items-center py-7 px-6 border-b border-white border-opacity-10">
      <div>
        <img src={Hamburger} alt="hamburger" />
      </div>
      <div className="sm:absolute left-20">
        <img src={Audiophile} alt="audiophile" />
      </div>
      <div>
        <img src={Cart} alt="cart" />
      </div>
    </section>
  );
};
