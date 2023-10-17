import { useState } from "react";

export const ProductMobile = () => {
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
    <section className="px-6 sm:px-10 mt-4">
      <span className="text-septenary text-opacity-50 font-medium">
        Go Back
      </span>
      <div className="flex flex-col sm:flex-row sm:gap-16 justify-center sm:items-center mt-6">
        <div className="bg-tertiary h-80 sm:h-[30rem] w-full rounded-lg flex items-center">
          <img
            src="/src/assets/category-earphones/tablet/image-yx1-earphones.jpg"
            className="object-cover object-center w-full h-full sm:h-60"
            alt="product"
          />
        </div>

        <div className="flex flex-col gap-6 sm:gap-0 mt-8 sm:mt-0">
          <span className="text-primary tracking-[10px] sm:mb-4">
            NEW PRODUCT
          </span>

          <span className="text-3xl sm:text-5xl font-bold sm:mb-8">
            YX1 WIRELESS EARPHONES
          </span>
          <p className="font-medium text-septenary text-opacity-50 sm:mb-8">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <span className="text-lg font-bold mb-2 sm:mb-8">$ 599</span>

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
