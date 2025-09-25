import Arrow from "@/public/assets/icon-arrow-right.svg";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "tertiary";
  url?: string;
}

export const SeeProductButton: React.FC<ButtonProps> = ({
  variant = "primary",
  url,
}) => {
  const variantStyles = {
    primary: "bg-[#D87D4A] hover:bg-[#FBAF85] text-white",
    secondary:
      "hover:bg-black text-black hover:text-white outline-none border-2 border-black",
    tertiary: "bg-black hover:bg-[#4C4C4C] text-white",
  };

  return (
    <Link
      className={`containers h-12 w-40 font-bold tracking-[1px] text-sm cursor-pointer ${variantStyles[variant]}`}
      href={url ?? ""}
    >
      SEE PRODUCT
    </Link>
  );
};

export const ShopButton = ({ url }: { url: string }) => {
  return (
    <Link
      href={url.toLowerCase()}
      className="font-bold containers hover:text-primary gap-3 cursor-pointer"
    >
      <span className="opacity-50 hover:opacity-100 text-[13px]">SHOP</span>
      <Image src={Arrow} alt={"arrow"} />
    </Link>
  );
};
