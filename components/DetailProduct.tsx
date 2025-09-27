import { DataDetailProduct } from "@/public/data/detailProduct";

interface IProps {
  data: DataDetailProduct;
}

export const DetailProduct = ({ data }: IProps) => {
  const { image, title, description, price, new_product } = data;

  return (
    <section className="grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-2 gap-8 md:gap-16 lg:gap-0">
      <picture>
        <source media="(min-width:1024px)" srcSet={image.desktop} />
        <source media="(min-width:768px)" srcSet={image.tablet} />
        <img
          src={image.mobile}
          alt={title}
          className="rounded-lg object-cover object-center h-full w-full"
        />
      </picture>

      <div className="grid md:place-content-center gap-6 md:gap-8 md:py-11 lg:pt-28 lg:pb-20 lg:pl-32">
        {new_product && (
          <h2 className="text-primary tracking-[10px] md:tracking-[8px] lg:tracking-[10px] text-sm md:text-[12px] lg:text-sm md:-mb-4">
            NEW PRODUCT
          </h2>
        )}

        <h1 className="font-bold tracking-[1px] text-[1.75rem] lg:text-[2.5rem] md:leading-[32px] lg:leading-[44px]">
          {title.split(" ").map((char, i) => (
            <span key={i} className="last:block">
              {char}{" "}
            </span>
          ))}
        </h1>

        <p className="text-[0.938rem] leading-[25px] opacity-50">
          {description}
        </p>

        <p className="font-bold text-[1.125rem] lg:mb-4">$ {price}</p>

        <div className="flex flex-wrap gap-4 mt-2">
          <div className="containers bg-[#F1F1F1] w-[7.5rem] h-12">
            <button className="w-full h-full cursor-pointer">-</button>
            <div className="w-full text-center">1</div>
            <button className="w-full h-full cursor-pointer">+</button>
          </div>

          <button className="bg-primary px-8 font-bold text-sm tracking-[1px] text-white h-12">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};
