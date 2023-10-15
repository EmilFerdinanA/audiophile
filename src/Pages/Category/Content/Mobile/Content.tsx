import { useEffect, useState } from "react";
import axios from "axios";

import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

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
  const [content, setContent] = useState<Headphone[]>([]);

  const isMobile = window.innerWidth <= 640;

  const fetchData = async () => {
    const response = await axios.get("/src/data/Category/Category.json");
    setContent(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mt-16 mb-32 flex flex-col gap-32 px-6 sm:px-10">
      Emil
      {/* {content?.map((e: Headphone, index: number) => (
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

          {index === 0 && (
            <span className="text-primary tracking-[10px]">NEW PRODUCT</span>
          )}
          <span className="text-3xl font-bold text-center">{e?.title}</span>
          <p className="font-medium text-septenary text-opacity-50 text-center">
            {e?.description}
          </p>
          <ButtonSeeProduct />
        </div>
      ))} */}
    </section>
  );
};
