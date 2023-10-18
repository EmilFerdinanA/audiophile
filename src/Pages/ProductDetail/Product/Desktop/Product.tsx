import { useState } from "react";

export const ProductDesktop = () => {
  const [quantity, setQuantity] = useState<number>(1);

  const changeQuantity = (item: string) => {
    switch (item) {
      case "-":
        if (quantity == 1) {
          return;
        } else {
          setQuantity(quantity - 1);
        }
        break;
      case "+":
        setQuantity(quantity + 1);
        break;
      default:
        break;
    }
  };

  return (
    <section className="px-40 mt-20">
      <span className="text-septenary text-opacity-50 font-medium">
        Go Back
      </span>
      <div className="flex gap-32 items-center mt-14">
        <div className="bg-tertiary h-full w-1/2 rounded-lg flex items-center">
          <img
            src="/src/assets/category-earphones/desktop/image-yx1-earphones.jpg"
            className="object-cover object-center w-full h-full"
            alt="product"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <span className="text-primary tracking-[10px] mb-4">NEW PRODUCT</span>

          <span className="text-5xl font-bold mb-8">
            YX1 WIRELESS EARPHONES
          </span>
          <p className="font-medium text-septenary text-opacity-50 mb-8">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <span className="text-lg font-bold mb-12">$ 599</span>

          <div className="flex items-end gap-4">
            <div className="h-12 w-32 flex items-center justify-evenly bg-tertiary">
              <button
                className="text-septenary text-opacity-25"
                onClick={() => changeQuantity("-")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="text-septenary text-opacity-25"
                onClick={() => changeQuantity("+")}
              >
                +
              </button>
            </div>
            <button className="bg-primary h-12 w-40 font-bold text-senary">
              ADD TO CHART
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
