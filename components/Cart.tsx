import React from "react";
import { useCart } from "@/Context/CartProvider";
import Image from "next/image";
import clsx from "clsx";

export const Cart = () => {
  const { isOpen, toggleCart } = useCart();
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-black/60 top-24 z-50",
        !isOpen && "hidden"
      )}
      onClick={toggleCart}
    >
      <div className="max-width mx-auto base-p flex justify-end pt-6 lg:pt-8">
        <div className="px-7 py-8 bg-white w-full md:w-[23.563rem] rounded-lg grid gap-8">
          <div className="flex justify-between">
            <h6 className="font-bold text-lg">Cart (3)</h6>
            <button className="text-sm underline opacity-50">Remove all</button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between font-bold">
              <div className="flex gap-4">
                <Image
                  src={"/assets/cart/image-xx99-mark-two-headphones.jpg"}
                  alt={"xx99-mark-two-headphones"}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[15px]">XX99 MK II</p>
                  <p className="text-sm opacity-50">$ 2,999</p>
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <div className="containers bg-[#F1F1F1] h-8 w-24">
                  <button className="w-full h-full cursor-pointer">-</button>
                  <div className="w-full text-center">1</div>
                  <button className="w-full h-full cursor-pointer">+</button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between font-bold">
              <div className="flex gap-4">
                <Image
                  src={"/assets/cart/image-xx99-mark-two-headphones.jpg"}
                  alt={"xx99-mark-two-headphones"}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[15px]">XX99 MK II</p>
                  <p className="text-sm opacity-50">$ 2,999</p>
                </div>
              </div>

              <div className="flex gap-4 mt-2">
                <div className="containers bg-[#F1F1F1] h-8 w-24">
                  <button className="w-full h-full cursor-pointer">-</button>
                  <div className="w-full text-center">1</div>
                  <button className="w-full h-full cursor-pointer">+</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <h6 className="text-sm opacity-50">TOTAL</h6>
            <p className="text-lg font-bold">$ 5,396</p>
          </div>

          <button
            // onClick={handleSubmit(onSubmit)}
            className="containers bg-primary text-sm text-white h-12 font-bold -mt-2"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};
