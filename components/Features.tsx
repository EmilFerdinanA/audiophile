const text =
  "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. \nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.";

const DUMMY_STOCK = [
  {
    id: 1,
    stock: 1,
    unit: "Headphone Unit",
  },
  {
    id: 2,
    stock: 1,
    unit: "Replacement Earcups",
  },
  {
    id: 3,
    stock: 1,
    unit: "User Manual",
  },
  {
    id: 4,
    stock: 1,
    unit: "3.5mm Audio Cable",
  },
];

export const Features = () => {
  return (
    <section className="grid grid-cols-5 gap-y-28 md:gap-y-32 lg:gap-32">
      <div className="col-span-5 lg:col-span-3 flex flex-col gap-6 md:gap-8">
        <h1 className="text-[32px] font-bold tracking-[1.14px]">FEATURES</h1>
        <div className="flex flex-col gap-6 md:gap-8 opacity-50">
          {text.split("\n").map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      </div>

      <div className="col-span-5 lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-6 md:gap-2.5 lg:gap-8">
        <h1 className="text-[32px] font-bold tracking-[1.14px] md:w-full">
          IN THE BOX
        </h1>

        <ul className="flex flex-col gap-2 md:w-full">
          {DUMMY_STOCK.map((e) => (
            <li key={e.id} className="flex gap-2 items-center">
              <span className="text-primary font-bold mr-6">{e.stock}x</span>
              <span className="opacity-50">{e.unit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
