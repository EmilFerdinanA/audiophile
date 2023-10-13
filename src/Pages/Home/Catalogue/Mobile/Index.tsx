import { YX1 } from "./YX1/YX1";
import { ZX7 } from "./ZX7/ZX7";
import { ZX9 } from "./ZX9/ZX9";

export const CatalogueMobile = () => {
  return (
    <section className="mx-6 sm:mx-10 mb-32 flex flex-col gap-6">
      <ZX9 />
      <ZX7 />
      <YX1 />
    </section>
  );
};
