import { IDetailImage } from "@/public/data/detailProduct";

interface IProps {
  data: IDetailImage;
}

export const DetailImage = ({ data }: IProps) => {
  const { image1, image2, image3, alt } = data;
  return (
    <section className="grid grid-cols-5 gap-5 lg:gap-8">
      <picture className="col-span-5 md:col-span-2">
        <source media="(min-width:1024px)" srcSet={image1.desktop} />
        <source media="(min-width:768px)" srcSet={image1.tablet} />
        <img
          src={image1.mobile}
          alt={alt}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </picture>

      <picture className="col-span-5 md:col-span-2">
        <source media="(min-width:1024px)" srcSet={image2.desktop} />
        <source media="(min-width:768px)" srcSet={image2.tablet} />
        <img
          src={image2.mobile}
          alt={alt}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </picture>

      <picture className="col-span-5 md:col-span-3 md:row-span-2 md:row-start-1 md:col-start-3">
        <source media="(min-width:1024px)" srcSet={image3.desktop} />
        <source media="(min-width:768px)" srcSet={image3.tablet} />
        <img
          src={image3.mobile}
          alt={alt}
          className="h-full w-full rounded-lg object-cover object-center"
        />
      </picture>
    </section>
  );
};
