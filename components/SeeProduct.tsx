import React from "react";
import Arrow from "@/public/assets/icon-arrow-right.svg";
import Image from "next/image";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
}

export const SeeProductButton: React.FC<ButtonProps> = ({
  variant = "primary",
}) => {
  const variantStyles = {
    primary: "bg-primary hover:bg-accent text-white",
    secondary:
      "hover:bg-black text-black hover:text-white outline-none border-2 border-black",
    tertiary: "bg-black hover:bg-[#4C4C4C] text-white",
  };

  return (
    <button
      className={`h-12 w-40 subtitle cursor-pointer ${variantStyles[variant]}`}
    >
      SEE PRODUCT
    </button>
  );
};

export const ShopButton = () => {
  return (
    <button
      className={`subtitle flex items-center justify-center hover:text-primary gap-3 cursor-pointer`}
    >
      SHOP
      <span>
        <Image src={Arrow} alt={"arrow"} />
      </span>
    </button>
  );
};
