import clsx from "clsx";
import { SeeProductButton } from "./SeeProduct";
import { ICategory } from "@/interface/category";

interface IProps {
  data: ICategory;
  index: number;
}

export const ProductCard = ({ data, index }: IProps) => {
  return (
    <div className={clsx("grid grid-cols-2 gap-8 md:gap-14 lg:gap-2.5")}>
      <picture
        className={clsx(
          "col-span-2 lg:col-span-1",
          index % 2 !== 0 && "order-2"
        )}
      >
        <source media="(min-width:1024px)" srcSet={data.image.desktop} />
        <source media="(min-width:768px)" srcSet={data.image.tablet} />
        <img
          src={data.image.mobile}
          alt="XX99 Mark II"
          className="h-[22rem] lg:h-[35rem] w-full rounded-lg object-cover object-center"
        />
      </picture>

      <div
        className={clsx(
          "col-span-2 lg:col-span-1 gap-6 grid place-items-center lg:place-items-start lg:place-content-center text-center lg:text-left md:px-14 lg:px-0",
          index % 2 === 0 ? "lg:pl-28" : "lg:pr-28"
        )}
      >
        {index === 0 && (
          <h2 className="text-sm tracking-[10px] text-primary md:-mb-2">
            NEW PRODUCT
          </h2>
        )}

        <h1 className="uppercase text-[1.75rem] md:text-[2.5rem]/[44px] tracking-[1px] md:tracking-[1.43px] font-bold md:mb-2">
          {data.title.split(" ").map((char, i) => (
            <span key={i} className="last:block">
              {char}{" "}
            </span>
          ))}
        </h1>

        <p className="text-[0.938rem] opacity-50 lg:mb-4">{data.description}</p>

        <SeeProductButton url={data.url} />
      </div>
    </div>
  );
};
