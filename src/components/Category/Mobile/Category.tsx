import { ButtonShop } from "@/components/ButtonShop";
import Headphones from "@/assets/category-headphones.png";
import Speakers from "@/assets/category-speakers.png";
import Earphones from "@/assets/category-earphones.png";

export const CategoryMobile = () => {
  return (
    <section className="flex flex-col sm:flex-row sm:gap-3">
      <div className="w-full h-40 mt-20 bg-tertiary rounded-lg flex flex-col justify-center items-center">
        <img className="relative -top-8" src={Headphones} alt="headphones" />
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="font-bold">HEADPHONES</span>
          <ButtonShop />
        </div>
      </div>
      <div className="w-full h-40 mt-20 bg-tertiary rounded-lg flex flex-col justify-center items-center">
        <img className="relative -top-8" src={Speakers} alt="speakers" />
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="font-bold">SPEAKERS</span>
          <ButtonShop />
        </div>
      </div>
      <div className="w-full h-40 mt-20 bg-tertiary rounded-lg flex flex-col justify-center items-center">
        <img className="relative -top-8" src={Earphones} alt="earphones" />
        <div className="flex flex-col items-center gap-4 mb-6">
          <span className="font-bold">EARPHONES</span>
          <ButtonShop />
        </div>
      </div>
    </section>
  );
};
