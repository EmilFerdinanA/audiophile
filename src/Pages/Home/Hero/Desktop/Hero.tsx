import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const HeroDesktop = () => {
  return (
    <section className="bg-[url('@/assets/hero-desktop.jpg')] bg-[right_top_-6rem] bg-no-repeat px-40 bg-[#191919] text-senary h-[41rem] mb-32">
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        <span className="opacity-50 font-normal tracking-[10px]">
          NEW PRODUCT
        </span>
        <h1 className="text-6xl font-bold">XX99 MARK II HEADPHONES</h1>
        <p className="opacity-75 font-medium w-3/5 mb-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonSeeProduct Color="hover:bg-[#FBAF85]" />
      </div>
    </section>
  );
};
