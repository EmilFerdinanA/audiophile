import Image from "next/image";
import Link from "next/link";

const MENUS = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const Navbar = () => {
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

          <Image
            src={"/assets/icon-cart.svg"}
            alt={"logo"}
            width={23}
            height={20}
            priority
          />
        </div>
      </div>
    </nav>
  );
};
