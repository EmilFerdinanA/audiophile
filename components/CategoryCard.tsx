import Image from "next/image";
import { ShopButton } from "./SeeProduct";

interface IProps {
  title: string;
  images: string;
}

export const CategoryCard = ({ images, title }: IProps) => {
  return (
    <div className="bg-[#F1F1F1] h-40 lg:h-52 w-full relative containers !flex-col !justify-end pb-5 lg:pb-8 rounded-lg">
      <Image
        src={images}
        alt={title}
        className="absolute -top-16 w-40 lg:w-52"
        width={200}
        height={200}
        priority
      />
      <span className="font-bold text-[15px] lg:text-lg mb-4">{title}</span>
      <ShopButton />
    </div>
  );
};
