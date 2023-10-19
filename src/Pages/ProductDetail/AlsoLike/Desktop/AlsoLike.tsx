import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const AlsoLikeDesktop = () => {
  return (
    <section className="px-40 mt-40 mb-40">
      <h1 className="text-4xl font-bold text-center mb-16">
        YOU MAY ALSO LIKE
      </h1>

      <div className="flex gap-8">
        <div className="flex flex-col gap-8 items-center w-full mb-4">
          <div className="h-80 w-full bg-tertiary flex justify-center rounded-lg">
            <img
              className="object-cover h-full w-3/5 rounded-lg"
              src="/product-zx9-speaker/tablet/image-product.jpg"
              alt="product"
            />
          </div>
          <h1 className="text-2xl font-bold">ZX9 SPEAKER</h1>
          <ButtonSeeProduct />
        </div>
        <div className="flex flex-col gap-8 items-center w-full mb-4">
          <div className="h-80 w-full bg-tertiary flex justify-center rounded-lg">
            <img
              className="object-cover h-full w-3/5 rounded-lg"
              src="/product-zx9-speaker/tablet/image-product.jpg"
              alt="product"
            />
          </div>
          <h1 className="text-2xl font-bold">ZX9 SPEAKER</h1>
          <ButtonSeeProduct />
        </div>
        <div className="flex flex-col gap-8 items-center w-full mb-4">
          <div className="h-80 w-full bg-tertiary flex justify-center rounded-lg">
            <img
              className="object-cover h-full w-3/5 rounded-lg"
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
