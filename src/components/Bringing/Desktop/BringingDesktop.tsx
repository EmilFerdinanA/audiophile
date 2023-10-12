export const BringingDesktop = () => {
  return (
    <section className="flex px-40 h-[45rem] mb-52 items-center">
      <div className="w-1/2 flex flex-col gap-8 pr-32">
        <div className="text-4xl font-bold">
          BRINGING YOU THE <br /> <span className="text-primary">BEST </span>
          AUDIO GEAR
        </div>
        <div className="text-septenary opacity-50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </div>
      </div>
      <div className="bg-[url('@/assets/image-best-gear-desktop.jpg')] bg-center bg-cover rounded-lg w-1/2 h-full" />
    </section>
  );
};
