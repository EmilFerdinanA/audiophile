import { ButtonShop } from "@/components/ButtonShop";
import Headphones from "@/assets/category-headphones.png";
import Speakers from "@/assets/category-speakers.png";
import Earphones from "@/assets/category-earphones.png";

export const CategoryDesktop = () => {
  return (
    <section className="flex gap-8">
      <div className="w-full h-52 mt-20 bg-tertiary rounded-lg flex flex-col justify-center items-center">
        <img className="relative -top-16" src={Headphones} alt="headphones" />
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="font-bold text-lg">HEADPHONES</span>
          <ButtonShop />
        </div>
      </div>
      <div className="w-full h-52 mt-20 bg-tertiary rounded-lg flex flex-col justify-center items-center">
        <img className="relative -top-16" src={Speakers} alt="speakers" />
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="font-bold text-lg">SPEAKERS</span>
          <ButtonShop />
        </div>
      </div>
      <div className="w-full h-52 mt-20 bg-tertiary rounded-lg flex flex-col justify-center items-center">
        <img className="relative -top-16" src={Earphones} alt="earphones" />
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="font-bold text-lg">EARPHONES</span>
          <ButtonShop />
        </div>
      </div>
    </section>
  );
};
