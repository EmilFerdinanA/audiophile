import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const HeroMobile = () => {
  return (
    <section className="bg-[url('@/assets/hero-mobile.png')] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center gap-6 text-center text-senary px-6 py-28">
      <span className="opacity-50 font-normal tracking-[10px]">
        NEW PRODUCT
      </span>
      <h1 className="text-4xl font-bold">XX99 MARk II HEADPHONES</h1>
      <p className="mb-4 opacity-75 font-medium">
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <ButtonSeeProduct />
    </section>
  );
};
