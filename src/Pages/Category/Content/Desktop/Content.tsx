import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
import { data } from "@/data/Category/Category";

// import { ButtonSeeProduct } from "@/components/ButtonSeeProduct"
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

export const ContentDesktop = () => {
  return (
    <section className="mt-16 my-40 flex flex-col gap-40 px-40">
      {data?.map((e: Headphone, index: number) => (
        <div
          className={`flex ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } items-center gap-8`}
          key={index}
        >
          <div className="w-1/2">
            <img
              className="object-center object-cover w-full h-full"
              src={e?.image.desktop}
              alt={e?.description}
            />
          </div>

          <div
            className={`flex flex-col w-1/2 ${
              index % 2 !== 0 ? "pl-24" : "pl-0"
            } gap-4`}
          >
            {index === 0 && (
              <span className="text-primary tracking-[10px]">NEW PRODUCT</span>
            )}
            <span className="text-6xl font-bold mb-4 w-3/4">{e?.title}</span>
            <p className="font-medium text-septenary text-opacity-50 mb-9 w-4/5 text-xl">
              {e?.description}
            </p>
            <ButtonSeeProduct />
          </div>
        </div>
      ))}
    </section>
  );
};
