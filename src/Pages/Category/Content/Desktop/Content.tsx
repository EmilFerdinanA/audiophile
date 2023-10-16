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
    <section className="mt-16 mb-32 flex flex-col gap-32 px-6 sm:px-10">
      {data?.map((e: Headphone, index: number) => (
        <div key={index}>
          <img src={e?.image.desktop} />
        </div>
      ))}
    </section>
  );
};
