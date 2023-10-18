export const ImageMobile = () => {
  return (
    <section className="px-6 sm:px-10 flex flex-col gap-4 mt-20 sm:flex-row sm:justify-between sm:h-96">
      <div className="flex flex-col gap-4 sm:w-2/5">
        <div className="bg-[url('/product-zx9-speaker/tablet/image-gallery-1.jpg')] bg-cover h-60 w-full rounded-lg" />
        <div className="bg-[url('/product-zx9-speaker/tablet/image-gallery-2.jpg')] bg-cover h-60 w-full rounded-lg" />
      </div>
      <div className="bg-[url('/product-zx9-speaker/tablet/image-gallery-3.jpg')] bg-cover bg-center h-96 w-full rounded-lg sm:w-3/5" />
    </section>
  );
};
