import { SeeProductButton } from "./SeeProduct";

interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IProps {
  title: string;
  image: Image;
}

export const AlsoLikeCard = ({ title, image }: IProps) => {
  return (
    <div className="containers !flex-col gap-8 w-full">
      <picture className="w-full md:mb-2">
        <source media="(min-width:1024px)" srcSet={image.desktop} />
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt="XX99 Mark II"
          className="h-32 md:h-80 w-full rounded-lg object-cover object-center"
        />
      </picture>

      <h2 className="text-2xl tracking-[1.71px] font-bold">{title}</h2>

      <SeeProductButton />
    </div>
  );
};
