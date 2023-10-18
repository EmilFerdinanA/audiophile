export const ImageDesktop = () => {
  return (
    <section className="px-40 flex gap-4 mt-20 justify-between h-[592px]">
      <div className="flex flex-col gap-4 w-2/5">
        <div className="bg-[url('/product-zx9-speaker/desktop/image-gallery-1.jpg')] bg-cover h-72 w-full rounded-lg" />
        <div className="bg-[url('/product-zx9-speaker/desktop/image-gallery-2.jpg')] bg-cover h-72 w-full rounded-lg" />
      </div>
      <div className="bg-[url('/product-zx9-speaker/desktop/image-gallery-3.jpg')] bg-cover bg-center h-full rounded-lg w-3/5" />
    </section>
  );
};
