import { SeeProductButton } from "./SeeProduct";

export default function YX1() {
  return (
    <section className="grid grid-cols-2 gap-6 md:gap-3 lg:gap-8 mb-32">
      <picture className="col-span-2 md:col-span-1">
        <source
          media="(min-width:1024px)"
          srcSet={"/assets/home/desktop/image-earphones-yx1.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/assets/home/tablet/image-earphones-yx1.jpg"}
        />
        <img
          className="object-center object-cover rounded-lg h-52 md:h-80 w-full"
          src={"/assets/home/mobile/image-earphones-yx1.jpg"}
          alt="YX1"
        />
      </picture>

      <div className="col-span-2 md:col-span-1 bg-[#F1F1F1] rounded-lg grid place-content-center justify-start h-52 md:h-80 p-6 md:p-10 lg:p-24">
        <h1 className="font-bold text-3xl mb-8">YX1 EARPHONES</h1>
        <SeeProductButton variant="secondary" />
      </div>
    </section>
  );
}
