import { GoBack } from "@/components/GoBack";
import { Checkout } from "./Checkout/Index";

export const Checkouts = () => {
  return (
    <section className="bg-tertiary pb-36">
      <div className=" px-6 sm:px-10 xl:px-40 pt-4 mb-6 sm:pt-8 xl:pt-20 xl:mb-14">
        <GoBack />
      </div>
      <div>
        <Checkout />
      </div>
    </section>
  );
};
