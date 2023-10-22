import { CheckoutDesktop } from "./Dektop/Checkout";
import { CheckoutMobile } from "./Mobile/Checkout";
import { GoBack } from "@/components/GoBack";

export const Checkout = () => {
  const isMobile = window.innerWidth <= 1280;
  return (
    <section className="bg-tertiary pb-36">
      <div className=" px-6 sm:px-10 xl:px-40 pt-4 mb-6 sm:pt-8 xl:pt-20 xl:mb-14">
        <GoBack />
      </div>
      <div>
        <div>{isMobile ? <CheckoutMobile /> : <CheckoutDesktop />}</div>;
      </div>
    </section>
  );
};
