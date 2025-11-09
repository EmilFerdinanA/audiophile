import clsx from "clsx";
import { useCart } from "@/Context/CartProvider";
import { CartItem } from "./CartItem";
import Link from "next/link";

export const Cart = () => {
  const { isOpen, toggleCart } = useCart();

  const cartItems = [
    {
      name: "XX99 MK II",
      price: 2999,
      image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
    },
    {
      name: "XX99 MK II",
      price: 2999,
      image: "/assets/cart/image-xx99-mark-two-headphones.jpg",
    },
  ];

  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className={clsx("fixed inset-0 top-24", !isOpen && "hidden")}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 z-50" onClick={toggleCart} />

      <div className="max-width mx-auto base-p flex justify-end pt-6 lg:pt-8">
        <div className="px-7 py-8 bg-white w-full md:w-[23.563rem] rounded-lg grid gap-8 z-50">
          {/* Header */}
          <div className="flex justify-between">
            <h6 className="font-bold text-lg">Cart ({cartItems.length})</h6>
            <button className="text-sm underline opacity-50">Remove all</button>
          </div>

          {/* Items */}
          <div className="flex flex-col gap-6">
            {cartItems.map((item, i) => (
              <CartItem key={i} {...item} />
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between">
            <h6 className="text-sm opacity-50">TOTAL</h6>
            <p className="text-lg font-bold">$ {total.toLocaleString()}</p>
          </div>

          {/* Checkout */}
          <Link
            href={"/checkout"}
            className="containers bg-primary text-sm text-white h-12 font-bold -mt-2 cursor-pointer hover:opacity-50"
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};
