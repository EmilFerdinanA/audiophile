import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const AlsoLikeMobile = () => {
  return (
    <section className="px-6 sm:px-10 mt-20 mb-16">
      <h1 className="text-2xl font-bold text-center mb-10">
        YOU MAY ALSO LIKE
      </h1>

      <div className="flex flex-col sm:flex-row gap-14 sm:gap-3">
        <div className="flex flex-col gap-8 items-center w-full mb-4">
          <div className="h-32 sm:h-80 w-full bg-tertiary flex justify-center rounded-lg">
            <img
              className="object-cover h-full w-1/3 sm:w-full rounded-lg"
              src="/product-zx9-speaker/tablet/image-product.jpg"
              alt="product"
            />
          </div>
          <h1 className="text-2xl font-bold">ZX9 SPEAKER</h1>
          <ButtonSeeProduct />
        </div>
        <div className="flex flex-col gap-8 items-center w-full mb-4">
          <div className="h-32 sm:h-80 w-full bg-tertiary flex justify-center rounded-lg">
            <img
              className="object-cover h-full w-1/3 sm:w-full rounded-lg"
              src="/product-zx9-speaker/tablet/image-product.jpg"
              alt="product"
            />
          </div>
          <h1 className="text-2xl font-bold">ZX9 SPEAKER</h1>
          <ButtonSeeProduct />
        </div>
        <div className="flex flex-col gap-8 items-center w-full mb-4">
          <div className="h-32 sm:h-80 w-full bg-tertiary flex justify-center rounded-lg">
            <img
              className="object-cover h-full w-1/3 sm:w-full rounded-lg"
              src="/product-zx9-speaker/tablet/image-product.jpg"
              alt="product"
            />
          </div>
          <h1 className="text-2xl font-bold">ZX9 SPEAKER</h1>
          <ButtonSeeProduct />
        </div>
      </div>
    </section>
  );
};
