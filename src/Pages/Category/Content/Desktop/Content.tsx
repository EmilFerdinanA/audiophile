// import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [content, setContent] = useState<Headphone[]>([]);

  const fetchCategory = async () => {
    const response = await axios.get("src/data/Category/Category.json");
    console.log(response);

    setContent(response.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <section className="mt-16 mb-32 flex flex-col gap-32 px-6 sm:px-10">
      {content?.map((e: Headphone) => (
        <div>
          <img src={e?.image.desktop} />
        </div>
      ))}
    </section>
  );
};
