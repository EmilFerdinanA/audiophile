import Image from "next/image";
import { ShopButton } from "./SeeProduct";
import HEADPHONES from "@/public/assets/shared/desktop/image-headphones.png";

export default function Category() {
  return (
    <div className="bg-[#F1F1F1] h-40 lg:h-52 w-full relative containers !flex-col !justify-end pb-5 lg:pb-8 rounded-lg mt-16">
      <Image
        src={HEADPHONES}
        alt={"HEADPHONES"}
        className="absolute -top-16 w-40 lg:w-52"
      />
      <span className="font-bold text-[15px] lg:text-lg mb-4">HEADPHONES</span>
      <ShopButton />
    </div>
  );
}
