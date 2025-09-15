import { SeeProductButton } from "./SeeProduct";

export default function YX1() {
  return (
    <section className="containers !flex-col md:!flex-row gap-6 md:gap-3 lg:gap-8 mb-32">
      <div className="background-yx1 rounded-lg h-52 md:h-80 w-full md:w-1/2" />

      <div className="bg-[#F1F1F1] flex flex-col items-start justify-center gap-8 rounded-lg px-6 md:px-16 lg:px-24 h-52 md:h-80 w-full md:w-1/2">
        <h1 className="font-bold text-3xl">YX1 EARPHONES</h1>
        <SeeProductButton variant="secondary" />
      </div>
    </section>
  );
}
