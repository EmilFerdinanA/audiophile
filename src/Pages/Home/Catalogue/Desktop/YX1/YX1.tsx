import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const YX1 = () => {
  return (
    <section className="flex gap-8">
      <div className="bg-[url('@/assets/image-earphones-yx1-desktop.jpg')] bg-cover bg-center h-80 rounded-lg w-1/2" />
      <div className="flex flex-col gap-8 justify-center px-24 bg-tertiary rounded-lg h-80 w-1/2">
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
