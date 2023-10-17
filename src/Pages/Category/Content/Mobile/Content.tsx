import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
import { data } from "@/data/Category";
import { useParams } from "react-router-dom";
import { ICategory } from "@/constant/Category";

export const ContentMobile = () => {
  const isMobile = window.innerWidth <= 640;
  const param = useParams();
  const content = data.find((e) => e.category === param.category);
  return (
    <section className="mt-16 mb-32 flex flex-col gap-32 px-6 sm:px-10">
      {content?.items?.map((e: ICategory, index: number) => (
        <div
          className="flex flex-col gap-6 justify-center items-center"
          key={e.id}
        >
          <div className="bg-tertiary bg-cover bg-center h-80 sm:h-96} w-full rounded-lg">
            <img
              className="object-cover h-full w-full"
              src={isMobile ? e.image.mobile : e.image.tablet}
              alt="item"
            />
          </div>

          {index === 0 && (
            <span className="text-primary tracking-[10px]">NEW PRODUCT</span>
          )}
          <span className="text-3xl sm:text-5xl sm:w-1/2 font-bold text-center">
            {e?.title}
          </span>
          <p className="font-medium text-septenary text-opacity-50 text-center sm:w-3/4">
            {e?.description}
          </p>
          <ButtonSeeProduct />
        </div>
      ))}
    </section>
  );
};
