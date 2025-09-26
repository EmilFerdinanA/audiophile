export const Bringing = () => {
  return (
    <section className="grid grid-cols-2 text-center lg:text-left gap-10 md:gap-16 lg:gap-8">
      <picture className="col-span-2 lg:col-span-1 lg:col-start-2">
        <source
          media="(min-width:1024px)"
          srcSet={"/assets/shared/desktop/image-best-gear.jpg"}
        />
        <source
          media="(min-width:768px)"
          srcSet={"/assets/shared/tablet/image-best-gear.jpg"}
        />
        <img
          className="rounded-lg object-center object-cover"
          src={"/assets/shared/mobile/image-best-gear.jpg"}
          alt="Bringing"
        />
      </picture>

      <div className="col-span-2 lg:col-span-1 lg:row-start-1 grid place-content-center gap-8 md:px-14 lg:px-0 lg:pr-24">
        <h1 className="uppercase text-2xl md:text-[2.5rem] tracking-[1.43px] font-bold px-2 md:px-0">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h1>

        <p className="opacity-50 text-[0.938rem] leading-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};
