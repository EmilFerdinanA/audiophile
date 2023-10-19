import { GoBack } from "@/components/GoBack";
import { CheckoutMobile } from "./Mobile/Checkout";

export const Checkout = () => {
  return (
    <div>
      <div className="px-6 sm:px-10 xl:px-40 mt-4 mb-6 sm:mt-8 xl:mt-20 xl:mb-14">
        <GoBack />
      </div>
      <CheckoutMobile />
    </div>
  );
};
