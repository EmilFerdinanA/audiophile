export const FeaturesDesktop = () => {
  return (
    <section className="px-40 flex gap-32 mt-40">
      <div className="flex flex-col gap-8 w-1/2">
        <h1 className="text-4xl font-bold">FEATURES</h1>
        <p className="font-medium text-septenary text-opacity-50">
          As the headphones all others are measured against, the XX99 Mark I
          demonstrates over five decades of audio expertise, redefining the
          critical listening experience. This pair of closed-back headphones are
          made of industrial, aerospace-grade materials to emphasize durability
          at a relatively light weight of 11 oz.
        </p>
        <p className="font-medium text-septenary text-opacity-50">
          From the handcrafted microfiber ear cushions to the robust metal
          headband with inner damping element, the components work together to
          deliver comfort and uncompromising sound. Its closed-back design
          delivers up to 27 dB of passive noise cancellation, reducing resonance
          by reflecting sound to a dedicated absorber. For connectivity, a
          specially tuned cable is included with a balanced gold connector.
        </p>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-6">IN THE BOX</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5">
            <span className="text-primary font-bold">2x</span>
            <span className="text-septenary text-opacity-50 font-medium">
              Earphone Unit
            </span>
          </div>
          <div className="flex gap-5">
            <span className="text-primary font-bold">2x</span>
            <span className="text-septenary text-opacity-50 font-medium">
              Earphone Unit
            </span>
          </div>
          <div className="flex gap-5">
            <span className="text-primary font-bold">2x</span>
            <span className="text-septenary text-opacity-50 font-medium">
              Earphone Unit
            </span>
          </div>
          <div className="flex gap-5">
            <span className="text-primary font-bold">2x</span>
            <span className="text-septenary text-opacity-50 font-medium">
              Earphone Unit
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
