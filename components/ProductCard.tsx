import { SeeProductButton } from "./SeeProduct";

interface IProps {
  data: any;
  index: number;
}

export const ProductCard = ({ data, index }: IProps) => {
  console.log(data);
  return (
    <div
      className={`containers !flex-col ${
        index % 2 === 0 ? "lg:!flex-row" : "lg:!flex-row-reverse"
      } gap-8 md:gap-14 lg:gap-2.5`}
    >
      <picture className="w-full lg:w-1/2">
        <source media="(min-width:1024px)" srcSet={data.image.desktop} />
        <source media="(min-width:768px)" srcSet={data.image.tablet} />
        <img
          src={data.image.mobile}
          alt="XX99 Mark II"
          className="h-[352px] lg:h-[560px] w-full rounded-lg object-cover object-center"
        />
      </picture>

      <div
        className={`containers !flex-col gap-6 text-center md:px-14 lg:px-0 ${
          index % 2 === 0 ? "lg:pl-28" : "lg:pr-28"
        } lg:w-1/2 lg:text-left lg:!items-start`}
      >
        {index === 0 && (
          <h2 className="text-sm tracking-[10px] text-primary">NEW PRODUCT</h2>
        )}

        <h1 className="uppercase text-[1.75rem] md:text-[2.5rem]/[44px] tracking-[1px] md:tracking-[1.43px] font-bold px-2 lg:px-0">
          {data.title}
        </h1>
        <p className="text-[0.938rem] opacity-50 md:px-2 lg:px-0">
          {data.description}
        </p>

        <SeeProductButton />
      </div>
    </div>
  );
};
