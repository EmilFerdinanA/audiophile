import { IFeatures } from "@/public/data/detailProduct";

interface IProps {
  data: IFeatures;
}

export const Features = ({ data }: IProps) => {
  const { description, box } = data;
  return (
    <section className="grid grid-cols-5 gap-y-28 md:gap-y-32 lg:gap-32">
      <div className="col-span-5 lg:col-span-3 grid gap-6 md:gap-8">
        <h1 className="text-[2rem] font-bold tracking-[1.14px]">FEATURES</h1>
        <div className="grid gap-6 md:gap-8 opacity-50">
          {description.split("\n").map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </div>
      </div>

      <div className="col-span-5 lg:col-span-2 grid grid-cols-2 lg:place-content-start gap-6 md:gap-2.5 lg:gap-8">
        <h1 className="col-span-2 md:col-span-1 lg:col-span-2 text-[32px] font-bold tracking-[1.14px]">
          IN THE BOX
        </h1>

        <ul className="col-span-2 md:col-span-1 lg:col-span-2 grid gap-2">
          {box.map((e) => (
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
