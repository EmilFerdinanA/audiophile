import { YX1 } from "@/Pages/Home/Catalogue/Mobile/YX1/YX1";
import { ZX7 } from "./ZX7/ZX7";

export const CatalogueMobile = () => {
  return (
    <section className="mx-6 sm:mx-10 mb-32 flex flex-col gap-6">
      <ZX7 />
      <YX1 />
    </section>
  );
};
