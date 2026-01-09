import { useCart } from "@/Context/CartContext";
import { useMenu } from "@/Context/MenuContext";
import Image from "next/image";
import Link from "next/link";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Navbar = () => {
  const { toggleMenu } = useMenu();
  const { toggleCart } = useCart();

  return (
    <nav className="sticky flex bg-[#191919] h-24 top-0 z-50">
      {/* Container */}
      <div className="max-width base-p mx-auto w-full">
        {/* Content */}
        <div className="containers !justify-between border-b-1 border-white/20 h-full">
          <Image
            src={"/assets/icon-hamburger.svg"}
            alt={"hamburger"}
            width={16}
            height={15}
            className="md:absolute lg:hidden"
            priority
            onClick={toggleMenu}
          />

          <Link
            href="/"
            className="relative md:left-14 lg:left-0 cursor-pointer"
          >
            <Image
              src={"/assets/logo.svg"}
              alt={"logo"}
              width={143}
              height={25}
              priority
            />
          </Link>

          <ul className={"hidden lg:flex gap-8 text-white font-bold"}>
            {MENUS.map((menu, index) => (
              <li key={index} className="hover:text-primary cursor-pointer">
                <Link href={menu === "HOME" ? "/" : `/${menu.toLowerCase()}`}>
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative cursor-pointer" onClick={toggleCart}>
            <Image
              src="/assets/icon-cart.svg"
              alt="cart icon"
              width={23}
              height={20}
              priority
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 containers">
              3
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
