import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const AlsoLikeMobile = () => {
  return (
    <section className="px-6 flex flex-col justify-center items-center mt-20">
      <h1 className="text-2xl font-bold">YOU MAY ALSO LIKE</h1>
      <div className="flex flex-col gap-8 items-center w-full mb-4">
        <div className="h-32 w-full bg-[#f1f1f1] flex justify-center rounded-lg">
          <img
            className="object-cover h-full w-1/3"
            src="/product-zx9-speaker/tablet/image-product.jpg"
            alt="product"
          />
        </div>
        <h1 className="text-2xl font-bold">ZX9 SPEAKER</h1>
        <ButtonSeeProduct />
      </div>
    </section>
  );
};
