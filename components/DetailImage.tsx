export const DetailImage = () => {
  return (
    <section className="grid grid-cols-5 gap-5 lg:gap-8">
      <picture className="col-span-5 md:col-span-2">
        <source
          media="(min-width:1024px)"
          srcSet={"/assets/product-xx59-headphones/desktop/image-gallery-1.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/assets/product-xx59-headphones/tablet/image-gallery-1.jpg"}
        />
        <img
          src={"/assets/product-xx59-headphones/mobile/image-gallery-1.jpg"}
          alt="XX99 Mark II"
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </picture>

      <picture className="col-span-5 md:col-span-2">
        <source
          media="(min-width:1024px)"
          srcSet={"/assets/product-xx59-headphones/desktop/image-gallery-2.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/assets/product-xx59-headphones/tablet/image-gallery-2.jpg"}
        />
        <img
          src={"/assets/product-xx59-headphones/mobile/image-gallery-2.jpg"}
          alt="XX99 Mark II"
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </picture>

      <picture className="col-span-5 md:col-span-3 md:row-span-2 md:row-start-1 md:col-start-3">
        <source
          media="(min-width:1024px)"
          srcSet={"/assets/product-xx59-headphones/desktop/image-gallery-3.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/assets/product-xx59-headphones/tablet/image-gallery-3.jpg"}
        />
        <img
          src={"/assets/product-xx59-headphones/mobile/image-gallery-3.jpg"}
          alt="XX99 Mark II"
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </picture>
    </section>
  );
};
