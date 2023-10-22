import { CheckoutDesktop } from "./Dektop/Checkout";
import { CheckoutMobile } from "./Mobile/Checkout";

export const Checkout = () => {
  const isMobile = window.innerWidth <= 1280;
  return <div>{isMobile ? <CheckoutMobile /> : <CheckoutDesktop />}</div>;
};
