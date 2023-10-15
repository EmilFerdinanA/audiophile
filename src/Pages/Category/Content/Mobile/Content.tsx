import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
import { dataCategory } from "@/data/Category/Category";

interface Headphone {
  id: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  title: string;
  description: string;
}

export const ContentMobile = () => {
  const isMobile = window.innerWidth <= 640;

  return (
    <section className="mt-16 mb-32 flex flex-col gap-32 px-6 sm:px-10">
      {dataCategory?.map((e: Headphone, index: number) => (
        <div
          className="flex flex-col gap-6 justify-center items-center"
          key={e.id}
        >
          <div className={`bg-tertiary w-full rounded-lg`}>
            <img
              className="object-cover object-center w-full h-full"
              src={isMobile ? e?.image.mobile : e?.image.tablet}
            />
          </div>
          <div className={`bg-tertiary w-full rounded-lg`}>
            <img
              className="object-cover object-center w-full h-full"
              src={require("src/assets/category-headphones/mobile/image-xx99-mark-two.jpg")}
            />
          </div>

          {index === 0 && (
            <span className="text-primary tracking-[10px]">NEW PRODUCT</span>
          )}
          <span className="text-3xl font-bold text-center">{e?.title}</span>
          <p className="font-medium text-septenary text-opacity-50 text-center">
            {e?.description}
          </p>
          <ButtonSeeProduct />
        </div>
      ))}
    </section>
  );
};
