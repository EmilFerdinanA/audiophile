"use client";

import { CartProvider } from "@/Context/CartProvider";
import { MenuProvider } from "@/Context/MenuContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <MenuProvider>{children}</MenuProvider>
    </CartProvider>
  );
};

export default Providers;
