import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const YX1 = () => {
  return (
    <section className="flex flex-col gap-6 sm:flex-row">
      <div className="bg-[url('@/assets/image-earphones-yx1-mobile.jpg')] sm:bg-[url('@/assets/image-earphones-yx1-tablet.jpg')] bg-cover bg-center h-52 rounded-lg sm:w-1/2 sm:h-80" />
      <div className="flex flex-col gap-8 h-52 justify-center px-6 bg-tertiary rounded-lg sm:h-80 sm:w-1/2 sm:px-10">
        <span className="text-3xl font-bold">YX1 EARPHONES</span>
        <ButtonSeeProduct
          Background="bg-none"
          Border={true}
          Color="text-black"
        />
      </div>
    </section>
  );
};
