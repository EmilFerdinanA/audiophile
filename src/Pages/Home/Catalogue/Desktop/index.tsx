import { YX1 } from "./YX1/YX1";
import { ZX7 } from "./ZX7/ZX7";
import { ZX9 } from "./ZX9/ZX9";

export const CatalogueDesktop = () => {
  return (
    <section className="mx-40 mb-52 flex flex-col gap-10 ">
      <ZX9 />
      <ZX7 />
      <YX1 />
    </section>
  );
};
