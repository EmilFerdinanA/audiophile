export const DetailProduct = () => {
  return (
    <section className="flex flex-col items-center md:flex-row gap-8 md:gap-16 lg:gap-32">
      <picture className="h-full w-full md:w-5/12 lg:w-1/2">
        <source
          media="(min-width:1024px)"
          srcSet={"/assets/product-yx1-earphones/desktop/image-product.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/assets/product-yx1-earphones/tablet/image-product.jpg"}
        />
        <img
          src={"/assets/product-yx1-earphones/mobile/image-product.jpg"}
          alt="XX99 Mark II"
          className="rounded-lg object-cover object-center"
        />
      </picture>

      <div className="flex flex-col gap-6 md:gap-8 md:w-1/2">
        <h2 className="text-primary tracking-[10px] md:tracking-[8px] lg:tracking-[10px] text-sm md:text-[12px] lg:text-sm md:-mb-4">
          NEW PRODUCT
        </h2>
        <h1 className="font-bold tracking-[1px] text-[1.75rem] lg:text-[2.5rem] md:leading-[32px] lg:leading-[44px]">
          YX1 WIRELESS EARPHONES
        </h1>
        <p className="text-[0.938rem] leading-[25px] opacity-50">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>

        <p className="font-bold text-[1.125rem] lg:mb-4">$ 599</p>

        <div className="flex gap-4 h-12 mt-2">
          <div className="containers bg-[#F1F1F1] w-[7.5rem]">
            <button className="w-full h-full cursor-pointer">-</button>
            <div className="w-full text-center">1</div>
            <button className="w-full h-full cursor-pointer">+</button>
          </div>

          <button className="bg-primary w-40 font-bold text-sm tracking-[1px] text-white containers">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};
