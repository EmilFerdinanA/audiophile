import { IAlsoLike } from "@/public/data/detailProduct";
import { AlsoLikeCard } from "./AlsoLikeCard";

interface IProps {
  data: IAlsoLike[];
}

export const AlsoLike = ({ data }: IProps) => {
  return (
    <section className="containers !flex-col gap-10 md:gap-14 lg:gap-16">
      <h1 className="uppercase text-2xl md:text-[2rem] tracking-[0.86px] font-bold">
        you may also like
      </h1>

      <div className="containers !flex-col md:!flex-row gap-14 md:gap-2.5 lg:gap-8 w-full">
        {data.map(({ title, image }) => (
          <AlsoLikeCard key={title} title={title} image={image} />
        ))}
      </div>
    </section>
  );
};
