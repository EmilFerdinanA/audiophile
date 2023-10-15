import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const HeroMobile = () => {
  return (
    <section className="bg-[url('@/assets/hero-mobile.jpg')] sm:bg-[url('@/assets/hero-tablet.jpg')] bg-no-repeat bg-cover bg-[center_top_-6rem] flex flex-col justify-center items-center gap-6 text-center text-senary px-6 sm:px-10 py-28 sm:pb-64 sm:mb-10">
      <span className="opacity-50 font-normal tracking-[10px]">
        NEW PRODUCT
      </span>
      <h1 className="text-4xl sm:text-6xl font-bold">
        XX99 MARK II HEADPHONES
      </h1>
      <p className="mb-4 opacity-75 font-medium sm:w-1/2">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <ButtonSeeProduct />
    </section>
  );
};
